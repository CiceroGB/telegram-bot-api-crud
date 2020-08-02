module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('promotions', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    store: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    promotional_price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: async (queryInterface) => queryInterface.dropTable('promotions'),
};
