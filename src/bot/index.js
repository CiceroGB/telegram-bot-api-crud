require('dotenv/config');
const TelegramBot = require('node-telegram-bot-api');
const mapStores = require('./mapStores');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('text', async (msg) => {
  const chatId = msg.chat.id;
  const greetingMessage = `Olá ${msg.from.first_name}, compartilhe sua localização para encontrarmos uma loja pertinho de você com ofertas exclusivas Telegram Carrefour`;
  bot.sendMessage(chatId, greetingMessage, {
    parse_mode: 'Markdown',
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [[{
        text: 'Compartilhar Localização',
        request_location: true,
      }], ['Cancelar']],
    },
  });
});

bot.on('location', async (msg) => {
  const chatId = msg.chat.id;
  try {
    const { latitude, longitude } = msg.location;
    const localStore = await mapStores.mapStores(latitude, longitude);
    bot.sendMessage(chatId, localStore);
  } catch (e) {
    bot.sendMessage(chatId, 'Ops algo deu errado! Tente novamente');
  }
});
