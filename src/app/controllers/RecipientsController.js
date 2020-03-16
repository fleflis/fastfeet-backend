import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientsController {
	async store(req, res) {
		const recipientSchema = Yup.object.shape({
			name: Yup.string().required(),
			street: Yup.string().required(),
			number: Yup.string().required(),
			complement: Yup.string(),
			state: Yup.string().required(),
			city: Yup.string().required(),
			zip_code: Yup.number().required(),
		});

		if (!(await recipientSchema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation Field' });
		}

		const recipient = await Recipient.create(req.body);
		return res.status(201).json(recipient);
	}
}

export default new RecipientsController();
