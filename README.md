# Broken-News-Bot

Broken News is a Discord Bot that delivers relevant, breaking news to discord servers. Broken News is an easy to use bot that reads text commands from users to report news that broke less than 24 hours ago. Users can also specify their requests by requesting news from a certain category, or searching for a key word in articles.

## Note

When adding the bot to your server, you will be prompted with a message saying the bot should be granted administrator privileges in your server. I can assure you the bot has no malicious intent and will not alter any server settings, server roles, or server users. The bot simply sends messages to the server channel. If you are still unsure, you can read the full source code in the `src` folder.

## Installation

1. You must first have a Discord account and create a Discord server or be a privileged member in one.
2. Add the Broken News Bot to your server using this [link](https://discord.com/api/oauth2/authorize?client_id=1146264445144797326&permissions=8&scope=bot)
3. Interact with the bot.

## Usage

Broken News aims to deliver a personalized news experience to all Discord users by allowing them to specify their news requests. Users can query for news from a certain category or even search for news articles with keywords contained in them. Below are all the commands:

### General

- `$help`: Broken News will provide users with some guidance

## About

**Front End**:  

- Broken News utilizes the Discord.js node client library to make calls to the Discord API. This allows users to interface with the Broken News Bot in their own Discord servers

**Back End**:  

- Broken News uses the NewsAPI node client library to make HTTP requests to fetch relevant News articles. The NewsAPI node client library simplifies the process of taking user input and fetching news articles specified by the user.

## Version Logs

- v0.1.0 - Created Discord Bot Client  
- v0.2.0 - Created a function to fetch general news  
- v0.3.0 - Exported function call to bot client  
- v1.0.0 - Broken News first release. Broken News now responds with 5 randomized news articles on general U.S. news. Broken News must be run locally.
