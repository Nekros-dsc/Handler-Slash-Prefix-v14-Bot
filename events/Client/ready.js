const client = require("../../index.js");
const config = require("../../config.json");
const ms = require("ms");

client.once('ready', async () => {
  console.log(`[CLIENT] ${client.user.tag} est prêt. Il surveille ${client.guilds.cache.size} servers and ${client.users.cache.size} uses.`);



  client.user.setActivity(`${config.prefix}help`)
});