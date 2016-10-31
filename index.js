var slackTerminal = require('slack-terminalize');
var cron1 = require('./cron');


slackTerminal.init('xoxb', {
    // slack rtm client options here
    // more info at: https://github.com/slackhq/node-slack-client/blob/master/lib/clients/rtm/client.js
}, {
    // app configurations to suit your project structure
    // to see the list of all possible config,
    // check this out: https://github.com/ggauravr/slack-terminalize/blob/master/util/config.js
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});


cron1(slackTerminal);