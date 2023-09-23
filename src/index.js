const {Client, Intents} = require('discord.js');
const DiscToken  = 'MTE0NjI2NDQ0NTE0NDc5NzMyNg.GI389D.2JGWzZ98Awuj2jNNFpbKCeFroASNkJSLT4OyfQ';
const prefix = "$";

const { fetchNews } = require('./news');

// Bot's permissions to interact with messages
const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]});

// Create Bot client
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Trigger for Bot to text in server
client.on("message", msg => {
    if (msg.content.startsWith(prefix)) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === "news") {
            fetchNews()
                .then(allArticlesString => {
                    console.log(allArticlesString);
                    msg.channel.send(allArticlesString);
                })
                .catch(error => {
                    console.error("An error occurred:", error);
                    msg.channel.send("Sorry, no news");
                });
        }
        if (command === "hello") {
            msg.channel.send("Hello!. I can deliver you news!");
        }
    }
    
});

client.login(DiscToken);