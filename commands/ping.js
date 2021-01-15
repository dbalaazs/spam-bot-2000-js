module.exports = {
	name: 'ping',
	aliases: [],
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};