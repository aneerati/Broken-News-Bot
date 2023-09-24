# Broken-News-Bot

Broken News is a Discord Bot that delivers relevant, breaking news to discord servers. Broken News is an easy to use bot that reads text commands from users to report news that broke less than 24 hours ago. Users can also specify their requests by requesting news from a certain category, or searching for a key word in articles.

## Note

When adding the bot to your server, you will be prompted with a message saying the bot should be granted administrator privileges in your server. Broken News has no malicious intent and will not alter any server settings, server roles, or server users. The bot simply sends messages to the server channel it receives a request from. If you are still unsure, you can read the full source code in the `src` folder.

## Files

- `src`: Contains are source code for Broken News
- `src/index.js`: Contains bot client code, which is where all the bot actions take place
- `src/news.js`: Contains newapi code, allowing the bot to make HTTP requests to receive news articles
- `src/server.js`: Contains express code, which creates a web server for Broken News to be hosted on

## Installation

1. You must first have a Discord account and create a Discord server or be a privileged member in one.
2. Add the Broken News Bot to your server using this [link](https://discord.com/api/oauth2/authorize?client_id=1146264445144797326&permissions=8&scope=bot)
3. Interact with the bot.

## Usage

Broken News aims to deliver a personalized news experience to all Discord users by allowing them to specify their news requests. Users can query for news from a certain category or even search for news articles with keywords contained in them. Users simply need to type in one of the following commands below, and Broken News will reply. Below are all the commands:

### General

- `$help`: Broken News will provide users with some guidance

### Categories

- `$news`: Broken News responds with general U.S. news (same as `$general`)
- `$general`: Broken News responds with general U.S. news (same as `$news`)
- `$business`: Broken News responds with U.S. news relating to the business field
- `$entertainment`: Broken News responds with U.S. new relating to the entertainment industry
- `$health`: Broken News delivers health related news from U.S. sources
- `$science`: Broken News displays U.S. science based news
- `$sports`: Broken News delivers the latest sports news
- `$tech`: Broken News responds with all the breaking news for technology in the U.S.

### Keyword

Broken News also allows users to search for news articles containing a key word that they specify:

- `$q[keyword]`: Broken news delivers news containing a key word

## About

**Front End**:  

- Broken News utilizes the Discord.js node client library to make calls to the Discord API. This allows users to interface with the Broken News Bot in their own Discord servers.

**Back End**:  

- Broken News uses the NewsAPI node client library to make HTTP requests to fetch relevant News articles. The NewsAPI node client library simplifies the process of taking user input and fetching news articles specified by the user.

- Broken News is hosted on a web server using express.js. This server is run on Replit's cloud environment, allowing several users to use Broken News concurrently. Additionally, to keep the Replit web server running, UptimeRobot is used to ping the server every 5 minutes to keep it up and running.