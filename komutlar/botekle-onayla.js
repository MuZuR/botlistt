const Discord = require('discord.js');
exports.run = function(client, message, args) {
 if (!message.member.roles.has('749187401527590973')) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  }    
	let botisim = args[0]
  let sahip = args[1]
	let log = "749178164688715926" 
  let yetkili = "749185530079608883"
	
	if (!botisim) return message.channel.send(`<:red:739421808100376666> **Botun ID'sini Yazmalısın.**`).then(msg => msg.delete(3000))
    if (!sahip) return message.channel.send(`<:red:739421808100376666> **Bot Sahibi İD Yazman Gerekli.**`).then(msg => msg.delete(3000))
  message.delete()
  const embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription(`<:dogrulandi:739421834327621633> <@${sahip}> **Adlı Kullanıcının** <@${botisim}> **Adlı Botu Onaylandı.**`);
     client.channels.get(log).send(embed2)
    const a = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Onaylandı")
  .setDescription(`**Yetkili**:\n${message.author}\n**Bot Sahibi**:\n<@${sahip}>\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botisim}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botisim}&scope=bot&permissions=8)`)
  client.channels.get(yetkili).send(a);
  message.channel.send(`<:dogrulandi:739421834327621633> **Botu Onayladınız.**`).then(msg => msg.delete(3000))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};
exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};