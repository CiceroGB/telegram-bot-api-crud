const stores = require('./stores');

const mapStores = async (latitude , longitude ) => {

    const storesArray = await stores.searchStore(latitude, longitude);
    
    const near = storesArray.reduce((prev, current) => (prev.location.distance < current.location.distance) ? prev : current);

    if (near.location.distance <= 1){
        const  message = `Parece que você não está dentro de uma loja Carrefour ainda!;
     Bora na mais perto de você!
     Loja: ${near.name}
     Endereço: ${near.street}, ${near.number}, ${near.neighborhood}, ${near.city} - ${near.state}, CEP: ${near.postal_code}
      
     Ei :) , dentro da loja compartilhe novamente sua localização para ver as ofertas exclusisas Telegram Carrefour`;
       return message;
    }

    const  message = `Bem vindo a loja ${near.name};
    Aproveite os pães que acabaram de sair!!
    Oferta exclusiva:

    Cerveja X de R$ 5,50 POR R$4,00
    
    Para aproveitar essas ofertas basta informar o código 8429 no caixa    
    `;
    return message;


    
    
    
    // const message = JSON.stringify(localStore)

   


}

module.exports.mapStores = mapStores;

// mapStores()

