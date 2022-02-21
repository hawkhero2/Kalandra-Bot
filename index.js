// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');


// Create a new client instance
const client = new Client({ 
    intents:[
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES , 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

//.env integration
const dotenv = require('dotenv');
dotenv.config();

//bot token
const token = process.env.TOKEN;

//Discord Ids saved into consts
const messageID='944644957975748658';
const emoji_Y=':regional_indicator_y:';
const emoji_N=':regional_indicator_n:';
const kadan_role='944655004441128980';
const not_kadan_role='943437093009498162';


//message to be posted in the channel. 
// const role_assign_message = 'If you are from Kadan server react to <process.env.Y_EMOJI_ID>, if you are not from Kadan react to <process.env.N_EMOJI_ID> ';


//When the client is ready, run this code (only once)
client.once('ready', ()=> {
    console.log('Ready');
});

client.on('messageReactionAdd', async(reaction, user)=>{
    await reaction.fetch();
    console.log(reaction);

    if (reaction.emoji.name === emoji_Y) {
         reaction.message.guild.members.cache.get(user.id).roles.add(kadan_role);
         reaction.message.guild.members.cache.get(user.id).roles.remove(not_kadan_role);
        console.log('kadan role assigned and not kadan role removed');
    }
    
    if (reaction.emoji.name === emoji_N) {
         reaction.message.guild.members.cache.get(user.id).roles.add(not_kadan_role);
         reaction.message.guild.members.cache.get(user.id).roles.remove(kadan_role);
        console.log('not kadan role assigned and kadan role removed');
    }
    


    // if(!reaction.message.id(messageID)){
    //     return
    // }
    // else if(reaction.message.id(messageID)){
        
    //     if (reaction.emoji.id(emoji_Y)) {
    //         reaction.message.guild.members.cache.get(user.id).roles.add(kadan_role);
    //         reaction.message.guild.members.cache.get(user.id).roles.remove(not_kadan_role);
    //         console.log('kadan role assigned and not kadan role removed');
    //     }
    //     if (reaction.emoji.id(emoji_N)) {
    //         reaction.message.guild.members.cache.get(user.id).roles.add(not_kadan_role);
    //         reaction.message.guild.members.cache.get(user.id).roles.remove(kadan_role);
    //         console.log('not kadan role assigned and kadan role removed');
    //     }
    // }

});

//Login to Discord with your client's token
client.login(token);

/*
role adding

const role = interaction.options.getRole('role');
const member = interaction.options.getMember('target');
member.roles.add(role);



*/