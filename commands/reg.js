	
const Discord = require("discord.js");
const regulament = require("../assets/regulament.json")
const fs = require("fs");
exports.run = async (bot, message, args) => {	
	console.log(regulament.Regula_ + args[0]);
	console.log(regulament.Regula_1);
	console.log(args[0]);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
