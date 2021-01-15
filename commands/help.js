module.exports = {
    name: 'help',
    aliases: [],
	description: 'help menu',
	execute(message, args) {
		message.channel.send('You can say ~pog to get a champ ;) You can also say ~tanarur while in a vc to hear the best sound clip of your life. Or you could use me for my intended purpose and say ~sp, put in your message (if it has a "," it will get deleted in the spam) and a number between 1-50 and see magic happen');
	},
};