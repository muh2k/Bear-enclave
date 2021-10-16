 const client = require("../index.js")
const wait = require('util').promisify(setTimeout);
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  //DPS ROLE
  if(interaction.values == 'DPS') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("897913206968832021")) {
      await member.roles.add('897911444664877157')
      return interaction.member.send(`We Have Added The Melee DPS Role`)
    } else if(member.roles.cache.has("897911444664877157")) {
      await member.roles.remove('897911444664877157')
      return interaction.member.send(`We Have Removed the Melee DPS Role`)
    }
  }
  //Healer 
  if(interaction.values == 'Healer') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("897913206968832021")) {
      await member.roles.add('897911350087516281')
      return interaction.member.send(`We Have Added The Healer Role`)
    } else if(member.roles.cache.has("897911350087516281")) {
      await member.roles.remove('897911350087516281')
      return interaction.member.send(`We Have Removed The Healer Role`)
    }
  }
   // Paladin
  if(interaction.values == 'Paladin') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("897913206968832021")) {
      await member.roles.add('897911391204307024')
      return interaction.member.send(`We Have Added The Paladin Role`)
    } else if(member.roles.cache.has("897911391204307024")) {
      await member.roles.remove('897911391204307024')
      return interaction.member.send(`We Have Removed The Paladin Role`)
    }
  }
     // Tank
     if(interaction.values == 'Tank') {
      await interaction.deferUpdate();
      if(!member.roles.cache.has("897913206968832021")) {
        await member.roles.add('898886583275651093')
        return interaction.member.send(`We Have Added The Tank Role`)
      } else if(member.roles.cache.has("898886583275651093")) {
        await member.roles.remove('898886583275651093')
        return interaction.member.send(`We Have Removed The Tank Role`)
      }
    }
         // Ranged DPS
         if(interaction.values == 'Ranged DPS') {
          await interaction.deferUpdate();
          if(!member.roles.cache.has("897913206968832021")) {
            await member.roles.add('898886722274865162')
            return interaction.member.send(`We Have Added The Ranged DPS Role`)
          } else if(member.roles.cache.has("898886722274865162")) {
            await member.roles.remove('898886722274865162')
            return interaction.member.send(`We Have Removed The Ranged DPS Role`)
          }
        }
                 // elemantal Ranged DPS
                 if(interaction.values == 'ele Ranged DPS') {
                  await interaction.deferUpdate();
                  if(!member.roles.cache.has("897913206968832021")) {
                    await member.roles.add('898889328019791932')
                    return interaction.member.send(`We Have Added The Elemental Ranged DPS Role`)
                  } else if(member.roles.cache.has("898889328019791932")) {
                    await member.roles.remove('898889328019791932')
                    return interaction.member.send(`We Have Removed The Elemental Ranged DPS Role`)
                  }
                }
}) 