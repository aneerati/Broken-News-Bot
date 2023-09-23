const {Client, Intents} = require('discord.js');
const DiscToken  = 'TOKEN';
const prefix = "$";

const { fetchNews, fetchCategory } = require('./news');

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

        if (command === "help") {
            msg.channel.send("I deliver relevant news articles direclty to your server. To get started type \"$news\" and I will send you some general news articles. For all the commands visit: https://github.com/aneerati/Broken-News-Bot#usage");
        }
        else if (command === "news" || command === "general") {
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
        else if (command === "business") {
            fetchCategory("business")
                .then(allArticlesString => {
                    console.log(allArticlesString);
                    msg.channel.send(allArticlesString);
                })
                .catch(error => {
                    console.error("An error occurred:", error);
                    msg.channel.send("Sorry, no news");
                });
        }
        else if (command === "entertainment") {
            fetchCategory("entertainment")
            .then(allArticlesString => {
                console.log(allArticlesString);
                msg.channel.send(allArticlesString);
            })
            .catch(error => {
                console.error("An error occurred:", error);
                msg.channel.send("Sorry, no news");
            }); 
        }
        else if (command === "health") {
            fetchCategory("health")
            .then(allArticlesString => {
                console.log(allArticlesString);
                msg.channel.send(allArticlesString);
            })
            .catch(error => {
                console.error("An error occurred:", error);
                msg.channel.send("Sorry, no news");
            }); 
        }
        else if (command === "science") {
            fetchCategory("science")
            .then(allArticlesString => {
                console.log(allArticlesString);
                msg.channel.send(allArticlesString);
            })
            .catch(error => {
                console.error("An error occurred:", error);
                msg.channel.send("Sorry, no news");
            }); 
        }
        else if (command === "sports") {
            fetchCategory("sports")
            .then(allArticlesString => {
                console.log(allArticlesString);
                msg.channel.send(allArticlesString);
            })
            .catch(error => {
                console.error("An error occurred:", error);
                msg.channel.send("Sorry, no news");
            }); 
        }
        else if (command === "tech") {
            fetchCategory("technology")
            .then(allArticlesString => {
                console.log(allArticlesString);
                msg.channel.send(allArticlesString);
            })
            .catch(error => {
                console.error("An error occurred:", error);
                msg.channel.send("Sorry, no news");
            }); 
        }
        
    }
    
});

client.login(DiscToken);