const TelegramBot = require('node-telegram-bot-api');

const telegramConfig = require('./config/telegram');


const { botToken } = telegramConfig;
const token = botToken;


const bot = new TelegramBot(token, { polling: true });


bot.onText(/carro/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = 'fusca'; 
    bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const greetingMessage = 'Olá, para encontramos uma loja pertinho de você digite o nome da cidade ou compartilhe sua localização :)';
    console.log('msg', msg)

    bot.sendMessage(chatId, greetingMessage);
});