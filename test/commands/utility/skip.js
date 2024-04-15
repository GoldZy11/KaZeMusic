const { SlashCommandBuilder } = require("discord.js");
const { useQueue } = require("discord-player");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skip current song"),

    async execute(interaction) {
        const queue = useQueue(interaction.guildId);

        if (!queue?.isPlaying()) {
            return interaction.reply("I am not playing anything right now"); // make sure we have a voice channel
        }

        const channel = interaction.member.voice.channel;
        if (!channel)
            return interaction.reply(
                "You are not connected to a voice channel!"
            ); // make sure we have a voice channel
        if (null) return interaction.reply("No hay canciones en la cola"); // make sure we have a voice channel

        try {
            queue.node.skip();

            return interaction.reply("Track skiped"); // make sure we have a voice channel
        } catch (e) {
            // let's return error if something failed
            return interaction.followUp(`Something went wrong: ${e}`);
        }
    },
};
