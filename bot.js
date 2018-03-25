const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  bot.user.setGame('GAME HERE')
});

client.on('message', message => {
    if (message.content === '--ping') {
    	message.reply('**Pong!** :ping_pong:');
  	}
});

client.on('message', message => {
    if (message.content === '--info') {
    	message.reply('Bot creado por ElBuenAnvita. BETA VERSION 1.1.2');
  	}
});

client.on('message', message => {
    if (message.content === '--help') {
    	message.reply('Mis actuales comandos son `--ping` `--info` `--help`. Más comandos se añadirán en breve.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
