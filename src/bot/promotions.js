require('dotenv/config');
const axios = require('axios');

const searchPromotion = (store) => axios.get(`${process.env.APP_URL}${process.env.APP_PORT}/promotions/${store}/stores`,
  {
    params: {
      date: new Date().getTime(),

    },
  })
  .then((response) => response.data);

searchPromotion(5);

module.exports.searchPromotion = searchPromotion;
