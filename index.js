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
const token = process.env.TOKEN

//message to be posted in the channel. 
// const role_assign_message = 'If you are from Kadan server react to <process.env.Y_EMOJI_ID>, if you are not from Kadan react to <process.env.N_EMOJI_ID> ';


//When the client is ready, run this code (only once)
client.once('ready', ()=> {
    console.log('Ready');
});

client.on('messageReactionAdd', async(reaction, user)=>{
    await reaction.fetch();
    
    if(!reaction.message.id(process.env.KADAN_CHECK)){
        return
    }
    else if(reaction.message.id(process.env.KADAN_CHECK)){
        
        if (reaction.emoji.id(process.env.Y_EMOJI_ID)) {
            reaction.message.guild.members.cache.get(user.id).roles.add(process.env.KADAN_ROLE);
            reaction.message.guild.members.cache.get(user.id).roles.remove(process.env.NOT_KADAN_ROLE);
        }
        if (reaction.emoji.id(process.env.N_EMOJI_ID)) {
            reaction.message.guild.members.cache.get(user.id).roles.add(process.env.NOT_KADAN_ROLE);
            reaction.message.guild.members.cache.get(user.id).roles.remove(process.env.KADAN_ROLE);
        }
    }

});

//Login to Discord with your client's token
client.login(token);

/*
role adding

const role = interaction.options.getRole('role');
const member = interaction.options.getMember('target');
member.roles.add(role);



*/