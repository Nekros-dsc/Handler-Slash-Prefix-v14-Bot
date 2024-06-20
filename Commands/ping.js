const Discord = require('discord.js');

exports.help = {
  name: 'ping',
  aliases: ['speed', 'latency', 'latence'],
  description: 'Displays Discord API latency.',
  use: 'ping',
}
exports.run = async (bot, message, args, config) => {
    const embed = new Discord.EmbedBuilder()
    .setTitle('`🪄` ▸ Bot Latency')
    .setDescription(`> *Discord Api: \`${bot.ws.ping}\` ms.*`)
    .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setColor(config.color)
    .setTimestamp();
    return message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
}