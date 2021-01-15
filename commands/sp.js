module.exports = {
    name: 'sp',
    aliases: ['shitpost'],
	description: 'shitpost func.',
	execute(message, args) {
        const last = args.pop()
        function replaceAll(string, search, replace) {
            return string.split(search).join(replace);
        }
		if (+last < 51 && +last >0){
            text = args.toString()
            for(i = 0; i<+last; i++){
                message.channel.send(replaceAll(text, ',', ' '))
            }
        }
        else {message.channel.send('You messed something up, boss...')}
	},
};