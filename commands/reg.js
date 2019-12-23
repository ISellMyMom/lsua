	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let reg = args[0];
	let msg=args[0].concat("@") 
	console.log(regulament);
	console.log(regulament.regula.msg);
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
