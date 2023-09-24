const express = require("express");

const server = express();

server.all("/", (req, res) => {
    res.send("Bot Online")
});

function BotHosting() {
    server.listen(3000, () => {
        console.log("Server Ready")
    });
}

module.exports = {
    BotHosting,
}