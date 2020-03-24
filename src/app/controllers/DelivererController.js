import * as Yup from 'yup';

import Deliverer from '../models/Deliverer';

class DelivererController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation failed' });
		}

		const delivererExists = Deliverer.findOne({
			where: { email: req.body.email },
		});

		if (delivererExists) {
			return res.status(400).json({ error: 'Deliverer already exists' });
		}

		const { id, name, email } = await Deliverer.create(req.body);

		return res.status(201).json({ id, name, email });
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation failed' });
		}

		const deliverer = await Deliverer.findOne({
			where: { email: req.body.email },
		});

		if (!deliverer) {
			return res.status(400).json({ error: 'User does not exist' });
		}
		await deliverer.update(req.body);

		return res.json({ success: true });
	}

	async index(req, res) {
		const perPage = 10;
		const { p: page } = req.query;
		const offset = (page || 1) * perPage - perPage;

		const deliverers = await Deliverer.findAll({ offset, limit: perPage });
		res.json(deliverers);
	}

	async destroy(req, res) {
		const { id } = req.params;
		if (!id || typeof id !== 'number') {
			return res.status(400).json({ error: 'Deliverer ID invalid' });
		}

		const delivererToDelete = await Deliverer.findByPk(id);

		if (!delivererToDelete) {
			return res.status(400).json({ error: 'Deliverer does not exist' });
		}

		await delivererToDelete.destroy();

		return res.status(200).json({ success: true });
	}
}

export default new DelivererController();
