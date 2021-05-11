const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();
const prefix = "yt!";

client.on("ready", () => {
    console.log("The YT bot is online poggers")
})

client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send("pong")
    }
})

client.login(process.env.TOKEN);
