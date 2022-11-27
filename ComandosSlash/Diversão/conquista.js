const Discord = require('discord.js')

module.exports = {
    name: 'conquista-minecraft',
    description: '[🧀 Utilidades] Crie uma conquista do minecraft',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: `texto`,
            type: Discord.ApplicationCommandOptionType.String,
            description: `Digite o texto que irá aparecer.`,
            required: true,
        },
    ],

    run: async (client, interaction) => {
        if (!interaction.guild) {
            return interaction.reply({
                ephemeral: true,
                content: `<:erro:1000923122008084543> *| ${interaction.user.tag}, Este comando só pode ser usado em um servidor :) *`
            })
        } else {
            let texto = interaction.options.getString('texto').replaceAll(' ', '%20')
            let conquista = `https://minecraftskinstealer.com/achievement/1/Conquista%20desbloqueada!/${texto}`

            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setImage(conquista)
                        .setColor("Random")
                ]
            })
        }
    }
}