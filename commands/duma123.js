const Discord = require("discord.js");
const fs = require("fs");
const duma = require("../assets/dume.json");

module.exports.run = async (bot, message, args) => {

  console.log(duma);
}

module.exports.help = {
	name: "duma123",
	type: "fun",
	desc: "Dau o duma.",
	usage: "duma123"
}
