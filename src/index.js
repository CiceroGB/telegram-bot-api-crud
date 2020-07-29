const TelegramBot = require('node-telegram-bot-api');
const stores = require('./stores');
const mapStores = require('./mapStores');

const telegramConfig = require('./config/telegram');


const { botToken } = telegramConfig;
const token = botToken;


const bot = new TelegramBot(token, { polling: true });


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text.includes('-')) {      
        let dataArray = await stores.searchStore(0,0);
        console.log(dataArray)
        bot.sendMessage(chatId, dataArray);
    } else {
        const greetingMessage = `Olá ${msg.from.first_name}, para encontramos uma loja pertinho de você digite o nome da cidade com o UF nesse formato: Cidade-UF ou compartilhe sua localização :)`;
        console.log('msg', msg)
        bot.sendMessage(chatId, greetingMessage);
    }



});