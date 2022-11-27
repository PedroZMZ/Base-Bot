const Discord = require("discord.js")

module.exports = {
    name: 'hug',
    description: '[😹 » Diversão] Abraçe um user',
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
        let usuario = interaction.options.getUser('usuário') || interaction.user;

        var lista1 = [

            'https://imgur.com/RgfGLNk.gif',

            'https://i.imgur.com/r9aU2xv.gif',

            'https://i.imgur.com/wOmoeF8.gif',

            'https://i.imgur.com/nrdYNtL.gif',

            'https://imgur.com/82xVqUg.gif'

        ];



        let lista2 = [

            'https://imgur.com/c3WzMZu.gif',

            'https://imgur.com/BPLqSJC.gif',

            'https://imgur.com/ntqYLGl.gif',

            'https://imgur.com/v47M1S4.gif',

            'https://imgur.com/6qYOUQF.gif'

        ];
        var r1 = lista1[Math.floor(Math.random() * lista1.length)];
        var r2 = lista2[Math.floor(Math.random() * lista2.length)];

        let userr = interaction.options.getUser("user");
        let user = interaction.guild.members.cache.get(userr.id)

        let embed = new Discord.EmbedBuilder()
            .setDescription(`**${interaction.user} Deu um Abraço em ${user}.**`)
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
            .setDescription(`**${user} Retribuiu o Abraço de ${interaction.user}.**`)
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