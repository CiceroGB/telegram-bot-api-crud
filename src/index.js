const TelegramBot = require('node-telegram-bot-api');
const mapStores = require('./mapStores');

const telegramConfig = require('./config/telegram');


const { botToken } = telegramConfig;
const token = botToken;


const bot = new TelegramBot(token, { polling: true });


bot.on('text', async (msg) => {
        const chatId = msg.chat.id;
        const greetingMessage = `Olá ${msg.from.first_name}, compartilhe sua localização para encontrarmos uma loja pertinho de você com ofertas exclusivas Telegram Carrefour`;
        bot.sendMessage(chatId, greetingMessage);
});


bot.on('location', async msg => {
    const chatId = msg.chat.id;
    try {
        const { latitude, longitude} = msg.location;
        const localStore = await mapStores.mapStores(latitude, longitude);
        bot.sendMessage(chatId, localStore);
    } catch (e) {
        bot.sendMessage(chatId, 'Ops algo deu errado! Tente novamente');
    }


})