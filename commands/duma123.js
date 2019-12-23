const duma = require("./assets/dume.json");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Duma: " + duma.dume[Math.floor(Math.random() * duma.dume.length)]);
}

module.exports.help = {
	name: "duma123",
	type: "fun",
	desc: "Dau o duma.",
	usage: "duma123"
}
