const Discord = require('discord.js')

const bot = new Discord.Client()

const prefix = '*';

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', message => {
	if (message.author.bot) return;
	console.log('message')

	if(message.content == prefix + 'test'){
		message.channel.send('test valider');
	}
  });

bot.login('cacher')