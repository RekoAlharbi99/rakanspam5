const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600166968976211994")
setInterval(function() {
channel.send(`Rakan Love Asmaa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);