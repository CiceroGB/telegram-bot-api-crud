const { Sequelize, Model } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      store: Sequelize.INTEGER,
      message: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }
}

module.exports = Message;
