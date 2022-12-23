import { Bot } from "grammy";

require('dotenv').config()

// Create a bot object
const bot = new Bot(process.env.TOKEN || '');

// Register listeners to handle messages
bot.on("message:text", (ctx) => {
    fetch(`https://goweather.herokuapp.com/weather/${ctx.message.text}`)
    .then((response) => response.json())
    .then((body) => {
        console.log(body);
        ctx.reply(`Temperature: ${body.temperature}\nWind: ${body.wind}\nOverall state: ${body.description}`);
    }); 
  
});

// Start the bot (using long polling)
bot.start();
