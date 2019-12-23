	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let reg = "regula_".concat(args[0]);
	const reg_nr = reg;
	console.log(reg);
	console.log(reg_nr);
	console.log(regulament.regula_1);
	console.log(regulament.reg_nr);
	console.log(args[0]);

}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
