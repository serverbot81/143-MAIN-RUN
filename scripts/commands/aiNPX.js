const axios = require("axios");
const baseApiUrl = async () => {
  const base = await axios.get(
`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

const languagesMap = {
  ar: "arabic",
  bn: "bangla",
  en: "english",
  hi: "hindi",
  id: "indonesian",
  ne: "nepali",
  tl: "tagalog",
  te: "telugu",
  ur: "urdu",
  vi: "vietnamese" 
};

// Default language set Bangla
const shortLang = "en"; 

// You can change this language to your preferred language code
// Example:
// const shortLang = "hi"; // For Hindi
// const shortLang = "en"; // For English

const lang = languagesMap[shortLang];

module.exports.config = {
  name: "gpt",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: false,
  description: "create a new post in acc bot",
  category: "operator",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.type == "message_reply") {
    const reply = event.body.toLowerCase();
    if (isNaN(reply)) {
   /* const response = await axios.get(
        `${await baseApiUrl()}/baby?text=${encodeURIComponent(reply)}&language=${lang}`,
      );*/ 
      var tanvirBot = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const response = await axios.get(
        `https://ccprojectapis.ddns.net/api/gptconvo?ask=${encodeURIComponent(reply)}&id=${tanvirBot}`,
      );
      const ok = response.data.reply;
      await api.sendMessage(
        ok,
        event.threadID,
        (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: ok,
          });
        },
        event.messageID,
      );
    }
  }
};
module.exports.run = async function ({ api, args, event }) {
  try {
    const dipto = args.join(" ").toLowerCase();
    if (!args[0]) {
      api.sendMessage(
        "হুম সোনা বলো গো🥵🙈🤐",
        event.threadID,
        event.messageID,
      );
      return;
    }
    if (dipto) {
      /* const response = await axios.get(`${await baseApiUrl()}/baby?text=${dipto}&language=${lang}`);*/
      const response = await axios.get(`https://ccprojectapis.ddns.net/api/gptconvo?ask=${dipto}&id=${tanvirBot}`);
      const mg = response.data.reply;
      await api.sendMessage(
        { body: mg },
        event.threadID,
        (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: mg,
          });
        },
        event.messageID,
      );
    }
  } catch (error) {
    console.error(`Failed to get an answer: ${error.message}`);
    api.sendMessage(
      `${error.message}.\nAn error`,
      event.threadID,
      event.messageID,
    );
  }
};
