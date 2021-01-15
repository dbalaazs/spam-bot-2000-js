module.exports = {
    name: 'tanarur',
    aliases: [],
	description: 'ELNÉZÉST',
	async execute(message, args) {
        var sleep = require('system-sleep');
		if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('./misc/tanarur.mp3');

            dispatcher.on('start', () => {
                const d = new Date()
                date = d.toTimeString().split(' ')[0]
                console.log(date + ' tanarur.mp3 is now playing!');
            });

            dispatcher.on('finish', () => {
                const d = new Date()
                date = d.toTimeString().split(' ')[0]
                console.log(date + " tanarur.mp3 has finished playing!\n");
                sleep(1000)
                connection.disconnect();
            });
            
            dispatcher.on('error', console.error);
        }
	},
};