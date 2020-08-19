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
  if(oldGuildMember.voiceChannelID !== undefined &&oldGuildMember.voiceChannelID !== null && newGuildMember.voiceChannelID !== undefined){
    if(oldGuildMember.voiceChannelID == "745072327766704249") {
      sendMsg(mainChannelId, "<@" + newGuildMember.user.id +"> が<#745072327766704249>を抜けました！\n");
    }else if(oldGuildMember.voiceChannelID == "745055397328453667"){
      sendMsg(mainChannelId, "<@" + newGuildMember.user.id +"> が<#745055397328453667>を抜けました！\n");
    }  
  }
  if(oldGuildMember.voiceChannelID === undefined ||oldGuildMember.voiceChannelID === null|| oldGuildMember.voiceChannelID === "745055397328453667"&& newGuildMember.voiceChannelID !== undefined){
    if(newGuildMember.voiceChannelID == "745072327766704249") {
        sendMsg(mainChannelId, "<@" + newGuildMember.user.id +"> が<#745072327766704249>で通話を開始しました！\n");
      }
  }
  if(oldGuildMember.voiceChannelID === undefined ||oldGuildMember.voiceChannelID === null|| oldGuildMember.voiceChannelID === "745072327766704249"&& newGuildMember.voiceChannelID !== undefined){
    if(newGuildMember.voiceChannelID == "745055397328453667") {
      sendMsg(mainChannelId, "<@" + newGuildMember.user.id +"> が<#745055397328453667>で通話を開始しました！\n");
    }
  };
});


if (process.env.DISCORD_BOT_TOKEN == undefined){
  console.log('DISCORD_BOT_TOKENが設定されていません。');
  process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );

function sendMsg(channelId, text){
  client.channels.get(channelId).send(text)
    .then(console.log("メッセージ送信: " + text))
    .catch(console.error);
}
