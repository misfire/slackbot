# slack bot

Modified slackbot with custom commands for my slack team.

!server
Brings up status of all my game servers.

# Setup

- Run `npm install` to install the dependencies
- Paste the `xoxb-token` of your bot integration in `init` function inside `index.js` file
- Run `node .` to start the app. Now the bot should be listening to the slack team you integrated it with
- Invite the bot to desired channels with `/invite @<your-bot-name>` and try the sample commands
- Start with `help` in the channel the bot is listening to
