# Bot Guides

**We'll be covering some uses of bots, and how to start the basics of them as well.**


## Discord Bots

**WARNING** We are still editing this guide, due to some recent updates and new changes to running bots. We will update this as soon as possible.

Hey, it’s me, we’re here to talk to you about Bots!

Yeah Bots, those funny programs you see doing all sorts of things all around Discord! Ever wondered what others are out there and how to make them? That’s pretty much what these Bot guides are for!

#### Types and Uses of Bots

**We have to start somewhere… and that somewhere is with the basics!**

“What are the types of bots?” You might ask, well I gave a rough idea in the server guides but here we’ll go a bit more in-depth.


  • Interface Bots:
These are bots that manage channels, add roles, kick people, and make sure people are following rules or allow you to deal with people who aren’t.


 • Text Bots:
This breed of bot serves the purpose of posting messages, such as Cleverbot or a bot that replies to commands with a preset message. These bots are good for rule channels and having mindless dialogue.


 • Data Bots:
Data Bots… these bots record and send, or receive and record information. A bot like these could track people streaming on twitch, updates to a GitHub repo or give you stats on your server on a central site… as well as listing your server as mentioned in the server guides!

#### Creativity with Bots

How you approach using bots is probably the best thing about it. Bots themselves are code that purposefully uses Discord's API so you can get what you want from them.

Like, if a bot can allow people to add roles to themselves... why not set up your notification roles to be self-addable instead of needing to have staff do it?



#### Where to find Bots

Where to find bots! Well, you can use [This Site, Carbon](https://www.carbonitex.net/discord/bots) or you could wander around the "Discord Bots" [server](https://discord.gg/xbgUBZQ) or [site](https://bots.discord.pw/) (more details on the top of the resource guide when it comes out)

#### Recommended Bots

Compiling a list of these for your pleasure later! Come back when I notify you guys I added to this guide!

**Keep scrolling for information on starting the process to making your own bots!**


## Bot Development


**Well**, you’ve made it this far.

Am I assuming now you want to know the basics of making your future bot?

Let’s just dive right on in!


#### Ideas and Goal

Wait, why isn’t this the actual making of the bot…?

Well, that’s pretty simple, 10 points for the good question! You can’t just go ahead and make a bot without some sort of plan if you try to make it up as you go and have 0 ideas what you're planning to do it’ll just make **everything** harder down the line.

So what you need to do is check around and see what other bots can do and then figure out what yours should do. A bot that talks back when you @mention it? A bot that auto roles members? Maybe a bot that un-flips all those pesky tables? (We love you spoo.py)

You need to decide what you want it to do, every bot and every coding language have things it is better at.


#### Coding Languages/Libraries

Got some big words incoming...

So the first _real_ step is deciding on a language. If you have no prior coding experience you’ll want to check out sites like Code Academy, or khan academy and learn basic coding.

The discord libraries are simply API (Application Programming Interface)'s to Discord's system, a bot could be created without the use of a library but it would be limited and hard to maintain, so hard working people (or teams of people) devote their time to creating libraries for public use, these teams may not share ideas about how to work with their selected language, which is why you will see multiple libraries for the same language... eg. Discord.JS and Discord.io.

So to start off you’ll need to decide what language you plan to use, if you don’t know coding then why make a bot? One way some people learn is by reviewing open source bots on GitHub and playing with things to see how it works, but that’ll only **git** you so far. _(Hah, I made a funny)_

What I suggest doing is looking over the languages you know or can learn and decide where to go from there. 
**Like:** 
* **discord.js** is a Javascript library 
* **discord.py** is a python library 
* **discord.go** is a golang library

**Etc...**

The list really goes on for days, you can find all the frequently used ones on the discord API server on the top of the resource guide, when it comes out. Every channel below the information channels is different coding language libraries, such as discord.py or discord.js.


#### Bot Accounts

_“I DECIDED ON MY LANGUAGE, WHAT NOW?”_ Well now is the time to begin your bot experience.

The fancy place where you make a bot is the “Developers” tab on the discord website **(You need to be logged in on browser version)** You head into _My Applications_ and you should see this.

![](https://i.imgur.com/rkLTlMk.png)

But wait… there isn’t anything there.

Right! You need to make a new ‘application’ via the big _”New Application”_ box right there on that page.

When you click it, this blank form looking page should pop up! 

![](https://i.imgur.com/lnYrxxu.png)

From here you fill out the information for your application. **(Right now this is mostly for organization purposes)** _The App name and the App Icon will be your bots name and icon! So choose carefully, only the icon can be changed after the fact._

Once you have everything filled out 

![](https://i.imgur.com/167cRs7.png)

You can click save, and then you want to click “Create a Bot User” 

![](https://i.imgur.com/OrmBTfq.png)

This bot user will be the actual “Bot” (No you can’t choose the discrim. The name is whatever your App name was.)

Once that is done your bots account has been made. From here you just need to take your “Client ID” and put in in this link where it says CLIENT ID https://discordapp.com/oauth2/authorize?&client_id=CLIENT ID&scope=bot This will allow you to add it to a server.

Your bot isn’t done yet, but to finish it you have to go get help!


#### Utilizing Resources

From here you have to utilize your resources. We can give you basic information on how to get your bot online, and support you through the basic setup for a few coding libraries over in #support but we can’t do everything.

You will need to do your own research, and check out all the info in the Resources guide.
It isn’t easy to make a bot that’ll actually do anything.... but the people who do it seem to find it rewarding? so maybe you will too!

**If you need any help, let us know!**

#### What happens next?

Well, once you are down the road making your bot you have to worry about other factors.

Hosting a bot isn't just have the code made. You also have to have some sort of host running the bot, such as your computer or a server (VPS) running the bot. The better the uptime of your bot, the more people who will be interested in it... no one wants a bot that is down frequently.

Hosting a bot on your computer isn't smart if you plan to have it on multiple servers, or if it uses a lot of your CPU. Bots are just like any other program on your computer, THEY WON'T RUN BY THEMSELVES. You have to turn them on, update them, and make sure they run.

**This has been how to start making a bot, and where to go once you’ve made it past the basics.**

**If you have any suggestions, or need help just drop by the correct channels above!**

**Have a great day**
