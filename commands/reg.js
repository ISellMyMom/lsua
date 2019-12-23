	
const Discord = require("discord.js");
const regulament = require("../assets/regulament.json")
const fs = require("fs");
exports.run = async (bot, message, args) => {	
	message.channel.send(regulament.Regula_args[0].descriere);
	console.log(regulament.Regula_1);
	console.log(regulament.Regula_2);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg"
}
