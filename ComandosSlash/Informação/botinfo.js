const { EmbedBuilder, ActionRowBuilder, TextInputStyle, TextInputBuilder, ButtonBuilder, ButtonStyle  } = require('discord.js')
const Discord = require('discord.js');
const { durationTime } = require('util-stunks')  
const moment = require("moment")
require("moment-duration-format")


module.exports = {
    name: "botinfo",
    description: "Informações do bot",
    type: Discord.ApplicationCommandOptionType.ChatInput,
dm: true,



    run: async(client, interaction) => {

        
        const ping = Math.round(client.ws.ping)
      const gateway = Date.now() - interaction.createdTimestamp 
      let membros = client.users.cache.size;
      let servidor = client.guilds.cache.size;
      const up = moment.duration(client.uptime).format(" D [Dias], H [Horas], m [Minutos]");
      let canais = client.channels.cache.size;


      const server = interaction.guild.members.cache.get(client.user.id)


        let botinfoembed = new EmbedBuilder()
         .setTitle(`${client.user.username}`)
         .setDescription(`*Olá, me chamo ${client.user.username}! e eu sou um bot sobre moderação, eu ajudo você e poupo o seu trabalho como staff. Abaixo há algumas informações sobre mim.*`)
         .setColor('Red')
         .setThumbnail(`${client.user.displayAvatarURL()}`)
         .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}`})
         .addFields(
            {
                
                    name: '👑 Nome do criador:',
                    value: `\`\`\`Menduin#7033\`\`\``,
                    inline: true,
                    
            
            },
            {
                name: '🌐 Ping:',
                value: `\`\`\`Ping: ${ping}\`\`\``,
                inline: true

            },
            {
                name: '🆔 - ID:',
                value: `\`\`\`${client.user.id}\`\`\``,
                inline: false,
                
            },
            {
                name: '👾 Linguagem de programação que eu fui criado:',
                value: `\`\`\`Node.Js\`\`\``,
                inline: false,
                
            },
            {
                name: '📚 Livraria',
                value: `\`\`\`Discord.js v14\`\`\``
            },
            {
                name: '📅 - Entrou no Servidor:',
                value: `<t:${Math.ceil(server.joinedTimestamp / 1000)}:F>`,
                inline: false,
            },
            {
                name: `📆 - Criado:`,
                value: `<t:${parseInt(client.user.createdTimestamp / 1000)}>`,
                inline: false,
            },
            {
                name: '⏱ - Tempo no Discord:',
                value: `\`\`\`${durationTime(client.user.createdTimestamp, 
                { removeMs: true, displayAtMax: 3 })}\`\`\``,
             },
             {
                name: '🤖 Me adicione:',
                value: `||https://discord.com/api/oauth2/authorize?client_id=${client.id}&permissions=0&scope=bot%20applications.commands||`
             },
             {
                name: '🔌 Para saber todos os meus comandos:',
                value: `\`\`\`Digite /help\`\`\``
             },
             {
                name: '👋 Membros do seu servidor:',
                value: `\`\`\`Membros: ${membros}\`\`\``
             },
             {
                name: '🕗 Uptime:',
                value: `\`\`\`online a ${up}\`\`\``
             },
             {
                name: `💻 Ram:`,
                value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB'}\`\`\``
             },
            
               
         )

         const selectBOT = new ActionRowBuilder()
          .addComponents(
            new Discord.SelectMenuBuilder()
            .setCustomId('select2')
            .setPlaceholder('⚙️ Opções')
            .addOptions(
                {
                    label: ' - Cargos',
                    description: 'Clique aqui para ver os cargos do BOT.',
                    emoji: '🚀',
                    value: 'cargos',
                },
                

                
            ),
            
          )

         

         interaction.reply({  content: `${interaction.user}`, embeds: [botinfoembed], components: [selectBOT] })
    }
}