const fs = require('fs');
const Discord = require('discord.js');
const { OpusEncoder } = require('@discordjs/opus');
const { prefix, token } = require('./config.json');
const d = new Date()
date = d.toTimeString().split(' ')[0]

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log(date + " Ready!\n");
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

    try {
	    command.execute(message, args);
    } catch (error) {
		const d = new Date()
        date = d.toTimeString().split(' ')[0]
	    console.error(`${date} ${error}`);
	    message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);


/*
TODO:
-TRY TO ADD A CONSOLE NOTIF WHEN SP FUNCTION FINISHES (DIDNT WORK BEFORE CAUSE FUNCTION FINISHES BEFORE THE MESSAGES ARE ACTUALLY SENT OOUT)
-UPGRADE SP FUNC TO TAKE IN MESSAGES WITH SPACES (HAVE TO MAKE THE LAST ARG BE THE NUMBER NOT THE SECOND ONE)
*/