const ReactionModel = require(`../models/reactionRoleModel`);

module.exports.addReactionRole = async (message, emoji, role) => {
    const reactionRole = await ReactionModel.create({ guildId: message.guild.id, channelId: message.channel.id, messageId: message.id, emoji, roleId: role.id });
    return reactionRole;
}

module.exports.removeReactionRole = async (_id) => {
    const reactionRole = await ReactionModel.findOneAndRemove({ _id });
    return reactionRole;
}

module.exports.getReactionRole = async (message, emoji) => {
    const reactionRole = await ReactionModel.findOne({ guildId: message.guild.id, channelId: message.channel.id,  messageId: message.id, emoji });
    return reactionRole;
}

module.exports.getReactionRoleById = async (_id) => {
    const reactionRole = await ReactionModel.findOne({ _id });
    return reactionRole;
}

module.exports.getReactionRoles = async (guild) => {
    const reactionRoles = await ReactionModel.find({ guildId: guild.id });
    return reactionRoles;
}