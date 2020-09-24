const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json'); 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle(`${client.user.username}`)
         .setColor('BLUE')
        .setDescription(`  • | **${ayarlar.prefix}botkapalı** : Sistem Eklenen Botu Reddeder.\n • | **${ayarlar.prefix}onayla** : Sistem Eklenen Botu Onaylar.\n • | **${ayarlar.prefix}reddet** : Sistem Eklenen Botu Reddeder.\n • | **${ayarlar.prefix}bot-at** : Botu Sistemden ve Sunucudan Atar.`)            
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};