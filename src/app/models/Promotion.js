const { Sequelize, Model } = require('sequelize');

class Promotion extends Model {
  static init(sequelize) {
    super.init({
      store: Sequelize.INTEGER,
      product: Sequelize.STRING,
      price: Sequelize.DECIMAL(10, 2),
      promotional_price: Sequelize.DECIMAL(10, 2),
    },
    {
      sequelize,
    });

    return this;
  }
}

module.exports = Promotion;
