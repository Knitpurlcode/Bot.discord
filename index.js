// Import the discord.js module
const Discord = require('discord.js');

// Token storage
const config = require("./config.json");

// Create an instance of a Discord client
const bot = new Discord.Client()

// Attach a listener function
bot.on('guildMemberAdd', console.log);

// Emit the event
bot.emit('guildMemberAdd', 'These params', 'will be logged', 'via the listener.');


/**
 * A bot that welcomes new guild members when they join
 */

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
bot.on('ready', () => {
  console.log('I am ready!');
});


//parler à intervalle régulière
bot.on('ready', function (){
    let testChannel = bot.channels.cache.get('813344321083539469');
    console.log("testChannel="+ testChannel);
    setInterval(() => {testChannel.send("@everyone Salut !")}, 60000);
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


// Accueillir les gens
bot.on('guildMemberAdd', function (member){
    let theChannel = bot.channels.cache.get('813344321083539469');
    console.log('theChannel= ' + theChannel)
    theChannel.send('Salut ' + member.user.username + 'ca boum ?')
});



// Log the bot in using the token from https://discord.com/developers/applications
bot.login(config.BOT_TOKEN);

