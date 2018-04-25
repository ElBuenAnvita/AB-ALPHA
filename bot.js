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
    message.channel.send("Mis actuales comandos son: `--ayuda` `--ping` `--xDD` `--info`. Más comandos serán añadidos pronto.\nOwO");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: **1.1.4**");
  }
});

client.on('ready', () => {
 client.user.setActivity('--ayuda | AnviBot');
});

client.on('message', message => {
    if (message.content === '999ping') {
    	message.reply('**Pong!** :ping_pong:');
  	}
});

client.on('message', message => {
    if (message.content === '--help') {
    	message.reply('Al parecer intentas acceder a comandos antiguos del bot. Usa `--ayuda` para conseguir los nuevos comandos ;)');
  	}
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '--avatar') {
    // Send the user's avatar URL
    message.channel.send('**Tu avatar es:**\n' + message.author.avatarURL);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`¡Bienvenido al servidor, ${member}!`);
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
