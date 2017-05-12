const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

function construct(fromMessage)
{
    var temp = "";
    for (var i = 1; i < fromMessage.length; i++)
    {
        temp += " " + fromMessage[i];
    }
    return temp;
}

function clean (text)
{
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
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
    case "quoteme": // Quotes a message said by this user
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
                        icon_url: bot.user.avatarURL,
                        text: "Brought to you by p0isonedtechtips™"
                    }
                }
            });

        break;

    case "flipcoin": // Flips a coin
        if (Math.floor(Math.random() * (2 + 1)) == 1)
        {
            message.channel.send("",
                {
                    embed: {
                        color: 0xFF0000,
                        description: "Heads!",
                        footer: {
                            icon_url: bot.user.avatarURL,
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
                            icon_url: bot.user.avatarURL,
                            text: "Brought to you by p0isonedtechtips™"
                        }
                    }
                });
        }

        break;

    case "img": // Posts image from selection
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
            message.channel.sendFile("./images/uwot.png");
            break;

        case "questions": // I have several questions
            message.channel.sendFile("./images/questions.gif");
            break;
        }
        break;

    case "lenny": // ( ͡° ͜ʖ ͡°)
        message.delete();
        message.channel.send("​( ͡° ͜ʖ ͡°)");
        break;

    case "eval": // Evaluate javascript
        try
        {
            var code = contents.join(" ");
            var evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"xl"});
        }
        catch (err)
        {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
        break;

    default: // If we don't recognise the command, just break
        break;
    }
});

bot.login(config.token);
