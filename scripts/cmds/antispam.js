module.exports = {
  config: {
    name: "AntiSpamKick",
    version: "1.0.0",
    author: "Your Name",
    countDown: 60, // Cooldown time in seconds
    kickThreshold: 5, // Number of messages before kick
    role: ["Admin", "Moderator"],
    shortDescription: {
      en: "Anti-spam and kick users",
    },
    longDescription: {
      en: "Prevent users from sending messages too quickly and kick them from the group if they violate the rules",
    },
    category: "Admin",
    guide: {
      en: "{pn} (text)",
    },
  },
  onStart: async function ({ args, message, api }) {
    try {
      if (!message.senderID in this.data.users) {
        this.data.users[message.senderID] = {
          lastMessageTime: 0,
          messageCount: 0,
        };
      }

      const currentTime = Date.now();
      const timeDiff = currentTime - this.data.users[message.senderID].lastMessageTime;

      if (timeDiff < this.config.countDown * 1000) {
        this.data.users[message.senderID].messageCount++;

        if (this.data.users[message.senderID].messageCount >= this.config.kickThreshold) {
          // Kick the user from the group
          await api.removeUserFromGroup(message.threadID, message.senderID);

          // Optionally send a message to the group about the kick
          await api.sendMessage(
            `User ${message.senderID} has been kicked from the group for violating the anti-spam rules.`,
            message.threadID,
            message.threadID
          );

          // Delete the user's data
          delete this.data.users[message.senderID];
        }
      } else {
        this.data.users[message.senderID].messageCount = 0;
      }

      this.data.users[message.senderID].lastMessageTime = currentTime;
    } catch (error) {
      console.error("Error in AntiSpamKick plugin:", error);
    }
  },
};
