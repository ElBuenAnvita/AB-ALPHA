const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "--";

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "xDD")) {
    message.channel.send("xDD");
  } else
  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send("Mis actuales comandos son: `--ayuda` `--ping` `--xDD`. Más comandos serán añadidos proximamente\n Bot creado por ElBuenAnvita");
  }
});

client.on('ready', () => {
 client.user.setActivity('--ayuda');
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
    	message.reply('Mis actuales comandos son `--ping` `--info` `--help` `--chiste` `--invite`. Más comandos se añadirán en breve.');
  	}
});

client.on('message', message => {
    if (message.content === 'que') {
    	message.channel.send('so! :cheese: ');
  	}
});

client.on('message', message => {
    if (message.content === '--chiste') {
    	message.channel.send('chiste');
  	}
});

client.on('message', message => {
    if (message.content === 'k') {
    	message.channel.send('so! :cheese: ');
  	}
});

client.on('message', message => {
    if (message.content === 'omae wa mou shindeiru') {
    	message.channel.send('なに？！');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
