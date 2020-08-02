const Yup = require('yup');
const { startOfDay, endOfDay } = require('date-fns');
const { Op } = require('sequelize');
const Message = require('../models/Message');

class MessageController {
  async index(req, res) {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: 'Missing date' });
    }

    const searchDate = Number(date);

    const message = await Message.findAll({
      where: {
        store: req.params.id,
        created_at: {
          [Op.between]: [
            startOfDay(searchDate),
            endOfDay(searchDate)],
        },

      },
      attributes: ['store', 'message'],
      order: ['created_at'],
      limit: 1,

    });

    return res.json(message);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      store: Yup.number().integer().required(),
      message: Yup.string().required(),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      store, message,
    } = await Message.create(req.body);

    return res.status(201).json({
      store, message,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      store: Yup.number().integer().required(),
      message: Yup.string().required(),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const messageTxt = await Message.findByPk(req.params.id);

    const {
      store, message,
    } = await messageTxt.update(req.body);

    return res.status(200).json({
      store, message,
    });
  }

  async delete(req, res) {
    const message = await Message.findByPk(req.params.id);
    await message.destroy();
    return res.status(204).json();
  }
}

module.exports = new MessageController();
