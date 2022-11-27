/*const attachment = await discordTranscripts.createTranscript(interaction.channel, {
                           fileName: `${channel.name}.html`,
                         });*/
const Discord = require("discord.js")
const transcript = require('discord-html-transcripts');
const db = require("quick.db")
module.exports = {
  name: "transcript", // Coloque o nome do comando
  description: "tenha uma visão das mensagens do chat. UwU sexo", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) { interaction.reply("Você não tem permissão")} else {
const attachment = await transcript.createTranscript(interaction.channel, {
                           fileName: `${interaction.channel.name}.html`,
                         });
    interaction.user.send({ files: [attachment] })
    }
  }
}