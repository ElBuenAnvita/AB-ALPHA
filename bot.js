const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.ping') {
    	message.reply('**Pong!** :ping_pong:');
  	}
client.on('message', message => {
    if (message.content === '.help') {
        message.reply('Mis comandos son: `.help` `.ping` `.info` Bot en desarrollo, creado por ElBuenAnvita.');
    }
});
    bot.user.SetGame('.help')
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
