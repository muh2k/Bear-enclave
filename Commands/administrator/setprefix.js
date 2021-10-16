const {Collection, Client, Discord, Permissions} = require('discord.js');
const db = require('quick.db')

module.exports = {
    name : 'setprefix',
    category : 'administrator',

    description : 'Used by [old prefix | name | new prefix]',
    run : async(client, message, args, prefix) => {
        try {
        if (!message.member.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)) return message.channel.send("**You Do Not Have The Secret! - [error.404 secret not found]**");

    if(!message.content.startsWith(prefix)) return; //add this line to every commands


    const newprefix = args[0]
    if(!newprefix) return message.reply('Enter New Prefix')
    if(newprefix.length > 5) return message.channel.send("Invalid Prefix, Prefix Is Too Long")
    message.channel.send(`New Prefix Set To **${newprefix}**`)
    db.set(`prefix_${message.guild.id}`, newprefix);
} catch (e) {
    return message.channel.send(`**${e.message}**`)
}
 }
}
const {MessageEmbed, Collection, Client, Discord, Permissions} = require('discord.js');
const db = require('quick.db')

module.exports = {
    name : 'setprefix',
    category : 'administrator',

    description : 'Used by [old prefix | name | new prefix]',
    run : async(client, message, args, prefix) => {
        try {
        if (!message.member.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)) return message.channel.send("**You Do Not Have The Secret! - [error.404 secret not found]**");

    if(!message.content.startsWith(prefix)) return; //add this line to every commands


    const newprefix = args[0]
    if(!newprefix) return message.reply('Enter New Prefix')
    if(newprefix.length > 5) return message.channel.send("Invalid Prefix, Prefix Is Too Long")
    message.channel.send(`New Prefix Set To **${newprefix}**`)
    db.set(`prefix_${message.guild.id}`, newprefix);
} catch (e) {
    return message.channel.send(`**${e.message}**`)
}
 }
}
