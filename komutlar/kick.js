 const Discord = require('discord.js');
exports.run = (client, message, args) => {
   if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  }    
  let guild = message.guild
  let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) {
    const embed3 = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**")
      .setColor("BLUE");

    message.channel.send(embed3);
    return
  } 
  const embed2 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`<:dogrulandi:739421834327621633> Üye Başarıyla Kicklendi`)
  message.channel.send(embed2)
  if (!message.guild.member(user).kickable) return message.reply('<:red:739421808100376666> **Yetkilileri sunucudan atamam.**');
  

  
  message.guild.member(user).kick();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
}; 