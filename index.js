const Discord = require('discord.js')

const config = require("./config.json");

const bot = new Discord.Client()

// Attach a listener function
bot.on('guildMemberAdd', console.log);

// Emit the event
bot.emit('guildMemberAdd', 'These params', 'will be logged', 'via the listener.');


// //parler à intervalle régulière
bot.on('ready', function (){
    let testChannel = bot.channels.cache.get('813344318198120508');
    console.log("testChannel="+ testChannel);
    setInterval(() => {testChannel.send("@everyone Trop mignon !!")}, 120000);
})

//Jouer à un jeu
bot.on('ready', function(){
    bot.user.setActivity('Chat perché Online')
    .catch(console.error)
});

//Répondre à "Chaton"
bot.on('message', function (message){
    if (message.content.toLowerCase().includes('chaton')){
        message.reply('I eat cats everyday !!!')}
});


//Accueillir les gens
bot.on('guildMemberAdd', function (member){
    console.log()
    let theChannel = bot.channels.cache.get('813344318198120508');
    console.log('theChannel= ' + theChannel)
    theChannel.send('Salut ' + member.user.username + 'ca boum ?')
});

bot.login(config.BOT_TOKEN);

