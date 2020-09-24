const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
exports.run = function(client, message, args) {
  if (!message.member.roles.has('749187401527590973')) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  }    
	let botisim = args[1]
  let sahip = args[0]
  let sebebp = args[2]
	let log = "749178164688715926" 
	
	if (!botisim) return message.channel.send(`<:red:739421808100376666> **Botun ID'sini Yazmalısın.**`).then(msg => msg.delete(3000))
  if (!sahip) return message.channel.send(`<:red:739421808100376666> **Bot Sahibi İD Yazman Gerekli.**`).then(msg => msg.delete(3000))
  message.delete()
   const embed2 = new Discord.RichEmbed()
  .setDescription(`<:red:739421808100376666> <@${botisim}> **Adlı Kullanıcının** <@${sahip}> **Adlı Botu Atıldı.**`);
  client.channels.get(log).send(embed2)
		message.channel.send(`<:dogrulandi:739421834327621633> **Botu Atdınız.**`).then(msg => msg.delete(3000))
    message.guild.member(botisim).kick();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botat"],
  permLevel: 0
};

exports.help = {
  name: 'bot-at', 
  description: "",
  usage: ''
};