	
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {	
	let pages = ['Page one!', 'Second page', 'Third page'];
	let page = 1; 

		const embed = new Discord.RichEmbed() // Define a new embed
		.setColor(0xffffff) // Set the color
		.setFooter(`Page ${page} of ${pages.length}`)
		.setDescription(pages[page-1])

		message.channel.send(embed).then(msg => {

		msg.react('⬅').then( r => {
			msg.react('➡')

			// Filters
			const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
			const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setDescription(pages[page-1]);
				embed.setFooter(`Page ${page} of ${pages.length}`);
				msg.edit(embed)
			})

			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setDescription(pages[page-1]);
				embed.setFooter(`Page ${page} of ${pages.length}`);
				msg.edit(embed)
			})
		})
	})
}

exports.help = {
    name: "nush",
    type: "info",
    desc: "Spune-ne la ce facultate esti si pe ce domeniu.",
    usage: "nush"
}