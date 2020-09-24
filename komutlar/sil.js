const Discord = require("discord.js");
exports.run = function(client, message, args) {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  } 
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`<:red:739421808100376666> **Lütfen Silinecek Mesaj Sayısını Belirtiniz.**`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (args[0] > 100) {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`<:red:739421808100376666> **Ne Yazık ki 100'den Fazla Mesaj Silemem.**`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
      .addField(`Eylem`, `Sohbet silme`)
      .addField(`Yetkili`, `${message.author.username}`)
      .setTimestamp()
    message.channel.send(embed).then(msg => msg.delete(10000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "temizle",
  usage: "temizle"
};
