const {Client, MessageAttachment} = require('discord.js');
const config = require('./config.json');
const hiddenconfig = require('./hiddenconfig.json');
const BRUH_BOT = new Client();

BRUH_BOT.on('ready', () => {
    console.log(`Logged in as ${BRUH_BOT.user.tag}, with ${BRUH_BOT.users.cache.size} users, in ${BRUH_BOT.channels.cache.size} channels of ${BRUH_BOT.guilds.cache.size} servers.`);
//  console.log(client);
    BRUH_BOT.user.setActivity('with depression', {
        type: "PLAYING",
        url: "https://www.twitch.tv/monstercat"
    });
});

BRUH_BOT.on('message', msg => {
    const channel = msg.channel;
    if (msg.content.toLowerCase().endsWith('ing')) {
        channel.send(msg.content.substr(0, msg.content.length - 3) + 'ong');
    }
    if (msg.content.toLowerCase() === 'marco') {
        channel.send('polo');     
    }

    if (msg.content.startsWith(config.prefix))
    {
        if(msg.content.startsWith('sound', 5))
        {
            const bruhsound = new MessageAttachment('https://www.myinstants.com/media/sounds/movie_1.mp3');
            bruhsound.name = "bruh sound effect #2.mp3";
            
            channel.send("bruh bruh bruh bruh bruh", {tts: true});
            channel.send(bruhsound);
        }

        if(msg.content.startsWith('pic', 5))
        {
            const bruhpic = new MessageAttachment('https://i.ytimg.com/vi/2ZIpFytCSVc/maxresdefault.jpg');
            bruhpic.name = "bruh pic.jpg";
            channel.send(bruhpic);
        }

        if(msg.content.startsWith('kick', 5))
        {
            const user = msg.mentions.members.first();
            if (user) 
            {
                const member = msg.guild.member(user);
                if (member)
                {
                    member.kick("Cuz they gae ?? ")
                    .then(() => {
                        msg.reply(" there you go boi, member kicked (check audit log 4 surprise)");
                    })
                    .catch(err => {
                        msg.reply(" ah shit this user got higher or equal permissions so I guess can't kick");
                        console.error(err);
                    })
                }
                else    // not a member
                {
                    msg.reply (" that user isn't even in this server");
                }
            }   
            else    // no user specified
            {
                msg.reply (" specify a user, or your ass will be the only thing I'll have to kick");
            }
        }

        if(msg.content.startsWith('ban', 5))
        {
            const user = msg.mentions.members.first();
            if (user) 
            {
                const member = msg.guild.member(user);
                if (member)
                {
                    member.ban("because IT'S MY CHOICE NO ONE GIVES YOU THE FUCKING RIGHT")
                    .then(() => {
                        msg.reply(" there you go boi, member banned (check audit log 4 surprise)");
                    })
                    .catch(err => {
                        msg.reply(" ah shit this user got higher or equal permissions so I guess can't ban");
                        console.error(err);
                    })
                }
                else    // not a member
                {
                    msg.reply (" that user isn't even in this server");
                }
            }   
            else    // no user specified
            {
                msg.reply (" specify a user, or I'll ban your ass instead");
            }
        }
        
        if(msg.content.startsWith('screm', 5))
        {
            channel.send("i has no mouth, and i must screm");
            channel.send("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
    }
});

BRUH_BOT.login(hiddenconfig.token);
