# Broken-News-Bot

Broken News is a Discord Bot that delivers relevant, breaking news to discord servers. Broken News is an easy to use bot that reads text commands from users to report news that broke less than 24 hours ago. Users can also specify their requests by requesting news from a certain category, or searching for a key word in articles.

## Note

When adding the bot to your server, you will be prompted with a message saying the bot should be granted administrator privileges in your server. I can assure you the bot has no malicious intent and will not alter any server settings, server roles, or server users. The bot simply sends messages to the server channel. If you are still unsure, you can read the full source code in the `src` folder.

## About

**Front End**:

- Broken News utilizes the Discord.js node client library to make calls to the Discord API. This allows users to interface with the Broken News Bot in their own Discord servers

**Back End**:

- Broken News uses the NewsAPI node client library to make HTTP requests to fetch relevant News articles. The NewsAPI node client library simplifies the process of taking user input and fetching news articles specified by the user.

## Version Logs

v0.1.0 - Created Discord Bot Client

v0.2.0 - Created a function to fetch general news

v0.3.0 - Exported function call to bot client
