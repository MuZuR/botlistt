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
  let zaman = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = "749178164688715926" 
	
	if (!botisim) return message.channel.send(`<:red:739421808100376666> **Botun ID'sini Yazmalısın.**`).then(msg => msg.delete(3000))
  if (!sahip) return message.channel.send(`<:red:739421808100376666> **Bot Sahibi ID Yazman Lazım.**`).then(msg => msg.delete(3000))
  if (!zaman) return message.channel.send(`<:red:739421808100376666> **Zaman Söylemen Lazım.**`).then(msg => msg.delete(3000))
  message.delete()
       const embed2 = new Discord.RichEmbed()
       .setColor('BLUE')
		   .setDescription(`<:red:739421808100376666> <@${botisim}> **Adlı Bot Kapalıdır.** ${zaman} **Günden Fazla Kapalı Olursa Atılacakdır!** <@${sahip}> **Hemen Halletmesi Rica Olunur**`);
      client.channels.get(log).send(embed2)
		message.channel.send(`<:dogrulandi:739421834327621633> **Botu Reddettiniz.**`).then(msg => msg.delete(3000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};