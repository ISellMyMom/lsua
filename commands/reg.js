	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let reg = args[0];
	let msg="_".concat(args[0]) 
	console.log(regulament);
	console.log(regulament.regula._1);
	console.log(regulament.sanctiune.reg);
	console.log(reg);
	console.log(msg);

}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
