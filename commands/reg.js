	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let msg = message.content.join("@");
	let reg = args.join("#");
	console.log(regulament);
	console.log(regulament.regula);
	console.log(regulament.sanctiune.reg);
	console.log(args[0]);
	console.log(reg);
	console.log(msg);
	 var contents = fs.readFileSync("../assets/regulament.json");
	 var jsonContent = JSON.parse(contents);
	console.log(jsonContent.regula.reg);
	console.log(jsonContent.regula.msg);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
