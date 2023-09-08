const {Client, Intents} = require('discord.js');
const DiscToken  = 'TOKEN';
const prefix = "$";

const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === "ping") {
            msg.channel.send("pong")
        }
    }
    
});

client.login(DiscToken);
