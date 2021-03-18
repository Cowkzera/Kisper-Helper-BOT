const Discord = require('discord.js');

module.exports.run = async (client, message) => {
    message.delete()

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
