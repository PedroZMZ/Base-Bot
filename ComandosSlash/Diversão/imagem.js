   //interaction.options.getSubcommand()
const jimp = require( "jimp" )
const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "imagem", // Coloque o nome do comando
  description: "Subcommand", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
 options: [
 {
name: "laranjo",
description: "oque Você Falar, o laranjo vai repetir em uma imagem",
type: Discord.ApplicationCommandOptionType.Subcommand,
options: [
{
            name: "texto",
            type: Discord.ApplicationCommandOptionType.String,
            description: "Digite o que o laranjo irá dizer.",
            required: true,
},
  ]
 },
 {
 name: "stonks",
 description: 'Stonks',
 type: Discord.ApplicationCommandOptionType.Subcommand,
 options: [
 {
            name: "texto",
            type: Discord.ApplicationCommandOptionType.String,
            description: "Digite o que o laranjo irá dizer.",
            required: true,
       
 }
 ]
 },
 {
   name: "bolsonarotv",
    description: "bolsonaro vai replicar oque você deseja dizer na tv",
    type: Discord.ApplicationCommandOptionType.Subcommand,
     options: [
 {
            name: "texto",
            type: Discord.ApplicationCommandOptionType.String,
            description: "Digite o que o laranjo irá dizer.",
            required: true,
       
 }
 ]
 }
 ],
  run: async (client, interaction) => {
let opc = interaction.options.getSubcommand()
if(opc === "laranjo") {
  let img = jimp.read("https://cdn.dicionariopopular.com/imagens/laranjo-meme-cke.jpg");        
         let texto = interaction.options.getString("texto")
            img.then(image => {

               jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(font => {
                    image.resize(885, 494)
                    image.print(font, 1, 1, texto, 7000)

                    image.getBuffer(jimp.MIME_PNG, (err, i) => {
                        interaction.reply({ content: `${interaction.user}`, files: [{ attachment: i, name: "laranjo.png" }] });
                    })

                })

            })
          } else if(opc === "stonks") {
            let img = jimp.read("https://s2.glbimg.com/mBdu7y0sX_cbKnieGIleTst1ADY=/0x0:825x619/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/u/n/83nNsCQ8SWRrziGD1mAw/stonks-meme.png");
              let texto = interaction.options.getString("texto")
            img.then(image => {

               jimp.loadFont(jimp.FONT_SANS_64_WHITE).then(font => {
                    image.resize(885, 494)
                    image.print(font, 1, 1, texto, 7000)

                    image.getBuffer(jimp.MIME_PNG, (err, i) => {
                        interaction.reply({ content: `${interaction.user}`, files: [{ attachment: i, name: "stonks.png" }] });
                    })

                })

            })
          } else if(opc === "bolsonarotv") {
             let img = jimp.read("https://cdn.discordapp.com/attachments/1041017568632246305/1042805961133391872/bolsonaro_tv.png");
              let texto = interaction.options.getString("texto")
            img.then(image => {

               jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(font => {
                    image.resize(885, 494)
                    image.print(font, 300, 120, texto, 7000)

                    image.getBuffer(jimp.MIME_PNG, (err, i) => {
                        interaction.reply({ content: `${interaction.user}`, files: [{ attachment: i, name: "bolsonaro_tv.png" }] });
                    })

                })

            })
          }

  }
}