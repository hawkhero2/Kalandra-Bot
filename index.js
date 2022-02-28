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
const messageID='945952853351104532';
const emoji_Y='🇾';
const emoji_N='🇳';
const kadan_role='944655004441128980';
const not_kadan_role='943437093009498162';



//When the client is ready, run this code (only once)
client.once('ready', async()=> {

    console.log('Ready');
    const cached_channel = client.channels.cache.get('943773578363559967');
    const lastmsg = cached_channel.lastMessageId;
    console.log(cached_channel);
    console.log(lastmsg);
});

//welcome message for new members
client.on('guildMemberAdd',(member)=> {
    const rules_channel = '937426305631277156';
    const welcome_channel = '937417387047804998';
    const roles_channel = '943773578363559967';
    const welcome_message = `Hey, <@${member.id}> welcome to Kalandra. Be sure to check <#${roles_channel}> to assign roles and the <#${rules_channel}> `;
    member.guild.channels.fetch(welcome_channel).then((channel)=> {
        channel.send(welcome_message)
    });
});

client.on('messageReactionAdd', async(reaction, user)=>{
    
    const msg = channel_cached.messages.cache.get
    await reaction.fetch();
    console.log(reaction);
    console.log('the messasge reaction add works');

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
    
});

client.on('ready', () => {
    const guildId = '937398878758637568';
});

//Login to Discord with your client's token
client.login(token);
