const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

function construct(fromMessage) {
    var temp = "";
    for (var i = 1; i < messageTemp.length; i++) {
        temp += " " + messageTemp[i];
    }
    return temp;
}

bot.on("ready", () => {
    console.log("Junkrat primed and ready!");
});

bot.on("message", message => {
    if (message.author !== bot.user) return;

    var contents = message.content.split(" ");

    if (!contents[0].startsWith("!")) {
        return;
    }
    
    var commandName = contents[0].substring(1);
    
    switch(commandName) {
        case "quoteme": // Quotes a message said by this user
            message.delete();
            message.channel.send("", {
                embed: {
                    color: 0x00ff00,
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL
                    },
                    description: construct(contents),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "Brought to you by p0isonedtechtips™"
                    }
                }
            });
            
            break;
        
        case "say": // A testing message
            message.channel.sendMessage("Hello, world!");
            break;
            
        case "flipcoin": // Flips a coin
            if (Math.floor(Math.random() * (2 + 1)) == 1) {
                message.channel.send("", {
                    embed: {
                        color: 0xFF0000,
                        description: "Heads!",
                        footer: {
                            icon_url: bot.user.avatarURL,
                            text: "Brought to you by p0isonedtechtips™"
                        }
                    }
                });

            } else {
                message.channel.send("", {
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
            
        default:
            message.channel.sendMessage("Unknown command!");
    }
});

bot.login(config.token);
