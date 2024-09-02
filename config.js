/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
 
 • Renovasi oleh ziyo
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '6283122692749'
global.nomerowner = ["6283122692749"]
// Apikey ======//
global.skizo = 'FalX'
//watermark ====//
global.packname = 'Di Buat Oleh'
global.author = 'Meta Bot'
global.title = 'Meta Bot'
global.body = 'x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ'
global.filename = 'Meta Bot'
global.botname = 'Meta Bot'
global.shinka = 'Meta Jogress Shinka !'
global.idsaluran = '-@newsletter'
global.namesaluran = '- Meta Bot -'
global.sourceurl = 'https://chat.whatsapp.com/H1uN96mq6Ht4HXYohBx4BF'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'Meta Bot'
// cpanel ======//
global.domain = 'https://metabot.daanoffc.my.id'
global.apikey2 = 'ptla_Ozp2YXg2S5W9SSR1xxPqfcirSTp6Dvsii1xReOQ3uII' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_QBQ9f0Gw0JMG65YfksDWrMs8XdpCIh0J9Wa71G1kwDi' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
