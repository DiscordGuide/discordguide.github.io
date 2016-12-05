# Server Guides

Here are all our tips and tricks to getting your server **just right.**

These are all mostly based around Desktop since Mobile doesn't have all the abilities yet!

## **Server Setup**

**Huh?** _What!?!?!? It's time already!?_

Fineeee, time to setup your beautiful server you've created!

Setting up a server is a good thing to do before even inviting anyone. Having a clean nice look with all your roles and channels in place makes the server **WAY** more appealing when your friends and future members join this creation of yours!


#### Setting up Roles

So you are at the screen shown in the above image, where everything's all blank ?

From here go to the three lines icon by the server name, and click them 

![](http://i.imgur.com/tWs8Rks.png)
then click "Server Settings" and BOOM you have this popup where you can edit almost everything on your server in one place. 

![](http://i.imgur.com/0IbY7Vb.png)

From here the first thing I normally do is click **Roles** (this is what I'll show you right now) 

![](http://i.imgur.com/WnYu3ca.png)

Roles are what decide what everyone on your server can do, from simple things like Emotes to major things like being able to edit the whole server.

Common roles I add as shown above are "Admin" "Mod" "Member" and "Visitor" these allow you to decide who has what permissions. The basic idea for these roles are…

*   An "Admin" will have all permissions, this is someone you trust to control anything on the server.
*   A "Mod" will have message remove permissions, etc. This is someone you expect to help control any potential behavioral issues.
*   "Member" someone who can maybe post pictures and links, while visitors cannot.
*   "Visitor" someone who hasn't been around long enough to be the other roles.

This role system allows you to keep the chat functioning without you, and have a benefits system for good behavior. Some servers are super specific or are for Roleplay and have roles built around that system but almost all servers have Admins, Mods, and Member type roles.


So let's say you are making a server for a fandom, each different character you might like is a separate role with that fandom characters' favorite color. How would you put all these together and keep a good role order?

Should your roles look like this? 

![](http://i.imgur.com/yEEFHAC.png)

**No!** That picture shows a messy role setup that would make a hierarchy impossible, to keep a server functioning well you need a nice order to be set up, usually.
If you are going for some organization, that wouldn’t do well for you.

A good way to do this is to put leadership roles on the top, and then you can organize the other by color, or even by alphabet. (OCD people... I feel your pain)

Once you've done this, it'll probably look like this. 

![](http://i.imgur.com/49tYxrO.png)

It's important that roles like "Admin" "Mod" and other leadership roles are at/near the top, a Moderator with a role below everyone else wouldn't be able to do anything besides delete messages and mute people on Voice Chat. The permissions system works in order, the higher the role, the higher the authority **NO MATTER WHAT PERMISSIONS ARE CLICKED**

If Admin has "Administrator" clicked, and Mod has "Manage Roles" clicked, but Admin is below Mod, then Mod can just give themselves Admin and Admin can't do anything to stop them. 

The "Administrator" permission is like clicking all of them, (so you don't need to click them all) but it doesn't allow people to skip the order of the roles.


#### Setting up Channels

Now you got your roles figured out, here's the tricky part... **Channels**

Channels are where your members actually talk, this is where all the action happens. Each Channel has permissions you can set, and you can name them for their purposes.

Whether someone can or cannot do something goes in a specific order, it goes the "`@everyone`" permission first, then their specific role, and then their personal permissions. Example: if "everyone" has _denied read messages_, "Mod" has a _allow read messages_ but "Example Name" who has the "Mod" role has _deny read messages_, then "Example Name" will not see that channel.

Setting up the permissions look a lot similar to roles 

![](http://i.imgur.com/8yNOEoQ.png)

there are slight differences, but not much you'll notice. 

![](http://i.imgur.com/sxduMR1.png)

Your channels permissions are also major as I said before, any role without "Administrator" permission clicked will have to follow any permissions set in that channel.

You could make Mod have every permission except "Administrator" but if the channels block all of them then the Mod is useless on that channel. 

![](http://i.imgur.com/sxduMR1.png)

A good practice on channels is to not add every role specifically, just set the roles permissions and then on each channel just click view for everyone and leave the rest of them Blank, not an X or a Check. This means all the permissions will be set exactly how they are in the roles. 

![](http://i.imgur.com/ZMw5wF4.png)

The above is only a problem if you make a hidden channel, like a Moderators only channel. 
To do this simply unclick view for everyone and click view on Moderators/Admins. 

Making one of these channels is one of the exceptions to the "You shouldn't manually add each role." rule. Manually setting these is usually smarter, so for example mods can't delete other mods messages in this channel. 

![](http://i.imgur.com/cAPul1s.png)


#### Setting up Voice Channels

Voice channels? They are pretty much the same as Text channels except... instead of messaging permissions, this has voice permissions.

The row you saw missing from Text? Those go here. 

![](http://i.imgur.com/pY5Ak6c.png)

These permissions allow certain roles to be able to talk/hear on voice chat, or even mute/deafen others.

**Mute** **:** Can't talk on VC. **Deafen** **:** Can't hear on VC. **Move** **:** Can move a person from one VC to the other.

Voice Channels can be a bit trickier than regular Channels, but the idea is pretty much the same. 
You shouldn't have to worry about any of the permissions as long as it isn't restricted to a role if it is then you have to add all the roles that can access it. (Like a staff, or via voice chat)

As some extra features on the Voice Chat you can decide maximum member limits, and decide the MBPS for the Voice Channel. The higher the MBPS, the higher the quality (and lag) the lower, the lesser the quality (and lag).

Member limits allow you to restrict how many people are talking or are listening, etc

This ties a lot into music bots, but I'll explain that in the Bot guides!

**For all channels remember this...**
![](http://i.imgur.com/zxJqkt4.png)

#### Rules and Welcome

This is a basic thing on a server, every server should have a Rules and Welcome unless the server is based around chaos, like a meme or shitpost server. 
The only reason I wouldn’t is if the rules are super obvious, or if you have none.

![](http://i.imgur.com/SVZ9Ej4.png)

These channels should only allow Admins and you, the owner, to talk. This allows you to post rules everyone can see. 

**If you have any questions so far, just ask the server!**

## **Server Settings**

**Already here, huh?** We'll be covering more detailed server edits, and tools here.

_By now you should have some members joining, and gotten a good grasp of what you are doing. These will help you for later down the road, or even things you may just decide to add._

So these are a bit more basic, but by now you know your way around enough to do these things.

Look at your "Overview" tab on "Server Settings"

**"Verification Levels"** these are the levels of being able to send a message if a user doesn't meet these they cannot send messages to the server. 
**(This is canceled out by roles, so be careful when giving out roles to new people!)**

**"Default Notifications"** Good practice for this is to have these set to "@mentions only" so that way people aren't spammed with every message.

**"AFK channel"** this is where people go when they go AFK for a certain amount of time, moving them off one Voice Channel and into another you decide is the AFK channel.

**"Location"** the location of your server changes how the Voice Channels work, and how good reception your members have. Most worldwide servers use US-East as a default area, if your server is more specific then you can set it for your area. 

#### _Suspended States_

You are probably like, "What."

Suspended State channels/servers are channels/servers that require a Staff approving you to move past into other channels, or the rest of the server. Most membership-based servers have these so people joining can decide if they will follow the rules or not, and accept the consequences if they break them.

*These are a lot like restricted rooms I mentioned in the last channel*

A suspended channel is pretty easy to make, remember how you set those staff rooms and special perks rooms? We are doing the opposite here, even though those would be considered a suspended channel... we're approaching this differently.

Every channel in the server requires a base channel to see, and not having those limit you to seeing the welcome channel and a channel where you can request to join the rest of the server; some servers even have bots you can use to give yourself the role to get out. 
This is a good use for botwinder who has the !join command!

![](NEW IMAGE FOR BOTWINDER JOIN COMMAND)

Suspended channels and servers allow you to keep things private and keep a better grasp on who has what permissions and who can join. Unless YOU or a Staff approve it... they can't do anything at all.

![](http://i.imgur.com/KXk2G1f.png)

This is a great tool for making private servers you don't want anyone joining if they are stuck on a dead-end channel they'll eventually either get kicked or leave.

#### _Inactivity Penalties_

This is one of the fun features in Discord, the Inactivity penalties. 

On your "Server Settings" you should see a tab named "Members" at the bottom is an area called 'Prune', this allows you to remove members who haven't said anything for certain amounts of time.

**WARNING:** This does not work on users with roles, so it's not smart to assign every member a role if you want to prune inactive people.

![](blob:http://imgur.com/c0fe7826-1d7b-4ae2-927a-3277c936f4b2)

This allows you to remove members who don't contribute anything to the server.


#### _Ban List_

The bans list tab on "Server Settings" is pretty self-explanatory. 

You can ban/unban people using this, and the member list tab allows you to kick, ban, or even give your Ownership of the server over to any other member. If a user is inactive, you'll be able to prune them using the button near the middle at the bottom.

![](Insert Image of Member list)

You probably shouldn't play with this channel too much if you don't know what you are doing.

It's always good to try to mess with things to test them, but don't go randomly handing owner over to someone... you might not get it back.

#### _Instant Invites_

This tab on "Server Settings" allows you to cancel any invite link made, or see how many members each one has been used to get for the server. 
This is great for tracking statistics, and seeing who has done a lot of recruiting.

I suggest making a permanent invite link that you use in general, and **not deleting it**, this allows one link to be shared that will always work for the server. If you keep deleting invites, no one will be able to share the server and you won't be able to get new members.

_If you don't want users making invites, just disable it in your channel/role settings and tell them to use your permanent invite link._


## **Running a Server**

**Well, hello!** Guess you’re still here for server management tips right?

Yeah… thought so. Sorry, I don't have as many pictures this time ?? 

Alright, so we’re going to go over the fundamentals of running a server. Without these key pieces, a server isn’t going to do too well, unless it’s a specialty server and even then what happens when it isn’t special anymore?

A lot of servers try to base things only on a unique concept and don’t establish themselves as more, they don’t strengthen the server's functionality.

This is what I want to try to help you guys fix, or prepare for.


#### _Idea and Concept_

I may sound like a broken record, but don’t run away!

The whole point of your server is key, you need to have an appealing idea with a well-made concept.

If you are just like “OH I WANT A FANDOM SERVER!!!!!!!” and don’t put the effort into seeing if there are other servers and exploiting something they don’t have, then don’t be sad if your server doesn’t grow. 
It isn’t as easy as just making the server ?? 


#### _Organization_

Sorry but… a sloppily organized server first of all just doesn't look nice, next of all it’s just plain hard to function.

If you can’t put the time into cleaning it up and organizing it, your members could get confused about things or get lost. I’ve seen someone gets lost in a server, I mean… it had 94 channels *BUT STILL.*

Organized server? Here’s an example in my mind

![](https://cdn.discordapp.com/attachments/232881527002759168/233363353387401216/unknown.png)

#### _Communication_

So the next few are kinda about your staff and member relations.

Communication is big, letting your members know about updates and making sure your staff knows what is going on in the server. 
I myself like to know what’s going on, and if I am in a server without communication… I rarely will stay.


**Understanding**

Understanding? This means a lot. Not just understanding what you're doing with your server but understanding the members.

You need to be able to be open to feedback from your members, and improve as new ideas are made. It’s the main thing Discord functions around. Discord get’s its concepts from the suggestions area of the site. 
Sure the staff comes up with stuff, most of them use or used Discord as server members, **BUT** we say what we want to see and they try to meet that. Server owners can learn a lot from that.


**Trust**

No staff team is perfect, but finding those you trust… what happens if you vanish? Who’ll run things?
And your permissions? Who can you trust to do what?

Trust is a big thing on a server, not in just the staff but in deciding what people can do.

Posting pictures? Links? Making instant invites? These are all permissions you TRUST your members to have or not have.

Catch my drift?


If you want more stuff on expanding your server just keep scrolling, if not then go about your day!


Remember, help is offered on the server, suggestions are always loved too.

## **Growing a Server**

**Weeelllllllllllll** We’ve gone over just about everything server wise I can think of except how to actually grow your server!

So we went over the basics and all that jazz, let’s talk growth.


#### _Ideals_

Well, guess we’re back to this! Not really, this is slightly different.

“Ideals? What are those…?” 
Well… where do you want your server to go? What are your dreams for this server? 44,000 members? Or maybe just 40? Getting an image of where you want to go is the core of your growth.

You need to keep in mind what you can handle, how much you want to go for, and not burn yourself in the first few days. A good server is one that can peddle away for weeks and get nowhere... but be so good it finally hits the gas and soars off to the 100o's of members.

#### _Content and Ability_

What **content** is on your server? Do you have lots of unique ideas and strong guidelines? Do you have people interested in the channels on your server?

How is your **Ability** as an Owner? How well is your server setup? How much do you know about the topic it’s based around?

You need to put your best foot forward when designing your server, if you just half ass it and call it good when you can do more... it's gonna hurt you in the long run.

I always suggest you take feedback and apply it, talk it over with your staff, make action plans, just do it! Having your server straightened out and nice is very very good. Your ability can grow, change, form... but if you never pratice, and never work at it... you'll still be stuck in the days of iirc.

Having these two working together will give people a reason to join, while your Ideals decides what you're going for.

#### _Advertisement_

There are _SO MANY WAYS_ to advertise.

Ever heard of server lists? Well, Discord has quite a few.
*These lists fall into two categories:*

* Bot to Site lists
   Bot’s that track your server and posts your server as an advertisement on a site

* Server lists
   Server’s that allow you to post, or ask them to post your server in categories or on one large list.

**I will show you most of the public ones below, please mention to us if any were missed..**

[Discord Servers](https://www.discordservers.com) **BOT**
![](http://i.imgur.com/jC9SXYC.png)

[DiscordList.net](https://www.discordlist.net) **BOT**
![](http://i.imgur.com/B2kp4ZH.png)

[DiscordList.me](https://discordlist.me) **BOT**
![](INSERT SITE IMAGE)

[Discord.io](https://discord.io) **site/server**
![](INSERT SITE IMAGE)

[The Portal](https://discord.gg/6HtGJ98) **server**
![](http://i.imgur.com/Ep2lEqk.png)

[Discord Server List](https://discord.gg/ptg4XSK) **server**
![](http://i.imgur.com/gaAShB1.png)

[Discord Server Central]() **server**
![](INSERT SC IMAGE)

[Discord United Servers]() **server**
![](INSERT USL IMAGE)

#### _Members_

The last piece is members.

No server can grow without members, which means you need to have a member base.

You may be asking, “How does having members make me grow…? Isn’t that the goal?” but, a good server will have members who share it with their friends. One person sharing a server with 10 people, then that person sharing it with 10, etc that’s 100 which can easily keep spreading.

This also means you have to be careful with rules and making sure you have good kick/ban policies. I know I haven’t covered these much but I feel they are pretty straight forward:

**Kick** - removed from server, _can_ rejoin

**Ban** - removed from server, _can’t_ rejoin

_You can see who's been banned, right now we don't have audit logs yet so you can see who kicked people or who banned people..._

I'd just be careful who you give permissions, but don't be a complete hog with it. It's good for a server to have backup control people, or admins. If a server relies on a single user, and that user is busy... guess what happens? **It can't do anything, and it'll curl up to die.**

Just set up your staff, and how you run your roles decently. Have different levels, have a set system to earning roles, make things oranized. Being taken serious is pretty important... except when it isn't.

---

**Alright, hope this guide helped! We still have more to add, but please give us suggestions if you feel we need to add stuff.**

_Maybe you’re a seasoned pro and don't need to read the other guides? Always able to talk to us about staff positions around the site/server!_