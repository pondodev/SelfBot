const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

bot.on("ready", () =>
{
    console.log("Junkrat primed and ready!");
});

bot.on("message", message =>
{
    if(message.author !== bot.user) return;

    var messageTemp = message.content.split(" ");

    function construct()
    {
        var temp = "";
        for (i = 1; i < messageTemp.length; i++)
		{
        temp = temp + " " + messageTemp[i];
    }
        return temp;
	  }

	if (messageTemp[0].startsWith("!"))
	{
		if (messageTemp[0] === "!quoteme")
		{
			message.delete();
			message.channel.send("", {embed: {
					color: 0x00ff00,
					author: {
						name: message.author.username,
						icon_url: message.author.avatarURL
					},
					description: construct(),
					footer: {
						icon_url: bot.user.avatarURL,
						text: "Brought to you by p0isonedtechtips™"
					}
				}});
		}

		if (messageTemp[0] === "!say")
		{
			message.channel.sendMessage("Hello, world!");
		}

		if (messageTemp[0] === "!flipcoin")
		{
			const embedFlip = new Discord.RichEmbed()

			if (Math.floor(Math.random() * (2 + 1)) == 1)
			{
				message.channel.send("", {embed: {
					color: 0xFF0000,
					description: "Heads!",
					footer: {
						icon_url: bot.user.avatarURL,
						text: "Brought to you by p0isonedtechtips™"
					}
				}});

			}
			else
			{
				message.channel.send("", {embed: {
					color: 0x0000FF,
					description: "Tails!",
					footer: {
						icon_url: bot.user.avatarURL,
						text: "Brought to you by p0isonedtechtips™"
					}
				}});
			}
		}
	}
});

bot.login(config.token);
