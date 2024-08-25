module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Medications', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dosage: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('Medications');
    },
  };
  