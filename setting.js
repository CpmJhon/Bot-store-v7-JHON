const chalk = require("chalk")
const fs = require("fs")

  global.ownerNumber = "628589495536@s.whatsapp.net"
  global.kontakOwner = "628589495536"
  global.namaStore = "JHON PRODUCTION"
  global.botName = "CPM_JHON STORE"
  global.ownerName = "CPM_JHON"
  
  
  global.linkyt = "https://youtube.com/@galeri_car_cpm8048"
  global.linkig = "https://www.instagram.com/cpm_jhon" 
  global.dana = "085591916436" 
  global.ovo = "085894955362"
  global.gopay = "085894955362" 
  global.sawer = "https://saweria.co/CpmJhon" 
 global.linkgc1 = "Ikuti saluran Olshop CPM_JHON di WhatsApp: https://whatsapp.com/channel/0029VaLiUSS5q08hPj5mcH0m"
 global.linkgc2 = "https://chat.whatsapp.com/GEsjoxA3YYX7ImD3EgSBdy"
//Jikalau dari salah satu di atas kalian tidak memiliki 
//silahkan kosongkan atau isi --


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})