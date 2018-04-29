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
    message.channel.send("Mis actuales comandos son: `--ayuda` `--ping` `--avatar` `--info`. Más comandos serán añadidos pronto.\nOwO");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: **beta_1.1.5**");
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Discord Bot```\nSi tienes dudas sobre el bot o quieres colaborar, puedes entrar con el siguiente enlace:\nhttps://discord.gg/PSFfWFp\n\n```Invita AnviBot a tu servidor de Discord```\nPuedes invitar al bot con el siguiente enlace:\nhttps://discordapp.com/api/oauth2/authorize?client_id=419980531564806145&permissions=8&scope=bot\n\n**¡Gracias por usar AnviBot n.n!**");
  }
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
    if (message.content === 'ayy') {
    	message.channel.send('lmao');
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
