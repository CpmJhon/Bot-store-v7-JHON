require("./setting");
const v9 = process.argv.includes("--code");
const v10 = !v9;
const {
  default: makeWASocket,
  downloadContentFromMessage,
  jidNormalizedUser,
  makeWALegacySocket,
  BufferJSON,
  Browsers,
  initInMemoryStore,
  extractMessageContent,
  makeInMemoryStore,
  proto,
  delay,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  jidDecode,
  areJidsSameUser,
  PHONENUMBER_MCC,
  WA_DEFAULT_EPHEMERAL,
  relayMessage,
  getContentType,
  generateWAMessage,
  generateWAMessageContent,
  generateForwardMessageContent,
  generateWAMessageFromContent
} = require("@whiskeysockets/baileys");
const fs2 = require("fs");
const chalk2 = require("chalk");
const pino2 = require("pino");
const pino3 = require("pino");
const figlet2 = require("figlet");
const lodash = require("lodash");
const {
  color
} = require("./lib/console.js");
const readline2 = require("readline");
const {
  serialize,
  fetchJson,
  sleep,
  getBuffer
} = require("./lib/myfunc");
const {
  nocache,
  uncache
} = require("./lib/chache.js");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/Upload_Url");
const v11 = true;
let v12 = JSON.parse(fs2.readFileSync("./database/welcome.json"));
const vF3 = p5 => {
  const v13 = {
    input: process.stdin,
    output: process.stdout
  };
  const v14 = readline2.createInterface(v13);
  return new Promise(p6 => {
    v14.question(p5, p6);
  });
};
const vMakeInMemoryStore = makeInMemoryStore({
  logger: pino2().child({
    level: "silent",
    stream: "store"
  })
});
console.log(chalk2.bold.green(figlet2.textSync("Bot Store", {
  font: "Standard",
  horizontalLayout: "default",
  vertivalLayout: "default",
  whitespaceBreak: false
})));
console.log(chalk2.yellow(chalk2.red("[ Made By CPM_JHON ]") + "\n\n" + chalk2.red("ADMIN MENYEDIAKAN") + "\n" + chalk2.white("-SC BOT TOPUP FULL BUTTON\n-SC BOT TOPUP NO BUTTON\n-SCRIT CREATE PANEL\n-SCRIPT MD\n-SC BOT STORE NO ENC\n\nNO WA: 085894955362\n\n")));
const express2 = require("express");
let vExpress2 = express2();
const {
  createServer
} = require("http");
let vCreateServer = createServer(vExpress2);
let v17 = "invalid";
let v18 = 3000 || 8000 || 8080;
const path2 = require("path");
async function f() {
  const {
    state: _0x1251f9,
    saveCreds: _0x47bd5b
  } = await useMultiFileAuthState("./sessionn");
  let {
    version: _0x213089,
    isLatest: _0x2ca3c3
  } = await fetchLatestBaileysVersion();
  const vMakeWASocket = makeWASocket({
    logger: pino2({
      level: "silent"
    }),
    printQRInTerminal: !v11,
    auth: _0x1251f9,
    browser: ["Chrome (Linux)", "", ""]
  });
  if (v11 && !vMakeWASocket.authState.creds.registered) {
    const v20 = await vF3(color("\n\n\nSilahkan masukin nomor Whatsapp Awali dengan 62:\n", "magenta"));
    const v21 = await vMakeWASocket.requestPairingCode(v20.trim());
    console.log(color(" Kode Pairing Bot Whatsapp kamu :", "gold"), color("" + v21, "red"));
  }
  vMakeWASocket.reply = (p7, p8, p9) => vMakeWASocket.sendMessage(p7, {
    text: p8
  }, {
    quoted: p9
  });
  vMakeWASocket.ev.on("group-participants.update", async p10 => {
    const v22 = v12.includes(p10.id);
    const v23 = await vMakeWASocket.groupMetadata(p10.id);
    for (let v24 of p10.participants) {
      try {
        let v25 = await vMakeWASocket.groupMetadata(p10.id);
        let v26 = p10.participants;
        for (let v27 of v26) {
          if (p10.action == "demote") {
            const v28 = {
              buttonId: "!text_grup",
              buttonText: {},
              type: 1
            };
            v28.buttonText.displayText = "Selamat🎉";
            var v35 = [v28];
            await vMakeWASocket.sendMessage(p10.id, {
              text: "*@" + v27.split("@")[0] + " Turun jabatan menjadi member biasa*",
              footer: v25.subject,
              mentions: [v27]
            });
          } else if (p10.action == "promote") {
            const v30 = {
              buttonId: "!text_grup",
              buttonText: {},
              type: 1
            };
            v30.buttonText.displayText = "Selamat🎉";
            var v35 = [v30];
            await vMakeWASocket.sendMessage(p10.id, {
              text: "*@" + v27.split("@")[0] + " Naik jabatan jadi admin grup*",
              footer: v25.subject,
              mentions: [v27]
            });
          } else if (p10.action == "add" && v22) {
            console.log(p10);
            const v32 = {
              buttonId: "!text_grup",
              buttonText: {},
              type: 1
            };
            v32.buttonText.displayText = "Welcome👋";
            var v35 = [v32];
            await vMakeWASocket.sendMessage(p10.id, {
              text: "╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Welcome To " + v25.subject + "* \n└┬────────────┾•ิ.•┽\n┌┤Haii👋 @" + v27.split("@")[0] + "\n││ \n││——[ *ɪɴᴛʀᴏ* ]——\n││ 📛ɴᴀᴍᴀ:\n││ 📅ᴜᴍᴜʀ:\n││ ⚽ʜᴏʙɪ:\n││ 🏢ᴀsᴋᴏᴛ: \n└────────────┾•ิ.•┽",
              footer: v25.subject,
              mentions: [v27]
            });
          } else if (p10.action == "remove" && v22) {
            console.log(p10);
            const v34 = {
              buttonId: "!text_grup",
              buttonText: {},
              type: 1
            };
            v34.buttonText.displayText = "Bye👋";
            var v35 = [v34];
            await vMakeWASocket.sendMessage(p10.id, {
              text: "╭━━━━━━━━━━━━━━━┅•ิ.•ஐ\n│ *📌Leave To " + v25.subject + "* \n└┬────────────┾•ิ.•┽\n┌┤Sayonara👋 @" + v27.split("@")[0] + "\n││ \n└────────────┾•ิ.•┽",
              footer: v25.subject,
              mentions: [v27]
            });
          }
        }
      } catch (_0x47cef6) {
        console.log(_0x47cef6);
      }
    }
  });
  vMakeWASocket.ev.on("connection.update", ({
    connection: _0x20e417
  }) => {
    if (_0x20e417 === "open") {
      console.log("CONNECTION OPEN (" + vMakeWASocket.user?.id.split(":")[0] + ")");
    }
    if (_0x20e417 === "close") {
      console.log("Connection closed, Hapus File Sesion dan Tautan ulang");
      f();
    }
    if (_0x20e417 === "connecting") {
      if (vMakeWASocket.user) {
        console.log("CONECTION FOR (" + vMakeWASocket.user?.id.split(":")[0] + ")");
      } else if (!v10 && !v9) {
        console.log("CONNECTION Autentikasi Dibutuhkan\nGunakan Perintah [36mnpm start[0m untuk terhubung menggunakan nomor telepon");
      }
    }
  });
  vMakeInMemoryStore.bind(vMakeWASocket.ev);
  vMakeWASocket.ev.on("messages.upsert", async p11 => {
    var v36 = p11.messages[0];
    if (!p11.messages) {
      return;
    }
    if (v36.key && v36.key.remoteJid == "status@broadcast") {
      return;
    }
    v36 = serialize(vMakeWASocket, v36);
    v36.isBaileys = v36.key.id.startsWith("BAE5") || v36.key.id.startsWith("3EB0");
    require("./index")(vMakeWASocket, v36, p11, vMakeInMemoryStore);
  });
  vMakeWASocket.ev.process(async p12 => {
    if (p12["presence.update"]) {
      await vMakeWASocket.sendPresenceUpdate("available");
    }
    if (p12["messages.upsert"]) {
      const v37 = p12["messages.upsert"];
      for (let v38 of v37.messages) {
        if (v38.key.remoteJid === "status@broadcast") {
          if (v38.message?.protocolMessage) {
            return;
          }
          await delay(3000);
          await vMakeWASocket.readMessages([v38.key]);
        }
      }
    }
    if (p12["creds.update"]) {
      await _0x47bd5b();
    }
  });
  vMakeWASocket.sendImage = async (p13, p14, p15 = "", p16 = "", p17) => {
    let v39 = Buffer.isBuffer(p14) ? p14 : /^data:.*?\/.*?;base64,/i.test(p14) ? Buffer.from(p14.split`,`[1], "base64") : /^https?:\/\//.test(p14) ? await await getBuffer(p14) : fs2.existsSync(p14) ? fs2.readFileSync(p14) : Buffer.alloc(0);
    const v40 = {
      image: v39,
      caption: p15,
      ...p17
    };
    const v41 = {
      quoted: p16
    };
    return await vMakeWASocket.sendMessage(p13, v40, v41);
  };
  vMakeWASocket.decodeJid = p18 => {
    if (!p18) {
      return p18;
    }
    if (/:\d+@/gi.test(p18)) {
      let v42 = jidDecode(p18) || {};
      return v42.user && v42.server && v42.user + "@" + v42.server || p18;
    } else {
      return p18;
    }
  };
  vMakeWASocket.sendImageAsSticker = async (p19, p20, p21, p22 = {}) => {
    let v43 = Buffer.isBuffer(p20) ? p20 : /^data:.*?\/.*?;base64,/i.test(p20) ? Buffer.from(p20.split`,`[1], "base64") : /^https?:\/\//.test(p20) ? await await getBuffer(p20) : fs2.existsSync(p20) ? fs2.readFileSync(p20) : Buffer.alloc(0);
    let v44;
    if (p22 && (p22.packname || p22.author)) {
      v44 = await writeExifImg(v43, p22);
    } else {
      v44 = await imageToWebp(v43);
    }
    const v45 = {
      url: v44
    };
    const v46 = {
      sticker: v45,
      ...p22
    };
    const v47 = {
      quoted: p21
    };
    await vMakeWASocket.sendMessage(p19, v46, v47).then(p23 => {
      fs2.unlinkSync(v44);
      return p23;
    });
  };
  vMakeWASocket.sendVideoAsSticker = async (p24, p25, p26, p27 = {}) => {
    let v48 = Buffer.isBuffer(p25) ? p25 : /^data:.*?\/.*?;base64,/i.test(p25) ? Buffer.from(p25.split`,`[1], "base64") : /^https?:\/\//.test(p25) ? await await getBuffer(p25) : fs2.existsSync(p25) ? fs2.readFileSync(p25) : Buffer.alloc(0);
    let v49;
    if (p27 && (p27.packname || p27.author)) {
      v49 = await writeExifVid(v48, p27);
    } else {
      v49 = await videoToWebp(v48);
    }
    const v50 = {
      url: v49
    };
    const v51 = {
      sticker: v50,
      ...p27
    };
    const v52 = {
      quoted: p26
    };
    await vMakeWASocket.sendMessage(p24, v51, v52).then(p28 => {
      fs2.unlinkSync(v49);
      return p28;
    });
  };
  return vMakeWASocket;
}
f().catch(p29 => console.log(p29));