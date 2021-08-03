const Discord = require('discord.js');

module.exports = {
    info:{
        name: "ping",
        description: "The first command",
        usage: "[nothing here!]",
        aliases: ["pi"]
    },

    run: async function(client, message,args){
        message.channel.send("pong!")
    }
};
