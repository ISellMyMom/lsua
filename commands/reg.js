	
const Discord = require("discord.js");
const regulament = require("../assets/regulament.json")
const fs = require("fs");
exports.run = async (bot, message, args) => {	
	console.log(regulament.Regula_args[0]);
	console.log(regulament.Regula_args[1]);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
