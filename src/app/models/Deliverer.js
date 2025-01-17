import Sequelize, { Model } from 'sequelize';

class Deliverer extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
			},
			{
				sequelize,
			}
		);
	}
}

export default Deliverer;
