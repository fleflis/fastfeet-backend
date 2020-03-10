import Recipient from '../models/Recipient';

class RecipientsController {
	async store(req, res) {
		// @TODO: Validação dos dados de entrada.

		// const {
		// 	name,
		// 	street,
		// 	number,
		// 	complement,
		// 	state,
		// 	city,
		// 	zip_code,
		// } = req.body;

		const recipient = await Recipient.create(req.body);
		return res.status(201).json(recipient);
	}
}

export default new RecipientsController();
