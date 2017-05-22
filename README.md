# SelfBot
This is a selfbot I use on my personal account. It's mostly for learning purposes, but I also have a lot of images and other misc commands loaded in for use so that I can do things like post commonly used images easily or to post dongers without needing to copy paste them.

## WARNING
Before using my selfbot in a server, make sure that you're not breaking any rules. I test my bot to make sure it doesn't spam shit or do anything overly annoying on it's own. If you edit the code in such a way that causes you to get in trouble it's not my fault, and if you get banned for use of a selfbot then it is also not my fault. **YOU USE THIS BOT AT YOUR OWN RISK!** If you accept these conditions, then carry on.

### Setup
I've tried making setting this bot up as simple as possible, but there's some stuff you'll need to do on your own to get this working.

First, you need to get [node.js](https://nodejs.org/en/download/), then you can run `setup.bat` in the root directory. This will install discord.js and create the `config.json` file so that you can give the bot your token to log in. Once setup is complete, then you need to get your user token from Discord, which is easy enough. Inside the discord client press `Ctrl + Shift + I` to bring up the developers console. Then, navigate to `Local Storage`, then `https://discordapp.com`, and then finally click on the `Application` tab and locate the key with the name `token`. Then you just right click on the value next to it, click `Edit "Value"`, and then paste the token into `config.json` where it says `[Your token here]`. Once that's done, you can just open `start.bat` and the bot will load up and you're good to go!

### Commands
I've defined `~` to be my prefix in `config.json`, so all commands listed here will be using that prefix
- **~quoteme [text]** Will spit out `text` inside an embed
- **~flipcoin** Will give you a coin flip
- **~lenny** Will give you the lenny donger
- **~shrug** Will give you the shrug donger
- **~prune [# of messages]** Will delete the specified amount of messages given. Do note, you need manage messages perms for this to work
- **~cowsay [text]** Will make a cow say whatever you want
- **~img [imgName]** Will send the specified image. Current images supported are:
  - tuturu
  - lewd
  - hacker
  - dab
  - thinking
  - mystery
  - whynot
  - dipshit
  - lyin
  - dewit
  - oxenfree
  - stop
  - idontgetit
  - jesus
  - mint
  - favourite
  - wat
  - ???
  - questions
  - cringe
  - comeatme
  - asshole
  - yes
  - leaving
  - rightround
  - dance
  - ih8u
  - notimpressed
  - moist
  - emokylo
  - nod
  - chosenone
  - capthumbs
