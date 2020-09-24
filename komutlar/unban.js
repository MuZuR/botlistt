const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('quick.db');
  

    
   if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");
    message.channel.send(embed);
    return
  }
  

  let user = args[0];
 if (isNaN(user)) return message.reply('<:red:739421808100376666> **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
 

  const embed2 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`<:dogrulandi:739421834327621633> Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır'],
  permLevel: 3,
  kategori: "moderasyon",
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin sunucudaki banını açar.',
  usage: 'unban <id> <sebep>',
 
};