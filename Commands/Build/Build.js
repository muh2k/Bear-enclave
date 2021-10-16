
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'gamerole',
  description: "get new world build roles",
  run: async(client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    const embed = new MessageEmbed()
    .setTitle("Build roles Roles")
    .setDescription("Get Or Remove Roles By Clicking On Options Given In menu, After Reclicking The Role Will Be Removed, The Bot Will Send DM Message That You Have Added/Removed Roles")
    
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('Buildroles')
      .setPlaceholder('Select To Add/Remove Roles')
      .addOptions([
        {
          label: 'Healer Build Role',
          description: "Please heal [Focus]",
          value: 'Healer',
        },
        {
          label: 'Melee DPS Build',
          description: "Does high amount of damage in melee attacks [Strength, Constitution]",
          value: 'DPS',
        },
        {
          label: 'Paladin Build',
          description: "Tanky mega chad [Constitution, Focus]",
          value: 'Paladin',
        },
        {
          label: 'Tank Build',
          description: "tanky mega chad with CC [Constitution]",
          value: 'Tank',
        },
        {
          label: 'Physical Ranged DPS Build',
          description: "Just hit please😢",
          value: 'Ranged DPS',
        },
        {
          label: 'Elemental Ranged DPS Build',
          description: "Lots of fire",
          value: 'ele Ranged DPS',
        },
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row] });
  }
}
