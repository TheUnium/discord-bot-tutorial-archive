const Discord = require('discord.js');

module.exports = {
    info:{
        name: "pong",
        description: "The second command",
        usage: "[nothing here!]",
        aliases: ["po"]
    },

    run: async function(client, message,args){
        message.channel.send("ping!")
    }
};
