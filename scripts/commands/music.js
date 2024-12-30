const axios = require('axios');
const fs = require('fs');
const path = require('path');
const yts = require('yt-search');

module.exports.config = {
  name: "music",
  hasPermission: 0,
  version: "1.0.0",
  category: "Media",
  description: "Get music",
  prefix: true,
  credits: "Jonell Magallanes",
  cooldowns: 7
};
  module.exports.run = async function ({ api, event, args }) {
    if (!args[0]) {
      return api.sendMessage(`❌ Please enter a music name!`, event.threadID);
    }

    const song = args.join(" ");
    let findingMessage;

    try {
      findingMessage = await api.sendMessage(
        `🔍 | Finding "${song}". Please wait...`,
        event.threadID
      );

      const searchResults = await yts(song);
      const firstResult = searchResults.videos[0];

      if (!firstResult) {
        await api.editMessage(
          `❌ | No results found for "${song}".`,
          findingMessage.messageID,
          event.threadID
        );
        return;
      }

      const { title, url } = firstResult;

      await api.editMessage(
        `⏱️ | Music Title found: "${title}". Downloading...`,
        findingMessage.messageID
      );

      const response = await axios.get(
        `https://ccprojectapis.ddns.net/api/music?url=${url}`
      );

      if (!response.data || !response.data.data || !response.data.data.link) {
        throw new Error("Invalid API response while fetching download link.");
      }

      const downloadLink = response.data.data.link;
      const filePath = path.resolve(__dirname, 'cache', `${Date.now()}.mp3`);
      const fileStream = fs.createWriteStream(filePath);

      const responseStream = await axios({
        method: 'get',
        url: downloadLink,
        responseType: 'stream',
      });

      responseStream.data.pipe(fileStream);

      fileStream.on('finish', async () => {
        const stats = fs.statSync(filePath);
        const fileSizeInMB = stats.size / (1024 * 1024);

        if (fileSizeInMB > 25) {
          await api.editMessage(
            `❌ | The file size exceeds the 25MB limit. Unable to send "${title}".`,
            findingMessage.messageID,
            event.threadID
          );
          fs.unlinkSync(filePath);
          return;
        }

        await api.sendMessage(
          {
            body: `🎵 Music Player\nHere is your music for "${song}"\n\nTitle: ${title}\nYouTube Link: ${url}`,
            attachment: fs.createReadStream(filePath),
          },
          event.threadID
        );

        fs.unlinkSync(filePath);
        api.unsendMessage(findingMessage.messageID);
      });

      responseStream.data.on('error', async (error) => {
        console.error(error);
        await api.editMessage(
          `❌ | Error while streaming the file: ${error.message}`,
          findingMessage.messageID,
          event.threadID
        );
        fs.unlinkSync(filePath);
      });
    } catch (error) {
      console.error(error);
      if (findingMessage) {
        await api.editMessage(
          `❌ | An error occurred: ${error.message}`,
          findingMessage.messageID,
          event.threadID
        );
      }
  }
};
