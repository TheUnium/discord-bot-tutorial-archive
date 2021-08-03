const { MessageEmbed } = require('discord.js');

module.exports = {
    info:{
        name: "help",
        description: "Shows all the commands!",
        usage: "<command>",
        aliases: ["h","commands"]
    },

    run: async function(client, message,args){
        let helpEmbed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username+"!")
        .setColor("GREEN")
        .setDescription("`$!ping` ~ Pong!\n`$!pong` ~ Ping\n`$!help` ~ SHows this page!")
        .setFooter("You can find out some info about commands by doing '$!help <command>'")
        if(!args[0])return message.channel.send(helpEmbed)
        else {
            let cmds = args[0]
            let command = client.commands.get(cmds)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmds))
            if(!command)return message.channe.send("The command you searched for does not exist!")
            let commandEmbed = new MessageEmbed()
            .setTitle("Command : "+command.info.name+" info")
            .setColor("GREEN")
            .setDescription(`
            Name: ${command.info.name}
            Description: ${command.info.description}
            Usage: ${client.config.prefix}${command.info.name} ${command.info.usage}
            Aliases : ${command.info.aliases.join(", ")}`)
            message.channel.send(commandEmbed)
        }
    }
};
