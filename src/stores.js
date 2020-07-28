
const request = require("request");

const options = { method: 'GET',
  url: 'https://api2.carrefour.com.br/cci/publico/cadastro-lojas-complemento/cadastro-lojas-complemento',
  qs: 
   { site: 'REPLACE_THIS_VALUE',
     latitude: 'REPLACE_THIS_VALUE',
     longitude: 'REPLACE_THIS_VALUE' },
  headers: 
   { accept: 'application/json',
     'x-ibm-client-id': 'REPLACE_THIS_KEY' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});