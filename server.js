const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
require('./util/eventLoader')(client);
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const log = message => {
  console.log(`BOT: ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(ayarlar.token);


client.on("guildMemberAdd", async member => {
    member.addRole("749187262973214771");
    return;
  }
);

let emoji = "⭐";
let emojikactaneoluncaatsınstarboarda = 3;
let StarboardKanalid = "750359242783064126";
let Token = "NzQ5MTgxMTY2MjQ2MDM1NDU2.X0oPVQ.a28CgoC8QQaV_Utluu1bwsdLobo";
let hangisunucudaolsuno = "749175280760913932";
client.on('ready', () => {
});
 const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;
	const { d: data } = event;
	const anto = client.users.cache.get(data.user_id);
	const channel = client.channels.cache.get(data.channel_id) || await anto.createDM();
	if (channel.messages.cache.has(data.message_id)) return;
	const message = await channel.messages.fetch(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	const reaction = message.reactions.cache.get(emojiKey);
	client.emit(events[event.t], reaction, anto);
});


client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.message.guild.id === hangisunucudaolsuno) {
	if (reaction.emoji.name == emoji) {
    if(reaction.count === emojikactaneoluncaatsınstarboarda) {
	    if(reaction.message.attachments.size > 0) {
       const embed = new Discord.MessageEmbed()
      .setTitle("StarBoard")
      .addField("Mesaj Sahibi",`${reaction.message.author.tag}`,true)
      .addField("Kanal",`<#${reaction.message.channel.id}>`,true)
      .addField("Mesaja git!",`[Tıkla](${reaction.message.url})`,true)
      .setColor("GOLD")
      .setImage(reaction.message.attachments.first().url)
       client.channels.cache.get(StarboardKanalid).send(embed)
} else {
      const embed = new Discord.MessageEmbed()
      .setTitle("StarBoard")
      .addField("Mesaj Sahibi",`${reaction.message.author.tag}`,true)
      .addField("Kanal",`<#${reaction.message.channel.id}>`,true)
      .addField("Mesaja git!",`[Tıkla](${reaction.message.url})`,true)
      .setColor("GOLD")
            client.channels.cache.get(StarboardKanalid).send(embed)
}
    }
  }
  }
})
client.login(Token)