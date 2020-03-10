import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
	const user = await User.create({
		name: 'Christian Sanches',
		email: 'christian@endless-point.org',
		password_hash: 'loremipsum',
	});

	return res.json(user);
});

export default routes;