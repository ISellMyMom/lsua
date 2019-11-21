const Discord = require("discord.js");
const Funct = require("../assets/functions.js");

exports.run = async (bot, message, args) => {

 const embed = new Discord.RichEmbed()
                .setAuthor(`Milmoi`, bot.user.avatarURL)
                .addField(`Version`, `1.0 (Beta)`, true)
                .addField(`Node JS`, `8.11.3`, true)
                .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
                .addField(`Servers`, `${bot.guilds.size}`, true)
                .addField(`Users`, `${bot.users.size}`, true)
                .addField(`Website`, `[lsua.uab.ro](In lucru)`, true)
                .addField(`University`, `[uab.ro](https://uab.ro/)`, true)
                .addField(`Invite`, `[hazze.cf/lsua](https://hazze.cf/lsua/)`, true)
                .addField(`Developer`, `HaZZe#5401`, true)
                .setFooter("Prefix: ! | This bot is still under construction")
                .setTimestamp()
                .setColor("#89409A");
            message.channel.send(embed);
}

exports.help = {
    name: "botinfo",
    type: "info",
    desc: "Displays bot information.",
    usage: "botinfo"
}
