const fs = require("fs");
const path = require("path");
const gTTS = require("gtts-promise");

module.exports = {
  config: {
    name: "tts",
    version: "1.0",
    author: "Aayusha",
    category: "utilities",
    description: "Convert text to speech and send as audio",
  },

  onStart: async ({ message, args }) => {
    const text = args.join(" ");
    if (!text) return message.reply("Please provide the text you want to convert to speech.");

    // Define the output file path
    const filePath = path.join(__dirname, "tts.mp3");

    try {
      // Generate TTS audio
      const tts = new gTTS(text, "en"); // Default language is English
      await tts.save(filePath);

      // Send the audio file
      message.send({
        body: "Here is your speech:",
        attachment: fs.createReadStream(filePath),
      });

      // Cleanup: Delete the file after sending
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error("Error generating TTS:", error);
      message.reply("Sorry, I couldn't generate the audio.");
    }
  },
};