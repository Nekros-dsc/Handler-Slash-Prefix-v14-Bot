const fs = require('fs');

module.exports = bot => {
  const arrayOfSlashCommands = [];
  const commandFiles = fs.readdirSync('./SlashCommands/').filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const props = require(`../SlashCommands/${file}`);
    bot.slashCommands.set(props.name, props);
    arrayOfSlashCommands.push(props);
    bot.arrayOfSlashCommands = arrayOfSlashCommands
      //console.log(`[SLASH-COMMAND] ▸ ${file}`);
  }
    const commandSubFolders = fs.readdirSync('./SlashCommands/').filter((folder) => !folder.endsWith('.js'));

  for (const folder of commandSubFolders) {
    const subCommandFiles = fs.readdirSync(`./SlashCommands/${folder}/`).filter((file) => file.endsWith('.js'));

  for (const file of subCommandFiles) {
    const props = require(`../SlashCommands/${folder}/${file}`);
    bot.slashCommands.set(props.name, props);
    arrayOfSlashCommands.push(props);
    bot.arrayOfSlashCommands = arrayOfSlashCommands
      //console.log(`[SLASH-COMMAND] ▸ ${file} - ${folder}`);
    }
  }
};