const config = require('./config.json');
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}
function 가위바위보(){
  return Math.floor(Math.random() * 3 + 1);
}

client.on('ready',()=> {
  console.log(`봇켜졌어! #{기린봇#2888}!`);
});
client.on('message',message => {
  if(message.content === 'ping'){
    // msg.reply('pong! `' + Math.floor(client.uptime) + 'ms`');
    message.reply(`퐁인데염! ${Math.floor(client.uptime)} ms`);
  }
  if (message.content.startsWith("dice")){
    m = message.content.split(' ');
    if(m[1] === undefined && m[2] === undefined)
    message.channel.send("`dice [정수] [정수] `또는 `dice [정수]`와 같이 입력해주세요");
    else if(m[2] === undefined)
    message.channel.send(randomInt(0,parseInt(m[1])));
    else
    message.channel.send(randomInt(parseInt(m[1]), parseInt(m[2]))); 
  }
  if(message.content.substring(0,3) === "!투표" ){
    const description = msg.content.substring(3)
    const embed = new Discord.MessageEmbed()
    .setTitle("👇 투표합시다 😅")
    .setDescription(description)
    .setColor("RED")
     message.channel.send(embed)
     .then((message) => {
       message.react("👍")
       message.react("👎")
     });
  }
  if(message.content.substring(0,6) === "!가위바위보"){
    const desc = message.content.substring(6);
    const embed = new Discord.MessageEmbed()
    .setTitle ("👇 가위 바위 보 ")
    .setDescription(description)
    .setColor("BLUE")
    message.channel.send(embed)
  }
});
 
client.login(config.token);
