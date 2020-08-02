require('dotenv/config');
const axios = require('axios');

const searchMessage = (store) => axios.get(`${process.env.APP_URL}${process.env.APP_PORT}/messages/${store}/stores`,
  {
    params: {
      date: new Date().getTime(),

    },
  })
  .then((response) => response.data, () => 'error');

module.exports.searchMessage = searchMessage;
