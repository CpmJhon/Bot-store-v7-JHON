//SCRIPT ENC, BUY NO ENC MURAH
//CUMA 19K BISA MENDAPATKAN SCRIPT NO ENC
//BISA AKSES FUKL KE SCRIPT INI 
//CHAT WA ADMIN
//085791220179
require("./setting");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  proto,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  getAggregateVotesInPollMessage,
  downloadContentFromMessage,
  generateWAMessage,
  generateWAMessageFromContent,
  MessageType,
  buttonsMessage
} = require("@whiskeysockets/baileys");
const {
  exec,
  spawn
} = require("child_process");
const {
  color,
  bgcolor,
  pickRandom,
  randomNomor
} = require("./lib/console.js");
const {
  isUrl,
  getRandom,
  getGroupAdmins,
  runtime,
  sleep,
  reSize,
  makeid,
  fetchJson,
  getBuffer
} = require("./lib/myfunc");
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList
} = require("./lib/all-function");
const {
  addResponTesti,
  delResponTesti,
  isAlreadyResponTesti,
  sendResponTesti,
  updateResponTesti,
  getDataResponTesti
} = require("./lib/all-function");
const {
  addResponProduk,
  delResponProduk,
  resetProdukAll,
  isAlreadyResponProduk,
  sendResponProduk,
  updateResponProduk,
  getDataResponProduk
} = require("./lib/all-function");
const {
  isSetDone,
  addSetDone,
  removeSetDone,
  changeSetDone,
  getTextSetDone
} = require("./lib/all-function");
const {
  isSetProses,
  addSetProses,
  removeSetProses,
  changeSetProses,
  getTextSetProses
} = require("./lib/all-function");
const {
  addSewaGroup,
  getSewaExpired,
  getSewaPosition,
  expiredCheck,
  checkSewaGroup
} = require("./lib/all-function");
const {
  remini
} = require("./lib/scraper2");
const ms2 = require("ms");
const fs2 = require("fs");
const ms3 = require("ms");
const chalk2 = require("chalk");
const axios2 = require("axios");
const colorsSafe = require("colors/safe");
const fluentFfmpeg = require("fluent-ffmpeg");
const momentTimezone = require("moment-timezone");
const {
  UploadFileUgu
} = require("./lib/Upload_Url");
const v10 = JSON.parse(fs2.readFileSync("./database/antilink.json"));
const v11 = JSON.parse(fs2.readFileSync("./database/antilink2.json"));
const v12 = JSON.parse(fs2.readFileSync("./mess.json"));
const v13 = JSON.parse(fs2.readFileSync("./database/welcome.json"));
const v14 = JSON.parse(fs2.readFileSync("./database/error.json"));
const v15 = JSON.parse(fs2.readFileSync("./database/list.json"));
const v16 = JSON.parse(fs2.readFileSync("./database/list-testi.json"));
const v17 = JSON.parse(fs2.readFileSync("./database/list-produk.json"));
let v18 = JSON.parse(fs2.readFileSync("./database/set_done.json"));
let v19 = JSON.parse(fs2.readFileSync("./database/set_proses.json"));
const v20 = JSON.parse(fs2.readFileSync("./database/sewa.json"));
momentTimezone.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async (p5, p6, p7, p8, p9) => {
  try {
    const {
      type: _0xfe300c,
      quotedMsg: _0x4d2643,
      mentioned: _0x295dd5,
      now: _0x182ff7,
      fromMe: _0x407336,
      isBaileys: _0x402756
    } = p6;
    if (p6.isBaileys) {
      return;
    }
    const v21 = momentTimezone.tz("asia/jakarta").format("HH:mm:ss");
    const v22 = momentTimezone().tz("Asia/Jakarta").format("ll");
    let v23 = momentTimezone(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const v24 = "Selamat " + v23.charAt(0).toUpperCase() + v23.slice(1);
    const v25 = JSON.stringify(p6.message);
    const v26 = p6.key.remoteJid;
    const v27 = momentTimezone(new Date()).format("HH:mm");
    var v28 = _0xfe300c === "conversation" && p6.message.conversation ? p6.message.conversation : _0xfe300c === "imageMessage" && p6.message.imageMessage.caption ? p6.message.imageMessage.caption : _0xfe300c === "videoMessage" && p6.message.videoMessage.caption ? p6.message.videoMessage.caption : _0xfe300c === "extendedTextMessage" && p6.message.extendedTextMessage.text ? p6.message.extendedTextMessage.text : _0xfe300c === "buttonsResponseMessage" && _0x4d2643.fromMe && p6.message.buttonsResponseMessage.selectedButtonId ? p6.message.buttonsResponseMessage.selectedButtonId : _0xfe300c === "templateButtonReplyMessage" && _0x4d2643.fromMe && p6.message.templateButtonReplyMessage.selectedId ? p6.message.templateButtonReplyMessage.selectedId : _0xfe300c === "messageContextInfo" ? p6.message.buttonsResponseMessage?.selectedButtonId || p6.message.listResponseMessage?.singleSelectReply.selectedRowId : _0xfe300c == "listResponseMessage" && _0x4d2643.fromMe && p6.message.listResponseMessage.singleSelectReply.selectedRowId ? p6.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    if (v28 == undefined) {
      v28 = "";
    }
    const v29 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(v28) ? v28.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : "#";
    const v30 = p6.key.remoteJid.endsWith("@g.us");
    const v31 = v30 ? p6.key.participant ? p6.key.participant : p6.participant : p6.key.remoteJid;
    const v32 = ["" + global.ownerNumber, "6285791220179@s.whatsapp.net", "6285806240904@s.whatsapp.net"].includes(v31) ? true : false;
    const v33 = p6.pushName;
    const v34 = v28.startsWith(v29) ? v28 : "";
    const v35 = _0xfe300c === "conversation" ? p6.message.conversation : _0xfe300c === "extendedTextMessage" ? p6.message.extendedTextMessage.text : "";
    const v36 = v34.trim().split(/ +/).slice(1);
    const v37 = v36.join(" ");
    const v38 = v34.startsWith(v29);
    const v39 = v34.slice(1).trim().split(/ +/).shift().toLowerCase();
    const v40 = v38 ? v34.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
    const v41 = p5.user.id.split(":")[0] + "@s.whatsapp.net";
    const v42 = v30 ? await p5.groupMetadata(v26) : "";
    const v43 = v30 ? v42.subject : "";
    const v44 = v30 ? v42.id : "";
    const v45 = v30 ? await v42.participants : "";
    const v46 = v30 ? v42.participants : "";
    const v47 = v30 ? getGroupAdmins(v46) : "";
    const v48 = v47.includes(v41) || false;
    const v49 = v47.includes(v31);
    const v50 = v10.includes(v26) ? true : false;
    const v51 = v11.includes(v26) ? true : false;
    const v52 = v30 ? v13.includes(v26) : false;
    const vCheckSewaGroup = checkSewaGroup(v26, v20);
    const v53 = p6.quoted ? p6.quoted : p6;
    const v54 = _0xfe300c == "imageMessage";
    const v55 = _0xfe300c == "extendedTextMessage";
    const v56 = _0xfe300c === "imageMessage" || _0xfe300c === "videoMessage";
    const v57 = v55 ? v25.includes("imageMessage") ? true : false : false;
    const v58 = _0xfe300c == "videoMessage";
    const v59 = v55 ? v25.includes("videoMessage") ? true : false : false;
    const v60 = _0xfe300c == "stickerMessage";
    const v61 = v55 ? v25.includes("stickerMessage") ? true : false : false;
    const v62 = v55 ? v25.includes("audioMessage") ? true : false : false;
    var v63 = _0xfe300c === "buttonsResponseMessage" ? p6.message.buttonsResponseMessage.selectedButtonId : "";
    var v64 = _0xfe300c === "messageContextInfo" ? p6.message.buttonsResponseMessage?.selectedButtonId || p6.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    const v65 = v63.length !== 0 ? v63 : v64;
    var v66 = _0xfe300c === "listResponseMessage" ? p6.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    var v67 = _0xfe300c === "messageContextInfo" ? p6.message.buttonsResponseMessage?.selectedButtonId || p6.message.listResponseMessage?.singleSelectReply.selectedRowId : "";
    const v68 = v66.length !== 0 ? v66 : v67;
    function f(p10, p11 = [], p12) {
      if (p12 == null || p12 == undefined || p12 == false) {
        const v69 = {
          text: p10,
          mentions: p11
        };
        let v70 = p5.sendMessage(v26, v69);
        return v70;
      } else {
        const v71 = {
          text: p10,
          mentions: p11
        };
        const v72 = {
          quoted: p6
        };
        let v73 = p5.sendMessage(v26, v71, v72);
        return v73;
      }
    }
    const v74 = _0xfe300c == "extendedTextMessage" && p6.message.extendedTextMessage.contextInfo != null ? p6.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const v75 = _0xfe300c == "extendedTextMessage" && p6.message.extendedTextMessage.contextInfo != null ? p6.message.extendedTextMessage.contextInfo.participant || "" : "";
    const v76 = typeof v74 == "string" ? [v74] : v74;
    if (v76 != undefined) {
      v76.push(v75);
    } else {
      [];
    }
    const v77 = v76 != undefined ? v76.filter(p13 => p13) : [];
    async function f2(p14, p15) {
      if (p14 === "image") {
        var v87 = await downloadContentFromMessage(p6.message.imageMessage || p6.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, "image");
        let v79 = Buffer.from([]);
        for await (const v80 of v87) {
          v79 = Buffer.concat([v79, v80]);
        }
        fs2.writeFileSync(p15, v79);
        return p15;
      } else if (p14 === "video") {
        var v87 = await downloadContentFromMessage(p6.message.videoMessage || p6.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, "video");
        let v82 = Buffer.from([]);
        for await (const v83 of v87) {
          v82 = Buffer.concat([v82, v83]);
        }
        fs2.writeFileSync(p15, v82);
        return p15;
      } else if (p14 === "sticker") {
        var v87 = await downloadContentFromMessage(p6.message.stickerMessage || p6.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, "sticker");
        let v85 = Buffer.from([]);
        for await (const v86 of v87) {
          v85 = Buffer.concat([v85, v86]);
        }
        fs2.writeFileSync(p15, v85);
        return p15;
      } else if (p14 === "audio") {
        var v87 = await downloadContentFromMessage(p6.message.audioMessage || p6.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, "audio");
        let v88 = Buffer.from([]);
        for await (const v89 of v87) {
          v88 = Buffer.concat([v88, v89]);
        }
        fs2.writeFileSync(p15, v88);
        return p15;
      }
    }
    function f3(p16) {
      return new Promise(async (p17, p18) => {
        const {
          ImageUploadService: _0x2d1a42
        } = require("node-upload-images");
        const v90 = new _0x2d1a42("pixhost.to");
        try {
          let {
            directLink: _0x583671
          } = await v90.uploadFromBinary(fs2.readFileSync(p16), "ramagnz.jpg");
          let v91 = _0x583671.toString();
          return p17(v91);
        } catch (_0x24b872) {
          return p18(new Error(String(_0x24b872)));
        }
      });
    }
    const vF4 = p19 => {
      const v92 = {
        text: p19
      };
      const v93 = {
        quoted: p6
      };
      p5.sendMessage(v26, v92, v93);
    };
    if (v30 && v50 && v48) {
      if (v28.includes("https://chat.whatsapp.com/") || v28.includes("http://chat.whatsapp.com/")) {
        if (!v48) {
          return vF4("Untung bot bukan admin");
        }
        if (v32) {
          return vF4("Untung lu owner ku:v😙");
        }
        if (v49) {
          return vF4("Admin grup mah bebas ygy🤭");
        }
        if (_0x407336) {
          return vF4("bot bebas Share link");
        }
        const _0x10ab41 = {
          delete: p6.key
        };
        await p5.sendMessage(v26, _0x10ab41);
        vF4("*「 GROUP LINK DETECTOR 」*\n\nTerdeteksi mengirim link group,Maaf sepertinya kamu akan di kick");
        p5.groupParticipantsUpdate(v26, [v31], "remove");
      }
    }
    if (v30 && v51 && v48) {
      if (v28.includes("https://chat.whatsapp.com/") || v28.includes("http://chat.whatsapp.com/")) {
        if (!v48) {
          return vF4("Untung bot bukan admin");
        }
        if (v32) {
          return vF4("Untung lu owner ku:v😙");
        }
        if (v49) {
          return vF4("Admin grup mah bebas ygy🤭");
        }
        if (_0x407336) {
          return vF4("bot bebas Share link");
        }
        const _0x213351 = {
          delete: p6.key
        };
        await p5.sendMessage(v26, _0x213351);
        vF4("*「 GROUP LINK DETECTOR 」*\n\nTerdeteksi mengirim link group");
      }
    }
    if (!v40 && v30 && isAlreadyResponList(v26, v28, v15)) {
      var vGetDataResponProduk = getDataResponList(v26, v28, v15);
      if (vGetDataResponProduk.isImage === false) {
        const v94 = {
          quoted: p6
        };
        p5.sendMessage(v26, {
          text: sendResponList(v26, v28, v15)
        }, v94);
      } else {
        const v95 = {
          quoted: p6
        };
        p5.sendMessage(v26, {
          image: await getBuffer(vGetDataResponProduk.image_url),
          caption: vGetDataResponProduk.response
        }, v95);
      }
    }
    if (!v30 && isAlreadyResponTesti(v28, v16)) {
      var vGetDataResponProduk = getDataResponTesti(v28, v16);
      const v96 = {
        url: vGetDataResponProduk.image_url
      };
      const v97 = {
        image: v96,
        caption: vGetDataResponProduk.response
      };
      const v98 = {
        quoted: p6
      };
      p5.sendMessage(v26, v97, v98);
    }
    if (!v30 && isAlreadyResponProduk(v28, v17)) {
      var vGetDataResponProduk = getDataResponProduk(v28, v17);
      const v99 = {
        url: vGetDataResponProduk.image_url
      };
      const v100 = {
        image: v99,
        caption: vGetDataResponProduk.response
      };
      const v101 = {
        quoted: p6
      };
      p5.sendMessage(v26, v100, v101);
    }
    if (p6.isGroup) {
      expiredCheck(p5, v20);
    }
    const vF5 = (p20, p21, p22, p23, p24) => {
      let v102 = p21.replace(/[^0-9]/g, "");
      const v103 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + p22 + "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" + v102 + ":+" + v102 + "\nEND:VCARD";
      const v104 = {
        vcard: v103
      };
      const v105 = {
        displayName: p22,
        contacts: [v104]
      };
      const v106 = {
        contacts: v105,
        mentions: p24 ? p24 : []
      };
      const v107 = {
        quoted: p23
      };
      return p5.sendMessage(v26, v106, v107);
    };
    function f4() {
      try {
        const v108 = fs2.readFileSync("database/sewa.json", "utf-8");
        return JSON.parse(v108);
      } catch (_0x4be21b) {
        console.error("Error di bagian sewa.json", _0x4be21b);
        return [];
      }
    }
    async function f5(p25) {
      try {
        let v109 = await p5.groupMetadata(p25);
        return v109.subject;
      } catch (_0x3e3d64) {
        return "-";
      }
    }
    function f6(p26) {
      temp = p26;
      days = Math.floor(p26 / 86400000);
      daysms = p26 % 86400000;
      hours = Math.floor(daysms / 3600000);
      hoursms = p26 % 3600000;
      minutes = Math.floor(hoursms / 60000);
      minutesms = p26 % 60000;
      sec = Math.floor(minutesms / 1000);
      return days + " Days " + hours + " Hours " + minutes + " Minutes";
    }
    const v111 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(v26 ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v112 = {
      key: v111,
      message: {
        contactMessage: {
          displayName: "Bot Created By " + global.ownerName + "\n",
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;" + global.botName + ",;;;\nFN:Halo " + v33 + ",\nitem1.TEL;waid=" + v31.split("@")[0] + ":" + v31.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          jpegThumbnail: {
            url: "" + global.qris
          }
        }
      }
    };
    function f7(p27 = "") {
      return [...p27.matchAll(/@([0-9]{5,16}|0)/g)].map(p28 => p28[1] + "@s.whatsapp.net");
    }
    if (v30 && v40) {
      console.log(colorsSafe.green.bold("[Group]") + " " + colorsSafe.brightCyan(v27) + " " + colorsSafe.black.bgYellow(v39) + " " + colorsSafe.green("from") + " " + colorsSafe.blue(v43));
    }
    if (!v30 && v40) {
      console.log(colorsSafe.green.bold("[Private]") + " " + colorsSafe.brightCyan(v27) + " " + colorsSafe.black.bgYellow(v39) + " " + colorsSafe.green("from") + " " + colorsSafe.blue(v33));
    }
    switch (v39) {
      case "help":
      case "menu":
        {
          const v113 = "0@s.whatsapp.net";
          const v114 = String.fromCharCode(8206);
          const v115 = v114.repeat(4001);
          let v116 = "" + pickRandom(["⭔", "⌬", "〆", "»"]);
          var v117 = "Creator by - " + global.ownerName;
          var v118 = "./SCRIPT BY Cpm_Jhon";
          let v119 = "━━━━━[ " + global.botName + " ]━━━━━\n\n\n┏━━━『 𝘿𝘼𝙏𝘼 𝘽𝙊𝙏 』━━━━━◧\n┃\n┣» ᴄʀᴇᴀᴛᴏʀ : @" + global.kontakOwner + "\n┣» ʙᴏᴛ ɴᴀᴍᴇ : " + global.botName + "\n┣» ᴏᴡɴᴇʀ ɴᴀᴍᴇ : " + global.ownerName + " \n┣» ʀᴜɴɴɪɴɢ : ᴘᴀɴᴇʟ\n┃\n┗━◧\n\n\n┏           『 𝙇𝙞𝙨𝙩 𝙈𝙚𝙣𝙪 』           ◧\n\n" + v116 + " .allmenu       ⭐\n" + v116 + " .pay\n" + v116 + " .testi\n" + v116 + " .produk\n" + v116 + " .kalkulator\n" + v116 + " .script\n" + v116 + " .owner\n" + v116 + " .donasi\n" + v116 + " .ffstalk\n" + v116 + " .mlstalk\n\n┗━◧";
          const v120 = {
            text: v119
          };
          const v121 = {
            quoted: v112
          };
          p5.sendMessage(v26, v120, v121);
        }
        break;
      case "allmenu":
        {
          let v122 = "" + pickRandom(["⭔", "⌬", "〆", "»"]);
          let v123 = "\n───「 *⭐ALL MENU⭐* 」───\n\t\n\t\n┏           『 𝙈𝙖𝙞𝙣 𝙈𝙚𝙣𝙪 』           ◧\n\n " + v122 + " .ffstalk\n" + v122 + " .mlstalk\n" + v122 + " .tiktok\n" + v122 + " .tiktokaudio\n" + v122 + " .produk\n" + v122 + " .listproduk\n" + v122 + " .donasi\n" + v122 + " .ping\n" + v122 + " .test\n" + v122 + " .pay\n" + v122 + " .pembayaran \n" + v122 + " .script\n" + v122 + " .sticker \n\n┗━◧\n\n\n┏           『 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪 』           ◧\n\n" + v122 + " .ceksewa\n " + v122 + " .hidetag\n" + v122 + " .group open\n" + v122 + " .group close \n" + v122 + " .antilink (kick)\n" + v122 + " .antilink2 (no kick)\n" + v122 + " .welcome on\n" + v122 + " .welcome off\n" + v122 + " .kick \n" + v122 + " .proses\n" + v122 + " .done\n" + v122 + " .setdone\n" + v122 + " .delsetdone\n" + v122 + " .changedone\n" + v122 + " .setproses\n" + v122 + " .delsetproses\n" + v122 + " .changeproses\n" + v122 + " .linkgc\n" + v122 + " .tagall\n" + v122 + " .fitnah\n" + v122 + " .revoke\n" + v122 + " .delete\n\n " + v122 + " .addlist (Support image)\n" + v122 + " .dellist\n" + v122 + " .list \n" + v122 + " .shop\n" + v122 + " .hapuslist\n\n┗━◧\n\n\n┏    『 *PROSES/DONE MENU* 』    ◧\n\n" + v122 + " .proses\n" + v122 + " .done\n" + v122 + " .setdone\n" + v122 + " .delsetdone\n" + v122 + " .changedone\n" + v122 + " .setproses\n" + v122 + " .delsetproses\n" + v122 + " .changeproses\n\n┗━◧\n\n\n┏           『 𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪 』           ◧\n\n" + v122 + " .mode (on/off)\n" + v122 + " .addsewa\n" + v122 + " .delsewa\n" + v122 + " .listsewa\n" + v122 + " .gantiqris\n " + v122 + " .addtesti\n" + v122 + " .deltesti\n" + v122 + " .addproduk\n" + v122 + " .delproduk\n" + v122 + " .join\n" + v122 + " .sendbyr 62xxx\n" + v122 + " .block 62xxx \n" + v122 + " .unblock 62xxx\n\n┗━◧\n\n\n┏           『 *Kalkulator* 』           ◧\n\n " + v122 + " .tambah\n" + v122 + " .kali\n" + v122 + " .bagi\n" + v122 + " .kurang \n\n┗━◧\n\n\n┏   『 *SOSIAL MEDIA* 』        ◧\n\n " + v122 + " .ig\n" + v122 + " .yt\n" + v122 + " .gc\n" + v122 + " .youtube\n" + v122 + " .Instagram \n" + v122 + " .groupadmin\n\n┗━━━━━━━━━━━━━━━━━━◧\n";
          const v124 = {
            text: v123
          };
          const v125 = {
            quoted: v112
          };
          p5.sendMessage(v26, v124, v125);
        }
        break;
      case "sticker":
      case "s":
      case "stiker":
        {
          if (v54 || v57) {
            let v126 = await f2("image", "./gambar/" + v22 + ".jpg");
            vF4(v12.wait);
            const v127 = {
              packname: "" + global.namaStore,
              author: "Store Bot"
            };
            p5.sendImageAsSticker(v26, v126, p6, v127);
          } else if (v58 || v59) {
            let v128 = await f2("video", "./sticker/" + v22 + ".mp4");
            vF4(v12.wait);
            const v129 = {
              packname: "" + global.namaStore,
              author: "Store Bot"
            };
            p5.sendVideoAsSticker(v26, v128, p6, v129);
          } else {
            vF4("Kirim/reply gambar/vidio dengan caption *" + (v29 + v39) + "*");
          }
        }
        break;
      case "owner":
        {
          var v130 = "" + global.ownerNumber;
          vF5(v26, v130, "" + global.ownerName, p6);
          vF4("*Itu kak nomor owner ku, Chat aja gk usah malu😆*");
        }
        break;
      case "ffstalk":
        {
          if (!v37) {
            return vF4("Kirim perintah " + (v29 + v39) + " id\nContoh: " + (v29 + v39) + " 2023873618");
          }
          let v131 = await fetchJson("https://api.gamestoreindonesia.com/v1/order/prepare/FREEFIRE?userId=" + v37 + "&zoneId=null");
          if (!v131.statusCode == "404") {
            return vF4("Id tidak ditemukan");
          }
          let v132 = v131.data;
          vF4("*BERHASIL DITEMUKAN*\nID: " + v37 + "\nNickname: " + v132);
        }
        break;
      case "mlstalk":
        {
          if (!v37) {
            return vF4("Kirim perintah " + (v29 + v39) + " id|zone\nContoh: " + (v29 + v39) + " 106281329|2228");
          }
          var v133 = v37.split("|")[0];
          var v134 = v37.split("|")[1];
          if (!v133) {
            return vF4("ID wajib di isi");
          }
          if (!v134) {
            return vF4("ZoneID wajib di isi");
          }
          let v135 = await fetchJson("https://api.gamestoreindonesia.com/v1/order/prepare/MOBILE_LEGENDS?userId=" + v133 + "&zoneId=" + v134);
          if (!v135.statusCode == "404") {
            return vF4("Id/zone tidak ditemukan");
          }
          let v136 = v135.data;
          vF4("*BERHSAIL DITEMUKAN*\nID: " + v133 + "\nZone: " + v134 + "\nNickname: " + v136);
        }
        break;
      case "tiktok":
        {
          if (!v37) {
            return vF4("Example : " + (v29 + v39) + " link");
          }
          if (!v37.includes("tiktok")) {
            return vF4("Link Invalid!!");
          }
          vF4(v12.wait);
          require("./lib/scraper2").Tiktok(v37).then(p29 => {
            const v137 = {
              url: p29.watermark
            };
            const v138 = {
              caption: "*Download Tiktok No Wm*",
              video: v137
            };
            const v139 = {
              quoted: p6
            };
            p5.sendMessage(v26, v138, v139);
          });
        }
        break;
      case "tiktokaudio":
        {
          if (!v37) {
            return vF4("Example : " + (v29 + v39) + " link");
          }
          if (!v37.includes("tiktok")) {
            return vF4("Link Invalid!!");
          }
          vF4(v12.wait);
          require("./lib/scraper2").Tiktok(v37).then(p30 => {
            const v140 = {
              url: p30.audio
            };
            const v141 = {
              audio: v140,
              mimetype: "audio/mp4"
            };
            const v142 = {
              quoted: p6
            };
            p5.sendMessage(v26, v141, v142);
          });
        }
        break;
      case "yt":
      case "youtube":
        const v143 = {
          text: "Jangan Lupa Subscriber yah kak\n*Link* : " + global.linkyt
        };
        const v144 = {
          quoted: p6
        };
        p5.sendMessage(v26, v143, v144);
        break;
      case "ig":
      case "instagram":
        const v145 = {
          text: "Follow Instragram kami\nLink \n" + global.linkig
        };
        const v146 = {
          quoted: p6
        };
        p5.sendMessage(v26, v145, v146);
        break;
      case "gc":
      case "groupadmin":
        const v147 = {
          text: "*Group  " + global.ownerName + "*\n\nGroup1 : " + global.linkgc1 + "\nGroup2 : " + global.linkgc2
        };
        const v148 = {
          quoted: p6
        };
        p5.sendMessage(v26, v147, v148);
        break;
      case "donasi":
      case "donate":
        {
          let v149 = "───「  *DONASI*  」────\n\n*Payment donasi💰* \n\n- *Dana :* " + global.dana + "\n- *Gopay :*  " + global.gopay + "\n- *Ovo :* " + global.ovo + "\n- *Saweria :* " + global.sawer + "\n- *Qris :* Scan qr di atas\n\nberapapun donasi dari kalian itu sangat berarti bagi kami \n";
          const v150 = {
            quoted: p6
          };
          p5.sendMessage(v26, {
            image: fs2.readFileSync("./gambar/qris.jpg"),
            caption: v149,
            footer: global.ownerName + " © 2022"
          }, v150);
        }
        break;
      case "sendbyr":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (!v37) {
            return vF4("*Contoh:*\n.add 628xxx");
          }
          var v186 = v37.replace(/[^0-9]/gi, "") + "@s.whatsapp.net";
          let v152 = "───「  *PAYMENT*  」────\n\n- *Dana :* " + global.dana + "\n- *Gopay :*  " + global.gopay + "\n- *Ovo :* " + global.ovo + "\n- *Qris :* Scan qr di atas\n\n_Pembayaran ini Telah di kirim oleh Admin_\n_Melalui bot ini🙏_\n\n\nOK, thanks udah order di *" + global.namaStore + "*\n";
          const v153 = {
            quoted: p6
          };
          p5.sendMessage(v186, {
            image: fs2.readFileSync("./gambar/qris.jpg"),
            caption: v152,
            footer: global.ownerName + " © 2022"
          }, v153);
          vF4("Suksess Owner ku tercinta 😘🙏");
        }
        break;
      case "join":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (!v37) {
            return vF4("Kirim perintah " + (v29 + v39) + " _linkgrup_");
          }
          var v154 = v37.split("https://chat.whatsapp.com/")[1];
          var v224 = await p5.groupAcceptInvite(v154).then(p31 => vF4("Berhasil Join ke grup...")).catch(p32 => vF4("Eror.. Munkin bot telah di kick Dari grup tersebut"));
        }
        break;
      case "pay":
      case "payment":
      case "pembayaran":
      case "bayar":
        {
          let v156 = "───「  *PAYMENT*  」────\n\n- *Dana :* " + global.dana + "\n- *Gopay :*  " + global.gopay + "\n- *Ovo :* " + global.ovo + "\n- *Qris :* Scan qr di atas\n\nOK, thanks udah order di *" + global.botName + "*\n";
          const v157 = {
            quoted: p6
          };
          p5.sendMessage(v26, {
            image: fs2.readFileSync("./gambar/qris.jpg"),
            caption: v156,
            footer: global.ownerName + " © 2022"
          }, v157);
        }
        break;
      case "mode":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (!v36[0]) {
            return vF4("Kirim perintah #" + v39 + " _options_\nOptions : on & off\nContoh : #" + v39 + " on");
          }
          if (v36[0] == "OFF" || v36[0] == "OF" || v36[0] == "Of" || v36[0] == "Off" || v36[0] == "of" || v36[0] == "off") {
            if (v40) {
              if (!p6.key.fromMe && !v32) {
                return;
              }
              vF4("Secces mode Off");
            }
          } else if (v36[0] == "ON" || v36[0] == "on" || v36[0] == "On") {
            vF4("Secces mode ON");
          } else {
            vF4("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "p":
      case "proses":
        {
          if (!p6.key.fromMe && !v32 && !v30) {
            return vF4("Hanya Dapat Digunakan oleh Owner/admingrup");
          }
          if (!p6.key.fromMe && !v32 && !v49) {
            return vF4("Hanya Dapat Digunakan oleh Owner/admingrup");
          }
          if (!_0x4d2643) {
            return vF4("Reply pesanannya!");
          }
          let v158 = "「 *TRANSAKSI PENDING* 」\n\n```📆 TANGGAL : " + v22 + "\n⌚ JAM     : " + v21 + "\n✨ STATUS  : Pending```\n\n📝 Catatan : " + _0x4d2643.chats + "\n\nPesanan @" + _0x4d2643.sender.split("@")[0] + " sedang di proses!";
          const vGetTextSetProses = getTextSetProses(v26, v19);
          if (vGetTextSetProses !== undefined) {
            f(vGetTextSetProses.replace("pesan", _0x4d2643.chats).replace("nama", _0x4d2643.sender.split("@")[0]).replace("jam", v21).replace("tanggal", v22), [_0x4d2643.sender], true);
          } else {
            f(v158, [_0x4d2643.sender], true);
          }
        }
        break;
      case "d":
      case "done":
        {
          if (!p6.key.fromMe && !v32 && !v30) {
            return vF4("Hanya Dapat Digunakan oleh Owner/admingrup");
          }
          if (!p6.key.fromMe && !v32 && !v49) {
            return vF4("Hanya Dapat Digunakan oleh Owner/admingrup");
          }
          if (!_0x4d2643) {
            return vF4("Reply pesanannya!");
          }
          let v159 = "「 *TRANSAKSI BERHASIL* 」\n\n```📆 TANGGAL : " + v22 + "\n⌚ JAM     : " + v21 + "\n✨ STATUS  : Berhasil```\n\nTerimakasih @" + _0x4d2643.sender.split("@")[0] + " Next Order ya??";
          const vGetTextSetDone = getTextSetDone(v26, v18);
          if (vGetTextSetDone !== undefined) {
            f(vGetTextSetDone.replace("pesan", _0x4d2643.chats).replace("nama", _0x4d2643.sender.split("@")[0]).replace("jam", v21).replace("tanggal", v22), [_0x4d2643.sender], true);
          } else {
            f(v159, [_0x4d2643.sender], true);
          }
        }
        break;
      case "tambah":
        if (!v37) {
          return vF4("Gunakan dengan cara " + v39 + " *angka* *angka*\n\n_Contoh_\n\n" + v39 + " 1 2");
        }
        var v166 = v37.split(" ")[0];
        var v167 = v37.split(" ")[1];
        if (!v166) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        if (!v167) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        var vNumber7 = Number(v166);
        var vNumber8 = Number(v167);
        vF4("" + (vNumber7 + vNumber8));
        break;
      case "kurang":
        if (!v37) {
          return vF4("Gunakan dengan cara " + v39 + " *angka* *angka*\n\n_Contoh_\n\n" + v39 + " 1 2");
        }
        var v166 = v37.split(" ")[0];
        var v167 = v37.split(" ")[1];
        if (!v166) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        if (!v167) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        var vNumber7 = Number(v166);
        var vNumber8 = Number(v167);
        vF4("" + (vNumber7 - vNumber8));
        break;
      case "kali":
        if (!v37) {
          return vF4("Gunakan dengan cara " + v39 + " *angka* *angka*\n\n_Contoh_\n\n" + v39 + " 1 2");
        }
        var v166 = v37.split(" ")[0];
        var v167 = v37.split(" ")[1];
        if (!v166) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        if (!v167) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        var vNumber7 = Number(v166);
        var vNumber8 = Number(v167);
        vF4("" + vNumber7 * vNumber8);
        break;
      case "bagi":
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + v39 + " 1 2");
        }
        var v166 = v37.split(" ")[0];
        var v167 = v37.split(" ")[1];
        if (!v166) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        if (!v167) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *angka* *angka*\n\n_Contoh_\n\n" + (v29 + v39) + " 1 2");
        }
        var vNumber7 = Number(v166);
        var vNumber8 = Number(v167);
        vF4("" + vNumber7 / vNumber8);
        break;
      case "hidetag":
        if (!v30) {
          return vF4(v12.OnlyGroup);
        }
        if (!v49) {
          return vF4(v12.GrupAdmin);
        }
        if (!v48) {
          return vF4(v12.BotAdmin);
        }
        let v168 = [];
        v46.map(p33 => v168.push(p33.id));
        const v169 = {
          text: v37 ? v37 : "",
          mentions: v168
        };
        p5.sendMessage(v26, v169);
        break;
      case "antilink":
        {
          if (!v30) {
            return vF4(v12.OnlyGroup);
          }
          if (!v49) {
            return vF4(v12.GrupAdmin);
          }
          if (!v48) {
            return vF4(v12.BotAdmin);
          }
          if (!v36[0]) {
            return vF4("Kirim perintah #" + v39 + " _options_\nOptions : on & off\nContoh : #" + v39 + " on");
          }
          if (v36[0] == "ON" || v36[0] == "on" || v36[0] == "On") {
            if (v50) {
              return vF4("Antilink sudah aktif");
            }
            v10.push(v26);
            fs2.writeFileSync("./database/antilink.json", JSON.stringify(v10, null, 2));
            vF4("Successfully Activate Antilink In This Group");
          } else if (v36[0] == "OFF" || v36[0] == "OF" || v36[0] == "Of" || v36[0] == "Off" || v36[0] == "of" || v36[0] == "off") {
            if (!v50) {
              return vF4("Antilink belum aktif");
            }
            let v170 = v10.indexOf(v26);
            v10.splice(v170, 1);
            fs2.writeFileSync("./database/antilink.json", JSON.stringify(v10, null, 2));
            vF4("Successfully Disabling Antilink In This Group");
          } else {
            vF4("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "tagall":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!v37) {
          return vF4("Teks?\nContoh #tagall hallo");
        }
        let v171 = "══✪〘 *👥 Tag All* 〙✪══\n\n" + (v37 ? v37 : "") + "\n\n";
        for (let v172 of v45) {
          v171 += "➲ @" + v172.id.split("@")[0] + "\n";
        }
        const v173 = {
          quoted: p6
        };
        p5.sendMessage(v26, {
          text: v171,
          mentions: v45.map(p34 => p34.id)
        }, v173);
        break;
      case "fitnah":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v37) {
          return vF4("Kirim perintah #*" + v39 + "* @tag|pesantarget|pesanbot");
        }
        var v174 = v37.split("|")[0];
        var v175 = v37.split("|")[1];
        var v176 = v37.split("|")[2];
        if (!v174.startsWith("@")) {
          return vF4("Tag orangnya");
        }
        if (!v175) {
          return vF4("Masukkan pesan target!");
        }
        if (!v176) {
          return vF4("Masukkan pesan bot!");
        }
        var vF7 = f7(v175);
        const v177 = {
          mentionedJid: vF7
        };
        const v178 = {
          text: "" + v175,
          contextInfo: v177
        };
        const v179 = {
          extemdedTextMessage: v178
        };
        var v180 = {
          key: {
            fromMe: false,
            participant: "" + f7(v174),
            remoteJid: v26 ? v26 : ""
          },
          message: v179
        };
        const v181 = {
          conversation: "" + v175
        };
        var v182 = {
          key: {
            fromMe: false,
            participant: "" + f7(v174),
            remoteJid: v26 ? v26 : ""
          },
          message: v181
        };
        const v183 = {
          text: v176,
          mentions: _0x295dd5
        };
        p5.sendMessage(v26, v183, {
          quoted: vF7.length > 2 ? v180 : v182
        });
        break;
      case "del":
      case "delete":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!_0x4d2643) {
          return vF4("Balas chat dari bot yang ingin dihapus");
        }
        if (!_0x4d2643.fromMe) {
          return vF4("Hanya bisa menghapus chat dari bot");
        }
        p5.sendMessage(v26, {
          delete: {
            fromMe: true,
            id: _0x4d2643.id,
            remoteJid: v26
          }
        });
        break;
      case "linkgrup":
      case "linkgc":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v48) {
          return vF4(v12.BotAdmin);
        }
        var v221 = await p5.groupInviteCode(v26).catch(() => vF4(v12.error.api));
        v221 = "https://chat.whatsapp.com/" + v221;
        vF4(v221);
        break;
      case "revoke":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49) {
          return vF4(v12.GrupAdmin);
        }
        if (!v48) {
          return vF4(v12.BotAdmin);
        }
        await p5.groupRevokeInvite(v26).then(p35 => {
          vF4("Sukses menyetel tautan undangan grup ini");
        }).catch(() => vF4(v12.error.api));
        break;
      case "antilink2":
        {
          if (!v30) {
            return vF4(v12.OnlyGroup);
          }
          if (!v49) {
            return vF4(v12.GrupAdmin);
          }
          if (!v48) {
            return vF4(v12.BotAdmin);
          }
          if (!v36[0]) {
            return vF4("Kirim perintah #" + v39 + " _options_\nOptions : on & off\nContoh : #" + v39 + " on");
          }
          if (v36[0] == "ON" || v36[0] == "on" || v36[0] == "On") {
            if (v51) {
              return vF4("Antilink 2 sudah aktif");
            }
            v11.push(v26);
            fs2.writeFileSync("./database/antilink2.json", JSON.stringify(v11, null, 2));
            vF4("Successfully Activate Antilink 2 In This Group");
          } else if (v36[0] == "OFF" || v36[0] == "OF" || v36[0] == "Of" || v36[0] == "Off" || v36[0] == "of" || v36[0] == "off") {
            if (!v51) {
              return vF4("Antilink 2 belum aktif");
            }
            let v185 = v11.indexOf(v26);
            v11.splice(v185, 1);
            fs2.writeFileSync("./database/antilink2.json", JSON.stringify(v11, null, 2));
            vF4("Successfully Disabling Antilink 2 In This Group");
          } else {
            vF4("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "group":
      case "grup":
        if (!v30) {
          return vF4(v12.OnlyGroup);
        }
        if (!v49) {
          return vF4(v12.GrupAdmin);
        }
        if (!v48) {
          return vF4(v12.BotAdmin);
        }
        if (!v37) {
          return vF4("Kirim perintah #" + v39 + " _options_\nOptions : close & open\nContoh : #" + v39 + " close");
        }
        if (v36[0] == "close") {
          p5.groupSettingUpdate(v26, "announcement");
          vF4("Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini");
        } else if (v36[0] == "open") {
          p5.groupSettingUpdate(v26, "not_announcement");
          vF4("Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini");
        } else {
          vF4("Kirim perintah #" + v39 + " _options_\nOptions : close & open\nContoh : #" + v39 + " close");
        }
        break;
      case "kick":
        if (!v30) {
          return vF4(v12.OnlyGroup);
        }
        if (!v49) {
          return vF4(v12.GrupAdmin);
        }
        if (!v48) {
          return vF4(v12.BotAdmin);
        }
        var v186;
        if (v77.length !== 0) {
          v186 = v77[0];
          p5.groupParticipantsUpdate(v26, [v186], "remove").then(p36 => vF4("*Sukses mengeluarkan member..!*")).catch(p37 => vF4(v12.error.api));
        } else if (v55) {
          v186 = _0x4d2643.sender;
          p5.groupParticipantsUpdate(v26, [v186], "remove").then(p38 => vF4("*Sukses mengeluarkan member..!*")).catch(p39 => vF4(v12.error.api));
        } else {
          vF4("Tag atau balas pesan orang yang ingin dikeluarkan dari grup");
        }
        break;
      case "welcome":
        {
          if (!v30) {
            return vF4("Khusus Group!");
          }
          if (!p6.key.fromMe && !v32 && !v49) {
            return vF4("Mau ngapain?, Fitur ini khusus admin");
          }
          if (!v36[0]) {
            return vF4("*Kirim Format*\n\n.welcome on\n.welcome off");
          }
          if (v36[0] == "ON" || v36[0] == "on" || v36[0] == "On") {
            if (v52) {
              return vF4("Sudah aktif✓");
            }
            v13.push(v26);
            fs2.writeFileSync("./database/welcome.json", JSON.stringify(v13));
            vF4("Suksess mengaktifkan welcome di group:\n" + v43);
          } else if (v36[0] == "OFF" || v36[0] == "OF" || v36[0] == "Of" || v36[0] == "Off" || v36[0] == "of" || v36[0] == "off") {
            var v187 = v13.indexOf(v26);
            v13.splice(v187, 1);
            fs2.writeFileSync("./database/welcome.json", JSON.stringify(v13));
            vF4("Success menonaktifkan welcome di group:\n" + v43);
          } else {
            vF4("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "block":
        {
          if (!v32 && !_0x407336) {
            return vF4(v12.OnlyOwner);
          }
          if (!v37) {
            return vF4("Ex : " + (v29 + v39) + " Nomor Yang Ingin Di Block\n\nContoh :\n" + (v29 + v39) + " 628xxxx");
          }
          let vV37 = v37;
          await p5.updateBlockStatus(vV37 + "@s.whatsapp.net", "block");
          vF4("Sukses Block Nomor");
        }
        break;
      case "unblock":
        {
          if (!v32 && !_0x407336) {
            return vF4(v12.OnlyOwner);
          }
          if (!v37) {
            return vF4("Ex : " + (v29 + v39) + " Nomor Yang Ingin Di Unblock\n\nContoh :\n" + (v29 + v39) + " 628xxxx");
          }
          let vV372 = v37;
          await p5.updateBlockStatus(vV372 + "@s.whatsapp.net", "unblock");
          vF4("Sukses Unblock Nomor");
        }
        break;
      case "shop":
      case "list":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (v15.length === 0) {
          return vF4("Belum ada list message di database");
        }
        if (!isAlreadyResponListGroup(v26, v15)) {
          return vF4("Belum ada list message yang terdaftar di group ini");
        }
        var v198 = [];
        for (let v189 of v15) {
          if (v189.id === v26) {
            const v190 = {
              title: v189.key,
              rowId: v189.key
            };
            v198.push(v190);
          }
        }
        let v191 = "Hai @" + v31.split("@")[0] + "\nBerikut list item yang tersedia di group ini!\n\nSilahkan ketik nama produk yang diinginkan!\n\n";
        for (let v192 of v198) {
          v191 += "Produk : " + v192.title + "\n\n";
        }
        const v193 = {
          text: v191
        };
        var vV214 = v193;
        p5.sendMessage(v26, vV214);
        break;
      case "addlist":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        var v216 = v37.split("@")[0];
        var v217 = v37.split("@")[1];
        if (!v37.includes("@")) {
          return vF4("Gunakan dengan cara " + v39 + " *key@response*\n\n_Contoh_\n\n#" + v39 + " tes@apa\n\nAtau kalian bisa Reply/Kasih Image dengan caption: #" + v39 + " tes@apa");
        }
        if (v54 || v57) {
          if (isAlreadyResponList(v26, v216, v15)) {
            return vF4("List respon dengan key : *" + v216 + "* sudah ada di group ini.");
          }
          let v196 = await f2("image", "./gambar/" + v31.split("@")[0] + ".jpg");
          let v197 = await f3(v196);
          addResponList(v26, v216, v217, true, v197, v15);
          vF4("Berhasil menambah List menu : *" + v216 + "*");
        } else {
          if (isAlreadyResponList(v26, v216, v15)) {
            return vF4("List respon dengan key : *" + v216 + "* sudah ada di group ini.");
          }
          addResponList(v26, v216, v217, false, "-", v15);
          vF4("Berhasil menambah List menu : *" + v216 + "*");
        }
        break;
      case "dellist":
        {
          if (!v30) {
            return vF4(v12.OnlyGrup);
          }
          if (!v49 && !v32) {
            return vF4(v12.GrupAdmin);
          }
          if (v15.length === 0) {
            return vF4("Belum ada list message di database");
          }
          var v198 = [];
          for (let v199 of v15) {
            if (v199.id === v26) {
              const v200 = {
                title: v199.key,
                rowId: "#hapuslist " + v199.key
              };
              v198.push(v200);
            }
          }
          let v201 = "Hai @" + v31.split("@")[0] + "\nSilahkan Hapus list dengan Mengetik #hapuslist Nama list\n\nContoh: #hapuslist Tes\n\n";
          for (let v202 of v198) {
            v201 += "List : " + v202.title + "\n\n";
          }
          const v203 = {
            text: v201
          };
          var vV214 = v203;
          p5.sendMessage(v26, vV214);
        }
        break;
      case "hapuslist":
        delResponList(v26, v37, v15);
        vF4("Sukses delete list message dengan key *" + v37 + "*");
        break;
      case "sc":
      case "script":
      case "scbot":
      case "scriptbot":
        {
          vF4("𝗦𝗖𝗥𝗜𝗣𝗧 𝗞𝗛𝗨𝗦𝗨𝗦 𝗦𝗧𝗢𝗥𝗘 𝗩7\n\nScript ini bisa kalian dapatkan secara gratis, link ada di vidio YouTube saya\n: https://youtube.com/@galeri_car_cpm8048\n\nUntuk pembelian script no enc \nkalian bisa hubungi owner script ini \ndengan harga _19k_ saja\nchat: wa.me//628594955362\n\n@Cpm_Jhon");
        }
        break;
      case "testi":
        {
          if (v30) {
            return vF4(v12.OnlyPM);
          }
          if (v16.length === 0) {
            return vF4("Belum ada list testi di database");
          }
          var v212 = "Hi @" + v31.split("@")[0] + "\nBerikut list testi\n\n";
          for (let v205 of v16) {
            v212 += "*LIST TESTI:* " + v205.key + "\n\n";
          }
          v212 += "_Ingin melihat listnya?_\n_Ketik List Testi yang ada di atss_";
          const v206 = {
            text: v212,
            mentions: [v31]
          };
          var vV214 = v206;
          const v207 = {
            quoted: p6
          };
          p5.sendMessage(v26, vV214, v207);
        }
        break;
      case "addtesti":
        if (v30) {
          return vF4(v12.OnlyPM);
        }
        if (!v32) {
          return vF4(v12.OnlyOwner);
        }
        var v216 = v37.split("@")[0];
        var v217 = v37.split("@")[1];
        if (v54 || v57) {
          if (!v37.includes("@")) {
            return vF4("Gunakan dengan cara " + (v29 + v39) + " *key@response*\n\n_Contoh_\n\n" + (v29 + v39) + " testi1@testimoni sc bot");
          }
          if (isAlreadyResponTesti(v216, v16)) {
            return vF4("List respon dengan key : *" + v216 + "* sudah ada.");
          }
          let v210 = await f2("image", "./gambar/" + v31);
          let v211 = await f3(v210);
          addResponTesti(v216, v217, true, v211, v16);
          vF4("Berhasil menambah List testi *" + v216 + "*");
          if (fs2.existsSync(v210)) {
            return fs2.unlinkSync(v210);
          }
        } else {
          vF4("Kirim gambar dengan caption " + (v29 + v39) + " *key@response* atau reply gambar yang sudah ada dengan caption " + (v29 + v39) + " *key@response*");
        }
        break;
      case "deltesti":
        if (v30) {
          return vF4(v12.OnlyPM);
        }
        if (!v32) {
          return vF4(v12.OnlyOwner);
        }
        if (v16.length === 0) {
          return vF4("Belum ada list testi di database");
        }
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *key*\n\n_Contoh_\n\n" + (v29 + v39) + " testi1");
        }
        if (!isAlreadyResponTesti(v37, v16)) {
          return vF4("List testi dengan key *" + v37 + "* tidak ada di database!");
        }
        delResponTesti(v37, v16);
        vF4("Sukses delete list testi dengan key *" + v37 + "*");
        break;
      case "listproduk":
      case "produk":
        {
          if (v30) {
            return vF4(v12.OnlyPM);
          }
          if (v17.length === 0) {
            return vF4("Belum ada list produk di database");
          }
          var v212 = "Hi @" + v31.split("@")[0] + "\nBerikut list produk\n\n";
          for (let v213 of v17) {
            v212 += "*LIST PRODUK:* " + v213.key + "\n\n";
          }
          v212 += "_Ingin melihat listnya?_\n_Ketik List Produk yang ada di atss_";
          const v214 = {
            text: v212,
            mentions: [v31]
          };
          var vV214 = v214;
          const v215 = {
            quoted: p6
          };
          p5.sendMessage(v26, vV214, v215);
        }
        break;
      case "addproduk":
        if (v30) {
          return vF4(v12.OnlyPM);
        }
        if (!v32) {
          return vF4(v12.OnlyOwner);
        }
        var v216 = v37.split("@")[0];
        var v217 = v37.split("@")[1];
        if (v54 || v57) {
          if (!v37.includes("@")) {
            return vF4("Gunakan dengan cara " + (v29 + v39) + " *key@response*\n\n_Contoh_\n\n" + (v29 + v39) + " diamond_ml@list mu");
          }
          if (isAlreadyResponProduk(v216, v17)) {
            return vF4("List respon dengan key : *" + v216 + "* sudah ada.");
          }
          let v218 = await f2("image", "./gambar/" + v31);
          let v219 = await f3(v218);
          addResponProduk(v216, v217, true, v219, v17);
          vF4("Berhasil menambah List Produk *" + v216 + "*");
          if (fs2.existsSync(v218)) {
            return fs2.unlinkSync(v218);
          }
        } else {
          vF4("Kirim gambar dengan caption " + (v29 + v39) + " *key@response* atau reply gambar yang sudah ada dengan caption " + (v29 + v39) + " *key@response*");
        }
        break;
      case "delproduk":
        if (v30) {
          return vF4(v12.OnlyPM);
        }
        if (!v32) {
          return vF4(v12.OnlyOwner);
        }
        if (v17.length === 0) {
          return vF4("Belum ada list produk di database");
        }
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *key*\n\n_Contoh_\n\n" + (v29 + v39) + " diamond_ml");
        }
        if (!isAlreadyResponProduk(v37, v17)) {
          return vF4("List testi dengan key *" + v37 + "* tidak ada di database!");
        }
        delResponProduk(v37, v17);
        vF4("Sukses delete list testi dengan key *" + v37 + "*");
        break;
      case "setdone":
      case "setd":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *teks_done*\n\n_Contoh_\n\n" + (v29 + v39) + " pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jamwib");
        }
        if (isSetDone(v26, v18)) {
          return vF4("Set done already active");
        }
        addSetDone(v37, v26, v18);
        vF4("Successfully set done!");
        break;
      case "delsetdone":
      case "delsetd":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!isSetDone(v26, v18)) {
          return vF4("Belum ada set done di sini..");
        }
        removeSetDone(v26, v18);
        vF4("Sukses delete set done");
        break;
      case "changedone":
      case "changed":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *teks_done*\n\n_Contoh_\n\n" + (v29 + v39) + " pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jamwib");
        }
        if (isSetDone(v26, v18)) {
          changeSetDone(v37, v26, v18);
          vF4("Sukses change set done teks!");
        } else {
          addSetDone(v37, v26, v18);
          vF4("Sukses change set done teks!");
        }
        break;
      case "setproses":
      case "setp":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!v37) {
          return vF4("Gunakan dengan cara *" + (v29 + v39) + " teks*\n\n_Contoh_\n\n" + (v29 + v39) + " pesanan @pesan, tag orang @nama");
        }
        if (isSetProses(v26, v19)) {
          return vF4("Set proses already active");
        }
        addSetProses(v37, v26, v19);
        vF4("Sukses set proses!");
        break;
      case "delsetproses":
      case "delsetp":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!isSetProses(v26, v19)) {
          return vF4("Belum ada set proses di sini..");
        }
        removeSetProses(v26, v19);
        vF4("Sukses delete set proses");
        break;
      case "changeproses":
      case "changep":
        if (!v30) {
          return vF4(v12.OnlyGrup);
        }
        if (!v49 && !v32) {
          return vF4(v12.GrupAdmin);
        }
        if (!v37) {
          return vF4("Gunakan dengan cara " + (v29 + v39) + " *teks_p*\n\n_Contoh_\n\n" + (v29 + v39) + " pesanan @pesan, tag orang @nama");
        }
        if (isSetProses(v26, v19)) {
          changeSetProses(v37, v26, v19);
          vF4("Sukses change set proses teks!");
        } else {
          addSetProses(v37, v26, v19);
          vF4("Sukses change set proses teks!");
        }
        break;
      case "gantiqris":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (v54 || v57) {
            let v220 = await f2("image", "./gambar/" + v31);
            fs2.unlinkSync("./gambar/qris.jpg");
            fs2.renameSync(v220, "./gambar/qris.jpg");
            vF4("Sukses mengganti Image Qris");
          } else {
            vF4("kirim gambar/reply gambar dengan caption .gantiqris");
          }
        }
        break;
      case "addsewa":
        {
          if (v37 < 2) {
            return vF4("Contoh: " + (v29 + v39) + " *linkgc waktu*\n\nContoh : " + v39 + " https://chat.whatsapp.com/GEsjoxA3YYX7ImD3EgSBdy\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)");
          }
          var v221 = v37.split(" ")[0];
          var v222 = v37.split(" ")[1];
          if (!isUrl(v221)) {
            return vF4("Link grup tidak valid");
          }
          var v223 = v221.split("https://chat.whatsapp.com/")[1];
          var v224 = await p5.groupAcceptInvite(v223);
          if (checkSewaGroup(v224, v20)) {
            return vF4("Bot sudah disewakan di grup tersebut 🙂‍↔️");
          }
          addSewaGroup(v224, v222, v20);
          vF4("Bot berhasil disewakan dalam waktu *" + v222 + "* 🙂‍↕️");
          const _0x525e1f = {
            text: "Haii...\nBot telah disewakan di grup ini selama *" + v222 + "* ketik .menu untuk memulai bot, jika tidak merespon ketik 2x agar bot bisa merespon"
          };
          p5.sendMessage(v224, _0x525e1f);
        }
        break;
      case "delsewa":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (!v30) {
            return vF4("Khusus di dalam group");
          }
          if (!vCheckSewaGroup) {
            return p7.reply("Bot tidak disewakan di grup ini🙂‍↔️");
          }
          v20.splice(getSewaPosition(v26, v20), 1);
          fs2.writeFileSync("./database/sewa.json", JSON.stringify(v20, null, 2));
          vF4("Suksess delete sewa di grup ini🙂‍↕️");
        }
        break;
      case "ceksewa":
        {
          if (!v30) {
            return vF4("fitur ini khusus di grub🙂‍↔️");
          }
          try {
            const v225 = await f4();
            const v226 = v225.find(p40 => p40.id === p6.key.remoteJid);
            if (v226) {
              const v227 = await f5(v226.id);
              const v228 = v226.expired - Date.now();
              const vF6 = f6(v228);
              vF4("*CEK SEWA DI GROUP " + v227 + "*\n\n*⌛EXPIRED TIME:* " + vF6);
            } else {
              vF4("Grup ini tidak disewakan");
            }
          } catch (_0x23242b) {
            console.error("ror", _0x23242b);
            vF4("An error occurred while processing the request.");
          }
        }
        break;
      case "listsewa":
        {
          if (!v32) {
            return vF4(v12.OnlyOwner);
          }
          if (v30) {
            return vF4("Fitur ini tidak dapat digunakan dialam group");
          }
          let v229 = "*LIST SEWA BOT🤖*\n*Total Group:* " + v20.length + "\n\n";
          let v230 = [];
          for (let v231 of v20) {
            v229 += "*NAME:* " + (await f5(v231.id)) + "\n*ID :* " + v231.id + "\n";
            if (v231.expired === "PERMANENT") {
              let v232 = "PERMANENT";
              v229 += "*Expired :* Unlimited\n\n";
            } else {
              let v233 = v231.expired - Date.now();
              v229 += "*Expired :* " + f6(v233) + "\n\n";
            }
          }
          const v234 = {
            text: v229
          };
          const v235 = {
            quoted: p6
          };
          p5.sendMessage(v26, v234, v235);
        }
        break;
      default:
        if (v35 && ["assalamu'alaikum", "Assalamu'alaikum", "Assalamualaikum", "assalamualaikum", "Assalammualaikum", "assalammualaikum", "Asalamualaikum", "asalamualaikum", "Asalamu'alaikum", " asalamu'alaikum"].includes(v35) && !v40) {
          p5.sendMessage(v26, {
            text: "" + pickRandom(["Wa'alaikumussalam", "Wa'alaikumussalam Wb.", "Wa'alaikumussalam Wr. Wb.", "Wa'alaikumussalam Warahmatullahi Wabarakatuh"])
          });
        }
        if (v35 && ["tes", "Tes", "TES", "Test", "test", "ping", "Ping"].includes(v35) && !v40) {
          p5.sendMessage(v26, {
            text: runtime(process.uptime()) + "*⏰"
          });
        }
    }
  } catch (_0x4dcd2a) {
    console.log(color("[ERROR]", "red"), _0x4dcd2a);
    const v236 = p6.key.remoteJid.endsWith("@g.us");
    const v237 = v236 ? p6.key.participant ? p6.key.participant : p6.participant : p6.key.remoteJid;
    const momentTimezone2 = require("moment-timezone");
    const v238 = momentTimezone2.tz("asia/jakarta").format("HH:mm:ss");
    const v239 = momentTimezone2().tz("Asia/Jakarta").format("ll");
    const v240 = {
      tanggal: v239,
      jam: v238,
      error: _0x4dcd2a,
      user: v237
    };
    let vV240 = v240;
    v14.push(vV240);
    fs2.writeFileSync("./database/error.json", JSON.stringify(v14));
    var v241 = "*SERVER ERROR*\n*Dari:* @" + v237.split("@")[0] + "\n*Jam:* " + v238 + "\n*Tanggal:* " + v239 + "\n*Tercatat:* " + v14.length + "\n*Type:* " + _0x4dcd2a;
    const v242 = {
      text: v241,
      mentions: [v237]
    };
    p5.sendMessage("" + global.ownerNumber, v242);
  }
};