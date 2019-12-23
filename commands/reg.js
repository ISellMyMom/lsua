	
const Discord = require("discord.js");
const regulament = require("../assets/regulament.json")
const fs = require("fs");
exports.run = async (bot, message, args) => {
	let msg = messasge.content.join("@");
	let reg = args.join("#");
	console.log(regulament);
	console.log(regulament.regula);
	console.log(regulament.sanctiune.reg);
	console.log(args[0]);
	console.log(reg);
	console.log(msg);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
