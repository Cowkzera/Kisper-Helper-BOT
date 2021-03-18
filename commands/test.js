const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  if(message.author.id !== "400698555893022720") return message.reply(`Você não pode usar esse comando.`)

		if (args[0] === "bemvindo") {

			client.emit("guildMemberAdd", message.member);
			return message.reply("Teste executado")

		} else if(args[0] === "saida"){

			client.emit("guildMemberRemove", message.member);
			return message.reply("Teste executado")

    } else {

      message.reply("Me fale `bemvindo` ou `saida`")

    }
}