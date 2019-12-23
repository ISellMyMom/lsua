	
const Discord = require("discord.js");
const economy = require("../assets/regulament.json")
const fs = require("fs");
exports.run = async (bot, message, args) => {	
	message.channel.send(Regula_1.descriere);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg"
}
