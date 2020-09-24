const Discord = require('discord.js'); 
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return;
  } 
message.guild.fetchBans().then(banffı => {
banffı.arorEach(banaffı => {
message.guild.unban(banaffı)
});});
  message.channel.send(`:lock: **İşlem Başarılı!**\n**Sunucudaki Tüm Yasakları Kaldırdım**`)
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['banlarıkaldır'],
  permLevel: 2
};
exports.help = {
  name: 'banaffı'
};