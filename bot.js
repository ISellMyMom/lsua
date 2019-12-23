// Variables
const Discord = require("discord.js");
const fs = require("fs");
const Funct = require('./assets/functions.js');
const Logging = require('./assets/logging.js');

const { TOKEN, PREFIX, newbie_channel } = require("./assets/config.json");
const {bannedWords} = require('./assets/variables.js');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// Command Handler
fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    console.log(`[COMMANDS] ${jsfiles.length} commands loaded.`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

// When bot go online
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'from bunker', type: 3 } });//Watching 
    bot.user.setStatus('dnd');
    console.log(`[SYSTEM] La cum arata totul, presupun ca ai reusit.`);

	// Get our server
	const guild = bot.guilds.get('646435231099781120');

	// Get our stats channels
	const totalUsers = bot.channels.get('658596190983553055');
	//const onlineUsers = bot.channels.get('658592876095340564');
	const isorieUsers = bot.channels.get('658597004317818910');
	const economieUsers = bot.channels.get('658597460142194688');
	const exacteUsers = bot.channels.get('658596678756073473');
	const dreptUsers = bot.channels.get('658597741261488128');
	const teologieUsers = bot.channels.get('658597861646270474');

	// Check every 30 seconds for changes
	setInterval(function() {
	  console.log('Getting stats update..')

	  //Get actual counts
	  var userCount = guild.memberCount;
	  //var onlineCount = guild.members.filter(m => m.presence.status === 'online').size
	  var istorieCount = guild.roles.get('646722983548944394').members.size;//
	  var economieCount = guild.roles.get('646722220051267631').members.size;
	  var exacteCount = guild.roles.get('646722466181545986').members.size;
	  var dreptCount = guild.roles.get('646724700927557642').members.size;
	  var teologieCount = guild.roles.get('646723322297450536').members.size;
	  
	  // Log counts for debugging
	  /*console.log("Total Users: " + userCount);
	  console.log("Online Users: " + onlineCount);
	  console.log("Coders: " + coderCount);*/

	  // Set channel names
	  totalUsers.setName("👤 Total Membrii: " + userCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);

	  /*onlineUsers.setName("Online Users: " + onlineCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);*/

	  istorieUsers.setName("📖 Isotrie Si Filologie: " + coderCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);
	  
	  economieUsers.setName("💶 Stiinte Economice: " + coderCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);
	  
	  exacteUsers.setName("⚡ Stiinte Exacte: " + coderCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);
	  
	  dreptUsers.setName("💼 Drept: " + coderCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);
	  
	  teologieUsers.setName("😇 Teologie: " + coderCount)
	  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	  .catch(console.error);
	  
	  }, 30000)
	
	
});

bot.on("message", async message => {

  if(message.author.bot) return undefined;
    if(message.channel.type === "dm") return undefined;
    let messageArray = message.content.toLowerCase().split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
	
	// Delete message from newbie channel.
    if(message.channel.name == newbie_channel) {
        if(isNaN(message.content)) {
            message.delete();
        }
    }
	// Banned words log
    if(bannedWords.some(word => message.content.includes(word)) ) {
        message.delete();
        Logging.logGuardianMessageDelete(bot, message);
    }
	
	// Command Executor
    if(command.startsWith(PREFIX)) {
        let cmd = bot.commands.get(command.slice(PREFIX.length));
        if(args.length < 1) Funct.SendUsage(bot, message, command.slice(PREFIX.length));
        if(cmd) cmd.run(bot, message, args);
    }

});
// Deleted message log
bot.on('messageDelete', async (message) => {
    if(bannedWords.some(word => message.content.includes(word))) return;
	if(message.channel.name == newbie_channel) return;
    Logging.logMessageDelete(bot, message);
});

// Login
bot.login(process.env.BOT_TOKEN);
