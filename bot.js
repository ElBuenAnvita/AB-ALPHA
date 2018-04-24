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
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: **1.1.4**");
  }
});

client.on('ready', () => {
 client.user.setActivity('--ayuda');
});

client.on('message', message => {
    if (message.content === '999ping') {
    	message.reply('**Pong!** :ping_pong:');
  	}
});

client.on('message', message => {
    if (message.content === '--informacao') {
    	message.reply('Al parecer intentas acceder a comandos antiguos del bot. Usa `--ayuda` para conseguir los nuevos comandos ;)');
  	}
});

client.on('message', message => {
    if (message.content === '--help') {
    	message.reply('Al parecer intentas acceder a comandos antiguos del bot. Usa `--ayuda` para conseguir los nuevos comandos ;)');
  	}
});

client.on('message', message => {
    if (message.content === 'que') {
    	message.channel.send('so! :cheese: ');
  	}
});

client.on('message', message => {
    if (message.content === '--chiste') {
    	message.channel.send('Al parecer intentas acceder a comandos antiguos del bot. Usa `--ayuda` para conseguir los nuevos comandos ;)');
  	}
});

client.on('message', message => {
    if (message.content === 'k') {
    	message.channel.send('so! :cheese:');
  	}
});

client.on('message', message => {
    if (message.content === 'omae wa mou shindeiru') {
    	message.channel.send('なに？！');
  	}
});

client.on('message', message => {
    if (message.content === 'ki') {
    	message.channel.send('ero pan :bread:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
