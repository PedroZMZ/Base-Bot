const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms");
module.exports = {
  name: "minecraft", // Coloque o nome do comando
  description: "Subcommand", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "minerar", // Coloque o nome do comando
        description: "Minere em algum lugar.", // Coloque a descrição do comando
        type: Discord.ApplicationCommandOptionType.Subcommand

    },
    {
     name: "transfirir", // Coloque o nome do comando
     description: "Transfira seus minérios em rosas.", // Coloque a descrição do comando
     type: Discord.ApplicationCommandOptionType.Subcommand,
    },
    {
        name: "shop", // Coloque o nome do comando
        description: "Compre picaretas, machados, casas e etc.", // Coloque a descrição do comando
        type: Discord.ApplicationCommandOptionType.Subcommand
    }],
  run: async (client, interaction) => {
let subcommand = interaction.options.getSubcommand();
if(subcommand === "minerar") {
let lugares = [
  `Mina`,
  `Caverna`,
  `Camada 16`
]
    let random1 = lugares[Math.floor(Math.random() * lugares.length)];
    let minérios = [
      `Carvão`,
      `Ferro`,
      `Esmeralda`,
      `Diamante`,
      `Ouro`,
      `Pedra`
    ]
    //<:lapis:1041819471125430342>
    let durabilidade = db.get(`durabilidade_picareta_${interaction.user.id}`)
    let random2 = minérios[Math.floor(Math.random() * minérios.length)];
    let carvões = Math.ceil(Math.random()*64 );
    let pedras = Math.ceil(Math.random()*64 );
    let ferros = Math.ceil(Math.random()*64 );
    let ouros = Math.ceil(Math.random()*64 );
    let diamantes = Math.ceil(Math.random()*64 );
    let esmeralda = Math.ceil(Math.random()*64 );
    let lapis = Math.ceil(Math.random()*64 );
let picareta = db.get(`picareta_${interaction.user}`)
    if(!picareta || picareta === null || picareta === false) {
      return interaction.reply("Tente novamente").then(() => {
        db.set(`picareta_${interaction.user}`, "madeira")
        db.set(`durabilidade_picareta_${interaction.user.id}`, 60)
      }) 
    } else {
let tempo = "5s"
let tempo_ms = ms(tempo)

      let embed1 = new Discord.EmbedBuilder()
    .setColor("Blue")
    .setTitle("**Mineração - Inicial**")
    .setDescription(`Para começar você tem uma picareta de ${picareta}
      Para começar a minerar clique no botão abaixo.`)
      let click = []
      let row = new Discord.ActionRowBuilder() .addComponents([
        new Discord.ButtonBuilder()
        .setLabel("Minerar!")
        .setEmoji("1040850005621231638")
        .setStyle(Discord.ButtonStyle.Primary)
        .setCustomId("minerar")
      ])
      interaction.reply({ embeds: [embed1], components: [row], ephemeral: false }).then(() => {
        let filter = i => i.customId === 'minerar' && i.user.id === interaction.user.id;

let collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
collector.on('collect', async i => {
  let embed2 = new Discord.EmbedBuilder()
  .setColor("#0044FF")
.setTitle("**Mineração - Espere**")
.setDescription(`Espere 10 segundos para minerar...`)
  interaction.editReply({ embeds: [embed2], components: [] }).then(() => {
setTimeout(() => {
 
 if(picareta === "madeira") {
  
let embed_madeira = new Discord.EmbedBuilder()
.setTitle(`**Coisas que você ganhou:**`)
.addFields(
    { name: "<:cobblestone:1040992929738657883> Pedras", value: `${pedras}`, inline: true },
    { name: "<:carvao:1040971682095046706> Carvões", value: `${carvões}`, inline: true }
  )

interaction.editReply({ embeds: [embed_madeira]}).then(() => {
  db.add(`carvões_${interaction.user.id}`, carvões)
  db.add(`pedras_${interaction.user.id}`, pedras)
  db.add(`todos_os_minérios_${interaction.user.id}`, carvões + pedras)
})
 } else if(picareta === "pedra") {
 
let embed_pedra = new Discord.EmbedBuilder()
.setTitle(`**Coisas que você ganhou:**`)
.addFields(
    { name: "<:cobblestone:1040992929738657883> Pedras", value: `${pedras}`, inline: true },
    { name: "<:carvao:1040971682095046706> Carvões", value: `${carvões}`, inline: true },
    { name: "<:ferro:1040974368697749584> Ferros", value: `${ferros}`, inline: true },
    { name: "<:lapis:1041819471125430342> Lápis Lazúli", value: `${lapis}`, inline: true }
  )

interaction.editReply({ embeds: [embed_pedra]}).then(() => {
 db.add(`carvões_${interaction.user.id}`, carvões)
  db.add(`pedras_${interaction.user.id}`, pedras)
  db.add(`ferros_${interaction.user.id}`, ferros)
  db.add(`lapis_${interaction.user.id}`, lapis)
  db.add(`todos_os_minérios_${interaction.user.id}`, carvões + pedras + ferros + lapis)
})
 } else if(picareta === "ferro") {

let embed_ferro = new Discord.EmbedBuilder()
.setTitle(`**Coisas que você ganhou:**`)
.addFields(
    { name: "<:cobblestone:1040992929738657883> Pedras", value: `${pedras}`, inline: true },
    { name: "<:carvao:1040971682095046706> Carvões", value: `${carvões}`, inline: true },
    { name: "<:ferro:1040974368697749584> Ferros", value: `${ferros}`, inline: true },
    { name: "<:lapis:1041819471125430342> Lápis Lazúli", value: `${lapis}`, inline: true },
    { name: "<:ouro:1040974370190925925> Ouros", value: `${ouro}`, inline: true },
    { name: "<:diamante:1040974367259103365> Diamantes", value: `${diamantes}`, inline: true },
    { name: "<:esmeralda:1040974373223411754> Esmeraldas", value: `${esmeralda}`, inline: true }
  )
interaction.editReply({ embeds: [embed_ferro]}).then(() => {
  db.add(`carvões_${interaction.user.id}`, carvões)
  db.add(`pedras_${interaction.user.id}`, pedras)
  db.add(`ferros_${interaction.user.id}`, ferros)
  db.add(`lapis_${interaction.user.id}`, lapis)
  db.add(`ouros_${interaction.user.id}`, ouro)
  db.add(`diamantes_${interaction.user.id}`, diamantes)
  db.add(`esmeraldas_${interaction.user.id}`, esmeralda)
  db.add(`todos_os_minérios_${interaction.user.id}`, carvões + pedras + ferros + lapis + ouro + diamantes + esmeralda)
})
 } else if(picareta === "ouro") {

let embed_ouro = new Discord.EmbedBuilder()
.setTitle(`**Coisas que você ganhou:**`)
.addFields(
    { name: "<:cobblestone:1040992929738657883> Pedras", value: `${pedras}`, inline: true },
    { name: "<:carvao:1040971682095046706> Carvões", value: `${carvões}`, inline: true }
  )

.setFooter(`Essa picareta é ruim...`)
interaction.editReply({ embeds: [embed_ouro]}).then(() => {
    db.add(`carvões_${interaction.user.id}`, carvões)
  db.add(`pedras_${interaction.user.id}`, pedras)
  db.add(`todos_os_minérios_${interaction.user.id}`, carvões + pedras)
})
 } else if(picareta === "diamante") {
let embed_diamante = new Discord.EmbedBuilder()
.setTitle(`**Coisas que você ganhou:**`)
.addFields(
    { name: "<:cobblestone:1040992929738657883> Pedras", value: `${pedras}`, inline: true },
    { name: "<:carvao:1040971682095046706> Carvões", value: `${carvões}`, inline: true },
    { name: "<:ferro:1040974368697749584> Ferros", value: `${ferros}`, inline: true },
    { name: "<:lapis:1041819471125430342> Lápis Lazúli", value: `${lapis}`, inline: true },
    { name: "<:ouro:1040974370190925925> Ouros", value: `${ouro}`, inline: true },
    { name: "<:diamante:1040974367259103365> Diamantes", value: `${diamantes}`, inline: true },
    { name: "<:esmeralda:1040974373223411754> Esmeraldas", value: `${esmeralda}`, inline: true }
  )
  interaction.editReply({ embeds: [embed_diamante]}).then(() => {
 db.add(`carvões_${interaction.user.id}`, carvões)
  db.add(`pedras_${interaction.user.id}`, pedras)
  db.add(`ferros_${interaction.user.id}`, ferros)
  db.add(`lapis_${interaction.user.id}`, lapis)
  db.add(`ouros_${interaction.user.id}`, ouro)
  db.add(`diamantes_${interaction.user.id}`, diamantes)
  db.add(`esmeraldas_${interaction.user.id}`, esmeralda)
  db.add(`todos_os_minérios_${interaction.user.id}`, carvões + pedras + ferros + lapis + ouro + diamantes + esmeralda)
})
 } else if(picareta === "netherita") {

 } else return

}, tempo_ms)
  })
});
      })
    }
} else if(subcommand === "transfirir") {
 let picareta = db.get(`picareta_${interaction.user}`)
 let todos = db.get(`todos_os_minérios_${interaction.user.id}`)
 let rosas = db.get(`rosas_${interaction.user.id}`)
    if(todos === 0 || todos === false || todos === null || todos === undefined) return interaction.reply(`Você não tem minerios use </minecraft minerar:1045515763605323806> para conseguir minérios!`)
    let embed = new Discord.EmbedBuilder()
    .setTitle("**Transfirir - Inicial**")
    .setDescription('Para transfirir seus minérios clique no botão abaixo para transfirir');
    let button = new Discord.ButtonBuilder()
    .setLabel(`Seus Minérios: ${todos}`)
    .setStyle(Discord.ButtonStyle.Secondary)
    .setCustomId("trans")
    let row = new Discord.ActionRowBuilder()
    .addComponents(button)
    let tempo = "9s"
    let tempo_ms = ms(tempo)
 interaction.reply({ components: [row], embeds: [embed] }).then(() => {

        let filter = i => i.customId === 'trans' && i.user.id === interaction.user.id;

let collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
collector.on('collect', async i => {
    setTimeout(() => {
interaction.editReply({content: `Você tinha ${todos + 0} e ficou com ${rosas + todos}`, components: [], embeds: [] }).then(() => {
        db.subtract(`todos_os_minérios_${interaction.user.id}`, todos)
        db.add(`rosas_${interaction.user.id}`, todos)
    }, tempo_ms)
    
    })
})

    })
  } else if(subcommand === "shop") {
 
   let menu = new Discord.SelectMenuBuilder()
   .setCustomId("menu_shop")
   .setPlaceholder("Escolha aqui!")
   .addOptions(
   {
    label: "Casas",
    emoji: "1042071780002631750",
    description: "Compre casas que podem te dar um booster de até 20% na mineração",
    value: "casa"
   })
   .setMaxValues(1)
     let select = interaction.values[0]
   let row = new Discord.ActionRowBuilder() .addComponents(menu)

    let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setTitle("> **🛒 Shopping**")
    .setDescription(`Olá __**${interaction.user.tag}**__ veja meus itens disponíveis no momento selecionando no menu abaixo para filtrar os itens / casas`)
            interaction.reply({ embeds: [embed], components: [row] }).then(() => {
                if(select === "casa") {
                    let embed1 = new Discord.EmbedBuilder() // 
                    .setColor("Green")
                    .setTitle("<:villager:1042071780002631750> **Casas**")
                    .addFields({ name: "**<:casa_normal:1046462515221119027> Casa normal**", value: `30000 rosas`, inline: true })
                    interaction.editReply({ embeds: [embed1] })
                }
            })
            }
   
       } 
   }