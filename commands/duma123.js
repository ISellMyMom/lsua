const duma = require("../assets/dume.json")

module.exports.run = async (bot, message, args) => {

	let dau_duma = duma.[Math.floor(Math.random() * duma.length)];
  message.channel.send(dau_duma);
}

module.exports.help = {
	name: "duma123",
	type: "fun",
	desc: "Dau o duma.",
	usage: "duma123"
}
