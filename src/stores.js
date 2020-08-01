
const axios = require('axios');


const searchStore = (latitude, longitude) => {

  return axios.get('https://api2.carrefour.com.br/cci/publico/cadastro-lojas-complemento/cadastro-lojas-complemento',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-ibm-client-id': '563d8a52-c2db-40f4-84e2-2c2caae4126f'
      },
      params: {
        latitude: `${latitude}`,
        longitude: `${longitude}`

      },
    })
    .then((response) => {
      const storesJson = (response.data.data);
      return storesJson;
    }, (error) => {
      return 'Ooops! Algo deu errado tente novamente';
    });

}

module.exports.searchStore = searchStore;
