module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('recipients', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number: {
				type: Sequelize.INTEGER,
			},
			complement: {
				type: Sequelize.STRING,
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			zip_code: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('recipients');
	},
};
