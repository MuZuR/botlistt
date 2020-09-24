const Discord = require('discord.js');
exports.run = (client, message, args) => {
     if (!message.member.hasPermission("BAN_MEMBERS")) {
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
      .setDescription("<:red:739421808100376666> **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**")
      .setColor("BLUE");

    message.channel.send(embed3);
    return
  } 
    const embed2 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`<:dogrulandi:739421834327621633> Başarıyla banlandı`)
  message.channel.send(embed2)
  let member = message.guild.member(user)
  message.guild.member(user).ban();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 2
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'ban [kullanıcı] [sebep]'
};