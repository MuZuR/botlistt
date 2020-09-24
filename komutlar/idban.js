const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("<:red:739421808100376666> Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");

    message.channel.send(embed);
    return
  } 
    if (!args[0]) {
        return message.channel.send(`<:red:739421808100376666> **Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!**`)
   }
   var sebeb = args.slice(1).join(" ");
   var idban = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(idban)) {
                   return message.channel.send(`<:red:739421808100376666> **Bu Kullanıcı Zaten Yasaklanmış.**`) 
               }
               message.guild.ban(idban, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<:dogrulandi:739421834327621633> **Başarıyla banlandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<:red:739421808100376666> **Bir Hata Oluştu.**`);
                       console.error('<:red:739421808100376666> **Hata:**', error);
                   });
           });
 } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(idban)) {
                   return message.channel.send(`<:red:739421808100376666> **Bu Kullanıcı Zaten Yasaklanmış.**`)
               }
               message.guild.ban(idban, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<:dogrulandi:739421834327621633> <@!${user.id}> **Sunucudan Yasaklandı.**`);
                   })
                   .catch(error => {
                       message.channel.send(`<:red:739421808100376666> **Bir Hata Oluştu.**`);
                       console.error('<:red:739421808100376666> **Hata:**', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'idban',
   description: 'Oylama yapmanızı sağlar.',
   usage: 'ban <id>'
};