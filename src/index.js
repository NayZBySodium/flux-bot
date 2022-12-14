// Variable d'environnement de dév
// require(`dotenv`).config({ path: `.env` });

const { Client, Collection, User, Partials } = require("discord.js");

const client = new Client({ partials: [Partials.Reaction, Partials.Message, Partials.Channel], intents: 3276799 });
client.commands = new Collection();
client.slashCommands = [];
client.buttons = new Collection();
client.selectMenus = new Collection();
client.bypass = new Collection();

// Base de donnés
require(`./database/mongodb`);


// Handler
require(`./handlers/commandsHandler`)(client);
require(`./handlers/eventsHandler`)(client);
require(`./handlers/componentsHandler`)(client);
require(`./handlers/taskHandler`)(client);
client.handleCommands();
client.handleEvents();
client.handleComponents();
client.handleTempbans();

// Se connecter à l'API de discord
client.login(process.env.DISCORD_TOKEN);