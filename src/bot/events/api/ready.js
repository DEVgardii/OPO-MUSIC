const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("jano")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold("Is Ready"));

    await client.user.setActivity(`Server ${client.guilds.cache.size} - User ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} | p >>> name music`);
await client.user.setActivity(`By : TOP + STAFF = GARDI ᵖᵏ#1111 `);
    await client.user.setStatus("idle");
}
