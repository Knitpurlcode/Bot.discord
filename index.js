const Discord = require('discord.js')

const config = require("./config.json");

const bot = new Discord.Client()

// Attach a listener function
bot.on('guildMemberAdd', console.log);

// Emit the event
bot.emit('guildMemberAdd', 'These params', 'will be logged', 'via the listener.');


// //parler à intervalle régulière
bot.on('ready', function (){
    let testChannel = bot.channels.cache.get('765147823720759298');
    console.log("testChannel="+ testChannel);
    setInterval(() => {testChannel.send("@everyone Trop mignon !!")}, 120000);
})

//Jouer à un jeu
bot.on('ready', function(){
    bot.user.setActivity('HelloKitty Online')
    .catch(console.error)
});

//Répondre à "Chaton"
bot.on('message', function (message){
    if (message.content === 'Chaton'){
        message.reply('I <3 Cats !!!')}
});


//Accueillir les gens
bot.on('guildMemberAdd', function (welcome){
    console.log()
    let theChannel = bot.channels.cache.get('765147823720759298');
    console.log('theChannel= ' + theChannel)
    theChannel.send('Olala ! Hiiiiii ! Salut ' + welcome.user.username)
});

bot.login(config.BOT_TOKEN);




