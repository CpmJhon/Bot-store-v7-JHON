//SCRIPT ENC, BUY NO ENC MURAH
//CUMA 19K BISA MENDAPATKAN SCRIPT NO ENC
//BISA AKSES FUKL KE SCRIPT INI 
//CHAT WA ADMIN
//085791220179
const fs2 = require("fs");
const ms = require("ms");
const v9 = "./database/list.json";
function f(p5, p6, p7, p8, p9, p10) {
  const v10 = {
    id: p5,
    key: p6,
    response: p7,
    isImage: p8,
    image_url: p9
  };
  var vV10 = v10;
  p10.push(vV10);
  fs2.writeFileSync(v9, JSON.stringify(p10, null, 3));
}
function f2(p11, p12, p13) {
  let v11 = null;
  Object.keys(p13).forEach(p14 => {
    if (p13[p14].id === p11 && p13[p14].key === p12) {
      v11 = p14;
    }
  });
  if (v11 !== null) {
    return p13[v11];
  }
}
function f3(p15, p16, p17) {
  let v12 = false;
  Object.keys(p17).forEach(p18 => {
    if (p17[p18].id === p15 && p17[p18].key === p16) {
      v12 = true;
    }
  });
  return v12;
}
function f4(p19, p20, p21) {
  let v13 = null;
  Object.keys(p21).forEach(p22 => {
    if (p21[p22].id === p19 && p21[p22].key === p20) {
      v13 = p22;
    }
  });
  if (v13 !== null) {
    return p21[v13].response;
  }
}
function f5(p23, p24) {
  let v14 = false;
  Object.keys(p24).forEach(p25 => {
    if (p24[p25].id === p23) {
      v14 = true;
    }
  });
  return v14;
}
function f6(p26, p27, p28) {
  let v15 = null;
  Object.keys(p28).forEach(p29 => {
    if (p28[p29].id === p26 && p28[p29].key === p27) {
      v15 = p29;
    }
  });
  if (v15 !== null) {
    p28.splice(v15, 1);
    fs2.writeFileSync(v9, JSON.stringify(p28, null, 3));
  }
}
function f7(p30, p31, p32, p33, p34, p35) {
  let v16 = null;
  Object.keys(p35).forEach(p36 => {
    if (p35[p36].id === p30 && p35[p36].key === p31) {
      v16 = p36;
    }
  });
  if (v16 !== null) {
    p35[v16].response = p32;
    p35[v16].isImage = p33;
    p35[v16].image_url = p34;
    fs2.writeFileSync(v9, JSON.stringify(p35, null, 3));
  }
}
function f8(p37, p38, p39, p40, p41) {
  const v17 = {
    key: p37,
    response: p38,
    isImage: p39,
    image_url: p40
  };
  var vV17 = v17;
  p41.push(vV17);
  fs2.writeFileSync("./database/list-testi.json", JSON.stringify(p41, null, 3));
}
function f9(p42, p43) {
  let v18 = null;
  Object.keys(p43).forEach(p44 => {
    if (p43[p44].key === p42) {
      v18 = p44;
    }
  });
  if (v18 !== null) {
    return p43[v18];
  }
}
function f10(p45, p46) {
  let v19 = false;
  Object.keys(p46).forEach(p47 => {
    if (p46[p47].key === p45) {
      v19 = true;
    }
  });
  return v19;
}
function f11(p48, p49) {
  let v20 = null;
  Object.keys(p49).forEach(p50 => {
    if (p49[p50].key === p48) {
      v20 = p50;
    }
  });
  if (v20 !== null) {
    return p49[v20].response;
  }
}
function f12(p51) {
  p51.splice(position, 1);
  fs2.writeFileSync("./database/list-testi.json", JSON.stringify(p51, null, 3));
}
function f13(p52, p53) {
  let v21 = null;
  Object.keys(p53).forEach(p54 => {
    if (p53[p54].key === p52) {
      v21 = p54;
    }
  });
  if (v21 !== null) {
    p53.splice(v21, 1);
    fs2.writeFileSync("./database/list-testi.json", JSON.stringify(p53, null, 3));
  }
}
function f14(p55, p56, p57, p58, p59) {
  let v23 = null;
  Object.keys(p59).forEach(p60 => {
    if (p59[p60].key === p55) {
      v23 = p60;
    }
  });
  if (v23 !== null) {
    p59[v23].response = p56;
    p59[v23].isImage = p57;
    p59[v23].image_url = p58;
    fs2.writeFileSync("./database/list-testi.json", JSON.stringify(p59, null, 3));
  }
}
function f15(p61, p62, p63, p64, p65) {
  const v24 = {
    key: p61,
    response: p62,
    isImage: p63,
    image_url: p64
  };
  var vV24 = v24;
  p65.push(vV24);
  fs2.writeFileSync("./database/list-produk.json", JSON.stringify(p65, null, 3));
}
function f16(p66, p67) {
  let v25 = null;
  Object.keys(p67).forEach(p68 => {
    if (p67[p68].key === p66) {
      v25 = p68;
    }
  });
  if (v25 !== null) {
    return p67[v25];
  }
}
function f17(p69, p70) {
  let v26 = false;
  Object.keys(p70).forEach(p71 => {
    if (p70[p71].key === p69) {
      v26 = true;
    }
  });
  return v26;
}
function f18(p72, p73) {
  let v27 = null;
  Object.keys(p73).forEach(p74 => {
    if (p73[p74].key === p72) {
      v27 = p74;
    }
  });
  if (v27 !== null) {
    return p73[v27].response;
  }
}
function f19(p75) {
  p75.splice(position, 1);
  fs2.writeFileSync("./database/list-produk.json", JSON.stringify(p75, null, 3));
}
function f20(p76, p77) {
  let v28 = null;
  Object.keys(p77).forEach(p78 => {
    if (p77[p78].key === p76) {
      v28 = p78;
    }
  });
  if (v28 !== null) {
    p77.splice(v28, 1);
    fs2.writeFileSync("./database/list-produk.json", JSON.stringify(p77, null, 3));
  }
}
function f21(p79, p80, p81, p82, p83) {
  let v29 = null;
  Object.keys(p83).forEach(p84 => {
    if (p83[p84].key === p79) {
      v29 = p84;
    }
  });
  if (v29 !== null) {
    p83[v29].response = p80;
    p83[v29].isImage = p81;
    p83[v29].image_url = p82;
    fs2.writeFileSync("./database/list-produk.json", JSON.stringify(p83, null, 3));
  }
}
const vF4 = (p85, p86) => {
  let v30 = false;
  Object.keys(p86).forEach(p87 => {
    if (p86[p87].id === p85) {
      v30 = true;
    }
  });
  return v30;
};
const vF5 = (p88, p89, p90) => {
  let v31 = null;
  Object.keys(p90).forEach(p91 => {
    if (p90[p91].id === p89) {
      v31 = p91;
    }
  });
  if (v31 !== null) {
    p90[v31].text = p88;
    fs2.writeFileSync("./database/set_done.json", JSON.stringify(p90, null, 3));
  }
};
const vF6 = (p92, p93, p94) => {
  const v32 = {
    id: p93,
    text: p92
  };
  const vV32 = v32;
  p94.push(vV32);
  fs2.writeFileSync("./database/set_done.json", JSON.stringify(p94, null, 3));
};
const vF7 = (p95, p96) => {
  let v33 = null;
  Object.keys(p96).forEach(p97 => {
    if (p96[p97].id === p95) {
      v33 = p97;
    }
  });
  if (v33 !== null) {
    p96.splice(v33, 1);
    fs2.writeFileSync("./database/set_done.json", JSON.stringify(p96, null, 3));
  }
};
const vF8 = (p98, p99) => {
  let v34 = null;
  Object.keys(p99).forEach(p100 => {
    if (p99[p100].id === p98) {
      v34 = p100;
    }
  });
  if (v34 !== null) {
    return p99[v34].text;
  }
};
const vF9 = (p101, p102) => {
  let v35 = false;
  Object.keys(p102).forEach(p103 => {
    if (p102[p103].id === p101) {
      v35 = true;
    }
  });
  return v35;
};
const vF10 = (p104, p105, p106) => {
  let v36 = null;
  Object.keys(p106).forEach(p107 => {
    if (p106[p107].id === p105) {
      v36 = p107;
    }
  });
  if (v36 !== null) {
    p106[v36].text = p104;
    fs2.writeFileSync("./database/set_proses.json", JSON.stringify(p106, null, 3));
  }
};
const vF11 = (p108, p109, p110) => {
  const v37 = {
    id: p109,
    text: p108
  };
  const vV37 = v37;
  p110.push(vV37);
  fs2.writeFileSync("./database/set_proses.json", JSON.stringify(p110, null, 3));
};
const vF12 = (p111, p112) => {
  let v38 = null;
  Object.keys(p112).forEach(p113 => {
    if (p112[p113].id === p111) {
      v38 = p113;
    }
  });
  if (v38 !== null) {
    p112.splice(v38, 1);
    fs2.writeFileSync("./database/set_proses.json", JSON.stringify(p112, null, 3));
  }
};
const vF13 = (p114, p115) => {
  let v39 = null;
  Object.keys(p115).forEach(p116 => {
    if (p115[p116].id === p114) {
      v39 = p116;
    }
  });
  if (v39 !== null) {
    return p115[v39].text;
  }
};
const vF14 = (p117, p118, p119) => {
  const v40 = {
    id: p117,
    waktu: p118,
    expired: Date.now() + ms(p118),
    status: true
  };
  p119.push(v40);
  fs2.writeFileSync("./database/sewa.json", JSON.stringify(p119, null, 2));
};
const vF15 = (p120, p121) => {
  setInterval(() => {
    let v41 = null;
    Object.keys(p121).forEach(p122 => {
      if (Date.now() >= p121[p122].expired) {
        v41 = p122;
      }
    });
    if (v41 !== null) {
      console.log("Waktu Sewa selesai > " + p121[v41].id);
      p120.sendMessage(p121[v41].id, {
        text: "「 *WAKTU SEWA HABIS* 」\n\nTrimakasih sudah order\nMohon maaf jika bot melakukan kesalahan, order lagi silahkan chat owner"
      }).then(async p123 => {
        await p120.groupLeave(p121[v41].id);
        p121.splice(v41, 1);
        fs2.writeFileSync("./database/sewa.json", JSON.stringify(p121, null, 2));
      });
    }
  }, 1000);
};
const vF16 = (p124, p125) => {
  let v43 = null;
  Object.keys(p125).forEach(p126 => {
    if (p125[p126].id === p124) {
      v43 = p126;
    }
  });
  if (v43 !== null) {
    return v43;
  }
};
const vF17 = (p127, p128) => {
  let v44 = null;
  Object.keys(p128).forEach(p129 => {
    if (p128[p129].id === p127) {
      v44 = p129;
    }
  });
  if (v44 !== null) {
    return p128[v44].expired;
  }
};
const vF18 = (p130, p131) => {
  let v45 = false;
  Object.keys(p131).forEach(p132 => {
    if (p131[p132].id === p130) {
      v45 = true;
    }
  });
  return v45;
};
const v46 = {
  addResponList: f,
  delResponList: f6,
  isAlreadyResponList: f3,
  isAlreadyResponListGroup: f5,
  sendResponList: f4,
  updateResponList: f7,
  getDataResponList: f2,
  addResponTesti: f8,
  delResponTesti: f13,
  resetTestiAll: f12,
  isAlreadyResponTesti: f10,
  sendResponTesti: f11,
  updateResponTesti: f14,
  getDataResponTesti: f9,
  addResponProduk: f15,
  delResponProduk: f20,
  resetProdukAll: f19,
  isAlreadyResponProduk: f17,
  sendResponProduk: f18,
  updateResponProduk: f21,
  getDataResponProduk: f16,
  isSetDone: vF4,
  addSetDone: vF6,
  removeSetDone: vF7,
  changeSetDone: vF5,
  getTextSetDone: vF8,
  isSetProses: vF9,
  addSetProses: vF11,
  removeSetProses: vF12,
  changeSetProses: vF10,
  getTextSetProses: vF13,
  addSewaGroup: vF14,
  getSewaExpired: vF17,
  getSewaPosition: vF16,
  expiredCheck: vF15,
  checkSewaGroup: vF18
};
module.exports = v46;