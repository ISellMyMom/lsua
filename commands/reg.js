	
const Discord = require("discord.js");
const fs = require("fs");
const regulament = require("../assets/regulament.json")
exports.run = async (bot, message, args) => {
	let reg = args.join("#");
	console.log(regulament);
	console.log(regulament.regula);
	console.log(regulament.sanctiune.reg);
	console.log(args[0]);
	console.log(reg);
	 var contents = fs.readFileSync("./assets/regulament.json");
	 var jsonContent = JSON.parse(contents);
	console.log(jsonContent.regula.reg);
}

exports.help = {
    name: "reg",
    type: "info",
    desc: "Test",
    usage: "reg <id>"
}
