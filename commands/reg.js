	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	
	let reg = 'regula_'.concat(args[0]);
	//let rrg = regula_.concat(args[0]);
	//console.log(rrg);
	//console.log(regulament.rrg);
	console.log("--");
	console.log(reg);
	console.log(args[0]);
	console.log("--");
	console.log("regula_".concat(args[0]));
	console.log('regula_'.concat(args[0]));
	console.log("--");
	console.log(regulament.regula_1);
	console.log(regulament.reg);
	console.log(regulament.regula_.concat(args[0]));

}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
