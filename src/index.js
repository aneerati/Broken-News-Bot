const {Client, Intents} = require('discord.js');
const DiscToken  = 'TOKEN';

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () => {
    console.log("READY!");
})

client.login(DiscToken);