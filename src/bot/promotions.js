require('dotenv/config');
const axios = require('axios');

const searchPromotion = (store) => axios.get(`${process.env.APP_URL}/promotions/${store}/stores`,
  {
    params: {
      date: new Date().getTime(),

    },
  })
  .then((response) => response.data);

searchPromotion(5);

module.exports.searchPromotion = searchPromotion;
