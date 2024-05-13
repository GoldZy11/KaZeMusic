const config = require("./config.js");

if (config.shardManager.shardStatus == true) {
    const { ShardingManager } = require("discord.js");
    console.log(config.TOKEN);
    const manager = new ShardingManager("./bot.js", {
        token: config.TOKEN || process.env.TOKEN,
    });
    manager.on("shardCreate", (shard) =>
        console.log(`Launched shard ${shard.id}`)
    );
    manager.spawn();
} else {
    require("./bot.js");
}
