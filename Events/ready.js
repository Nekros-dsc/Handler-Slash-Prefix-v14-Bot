module.exports = {
  name: 'ready',
  async execute(bot) {
    await bot.application.commands.set(bot.arrayOfSlashCommands);

    await bot.user.setPresence({ activities: [{ name: 'By nekrxs.', type: 5 }], status: 'idle' });
  },
};