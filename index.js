const Discord = require('discord.js');
const superagent = require("superagent")
const client = new Discord.Client();

client.on('ready', () => {
  console.log('OwO');
  console.log("Login as " + client.user.tag)
});

async function GetMEME(){
  const { body } = await superagent.get("https://cdn.nic20.tk/meme");
  return CheckImage(body)
};

function CheckImage(body){
  if(body.is_video){
    return GetMEME()
  } else {
    return body
  }
};

// Create an event listener for messages
client.on('message', async message => {
  if (message.content === '?meme') {
    const body = await GetMEME();
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(body.title).setColor("RANDOM").setURL(body.permalink).setImage(body.image_url))
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('Your nice token owo');
