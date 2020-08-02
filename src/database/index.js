const Sequelize = require('sequelize');

const User = require('../app/models/User');
const databaseConfig = require('../config/database');
const Promotion = require('../app/models/Promotion');
const Message = require('../app/models/Message');

const models = [User, Promotion, Message];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.conection))

      .map((model) => model.associate && model.associate(this.conection.models));
  }
}

module.exports = new Database();
