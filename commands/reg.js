	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let reg="regula_".concat(args[0]) 
	console.log(regulament.reg.descriere);
	console.log(regulament.reg.sanctiune);

}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
