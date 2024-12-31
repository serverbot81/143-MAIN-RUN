module.exports.config = {
  name: "goiayat",
  version: "1.0.0-beta-fixbyDungUwU",
  permssion: 0,
  prefix: false,
  usePrefix: true,
  commandCategory: "no",
  premium: false,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552753090872","61552753090872","61552753090872") {
    var aid = ["61552753090872","61552753090872","61552753090872"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗔𝘆𝗮𝗮𝘁 𝗮𝗸𝗵𝗼𝗻 𝗯𝘂𝘀𝘆 𝗮𝗰𝗲 ,𝗦𝗼𝗻𝗱𝗼𝗿𝗶 𝘀𝗼𝗻𝗱𝗼𝗿𝗶 𝗺𝗲𝘆𝗲 𝗿𝗮 𝘀𝗼𝗱𝗼 𝗶𝗻𝗯𝗼𝘅 𝗲 𝗺𝘀𝗴 𝗱𝗮𝘄😘", "𝘼𝙮𝙖𝙩  𝙠𝙚 𝙈𝙚𝙣𝙩𝙞𝙤𝙣 𝙙𝙖𝙬 𝙠𝙚𝙣𝙤, 𝙈𝙚𝙣𝙩𝙞𝙤𝙣 𝙣𝙖 𝙙𝙞𝙮𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠𝙚 𝙍𝙚𝙦𝙪𝙚𝙨𝙩 𝙙𝙞𝙡𝙚𝙞 𝙩𝙤 𝙥𝙖𝙧𝙤", "𝘼𝙧 𝙚𝙠𝙗𝙖𝙧 𝙢𝙚𝙣𝙩𝙞𝙤𝙣  𝙙𝙞𝙡𝙚 𝙠𝙞𝙙𝙣𝙖𝙥𝙥 𝙠𝙤𝙧𝙚 𝙣𝙞𝙮𝙚 𝙖𝙨𝙗𝙚 𝙖𝙮𝙖𝙖𝙩 😒", "𝘛𝘶𝘮𝘢𝘬𝘦 𝘢𝘺𝘢𝘢𝘵  𝘐 𝘭𝘰𝘷𝘦 𝘺𝘰𝘶 𝘣𝘰𝘭𝘤𝘩𝘦 🙂. 𝘊𝘩𝘪𝘱𝘢𝘺 𝘫𝘦𝘺𝘦  𝘳𝘦𝘱𝘭𝘺 𝘥𝘢𝘸", "𝙾𝚛𝚎 𝚖𝚎𝚗𝚝𝚒𝚘𝚗  𝚍𝚒𝚕𝚎 𝙹𝚘𝚛𝚖𝚒𝚖𝚊𝚗𝚊 𝚑𝚒𝚜𝚊𝚋𝚎 2 𝚝𝚊 𝚔𝚒𝚜𝚜 😒 (𝚖𝚎𝚢𝚎 𝚍𝚎𝚛 𝚓𝚘𝚗𝚗𝚘)"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
