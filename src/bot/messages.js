require('dotenv/config');
const axios = require('axios');

const searchMessage = (store) => axios.get(`${process.env.APP_URL}/messages/${store}/stores`,
  {
    params: {
      date: new Date().getTime(),

    },
  })
  .then((response) => response.data, () => 'Ooops! Algo deu errado tente novamente');

module.exports.searchMessage = searchMessage;
