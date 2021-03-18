const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const counter = require('./memberCounter.js')


client.on('message', message => {

if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){

    let owner = "400698555893022720"

    const owner2 = client.users.cache.get(owner).username

    const embed = new Discord.MessageEmbed()
        .setTitle(`Informações do bot`)
        .setDescription(`\`Informações Gerais\`\n> O Kisper Helper foi feito para ajuda o meu Criador em seus servidores oficiais.\n\n\`Dev:\`\n> ${owner2}\n\n\`Prefix:\`\n> ++\n\n`)
        .setFooter("© Todos os Direitos Reservados!")
        .setTimestamp()
        .setColor('RANDOM')
        message.channel.send(embed)
}
  
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
    return message.reply("Ops! Eu ainda não conheço esse comando!");

  }

  
  
});

client.on("guildMemberAdd", async (member) => { 
  
  var footer = [
    'Espero que se divirta em nosso servidor!!',
    'Seja bem-vindo!!',
    'Leia as regras para não ter dor de cabeça no futuro!!'

  ]

  var footerlist = footer[Math.floor(Math.random() * footer.length)];

  let channel = await client.channels.cache.get("821926598936232011");

      let embed = await new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<:SagiriShy:821970272235421706> Bem-vindo á Cowk Store `)
      .setImage("https://cdn.discordapp.com/attachments/785426058291052555/789389901320814592/original_1.gif")
      .setDescription(`Estamos muito felizes com sua presença, não se esqueça de ler as informações em <#821933823704956999> para não haver duvidas`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter(footerlist)
      .setTimestamp();

    channel.send(embed);

});

client.on("guildMemberRemove", async (member) => { 

var footer = [
  'Tomara que algum dia ele volte :/',
  'Espero que ele volte :/',
  'Saiu e nem falou tchau :/',
]

  var footerlist = footer[Math.floor(Math.random() * footer.length)];

  let channel = await client.channels.cache.get("821968165025611787");

      let embed = await new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`**${member.user.username}**, saiu do servidor! <:RL_bad_raivosa:821971209494855740>`)
      .setImage("https://cdn.discordapp.com/attachments/785426058291052555/789389117749198868/3c691659f01aba24f6a6deed24305989.gif")
      .setDescription(`Espero que um dia volte...`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter(footerlist)
      .setTimestamp();

    channel.send(embed);

});

client.on("ready",async () => {
  counter(client)

  client.user.setActivity(`👑 | Bot de suporte para servidores oficiais do Kisper/Cowk`, {
  type: "PLAYING"
});

console.log("Estou online")
});


client.login(config.token);