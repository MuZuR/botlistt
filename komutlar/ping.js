const Discord = require('discord.js');

exports.run = function(client, message) {
 if (!message.member.roles.has('749187401527590973')) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  }    
  message.channel.send(`Pingim ${client.ping}ms.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};