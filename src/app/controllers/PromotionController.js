const Yup = require('yup');
const { startOfDay, endOfDay } = require('date-fns');
const { Op } = require('sequelize');
const Promotion = require('../models/Promotion');

class PromotionController {
  async index(req, res) {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: 'Missing date' });
    }

    const searchDate = Number(date);

    const products = await Promotion.findAll({
      where: {
        store: req.params.id,
        created_at: {
          [Op.between]: [
            startOfDay(searchDate),
            endOfDay(searchDate)],
        },
      },
      attributes: ['store', 'product', 'price', 'promotional_price', 'createdAt'],
      order: ['created_at'],

    });

    return res.json(products);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      store: Yup.number().integer().required(),
      product: Yup.string().required(),
      price: Yup.number().required(),
      promotional_price: Yup.number().required(),

    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      store, product, price, promotional_price,
    } = await Promotion.create(req.body);

    return res.status(201).json({
      store, product, price, promotional_price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      store: Yup.number().integer().required(),
      product: Yup.string().required(),
      price: Yup.number().required(),
      promotional_price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const products = await Promotion.findByPk(req.params.id);

    const {
      store, product, price, promotional_price,
    } = await products.update(req.body);

    return res.status(200).json({
      store, product, price, promotional_price,
    });
  }

  async delete(req, res) {
    const products = await Promotion.findByPk(req.params.id);
    await products.destroy();
    return res.status(204).json();
  }
}

module.exports = new PromotionController();
