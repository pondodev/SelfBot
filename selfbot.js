const Discord = require("discord.js");
const cowsay = require("cowsay");
const figlet = require("figlet");
const zalgo = require("zalgoo");
const aesthetic = require("aesthetics");
const config = require("./config.json");
const bot = new Discord.Client();

function construct(fromMessage)
{
    var temp = fromMessage[1];
    if (fromMessage.length == 2) return temp;

    for (var i = 2; i < fromMessage.length; i++)
    {
        temp += " " + fromMessage[i];
    }
    return temp;
}

function commandDebug(command)
{
    console.log(command[0] + " invoked | " + new Date());
}

bot.on("ready", () =>
{
    console.log("Junkrat primed and ready!");
});

bot.on("message", message =>
{
    if (message.author !== bot.user) return; // Check command is coming from ourself

    var contents = message.content.split(" ");

    if (!contents[0].startsWith(config.prefix)) return; // If the message isn't a command just skip it

    var commandName = contents[0].substring(1);

    switch(commandName)
    {
    case "prune": // Prune text channels. Requires manage messages perms
        commandDebug(contents);
        // Get the amount of messages we want to prune...
        let messageCount = parseInt(contents[1]);
        message.channel.fetchMessages({
            limit: 100
        })

        // ...then delete them
        .then(messages =>
        {
            let msg_array = messages.array();
            msg_array.length = messageCount + 1;
            msg_array.map(m => m.delete().catch(console.error));
        });

        // Display a complete message
        message.channel.send("",
            {
                embed: {
                    color: 0x00FF00,
                    description: "Prune complete!",
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.users.get("152698906709327873").avatarURL,
                        text: "Brought to you by p0isonedtechtips™"
                    }
                }
            });
        break;

    case "quoteme": // Quotes a message said by this user
        commandDebug(contents);
        message.delete();
        message.channel.send("",
            {
                embed: {
                    color: 0x00ff00,
                    author:
                    {
                        name: message.author.username,
                        icon_url: message.author.avatarURL
                    },
                    description: construct(contents),
                    footer:
                    {
                        icon_url: bot.users.get("152698906709327873").avatarURL,
                        text: "Brought to you by p0isonedtechtips™"
                    }
                }
            });

        break;

    case "flipcoin": // Flips a coin
        commandDebug(contents);
        if (Math.floor(Math.random() * (2 + 1)) == 1)
        {
            message.channel.send("",
                {
                    embed: {
                        color: 0xFF0000,
                        description: "Heads!",
                        footer: {
                            icon_url: bot.users.get("152698906709327873").avatarURL,
                            text: "Brought to you by p0isonedtechtips™"
                        }
                    }
                });

        }
        else
        {
            message.channel.send("",
                {
                    embed: {
                        color: 0x0000FF,
                        description: "Tails!",
                        footer: {
                            icon_url: bot.users.get("152698906709327873").avatarURL,
                            text: "Brought to you by p0isonedtechtips™"
                        }
                    }
                });
        }

        break;

    case "img": // Posts image from selection
        commandDebug(contents);
        message.delete();

        switch (contents[1])
        {
        case "tuturu": // Tuturu!~
            message.channel.sendFile("./images/tuturu.png");
            break;

        case "lewd": // "Stop posting lewd things!"
            message.channel.sendFile("./images/lewd.png");
            break;

        case "hacker": // HACK THE PLANET
            message.channel.sendFile("./images/hacking.gif");
            break;

        case "dab": // Here come dab boi!
            message.channel.sendFile("./images/dabboi.jpg");
            break;

        case "thinking": // When you need to think *real* hard
            message.channel.sendFile("./images/thinking.png");
            break;

        case "mystery": // IT IS A MYSTERY
            message.channel.sendFile("./images/mystery.gif");
            break;

        case "whynot": // Why not Octodad?
            message.channel.sendFile("./images/whynot.png");
            break;

        case "dipshit": // Listen here, dipshit
            message.channel.sendFile("./images/dipshit.png");
            break;

        case "lyin": // Why you always lyin'?
            message.channel.sendFile("./images/lyin.png");
            break;

        case "dewit": // Dew it.
            message.channel.sendFile("./images/dewit.jpg");
            break;

        case "oxenfree": // OXENFREE EST OPTIME
            message.channel.sendFile("./images/oxenfree.jpg");
            break;

        case "stop": // STOP! JUST. STOP!
            message.channel.sendFile("./images/stop.gif");
            break;

        case "idontgetit": // Oh I get it!
            message.channel.sendFile("./images/idontgetit.gif");
            break;

        case "jesus": // ...Jesus
            message.channel.sendFile("./images/jesus.gif");
            break;

        case "mint": // When it's on point
            message.channel.sendFile("./images/mint.jpg");
            break;

        case "favourite": // Oh... My favourite...
            message.channel.sendFile("./images/favourite.gif");
            break;

        case "wat": // ...wat
            message.channel.sendFile("./images/wat.jpg");
            break;

        case "???": // ???
            message.channel.sendFile("./images/uwot.jpg");
            break;

        case "questions": // I have several questions
            message.channel.sendFile("./images/questions.gif");
            break;

        case "cringe": // When the cringe is too strong
            message.channel.sendFile("./images/cringe.gif");
            break;

        case "comeatme": // COME AT ME BRO
            message.channel.sendFile("./images/comeatme.jpg");
            break;

        case "asshole": // You're an asshole
            message.channel.sendFile("./images/asshole.gif");
            break;

        case "yes": // Well, yes I'm aware
            message.channel.sendFile("./images/yes.gif");
            break;

        case "leaving": // I'm outa here
            message.channel.sendFile("./images/leaving.gif");
            break;

        case "rightround": // You spin me right rightround
            message.channel.sendFile("./images/rightround.gif");
            break;

        case "dance": // Hell yeah!
            message.channel.sendFile("./images/dance.gif");
            break;

        case "ih8u": // I HATE YOU!
            message.channel.sendFile("./images/ih8u.gif");
            break;

        case "notimpressed": // When you're not feeling all too impressed
            message.channel.sendFile("./images/notimpressed.jpg");
            break;

        case "moist": // ;)
            message.channel.sendFile("./images/moist.png");
            break;

        case "emokylo": // Nuff said
            message.channel.sendFile("./images/emokylo.gif");
            break;

        case "nod": // Yeah... Yeah. YEAH!
            message.channel.sendFile("./images/nod.gif");
            break;

        case "chosenone": // YOU WERE THE CHOSEN ONE!
            message.channel.sendFile("./images/chosenone.gif");
            break;

        case "capthumbs":
            message.channel.sendFile("./images/capthumbs.gif");
            break;

        case "chinchong":
            message.channel.sendFile("./images/chinchong.png");
            break;

        case "joke":
            message.channel.sendFile("./images/joke.png");
            break;

        case "emotions":
            message.channel.sendFile("./images/emotions.gif");
            break;

        case "bossthumbs":
            message.channel.sendFile("./images/bossthumbs.gif");
            break;

        case "hug":
            message.channel.sendFile("./images/hug.gif");
            break;

        case "panic":
            message.channel.sendFile("./images/panic.gif");
            break;

        case "nonono":
            message.channel.sendFile("./images/nonono.gif");
            break;

        case "ree":
            message.channel.sendFile("./images/ree.jpg");
            break;

        case "thisisfine":
            message.channel.sendFile("./images/thisisfine.png");
            break;

        case "gotme":
            message.channel.sendFile("./images/gotme.jpg");
            break;

        default:
            console.log("Unknown image!");
        }
        break;

    case "lenny": // ( ͡° ͜ʖ ͡°)
        commandDebug(contents);
        message.delete();
        message.channel.send("​( ͡° ͜ʖ ͡°)");
        break;

    case "shrug": // ¯\_(ツ)_/¯
        commandDebug(contents);
        message.delete();
        message.channel.send("¯\\_(ツ)_/¯");
        break;

    case "getAvatar": // Get's the avatar of the specified user. Do note it works off username, not tag, ID, or mention
        commandDebug(contents);
        try
        {
            const avatarEmbed = new Discord.RichEmbed()
                .setTitle(construct(contents) + "'s avatar")
                .setDescription("[Direct link](" + bot.users.find("username", construct(contents)).avatarURL + ")")
                .setImage(bot.users.find("username", construct(contents)).avatarURL);
            message.channel.send({embed: avatarEmbed});
        }
        catch (e)
        {
            message.channel.send("",
                {
                    embed: {
                        description: "ERROR: User not found!",
                        color: 0xFF0000
                    }
                });
        }
        break;

    case "cowsay":
        commandDebug(contents);
        try
        {
            message.delete();
            message.channel.send("", {embed:
            {
                description: "```" + cowsay.say({text: construct(contents), W: 50}) + "```",
            }});
        }
        catch (e)
        {
            message.delete();
            message.channel.send("", {embed:
            {
                description: "```" + cowsay.say({text: "Nice input, dumbass"}) + "```"
            }});
        }

        break;

    case "space": // Here we'll be replicating text to look like t h i s
        commandDebug(contents);
        message.delete();
        var messageStr = construct(contents).split("");
        var temp = messageStr[0] + " ";

        for (var i = 1; i < messageStr.length; i++)
        {
            temp += messageStr[i] + " ";
        }

        message.channel.send(temp);
        break;

    case "dongerMeDaddy": // Posts a random donger for your memeing pleasure
        commandDebug(contents);
        message.delete();
        var dongers = [
            "╰། ◉ ◯ ◉ །╯",
            "ԅ( ͒ ۝ ͒ )ᕤ",
            "╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ",
            "┌༼◉ل͟◉༽┐",
            "໒( , ⊙ – ⊙ , )७",
            "ᕕ( ՞ ᗜ ՞ )ᕗ",
            "☆*:. o(≧▽≦)o .:*☆",
            "ᕙᓄ(☉ਊ☉)ᓄᕗ",
            "(V●ᴥ●V)",
            "ᕦ( ̿ ﹏ ̿ )ᕤ",
            "ᕙ[  ͒ ﹏ ͒  ]ᕗ",
            "(∩╹□╹∩)",
            "s( ^ ‿ ^)-b",
            "s( ^ ‸ ^)-p",
            "ლ( ◕ 益 ◕ ) ლ",
            "(╭ರ_⊙)",
            "(╭ರᴥ•́)",
            "(⊙ᗜ⊙)",
            "༼つ ◕_◕ ༽つ",
            "ʕ⊙ᴥ⊙ʔ",
            "ᕕ( ཀ ʖ̯ ཀ)ᕗ",
            "╰(◕ᗜ◕)╯",
            "໒( ◑ w ◑ )७",
            "ᕕ(◉Д◉ )ᕗ",
            "(✿ ◕ᗜ◕)━♫.*･｡ﾟ",
            "╰(˵ヘωヘ✿)╯",
            "ᕕ(⌐■_■)ᕗ ♪♬",
            "(ᕗ ͠°  ਊ ͠° )ᕗ",
            "╰( ◕ ᗜ ◕ )╯",
            "(-_-｡)",
            "ԅ༼ . º ʖ̯ º . ༽ง",
            "╰(✿˙ᗜ˙)੭━☆ﾟ.*･｡ﾟ",
            "d–(^ ‿ ^ )z",
            "(つ°ヮ°)つ"
        ];

        message.channel.send(dongers[Math.floor(Math.random() * (dongers.length - 1))]);
        break;

    case "figlet":
        commandDebug(contents);
        message.delete();
        figlet(construct(contents), function(err, data){
            if (err)
            {
                message.channel.send("",
                    {
                        embed:
                        {
                            description: "ERROR: Something fucked up, check console for more details",
                            color: 0xFF0000
                        }
                    });
            }
            message.channel.send("```" + data + "```");
        });

        break;

    case "zalgo":
        commandDebug(contents);
        message.delete();
        try
        {
            message.channel.send(zalgo(construct(contents)));
        }
        catch (e)
        {
            message.channel.send("",
                {
                    embed:
                    {
                        description: "ERROR: Probably sending too many characters, check console for more details",
                        color: 0xFF0000
                    }
                });
        }
        break;

    case "aesthetic":
        commandDebug(contents);
        message.delete();
        try
        {
            message.channel.send(aesthetic(construct(contents)));
        }
        catch (e)
        {
            message.channel.send("",
                {
                    embed:
                    {
                        description: "ERROR: Something fucked up, check console for more details",
                        color: 0xFF0000
                    }
                });
        }
        break;

    default: // If we don't recognise the command, just break
        console.log("Command not found!");
        break;
    }
});

bot.login(config.token);
