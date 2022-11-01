const { Client, Intents } = require('discord.js');
const express = require("express");
const client = new Client({ intents: [
Intents.FLAGS.GUILDS, 
] 
  });




client.on('ready', async () => { console.log(`The`,client.user.tag,`is Online`);})

client.on('ready', async () => {
client.user.setPresence({status: "Idle" } )
client.user.setActivity( {type: "PLAYING", url: "https://www.twitch.tv/@#£"}, {name: "Under Development By xala abo "} ) 

   })
   
client.login("ODAyOTI3NTMzMDcwMzUyNDI1.Gd7sap.HUrRpCkT0ubX4wwNwdx9ObJh89fReYssBhe2yY")
