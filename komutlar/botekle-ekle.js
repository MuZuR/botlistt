const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "749185530079608883"
	let kanal = "749178187086299157" 
  let log = "749178164688715926" 
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`<:red:739421808100376666> **Botunun ID'sini Yazmalısın.**`).then(msg => msg.delete(3000))
  if (!prefix) return message.channel.send(`<:red:739421808100376666> **Botunun Prefixini Yazmalısın.**`).then(msg => msg.delete(3000))
  if (!onaylımı) return message.channel.send(`<:red:739421808100376666> **Botunun DBL Onaylımı.**`).then(msg => msg.delete(3000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`[0 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [8 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot Sahibi ID", message.author.id)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.get(basvuru).send(embed)
 const embed2 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`<:dogrulandi:739421834327621633> ${message.author} **Adlı Kullanıcının** <@${botid}> **Adlı Botu Sıraya Ekledi. Botu Onaylanmayı Bekliyor.**`)
  client.channels.get(log).send(embed2)
  message.channel.send(`<:dogrulandi:739421834327621633> **Bot Ekleme İsteğiniz Alındı.**`).then(msg => msg.delete(3000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};
exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};