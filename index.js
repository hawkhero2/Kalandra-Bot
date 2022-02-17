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

//message to be posted in the channel. 
const role_assign_message = 'If you are from Kadan server react to <process.env.Y_EMOJI_ID>, if you are not from Kadan react to <process.env.N_EMOJI_ID> ';

const channel = client.channels.cache.get(process.env.CHANNEL_ID);
channel.send(role_assign_message);

const token = process.env.TOKEN


//When the client is ready, run this code (only once)
client.once('ready', ()=> {
    console.log('Ready');
});

//Login to Discord with your client's token
client.login(token);

/*
role adding

const role = interaction.options.getRole('role');
const member = interaction.options.getMember('target');
member.roles.add(role);



*/