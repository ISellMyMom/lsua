const api = "http://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send("Insereaza un ID.");
        
        if(isNaN(id)) return message.channel.send("ID invalid");

        let entry = body.find(post => post.id === id);
        console.log(entry);

    });
}

module.exports.help = {
    name: "json",
    type: "info",
    desc: "Displays an json file from my site.",
    usage: "json <id>"
}
