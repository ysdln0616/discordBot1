const http = require('http');
const querystring = require('querystring');
const crypto = require('crypto');
const discord = require('discord.js');
const client = new discord.Client();
const mainChannelId = "745724910697054318";
const server = require('./server.js');

client.on('ready', message =>{
  console.log('Bot準備完了');
});

client.on('voiceStateUpdate', (oldGuildMember, newGuildMember) =>{
  if (oldGuildMember.channel === null && newGuildMember.channel !== null) {
    sendMsg(mainChannelId, "<@" + newGuildMember.member.id +"> が <#" + newGuildMember.channel.id + "> で通話を開始しました！");
  } else if (oldGuildMember.channel !== null && newGuildMember.channel === null) {
    sendMsg(mainChannelId, "<@" + oldGuildMember.member.id +"> が <#" + oldGuildMember.channel.id + "> を抜けました！");
    }
});


if (process.env.DISCORD_BOT_TOKEN == undefined){
  console.log('DISCORD_BOT_TOKENが設定されていません。');
  process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );

function sendMsg(channelId, text){
  client.channels.cache.get(channelId).send(text)
    .then(console.log("メッセージ送信: " + text))
    .catch(console.error);
}
