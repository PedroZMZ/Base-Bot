const Discord = require("discord.js")

const db = require("quick.db")

const ms = require("ms")
const cooldowns = {}

module.exports =  {
    name: "daily",
    description: "Resgate seu dinheiro diário.",
    type: Discord.ApplicationCommandType.ChatInput,
    
    run: async (client, interaction, args) => {

        if(!cooldowns[interaction.user.id])cooldowns[interaction.user.id]={ lastCmd:null};let ultimoCmd=cooldowns[interaction.user.id].lastCmd;
        let timeout = ms("1 day") // Coloque em ms o tempo
        if(ultimoCmd!==null&&timeout-(Date.now()-ultimoCmd)>0){let time=ms(timeout-(Date.now()-ultimoCmd));let resta=[time.seconds,'segundos'];
        if(resta[0]==0)resta=['alguns','millisegundos'];if(resta[0]==1)resta=[time.seconds,'segundo'];

        interaction.reply({ content: `Espere \`${time}\` para poder resgatar seu daily novamente!`, ephemeral:true});return;}else{cooldowns[interaction.user.id].lastCmd=Date.now()};
      let quantia = Math.ceil(Math.random()*10000 );
        db.add(`rosas2_${interaction.user.id}`, quantia);
      let emoji = "<:rosa:1040969090585612298>"
let embed = new Discord.EmbedBuilder()
      .setColor("#F99DBC")
      .setTitle("**Daily**")
      .setDescription(`> Olá ${interaction.user}
      Você ganhou ${quantia} de rosas ${emoji}`)
        

        interaction.reply({ embeds: [embed], content: `${interaction.user}`})


    }
}