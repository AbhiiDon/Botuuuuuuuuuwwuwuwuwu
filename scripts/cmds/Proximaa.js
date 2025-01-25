module.exports = {
  config: {
    name: "Bot",
    version: "1.0",
    author: "Abhii",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function () {},

  onChat: async function ({ event, message, api, usersData }) {
    if (event.body && event.body.toLowerCase().includes("proxima")) {
      try {
        const id = event.senderID;
        const userData = await usersData.get(id);
        const name = userData.name;
        const ment = [{ id: id, tag: name }];

        const replies = [
          `${name},Love me like hancock loves luffy🤍😭`,
          `Hello, ${name}! Need something from the ownner? Let me know. 🌟`,
          ` ${name}, Bol Bache 🤨`,
          `${name}, Bot Heree!!`,
          `Hi,${name}! I am developed by Mr Abhii. 🐥💜`,
        ];

        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        api.setMessageReaction("💋", event.messageID, () => {}, true);

        return message.reply({
          body: randomReply,
          mentions: ment,
        });
      } catch (error) {
        console.error("Error setting reaction or sending reply:", error);
      }
    }
  },
};
