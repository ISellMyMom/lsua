const Discord = require("discord.js");
const Funct = require("../assets/functions.js");

exports.run = async (bot, message, args) => {
    let avaiablecommand = bot.commands.filter(cmd => cmd.help.name === args[0]).map(cmd => cmd.help.name);  
    if(args.length < 1) return;
    if(args[0] === "all") {
        let help = new Discord.RichEmbed()
            .setAuthor("List of Commands")
            .addField("info commands", `${bot.commands.filter(cmd => cmd.help.type === 'info').map(cmd => `**${cmd.help.name}** - ${cmd.help.desc}`).join("\n")}`, false)
            .addField("fun commands", `${bot.commands.filter(cmd => cmd.help.type === 'fun').map(cmd => `**${cmd.help.name}** - ${cmd.help.desc}`).join("\n")}`, false)
			.addField("admin commands", `${bot.commands.filter(cmd => cmd.help.type === 'admin').map(cmd => `**${cmd.help.name}** - ${cmd.help.desc}`).join("\n")}`, false);
         message.channel.send(help);
    }
    else if(args[0] === "type") {
        let help = new Discord.RichEmbed()
            .setAuthor("Type of Commands")
            .setDescription("**info** - Comenzi pentru informatii.\n**fun** - Comenzi pentru amuzament.\n**admin** - Comenzi pentru admini.")
            message.channel.send(help);
    }
    else if(args[0] === "info" || args[0] === "admin" || args[0] === "fun"){
        let help = new Discord.RichEmbed()
            .setAuthor(`${args[0]} commands`)
            .setDescription(`${bot.commands.filter(cmd => cmd.help.type === args[0]).map(cmd => `**${cmd.help.name}** - ${cmd.help.desc}`).join("\n")}`)
        message.channel.send(help);
    }
    else if(avaiablecommand.some(args => message.content.includes(args)) ) {
        Funct.SendUsage(bot, message, args[0]);
    }
    else return message.channel.send("Nu exista acel tip de comanda (info, admin, fun).")
}

exports.help = {
    name: "help",
    type: "info",
    desc: "Arată lista de comenzi / Arată parametrii unei comenzi.",
    usage: "help <all/type/command>"
}