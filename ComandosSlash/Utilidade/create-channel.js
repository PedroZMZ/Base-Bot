const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "create", // Coloque o nome do comando
  description: "Subcommand", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "channel",
      description: "crie um canal",
    type: Discord.ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "nome",
          description: "Qual será o nome do canal",
          type: Discord.ApplicationCommandOptionType.String,
          required: true
        }
      ]
    }
  ],
  run: async (client, interaction) => {
    let guild = interaction.guild
let String = interaction.options.getString("nome")
    interaction.reply(`Criei!`).then(() => {
      guild.channels.create({
        name: `${String}`,
                        type: 0, 
      })
    })

  }
}