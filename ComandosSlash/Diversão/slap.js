const Discord = require("discord.js")

module.exports = {
    name: 'slap',
    description: '[😹 » Diversão] Dê um tapa em alguém',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'user',
            description: 'Selecione um usuário',
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    run: async (client, interaction, args) => {
        let usuario = interaction.options.getUser('usuário')

        var lista = [
            'https://i.imgur.com/9GxTsgl.gif',
            'https://i.imgur.com/mT4VjD6.gif',
            'https://i.imgur.com/1FyrbwB.gif',
            'https://i.imgur.com/w66ZqGR.gif'
        ];

        var lista1 = [
            'https://i.imgur.com/9GxTsgl.gif',
            'https://i.imgur.com/mT4VjD6.gif',
            'https://i.imgur.com/1FyrbwB.gif',
            'https://i.imgur.com/w66ZqGR.gif'
        ];

        var r1 =  lista[Math.floor(Math.random() * lista.length)];
        var r2 = lista1[Math.floor(Math.random() * lista1.length)];
    

        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**${interaction.user} Deu um tapa em ${user}.**`)
            .setImage(`${r1}`)
            .setColor('Random')
            .setTimestamp()
            .setFooter({ text: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), })

            let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("1")
                .setLabel("Retribuir")
                .setStyle(Discord.ButtonStyle.Secondary)
            );
            let embed1 = new Discord.EmbedBuilder()
            .setDescription(`**${user} Retribuiu o tapa de ${interaction.user}.**`)
            .setImage(`${r2}`)
            .setColor('Random')
            .setTimestamp()
            .setFooter({ text: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), })
           
            interaction.reply({ embeds: [embed], components: [botao] }).then(() => {
                const filter = i => i.customId === '1' && i.user.id === user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });
    
                collector.on('collect', async i => {
                    if (i.customId === '1') {
                        i.reply({ embeds: [embed1] })
                    }
                });
            })
    }
}