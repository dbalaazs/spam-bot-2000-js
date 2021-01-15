module.exports = {
    name: 'sp',
    aliases: ['shitpost'],
	description: 'shitpost func.',
	execute(message, args) {
		if (+args[1] < 50 && +args[1] >0){
            for(i = 0; i<+args[1]; i++){
                message.channel.send(args[0])
            }
        }
        else {message.channel.send('You messed something up, boss...')}
	},
};