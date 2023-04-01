const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const config = require("./config.json");
const express = require('express');


// Creating a new client:
const client = new Client({
    intents: 32767
});



// Collections and handler:
client.commands = new Collection();
client.slash_commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.categories = fs.readdirSync("./commands");

// Exporting the modules:
module.exports = client;

// Handler:
["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// Anticrash handler:
process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});

// Login to the bot:
const AUTH = process.env.TOKEN || config.client.TOKEN;
if (!AUTH) {
    console.warn("[WARN] You need to provide a Bot token!").then(async () => process.exit(1));
} else {
    client.login(AUTH).catch(() => console.log("[WARN] It seems like the token is invalid, please recheck it. If the this error stills showing, then enable the 3 Gateaway Intents."));
}