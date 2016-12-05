# Development

This is your basic guide to Discord Development stuff! We will cover basics on bot development, and things related... VPS's... Sites maybe...?

Just look at the sidebar to see what's here!

#### _Developer Mode_ #

**Here we are again,** So since this guide set is about development... this had to be the first thing!

_I briefly touched on this during the User Settings, but I feel it is important to know about this tool._

Developer mode allows a user to grab the IDs of any object in Discord, from message to user, from bot to channel. These ID's allow easy access shortcuts to channels, and mentioning a user... as well as a bunch of other complicated things you can use them for with bots.

![](http://i.imgur.com/viZYSnL.png)

Just click that option on the user, BOOM you copied their ID.

Once you have an ID you can do a few things with it...

![](http://i.imgur.com/kwwY9u7.png)

So as it says, <#INSERT ID> will mention a channel, and <@INSERT ID> will mention a user. These will work **no matter where you are** but if someone doesn't share a server with that user, or have that server with that channel... it'll just look like <#CHANNEL-ID> not #channel.

Developer mode can be fun, and is very useful for bots and trying to report spammers but... there is no but.

**Now time for some real developer information, and basics!**

## **Bots**


**Well**, you’ve made it this far... alive.

Am I assuming now you want to know the basics of making your future bot?

Let’s just dive right on in, no need to be slow... right?


#### _Idea and Goal_

_Wait, why isn’t this the actual making of the bot…?_

Well, that’s pretty simple, 10 points for the good question! You can’t just go ahead and make a bot without some sort of plan if you try to make it up as you go and have 0 ideas what you're planning to do it’ll just make **everything** harder down the line.

So what you need to do is check around and see what other bots can do and then figure out what yours should do. A bot that talks back when you @mention it? A bot that auto roles members? Maybe a bot that un-flips all those pesky tables? (We love you spoo.py)

You need to decide what you want it to do, every bot and every coding language have things it is better at.

For the actual specifics, you'll probably need to talk to the people who use the Libraries but i'll do everything in my power to explain them the best I can in these guides!

Remember, using your own intelligence to find more information is key. 
We can't do everything, but you need help finding stuff? Ask. We won't hold you hand every step, but we can show you where the stairs are.

#### _Coding Languages/Libraries_

Got some big words incoming...

So the first _real_ step is deciding on a language. If you have no prior coding experience you’ll want to check out sites like Code Academy, or khan academy and learn basic coding.

The discord libraries are simply API (Application Programming Interface)'s to Discord's system, a bot could be created without the use of a library but it would be limited and hard to maintain, so hard working people (or teams of people) devote their time to creating libraries for public use, these teams may not share ideas about how to work with their selected language, which is why you will see multiple libraries for the same language... eg. Discord.JS and Discord.io.

I mean... all of us working on Discord stuff pretty much are Volunteering, a few people make profits and a few people get donations to help fund what they are doing... but most of us put **a lot** more into the community than we we receive back. I think we should at least applaud the people managing these libs.

So to start off making your bot, you’ll need to decide what coding language you plan to use, if you don’t know any coding then why/how will you make a bot? 
One way some people learn is by reviewing open source bots on GitHub and playing with things to see how it works, but that’ll only **git** you so far. _(Hah, I made a funny)_

What I suggest doing is looking over the languages you know or can learn and decide where to go from there. 
**Like:** These are most of the public languages you can use. You can find more on the [DiscordApi Server](https://discord.gg/discord-api) 

**Active means the devs are actively updating and working on it**

**.Net**
* discord-net - An active C# library.
* dsharpplus - A decently active C# library.

**JVM**
* discord4j - A decently active Java library.
* javacord - A decently active Java libary.
* jda - A very active Java library.

**Javascript**
* eris - An active Javascript library.
* discord.io - An active Javascript library.
* discord.js - A very active Javascript library.
* discordie - An active Javascript library.

**Lua**
* discordia - A decently active Lua library.
* litcord - A decently active Lua library.

**Python**
* disco - A decently active Python library.
* discord.py - A very active Python library.

**Miscellaneous**
* discordgo - A very active Golang library.
* swiftcord - An active Swift library.
* discordunity - A decently active UnityScript library.
* discordcr - An active Crystal library.
* dscord - A very inactive D-lang library.
* discord-dart - An active Dart library.
* discord-rs - A very active Rust library.
* discordphp - An active PHP library.

The list really goes on for days, we might've missed some... which you can find on the discord API server mentioned above. Just about every channel below the information channels are different coding language libraries, most shown above. 

We suggest you go in pursuit of learning how to use the base languages, before trying the Discord libraries. Sites like [Khan Academy](https://www.khanacademy.org) and [Code Academy](https://www.codeacademy.com) can help.


#### _Bot Accounts_

_“I DECIDED ON MY LANGUAGE, WHAT NOW?”_ Well now is the time to begin your bot experience.

The fancy place where you make a bot is the “Developers” tab on the discord website **(You need to be logged in on browser version)** You head into [_My Applications_](https://discordapp.com/developers/applications/me) and you should see this.

![](http://i.imgur.com/rkLTlMk.png)

But wait… there isn’t anything there.

Right! You need to make a new ‘application’ via the big _”New Application”_ box right there on that page.

When you click it, this blank form looking page should pop up! 

![](http://i.imgur.com/lnYrxxu.png)

From here you fill out the information for your application. **(Right now this is mostly for organization purposes)** _The App name and the App Icon will be your bots name and icon! So choose carefully, only the icon can be changed after the fact._

Once you have everything filled out 

![](http://i.imgur.com/167cRs7.png)

You can click save, and then you want to click “Create a Bot User” 

![](http://i.imgur.com/OrmBTfq.png)

This bot user will be the actual “Bot” (No you can’t choose the discrim. The name is whatever your App name was.)

Once that is done your bots account has been made. Go to [Discord Permissions Calculator](https://discordapi.com/permissions.html), insert your client ID in the box at the bottom of the page, and choose what default permissions you want users to give your bot. **Only add minimum permissions! Also, avoid adding Administrator permission!** Then you'll get a nice, neat link.

Your bot isn’t done yet, but to finish it you have to go get help, some of which we can provide below... some we can't.!
**If you need any help, let us know!**

#### _What next...?_

Well, once you are down the road making your bot you have to worry about other factors.

Hosting a bot isn't just have the code made. You also have to have some sort of host running the bot, such as your computer or a server (VPS) running the bot. The better the uptime of your bot, the more people who will be interested in it... no one wants a bot that is down frequently.

Hosting a bot on your computer isn't smart if you plan to have it on multiple servers, or if it uses a lot of your CPU. Bots are just like any other program on your computer, THEY WON'T RUN BY THEMSELVES. You have to turn them on, update them, and make sure they run.

From here you have to utilize your resources. We can give you basic information on how to get your bot online, and support you through the basic setup for a few coding libraries over on the server...

You will need to do your own research, and check out all the info we post in the **Developer Resources** guide below.
It isn’t easy to make a bot that’ll actually do anything.... but the people who do it seem to find it rewarding? so maybe you will too!

**This has been how to start making a bot, and where to go once you’ve made it past the basics.**

## **Developer Resources**

**Alright, hey.**
So this is where i'll talk about more detailed setup for your bot and then some fancy stuff about Hosting. We want to make sure everyone is safe with how they host, and doesn't get in any bad situations.
I'm currently writing up this stuff but expect code examples, and VPS information when they are all done.

So as a developer there are dozens of languages you can pick... here i'll give you a little overview of a few of them I picked out for this. 

#### Basics

The very very basics of Developing... you have a few key things before you even start coding. None of us can just start out from scratch with no knowledge, right?

**First off**

First thing you need to observe is how code works, it isn't just a simple *Oh, I tell it to do this and it does this*, it's more of a *Oh I learn German to tell this to do this*. 

Everyday bot languages are expanding and upgrading; what you might have down one day, you might need to relearn the next. But the basics always stay the same, the basic foundation all the code runs off. For discord.js this would be JavaScript, for discord.py this would be Python. You need some sort of dedication and willingness to learn code, or else this could be a pretty confusing journey.

Due to these basics foundations, you might need to download certain files or such before you actually code... I'll add these into these following basic guides ASAP so you can get on your coding journey. (I'll also have the requirements to run these languages... please bear with me!)

**Second thing...**

When coding there are some *best practices* you should follow on Discord, some stuff is just plain rude to avoid and others will just make your life easier.

* Prefix's

Your bot should have a prefix. A prefix is a symbol or word that goes before a command, such as **!** or **+**, All bots should have one of these because this allows people to decide when they trigger a bot command... 

Say your command is **Find _____**... how would you stop it from picking up on someone saying *Find my keys* when they aren't trying to use a command...? A prefix! Now they'd have to say *!Find the dog* to use the command.

* Compliant

This simply means your bot does what it is supposed to, and doesn't do anything it shouldn't. A big thing about bots is DMs, or responding to messages not intended for it. A prefix is one way to avoid this, but many bots will send out messages to DMs or the servers the bot is on... unless the server okay's this, that is not an ok thing to do. 

Bots shouldn't do anything the server using it doesn't tell it to do, unless the server set it to do something like AutoMod, then it should act without command because that is its job.

* Stalking

Bots are useful tools, but they have access to a lot of channels. You **should not** use your bot to stalk other servers; tracking the logs of another server, or snooping through private channels the bot has access too is *NOT* okay. This can lead to people kicking your bot, or it even getting banned... don't do it.

* Scrapping

This is the 4th, and worst of these... Bot Scrapping. Bot Scrapping is when a user grabs Open Source projects, or grabs any bots coding and uses it on their own projects with no reference to the originals and no changes... it'd be like you making a television and someone comes along and makes the same thing, then slaps a new label on it. It's not cool.

**Third order of business**

So I've gone over some information about coding, and using the bots but... what do you edit the code with?

To be honest, there are a lot of code editors... hell, even notepad works if you have everything your doing memorized. But if you are looking for editors that give you suggestions on the right words to use for functions, or even a live look at a site your working on; Notepad isn't going to cut it.

A few good options for code editors would be things like Atom, Notepad++ (for basic stuff), or Brackets (I use this for the guides and site!)... But what you use is really up to you, below i'll make a short list of some good code editors I've seen used around for Discord stuff!

* Notepad++
* Brackets
* Atom
* 
* 
* 
* 
* 
* 
* 

This has been a little bit of a short introduction into how to get ready to code, and things you should be careful with when coding.

**_(Below I have examples of code structures that will turn on the bot, and allow the command !ping to work. As for "TOKEN HERE" this means your bots token you'll find on the application when you make the bot!
)_**

#### Discord.PY

Discord.py is one of the simplest libraries on Discord! Python is a pretty user friendly language, and isn't too hard to learn. A lot of python stuff is Open Source, especially Discord.py stuff... so you can practice playing with existing things in Discord.py!

If you are looking for a good beginners library with a pretty friendly discord team, Discord.py is one of a few good choices!

```
import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!", description="A simple ping-pong example")

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def ping():
    await bot.say("pong")

bot.run("TOKEN HERE")
```

#### Discord.JS

Discord.js is another simple library on Discord! JavaScript is decently friendly, but has a very strong support team on Discord as well as devs who are devoted to maintaining it! On Discord it can be hard to find Open Source discord.js projects, but there are plenty of examples so you can mess with those and see how you like this language.

This language is just all around fun to use, and is most useful with getting bots to interact through text-chat and voice-chat; such as music, or responding to messages.

```
const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("message", message => {
    if (message.content.startsWith("!ping")) {
        message.channel.sendMessage("pong")
            .then(res => {
                message.channel.sendMessage(`pong ${res.timestamp-message.timestamp}ms`);
            });
    }
});

bot.login("TOKEN HERE");
```

#### Eris

Eris is another JavaScript library, this one is very similar to discord.js but isn't the same. Eris is pretty user friendly, but you'll mostly rely on the Discord API server for help with it. It's a modified JavaScript library, not to be confused with discord.js because they don't run the same even if they are very similar.

This is another fun language, it being JavaScript also. It is also useful with getting bots to interact through text-chat and voice-cat, just as discord.js is.

```
const eris = require("eris");

var bot = new eris("TOKEN HERE");

bot.on("ready", () => {
    console.log("I'm ready!");
});

bot.on("messageCreate", message => {
    message.channel.createMessage("Pong!");
});

bot.connect();
```

#### Discord.Go

Discord.go is a Golang library. This one is the odd one out of the 4 listed, it is a odd library with a few requirements (such as usually only for 64 bit windows computers), but it is very useful in coding. Golang is very flexible with many options, features, and coding tools you wont find in any other language. This language has a few systems that make it almost self writing at times.

This language is a pain to get to know, but beyond fun once you get past the nitty-gritty... it's one of those things you don't quite enjoy when doing it, but love what happens when you get the finished product.

```
package main

import (
	"flag"
	"fmt"

	"github.com/bwmarrin/discordgo"
)

var (
	Token string
	BotID string
)

func init() {

	flag.StringVar(&Token, "t", "TOKEN HERE", "Bot Token")
	flag.Parse()
}

func main() {
	dg, err := discordgo.New("Bot " + Token)
	if err != nil {
		fmt.Println("error:\n", err)
		return
	}

	dg.AddHandler(messageCreate)

	err = dg.Open()
	if err != nil {
		fmt.Println("error:\n", err)
		return
	}

	fmt.Println("I'm now ready!")
	<-make(chan struct{})
	return
}

func messageCreate(session *discordgo.Session, message *discordgo.MessageCreate) {
	if message.Content == "!ping" {
		_, _ = session.ChannelMessageSend(message.ChannelID, "Pong!")
	}
}
```

#### VPS Basics

#### VPS 

These are in the works!
If you think you can contribute to these please message Jet#0038 on the server!

---

Thanks for reading!!! 
I will put down comments in the updates channel of the server to notify everyone when we have added this content!!

**If you have any suggestions, or need help just drop by the server!**

_**Have a great day**_