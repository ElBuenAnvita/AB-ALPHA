const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "--";
const InfiniteLoop = require('infinite-loop');
const il = new InfiniteLoop;
const quotes = ["Sí", "No", "No sé", "Buena pregunta, pero no sé la respuesta", "Nunca.", "Definitivamente sí", "Definitivamente no", "No pasará", "50/50", "No responderé eso", "Mmm... ahora ando descansando, prueba después"]
const request = require('snekfetch');
const got = require('got');
const clientneko = require('nekos.life');
const neko = new clientneko();

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};
il.add(randomQuote, []);

il.run();

console.log(randomQuote());
//from here down is different gif for command --kiss ------------------------------------------------------
const quotes2 = ["https://i.imgur.com/9y34cfo.gif", "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif", "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865", "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",]

function randomQuote2() {
	return quotes2[Math.floor(Math.random() * quotes2.length)];
};
il.add(randomQuote2, []);

il.run();

console.log(randomQuote2());
//from here down is different gif for command --pat ------------------------------------------------------
const quotes3 = ["https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410", "http://2.bp.blogspot.com/-X0ZDtsVYvVk/WvOwG3Y1BYI/AAAAAAAABiQ/lt6TDbpSyXMoIglTBQH-JonovXCgB2QjACK4BGAYYCw/s1600/anime-head-pat-gif-4.gif", "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758", "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853", "https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915", "https://pa1.narvii.com/6475/d8ed9aa8d975550df2653714ee90fe7e5c526135_hq.gif", "https://78.media.tumblr.com/71d93048022df065a1d2af96ab71afa3/tumblr_olykrec0DB1qbvovho1_500.gif", "http://funnypictures2.fjcdn.com/funny_gifs/Anime+grill+headpats_5d0d3c_6068962.gif"]

function randomQuote3() {
	return quotes3[Math.floor(Math.random() * quotes3.length)];
};
il.add(randomQuote3, []);

il.run();

console.log(randomQuote3());
//from here down is different gif for command --roll ------------------------------------------------------
const quotes4 = ["nada", "por", "aqui"]

function randomQuote4() {
	return Math.floor(Math.random() * 100);
};
il.add(randomQuote4, []);

il.run();

console.log(randomQuote4());
//from here down is different gif for command --chiste ------------------------------------------------------
const quotes5 = ["- ¡Soldado López!\n- ¡Sí, mi capitán!\n- ¡No lo ví ayer en la prueba de camuflaje.\n- ¡Gracias, mi capitán", "- ¿Qué pasa si te corto una oreja?\n- Me quedo medio sordo.\n- ¿Y si te corto la otra?\n- Me quedo ciego.\n- ¿Por qué?\n- Porque se me caen los lentes", "¿Cuál es el colmo de un peluquero?\n¡Perder el bus por los pelos!", "- Ayer ví un letrero que hizo que me cagara en los pantalones\n- ¿Y qué decía?\n - «Baño cerrado»", "Llegan a una casa para el Censo y le preguntan:\n- ¿Su nombre?\n- Adan\n- ¿El de su esposa?\n- Eva\n- ¡Increíble! Por casualidad, ¿La serpiente también vive aquí?\n- Sí, un momento,\n  ¡¡SUEGRAAA, LA BUSCAN!!", "Cuando muera, pondré en mi tumba «WiFi Gratis»\nAsí vendrá gente a visitarme", "- Señor, su esposa cayó al río\n- Búsquenla río arriba\n- Pero si el río va para abajo\n- Hágame caso, ¡esta pendeja siempre le lleva la contraria a todo!", "Pepito le pregunta a su maestra:\n- Maestra, ¿me castigaría usted por algo que yo no hice?\n- No Pepito, ¡por supuesto que no!\n- Qué bien, porque no hice la tarea de hoy.", "Me robaron todas las sillas de mi casa,\nno saben cómo me siento ahora.", "- ¿Nivel de inglés?\n- Alto\n- Traduzca <<Memoria>>\n- Memory\n- Úselo en una oración\n- Una vez me aventé por la ventana y memory\n- ¡CONTRATADO!", "- Oye, ¿por qué te bañas con pintura azul?\n- Es que mi novia vive lejos\n- ¡¿Y eso que tiene que ver?!\n- Es que quiero estar azulado ;-;"]

function randomQuote5() {
	return quotes5[Math.floor(Math.random() * quotes5.length)];
};
il.add(randomQuote5, []);

il.run();

console.log(randomQuote5());

client.on('ready', () => {
  client.user.setGame('Use AnviBot Beta.');
  client.user.setStatus('dnd')
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "H-Hola, soy AnviBot... estos son mis comandos, recuerda que mi actual prefijo es » `" + prefix + "`",
      "color": 2335,
      "fields": [{
        "name": "Información/Utilidad",
        "value": "`info`, `me`"
      },
      {
        "name": "Imágenes",
        "value": "`pat`, `kiss`, `neko` (**¡NUEVO!**)" 
      },
      {
        "name": "Diversión",
        "value": "`8ball`, `roll`, `chiste`, `say`, `sayd`, `visto`"
      },
      {
        "name": "Pronto",
        "value": "`ban`, `inu`, `kill`, `idk`\n\nPuedes entrar a la página oficial de comandos haciendo [click aquí](http://anvibot.blogspot.com/p/commands)"
      }],
      "footer": {
        "text": "Gracias por usar AnviBot! | Creado por ElBuenAnvita"
      },
    }
    message.channel.send("Lo sentimos, el bot se encuentra en mantenimiento, use AnviBot Beta por el momento.")
  }
});

client.login(process.env.BOT_TOKEN);