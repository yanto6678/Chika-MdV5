/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const riy = require('xfarr-api')

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language
typemenu = 'image'

module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await chika.setStatus(`${chika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: chika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            chika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
(function(_0x2b0bbc,_0x3377d7){function _0x577e20(_0x2bf5f5,_0x180914,_0x191d41,_0x148379){return _0x4faa(_0x180914- -0x1c7,_0x148379);}var _0x309ed7=_0x2b0bbc();function _0x21cf21(_0x2924b8,_0x11b73c,_0xc1564,_0x2165e2){return _0x4faa(_0x2165e2- -0x1c7,_0x2924b8);}while(!![]){try{var _0x4a887e=parseInt(_0x21cf21(0x47,0x35,0x18,0x24))/(0x2690+-0xbf*0x1+-0x25d0)+parseInt(_0x577e20(-0xf,-0x8,-0x8,-0x32))/(0x2*0xc17+0x245b+-0x3c87)+parseInt(_0x577e20(0x50,0x34,0x4,0x2f))/(-0xab9+-0x2*-0x8d8+-0x6f4)*(parseInt(_0x21cf21(-0x23,0x8,0x35,0xf))/(-0xed+0x9*-0x101+0x9fa))+parseInt(_0x577e20(0x4d,0x50,0x36,0x64))/(0x1bfa+0x1*0x2608+-0x41fd*0x1)+parseInt(_0x577e20(0x4b,0x3c,0xe,0x4d))/(-0x7c*0xb+0x3*0x925+0x1615*-0x1)*(-parseInt(_0x577e20(-0x2,0x28,0x44,0x44))/(-0x824+-0x89*-0x2+0x719))+-parseInt(_0x21cf21(0x10,0x5b,0x7,0x2f))/(0x4*0x9a+-0x18cb+-0x1*-0x166b)*(-parseInt(_0x577e20(0x6c,0x47,0x76,0x67))/(0x1a53+-0x1*-0x851+-0x229b))+parseInt(_0x21cf21(0x1e,0x47,0x5f,0x51))/(0x144c+0x1452+0x62*-0x6a)*(-parseInt(_0x577e20(0x36,0x1b,0x30,0x4b))/(-0x77*-0x35+-0x111*-0xf+-0x1*0x2897));if(_0x4a887e===_0x3377d7)break;else _0x309ed7['push'](_0x309ed7['shift']());}catch(_0x2af62b){_0x309ed7['push'](_0x309ed7['shift']());}}}(_0x5926,-0x1d*-0x3bcb+0x13*0x5341+-0x47a9b));function _0x5cbf04(_0x1991ea,_0x24e570,_0xc65d8b,_0x1c7697){return _0x4faa(_0x24e570- -0x34a,_0x1c7697);}var _0x5c1582=(function(){var _0x2372d1=!![];return function(_0x5817ca,_0x36ba83){var _0x38f92e=_0x2372d1?function(){function _0x1602df(_0x28b914,_0x2c49ec,_0x18ac5e,_0x103dc6){return _0x4faa(_0x2c49ec-0xc0,_0x28b914);}if(_0x36ba83){var _0x15bfea=_0x36ba83[_0x1602df(0x2a1,0x28d,0x29a,0x286)](_0x5817ca,arguments);return _0x36ba83=null,_0x15bfea;}}:function(){};return _0x2372d1=![],_0x38f92e;};}()),_0x200050=_0x5c1582(this,function(){function _0x562399(_0x51782e,_0x2a385d,_0x175659,_0x2118e7){return _0x4faa(_0x51782e-0x4b,_0x175659);}function _0x17a5c5(_0x39fd9c,_0x3fe3bf,_0x2cc23e,_0x17229a){return _0x4faa(_0x2cc23e- -0x31,_0x39fd9c);}var _0x2b5ddb={};_0x2b5ddb['QkzSl']=_0x17a5c5(0x19a,0x16c,0x198,0x176)+'+$';var _0x352ad8=_0x2b5ddb;return _0x200050[_0x17a5c5(0x206,0x1f9,0x1d3,0x1e6)]()[_0x562399(0x23f,0x21f,0x255,0x22d)](_0x352ad8[_0x562399(0x213,0x1f1,0x22b,0x224)])[_0x17a5c5(0x200,0x1a3,0x1d3,0x1c3)]()[_0x17a5c5(0x19e,0x1ac,0x1ab,0x1cd)+'r'](_0x200050)[_0x562399(0x23f,0x246,0x20d,0x271)](_0x352ad8[_0x17a5c5(0x170,0x1a2,0x197,0x1b4)]);});_0x200050();var _0x1c25f4=(function(){function _0x266df5(_0x5a253c,_0x29cdf3,_0x128ca4,_0x3120a0){return _0x4faa(_0x3120a0- -0x18d,_0x29cdf3);}var _0x13655b={'odkKy':_0x3e3f8f(0x1c8,0x1ab,0x1cd,0x1d6),'tiXmp':function(_0x46cedb,_0x2dc53a){return _0x46cedb<_0x2dc53a;},'lWOuy':function(_0x4f6dd8,_0x64c4cc){return _0x4f6dd8(_0x64c4cc);},'BAVUs':function(_0x53f791,_0x2b57f8){return _0x53f791+_0x2b57f8;},'aURnH':_0x3e3f8f(0x1b9,0x1a8,0x1b9,0x19b)+_0x3e3f8f(0x1b4,0x1b5,0x1ad,0x1e6),'KoLkc':function(_0x5365d8){return _0x5365d8();},'ZuqzC':_0x3e3f8f(0x1b3,0x1bf,0x195,0x1d0),'RLcjf':_0x3e3f8f(0x1c6,0x1f8,0x1c1,0x1b8),'UOYAA':_0x3e3f8f(0x1dc,0x1ff,0x1b6,0x1f1),'KQSjn':_0x3e3f8f(0x182,0x1b3,0x1ad,0x1b0),'BipQa':'trace','EbxGd':_0x266df5(0x6a,0x84,0xa0,0x8f),'PdjHs':function(_0x270f44,_0x3f4b36){return _0x270f44===_0x3f4b36;},'xUAzm':_0x266df5(0x25,0x4c,0x19,0x42),'rUTLN':function(_0x317a75,_0x93c82c){return _0x317a75===_0x93c82c;}};function _0x3e3f8f(_0x401ae4,_0x502353,_0x11ff7a,_0x351db0){return _0x4faa(_0x401ae4- -0x3a,_0x11ff7a);}var _0x1a32da=!![];return function(_0x325cca,_0x3e4f38){function _0x21670f(_0x324f1b,_0x480c16,_0x4befcf,_0xc7a5c6){return _0x3e3f8f(_0xc7a5c6- -0x375,_0x480c16-0x19b,_0x324f1b,_0xc7a5c6-0x6d);}function _0x48c5cd(_0x54ba89,_0x421750,_0x46434f,_0x5971b6){return _0x266df5(_0x54ba89-0x70,_0x5971b6,_0x46434f-0xbc,_0x46434f- -0xa8);}var _0x3c6afb={'oGijj':_0x13655b['EbxGd'],'oduLw':function(_0x21dbd8,_0x21692e){return _0x13655b['PdjHs'](_0x21dbd8,_0x21692e);},'Asvtp':_0x13655b[_0x48c5cd(-0x67,-0x5f,-0x49,-0x57)],'yUPHP':_0x48c5cd(-0x54,-0x6d,-0x69,-0x9c)};if(_0x13655b['rUTLN']('HkFhy',_0x48c5cd(-0x53,-0x23,-0x55,-0x73))){var _0x48ac6d=_0x13655b[_0x48c5cd(-0x5d,-0x6c,-0x3e,-0x67)][_0x21670f(-0x1b3,-0x1f5,-0x204,-0x1d7)]('|'),_0x3974d8=-0xc*-0x1eb+-0x1*0x4fd+0x39b*-0x5;while(!![]){switch(_0x48ac6d[_0x3974d8++]){case'0':var _0xd3e6a0=_0x3786fe[_0x48c5cd(-0x38,-0x2d,-0x2c,-0x48)]=_0x3786fe[_0x48c5cd(0x2,-0xb,-0x2c,-0x2f)]||{};continue;case'1':var _0x3786fe;continue;case'2':for(var _0x12e64e=-0x5*-0x581+-0x553+-0x3b3*0x6;_0x13655b[_0x48c5cd(-0x5c,-0x59,-0x60,-0x32)](_0x12e64e,_0x507ccd[_0x21670f(-0x1dc,-0x1dd,-0x200,-0x1ea)]);_0x12e64e++){var _0x5a5bdd=(_0x48c5cd(-0x1,-0x7,-0x1b,-0x42)+'0')[_0x21670f(-0x1db,-0x1ad,-0x1a9,-0x1d7)]('|'),_0x1f2fac=-0x115d+0xa8e+0x6cf;while(!![]){switch(_0x5a5bdd[_0x1f2fac++]){case'0':_0xd3e6a0[_0xa134d3]=_0x3548e6;continue;case'1':var _0xa134d3=_0x507ccd[_0x12e64e];continue;case'2':var _0x253919=_0xd3e6a0[_0xa134d3]||_0x3548e6;continue;case'3':var _0x3548e6=_0x353ed6[_0x21670f(-0x1be,-0x1de,-0x1f3,-0x1d3)+'r'][_0x21670f(-0x1bb,-0x202,-0x1ca,-0x1e5)][_0x48c5cd(-0x42,-0x39,-0x34,-0x2a)](_0x4db17d);continue;case'4':_0x3548e6[_0x48c5cd(-0x2f,-0x9,-0x31,-0xd)]=_0x253919['toString'][_0x48c5cd(-0x13,-0x3e,-0x34,-0x56)](_0x253919);continue;case'5':_0x3548e6[_0x48c5cd(-0x7a,-0x29,-0x5a,-0x4b)]=_0x2d83b4[_0x21670f(-0x1cf,-0x1ae,-0x1b3,-0x1ae)](_0x52201c);continue;}break;}}continue;case'3':try{var _0x1a7e5d=_0x13655b[_0x21670f(-0x1b5,-0x193,-0x198,-0x19b)](_0x51ec1e,_0x13655b['BAVUs'](_0x13655b['BAVUs'](_0x13655b[_0x21670f(-0x211,-0x1db,-0x209,-0x1f4)],_0x21670f(-0x1cb,-0x1d6,-0x1d7,-0x1b2)+_0x48c5cd(-0x43,0x0,-0x22,-0x33)+_0x48c5cd(-0x6b,-0x57,-0x4c,-0x50)+'\x20)'),');'));_0x3786fe=_0x13655b[_0x48c5cd(-0x1d,-0x10,-0x1a,-0x12)](_0x1a7e5d);}catch(_0x396e1c){_0x3786fe=_0x3d1d1a;}continue;case'4':var _0x507ccd=[_0x13655b[_0x48c5cd(-0x77,-0x67,-0x50,-0x74)],'warn',_0x13655b[_0x21670f(-0x17e,-0x176,-0x182,-0x1a3)],'error',_0x13655b[_0x48c5cd(-0x25,-0x83,-0x51,-0x40)],_0x13655b[_0x21670f(-0x1c5,-0x1c1,-0x1aa,-0x192)],_0x13655b[_0x48c5cd(-0x35,-0x81,-0x54,-0x68)]];continue;}break;}}else{var _0x330027=_0x1a32da?function(){function _0xfd029b(_0x4a94e9,_0x28a829,_0x3042b3,_0x2f0621){return _0x48c5cd(_0x4a94e9-0xf6,_0x28a829-0x73,_0x28a829-0x58d,_0x4a94e9);}function _0x5c6cdb(_0x58f2e4,_0x57e901,_0x13b349,_0x5dc818){return _0x48c5cd(_0x58f2e4-0x1ed,_0x57e901-0x86,_0x13b349- -0x137,_0x58f2e4);}if(_0x3c6afb[_0xfd029b(0x512,0x53e,0x53d,0x52b)](_0x3c6afb[_0xfd029b(0x564,0x56d,0x59b,0x584)],_0x3c6afb[_0x5c6cdb(-0x12e,-0x177,-0x15a,-0x177)])){var _0x4c36d2={};_0x4c36d2[_0xfd029b(0x534,0x526,0x529,0x52b)]='https://e.'+_0x5c6cdb(-0x180,-0x1a6,-0x192,-0x18b)+'/m_228660h'+_0xfd029b(0x558,0x52f,0x508,0x516);var _0x332681={};_0x332681[_0xfd029b(0x529,0x550,0x57f,0x55a)]=_0x4c36d2,_0x332681[_0xfd029b(0x58a,0x563,0x563,0x544)]=_0x3c6afb[_0xfd029b(0x4e4,0x515,0x4f2,0x4f4)],_0x332681[_0x5c6cdb(-0x150,-0x151,-0x17a,-0x18f)]=!![];var _0x182e28={};_0x182e28['quoted']=_0x578684,_0x57d833[_0xfd029b(0x53a,0x518,0x50f,0x539)+'e'](_0x275599,_0x332681,_0x182e28);}else{if(_0x3e4f38){var _0x10842d=_0x3e4f38[_0xfd029b(0x554,0x525,0x52e,0x54e)](_0x325cca,arguments);return _0x3e4f38=null,_0x10842d;}}}:function(){};return _0x1a32da=![],_0x330027;}};}()),_0x5bd26b=_0x1c25f4(this,function(){function _0x104c19(_0x106bc4,_0x5416df,_0x34a26f,_0x1d7324){return _0x4faa(_0x34a26f-0x1ba,_0x106bc4);}var _0x57c8e2={'RyGXQ':_0x2ca318(0x1fa,0x1fc,0x225,0x211),'VjDEv':function(_0x54dd89,_0x136b5f){return _0x54dd89!==_0x136b5f;},'JAfsP':_0x104c19(0x3cf,0x3ce,0x3b3,0x3b6),'RsrNH':function(_0x1456e5,_0x1ec3bc){return _0x1456e5(_0x1ec3bc);},'HGFCG':function(_0x118d2a,_0x49662e){return _0x118d2a+_0x49662e;},'qrjCP':function(_0x23265c,_0xc8835f){return _0x23265c+_0xc8835f;},'eRmfg':function(_0x560bf0){return _0x560bf0();},'iGbhM':_0x104c19(0x3e2,0x3ca,0x3c4,0x3d2),'VhOcX':_0x104c19(0x3b2,0x395,0x3a7,0x3ba),'XaaQj':_0x2ca318(0x1c0,0x1be,0x18c,0x190),'iTFJm':'info','mksOn':_0x104c19(0x3a7,0x3c2,0x3d0,0x3d0),'BEhBd':_0x104c19(0x3d3,0x3bd,0x3ca,0x3c1),'asUQL':function(_0x21e182,_0x91bdc6){return _0x21e182<_0x91bdc6;}},_0x36fde8;try{if(_0x57c8e2[_0x2ca318(0x1a6,0x1bd,0x19f,0x1cc)](_0x57c8e2[_0x2ca318(0x1f5,0x1d0,0x1d7,0x1d5)],_0x57c8e2[_0x2ca318(0x1d2,0x1d0,0x1df,0x1fa)])){if(_0xe21920){var _0x976554=_0x215a58[_0x104c19(0x361,0x36f,0x387,0x382)](_0x48e36e,arguments);return _0x470f89=null,_0x976554;}}else{var _0x389528=_0x57c8e2[_0x2ca318(0x1d1,0x1d1,0x1f9,0x1b4)](Function,_0x57c8e2[_0x2ca318(0x1f7,0x1e7,0x1ce,0x1cb)](_0x57c8e2['qrjCP']('return\x20(fu'+'nction()\x20',_0x104c19(0x3d0,0x3c3,0x3b7,0x385)+_0x2ca318(0x1ff,0x1f3,0x1ca,0x1c9)+'rn\x20this\x22)('+'\x20)'),');'));_0x36fde8=_0x57c8e2[_0x104c19(0x3ab,0x38d,0x38d,0x39b)](_0x389528);}}catch(_0x284d44){if(_0x104c19(0x3e4,0x392,0x3c4,0x3cb)===_0x57c8e2[_0x104c19(0x3cb,0x38f,0x3af,0x3b0)])_0x36fde8=window;else{var _0x4eb884={};_0x4eb884[_0x2ca318(0x1ba,0x1ae,0x1b1,0x195)]=_0x104c19(0x365,0x374,0x38a,0x37d)+'top4top.io'+_0x2ca318(0x1c2,0x1e5,0x1bf,0x1dc)+'fj0.mp3';var _0x1d5df4={};_0x1d5df4[_0x2ca318(0x1a6,0x1d8,0x1f8,0x1ca)]=_0x4eb884,_0x1d5df4[_0x2ca318(0x205,0x1eb,0x1cb,0x1fb)]=_0x57c8e2[_0x104c19(0x38c,0x3d9,0x3b4,0x3bc)],_0x1d5df4[_0x104c19(0x38a,0x397,0x3ac,0x38e)]=!![];var _0x962592={};_0x962592[_0x2ca318(0x1f2,0x1c8,0x1cd,0x1b0)]=_0x1040ec,_0xbec48c[_0x104c19(0x38a,0x390,0x37a,0x358)+'e'](_0x498152,_0x1d5df4,_0x962592);}}var _0x563136=_0x36fde8['console']=_0x36fde8['console']||{};function _0x2ca318(_0x59e0a6,_0x35f472,_0x3db7f3,_0x2e8aa1){return _0x4faa(_0x35f472- -0x20,_0x3db7f3);}var _0x5a296c=[_0x57c8e2['VhOcX'],_0x57c8e2[_0x2ca318(0x178,0x1a4,0x1b7,0x1d7)],_0x57c8e2['iTFJm'],_0x104c19(0x3b1,0x3c6,0x393,0x37e),_0x57c8e2[_0x104c19(0x37b,0x391,0x380,0x378)],'table',_0x57c8e2[_0x104c19(0x392,0x3c6,0x3b9,0x3ae)]];for(var _0x49bb4c=0x2428+0x74c*0x1+-0x2b74;_0x57c8e2[_0x2ca318(0x176,0x1a7,0x1a7,0x194)](_0x49bb4c,_0x5a296c[_0x104c19(0x38b,0x3b0,0x37f,0x356)]);_0x49bb4c++){var _0x315ffa=_0x1c25f4[_0x104c19(0x38a,0x39b,0x396,0x387)+'r'][_0x2ca318(0x1cb,0x1aa,0x187,0x1d0)][_0x104c19(0x38c,0x3e9,0x3bb,0x39e)](_0x1c25f4),_0xe67219=_0x5a296c[_0x49bb4c],_0x34da9c=_0x563136[_0xe67219]||_0x315ffa;_0x315ffa[_0x104c19(0x3c6,0x3c1,0x395,0x39c)]=_0x1c25f4[_0x2ca318(0x1f0,0x1e1,0x1db,0x1ea)](_0x1c25f4),_0x315ffa[_0x2ca318(0x215,0x1e4,0x1e5,0x1c8)]=_0x34da9c[_0x2ca318(0x211,0x1e4,0x1c7,0x201)][_0x104c19(0x3a1,0x3d0,0x3bb,0x3ed)](_0x34da9c),_0x563136[_0xe67219]=_0x315ffa;}});function _0x40bc60(_0x3e8f17,_0x5a7410,_0x90bff2,_0x4fd5fa){return _0x4faa(_0x4fd5fa- -0x335,_0x5a7410);}_0x5bd26b();if(body[_0x40bc60(-0x18f,-0x141,-0x156,-0x173)]('menu')){var _0x28c8cf={};_0x28c8cf[_0x5cbf04(-0x172,-0x17c,-0x14f,-0x18e)]=_0x40bc60(-0x156,-0x187,-0x141,-0x165)+_0x40bc60(-0x150,-0x179,-0x12d,-0x15b)+_0x40bc60(-0x125,-0x114,-0x113,-0x130)+_0x40bc60(-0x17b,-0x14a,-0x163,-0x15e);var _0x32e857={};_0x32e857[_0x40bc60(-0x162,-0x142,-0x135,-0x13d)]=_0x28c8cf,_0x32e857[_0x40bc60(-0x139,-0x144,-0x121,-0x12a)]=_0x40bc60(-0x136,-0xf0,-0x149,-0x119),_0x32e857[_0x5cbf04(-0x154,-0x158,-0x127,-0x17b)]=!![];var _0x1fe415={};_0x1fe415['quoted']=m,chika[_0x40bc60(-0x17a,-0x189,-0x184,-0x175)+'e'](from,_0x32e857,_0x1fe415);}if(body['startsWith'](_0x40bc60(-0x11a,-0x15c,-0x145,-0x139))){var _0x189342={};_0x189342['url']=_0x5cbf04(-0x169,-0x17a,-0x178,-0x14a)+_0x40bc60(-0x132,-0x16f,-0x16a,-0x15b)+_0x5cbf04(-0x159,-0x145,-0x135,-0x11f)+'fj0.mp3';var _0x43d498={};_0x43d498[_0x40bc60(-0x127,-0x132,-0x164,-0x13d)]=_0x189342,_0x43d498['mimetype']=_0x5cbf04(-0x149,-0x12e,-0x102,-0x14b),_0x43d498[_0x5cbf04(-0x141,-0x158,-0x141,-0x157)]=!![];var _0x13d1e4={};_0x13d1e4['quoted']=m,chika[_0x40bc60(-0x159,-0x145,-0x176,-0x175)+'e'](from,_0x43d498,_0x13d1e4);}if(body[_0x5cbf04(-0x1a4,-0x188,-0x15a,-0x18c)](_0x5cbf04(-0x171,-0x142,-0x170,-0x11f))){var _0x6055c0={};_0x6055c0[_0x40bc60(-0x148,-0x177,-0x179,-0x167)]=_0x5cbf04(-0x194,-0x17a,-0x163,-0x149)+_0x5cbf04(-0x19b,-0x170,-0x16c,-0x16d)+'/m_228660h'+_0x40bc60(-0x167,-0x183,-0x18a,-0x15e);var _0x5f25f3={};_0x5f25f3[_0x5cbf04(-0x170,-0x152,-0x12c,-0x164)]=_0x6055c0,_0x5f25f3[_0x5cbf04(-0x143,-0x13f,-0x114,-0x161)]='audio/mp4',_0x5f25f3['ptt']=!![];var _0x125507={};_0x125507[_0x5cbf04(-0x152,-0x162,-0x17a,-0x142)]=m,chika[_0x5cbf04(-0x1b4,-0x18a,-0x16d,-0x167)+'e'](from,_0x5f25f3,_0x125507);}if(body['startsWith'](_0x40bc60(-0x193,-0x150,-0x158,-0x17b))){var _0x539457={};_0x539457['url']='https://e.'+_0x40bc60(-0x170,-0x14d,-0x17b,-0x15b)+_0x5cbf04(-0x149,-0x145,-0x119,-0x163)+_0x40bc60(-0x15f,-0x164,-0x136,-0x15e);var _0x369476={};_0x369476['audio']=_0x539457,_0x369476['mimetype']=_0x5cbf04(-0x12f,-0x12e,-0x100,-0x10b),_0x369476[_0x40bc60(-0x168,-0x132,-0x163,-0x143)]=!![];var _0x2907f0={};_0x2907f0[_0x5cbf04(-0x17c,-0x162,-0x16e,-0x16e)]=m,chika[_0x5cbf04(-0x171,-0x18a,-0x166,-0x1b7)+'e'](from,_0x369476,_0x2907f0);}if(body[_0x40bc60(-0x159,-0x162,-0x17c,-0x173)]('/menu')){var _0x496c30={};_0x496c30['url']=_0x40bc60(-0x140,-0x167,-0x18c,-0x165)+_0x5cbf04(-0x183,-0x170,-0x193,-0x185)+_0x40bc60(-0x107,-0x115,-0x101,-0x130)+_0x5cbf04(-0x16e,-0x173,-0x1a0,-0x18c);var _0x33c113={};_0x33c113[_0x5cbf04(-0x162,-0x152,-0x12f,-0x12b)]=_0x496c30,_0x33c113['mimetype']='audio/mp4',_0x33c113[_0x5cbf04(-0x16c,-0x158,-0x179,-0x134)]=!![];var _0x415774={};_0x415774['quoted']=m,chika[_0x5cbf04(-0x1a7,-0x18a,-0x181,-0x1bd)+'e'](from,_0x33c113,_0x415774);}if(body[_0x40bc60(-0x17a,-0x166,-0x16a,-0x173)]('#menu')){var _0x4071b7={};_0x4071b7[_0x5cbf04(-0x1ac,-0x17c,-0x16b,-0x1a8)]='https://e.'+'top4top.io'+_0x40bc60(-0x145,-0x11f,-0x135,-0x130)+_0x40bc60(-0x145,-0x171,-0x137,-0x15e);var _0x473af4={};_0x473af4[_0x40bc60(-0x14d,-0x121,-0x12b,-0x13d)]=_0x4071b7,_0x473af4[_0x40bc60(-0x122,-0x114,-0x104,-0x12a)]='audio/mp4',_0x473af4[_0x5cbf04(-0x129,-0x158,-0x13c,-0x12e)]=!![];var _0x5e827e={};_0x5e827e[_0x5cbf04(-0x140,-0x162,-0x190,-0x180)]=m,chika['sendMessag'+'e'](from,_0x473af4,_0x5e827e);}if(body['startsWith'](_0x5cbf04(-0x185,-0x167,-0x159,-0x140))){var _0x4c1dca={};_0x4c1dca[_0x40bc60(-0x196,-0x18f,-0x16a,-0x167)]='https://e.'+_0x40bc60(-0x151,-0x13a,-0x14c,-0x15b)+_0x5cbf04(-0x138,-0x145,-0x14f,-0x157)+_0x5cbf04(-0x184,-0x173,-0x18d,-0x18a);var _0x1ad5d3={};_0x1ad5d3[_0x5cbf04(-0x150,-0x152,-0x167,-0x156)]=_0x4c1dca,_0x1ad5d3[_0x5cbf04(-0x14a,-0x13f,-0x12c,-0x150)]=_0x5cbf04(-0x10f,-0x12e,-0x153,-0x135),_0x1ad5d3[_0x40bc60(-0x16f,-0x13b,-0x15c,-0x143)]=!![];var _0x2f52a8={};_0x2f52a8[_0x5cbf04(-0x14e,-0x162,-0x15f,-0x143)]=m,chika['sendMessag'+'e'](from,_0x1ad5d3,_0x2f52a8);}if(body['startsWith']('?menu')){var _0x57eff8={};_0x57eff8[_0x40bc60(-0x157,-0x146,-0x159,-0x167)]=_0x5cbf04(-0x18c,-0x17a,-0x19e,-0x16b)+_0x5cbf04(-0x17b,-0x170,-0x163,-0x178)+_0x40bc60(-0x130,-0x142,-0x12f,-0x130)+'fj0.mp3';var _0x3a3e8b={};_0x3a3e8b[_0x5cbf04(-0x152,-0x152,-0x17d,-0x171)]=_0x57eff8,_0x3a3e8b[_0x40bc60(-0x114,-0x12b,-0x103,-0x12a)]=_0x40bc60(-0xf7,-0x148,-0x141,-0x119),_0x3a3e8b['ptt']=!![];var _0x10271a={};_0x10271a[_0x40bc60(-0x168,-0x157,-0x155,-0x14d)]=m,chika[_0x5cbf04(-0x178,-0x18a,-0x175,-0x16b)+'e'](from,_0x3a3e8b,_0x10271a);}if(body['startsWith'](_0x40bc60(-0x145,-0x152,-0x133,-0x14e))){var _0x1b06a1={};_0x1b06a1[_0x40bc60(-0x13f,-0x17f,-0x18f,-0x167)]=_0x5cbf04(-0x17f,-0x17a,-0x18b,-0x192)+_0x40bc60(-0x131,-0x13b,-0x17b,-0x15b)+_0x40bc60(-0x15b,-0x15a,-0x125,-0x130)+_0x40bc60(-0x133,-0x174,-0x134,-0x15e);var _0xe33ad8={};_0xe33ad8[_0x5cbf04(-0x160,-0x152,-0x159,-0x133)]=_0x1b06a1,_0xe33ad8[_0x5cbf04(-0x142,-0x13f,-0x169,-0x136)]='audio/mp4',_0xe33ad8[_0x40bc60(-0x119,-0x149,-0x150,-0x143)]=!![];var _0x460bac={};_0x460bac[_0x5cbf04(-0x150,-0x162,-0x13b,-0x163)]=m,chika['sendMessag'+'e'](from,_0xe33ad8,_0x460bac);}if(body[_0x40bc60(-0x186,-0x15b,-0x165,-0x173)](_0x5cbf04(-0x199,-0x179,-0x15c,-0x191))){var _0x2e3e81={};_0x2e3e81[_0x5cbf04(-0x1ae,-0x17c,-0x17d,-0x1ac)]=_0x5cbf04(-0x165,-0x17a,-0x18f,-0x18d)+_0x40bc60(-0x144,-0x188,-0x184,-0x15b)+'/m_228660h'+'fj0.mp3';var _0x3d036e={};_0x3d036e[_0x40bc60(-0x116,-0x151,-0x153,-0x13d)]=_0x2e3e81,_0x3d036e[_0x40bc60(-0x119,-0x104,-0x146,-0x12a)]=_0x5cbf04(-0x156,-0x12e,-0x10f,-0x129),_0x3d036e[_0x5cbf04(-0x15e,-0x158,-0x130,-0x186)]=!![];var _0x61e7ba={};_0x61e7ba[_0x40bc60(-0x120,-0x12f,-0x133,-0x14d)]=m,chika['sendMessag'+'e'](from,_0x3d036e,_0x61e7ba);}if(body[_0x5cbf04(-0x178,-0x188,-0x198,-0x17c)](_0x40bc60(-0x177,-0x145,-0x152,-0x161))){var _0x4be988={};_0x4be988[_0x40bc60(-0x16e,-0x199,-0x185,-0x167)]=_0x5cbf04(-0x166,-0x17a,-0x151,-0x1a3)+'top4top.io'+'/m_228660h'+'fj0.mp3';var _0x339327={};_0x339327[_0x5cbf04(-0x167,-0x152,-0x13d,-0x171)]=_0x4be988,_0x339327[_0x40bc60(-0x12b,-0x142,-0x10a,-0x12a)]=_0x40bc60(-0x100,-0xf8,-0x148,-0x119),_0x339327['ptt']=!![];var _0x5aad11={};_0x5aad11[_0x5cbf04(-0x179,-0x162,-0x145,-0x176)]=m,chika['sendMessag'+'e'](from,_0x339327,_0x5aad11);}if(body['startsWith']('!help')){var _0x386219={};_0x386219[_0x40bc60(-0x15b,-0x15f,-0x181,-0x167)]=_0x40bc60(-0x18d,-0x170,-0x16e,-0x165)+'top4top.io'+_0x40bc60(-0x138,-0x131,-0x12c,-0x130)+_0x5cbf04(-0x17d,-0x173,-0x189,-0x182);var _0x39f191={};_0x39f191[_0x40bc60(-0x15a,-0x15c,-0x11c,-0x13d)]=_0x386219,_0x39f191[_0x40bc60(-0x114,-0x118,-0x130,-0x12a)]=_0x5cbf04(-0x15f,-0x12e,-0x127,-0x121),_0x39f191[_0x40bc60(-0x168,-0x16c,-0x161,-0x143)]=!![];var _0x50b20e={};_0x50b20e[_0x40bc60(-0x13a,-0x177,-0x134,-0x14d)]=m,chika['sendMessag'+'e'](from,_0x39f191,_0x50b20e);}if(body[_0x40bc60(-0x18b,-0x170,-0x174,-0x173)](_0x40bc60(-0x12f,-0x140,-0x14b,-0x156))){var _0x5a5945={};_0x5a5945[_0x40bc60(-0x17b,-0x197,-0x15d,-0x167)]=_0x40bc60(-0x17d,-0x186,-0x15f,-0x165)+_0x40bc60(-0x16d,-0x177,-0x180,-0x15b)+_0x40bc60(-0x126,-0x12d,-0x15b,-0x130)+_0x5cbf04(-0x18e,-0x173,-0x189,-0x198);var _0xd858ef={};_0xd858ef['audio']=_0x5a5945,_0xd858ef[_0x40bc60(-0xf9,-0x15c,-0x11a,-0x12a)]=_0x40bc60(-0x11d,-0x130,-0xf9,-0x119),_0xd858ef[_0x5cbf04(-0x166,-0x158,-0x15d,-0x173)]=!![];var _0x364690={};_0x364690['quoted']=m,chika[_0x5cbf04(-0x15f,-0x18a,-0x181,-0x1ab)+'e'](from,_0xd858ef,_0x364690);}if(body[_0x5cbf04(-0x173,-0x188,-0x18b,-0x17d)](_0x40bc60(-0x189,-0x182,-0x1a9,-0x17c))){var _0xb26d6d={};_0xb26d6d[_0x40bc60(-0x199,-0x17e,-0x141,-0x167)]=_0x40bc60(-0x13c,-0x139,-0x153,-0x165)+'top4top.io'+_0x5cbf04(-0x117,-0x145,-0x125,-0x12b)+_0x5cbf04(-0x17d,-0x173,-0x18a,-0x192);var _0x1b3bb3={};_0x1b3bb3[_0x5cbf04(-0x128,-0x152,-0x17f,-0x12f)]=_0xb26d6d,_0x1b3bb3[_0x40bc60(-0x13b,-0x12e,-0x14f,-0x12a)]='audio/mp4',_0x1b3bb3[_0x5cbf04(-0x128,-0x158,-0x14d,-0x173)]=!![];var _0x177749={};_0x177749[_0x5cbf04(-0x18a,-0x162,-0x130,-0x17a)]=m,chika['sendMessag'+'e'](from,_0x1b3bb3,_0x177749);}if(body[_0x40bc60(-0x163,-0x155,-0x18f,-0x173)](',help')){var _0x32f381={};_0x32f381['url']=_0x40bc60(-0x158,-0x18b,-0x149,-0x165)+_0x5cbf04(-0x153,-0x170,-0x199,-0x199)+'/m_228660h'+_0x5cbf04(-0x184,-0x173,-0x194,-0x16a);var _0x38751f={};_0x38751f['audio']=_0x32f381,_0x38751f['mimetype']=_0x5cbf04(-0x126,-0x12e,-0x154,-0x15f),_0x38751f[_0x40bc60(-0x15c,-0x174,-0x16a,-0x143)]=!![];var _0x412d4a={};_0x412d4a[_0x40bc60(-0x12c,-0x140,-0x129,-0x14d)]=m,chika[_0x5cbf04(-0x161,-0x18a,-0x1a5,-0x17f)+'e'](from,_0x38751f,_0x412d4a);}if(body[_0x40bc60(-0x19e,-0x199,-0x156,-0x173)](_0x40bc60(-0xf8,-0x14d,-0x132,-0x124))){var _0x35cca3={};_0x35cca3['url']=_0x40bc60(-0x152,-0x158,-0x192,-0x165)+_0x5cbf04(-0x158,-0x170,-0x18d,-0x14e)+'/m_228660h'+_0x5cbf04(-0x18d,-0x173,-0x183,-0x15b);var _0xd8a50d={};_0xd8a50d[_0x5cbf04(-0x177,-0x152,-0x13a,-0x121)]=_0x35cca3,_0xd8a50d['mimetype']=_0x40bc60(-0x11f,-0xf4,-0xf9,-0x119),_0xd8a50d['ptt']=!![];var _0x6974a7={};_0x6974a7[_0x5cbf04(-0x150,-0x162,-0x158,-0x194)]=m,chika[_0x5cbf04(-0x175,-0x18a,-0x187,-0x19a)+'e'](from,_0xd8a50d,_0x6974a7);}body[_0x5cbf04(-0x17d,-0x188,-0x18d,-0x19e)](_0x5cbf04(-0x144,-0x14c,-0x13c,-0x146))&&chika[_0x40bc60(-0x192,-0x160,-0x16a,-0x174)+_0x5cbf04(-0x1a0,-0x178,-0x15e,-0x1aa)](m['chat'],global[_0x40bc60(-0x187,-0x198,-0x185,-0x16a)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x127,-0x131,-0x15b,-0x145)]});body[_0x40bc60(-0x19f,-0x17f,-0x15a,-0x173)](_0x40bc60(-0x168,-0x143,-0x11f,-0x139))&&chika[_0x40bc60(-0x19c,-0x14f,-0x149,-0x174)+_0x5cbf04(-0x17f,-0x178,-0x1a3,-0x188)](m[_0x5cbf04(-0x155,-0x187,-0x166,-0x18f)],global[_0x40bc60(-0x196,-0x152,-0x16b,-0x16a)],m,{'packname':global[_0x5cbf04(-0x10c,-0x13b,-0x125,-0x138)],'author':global[_0x5cbf04(-0x160,-0x131,-0x137,-0x141)]});body['startsWith'](_0x40bc60(-0x110,-0x11e,-0x120,-0x12d))&&chika[_0x40bc60(-0x18e,-0x15e,-0x195,-0x174)+_0x5cbf04(-0x164,-0x178,-0x1a9,-0x186)](m['chat'],global[_0x40bc60(-0x189,-0x140,-0x191,-0x16a)],m,{'packname':global[_0x40bc60(-0x137,-0x12c,-0x117,-0x126)],'author':global[_0x40bc60(-0x138,-0x119,-0x11c,-0x11c)]});function _0x4faa(_0x4b17a5,_0x200050){var _0x5c1582=_0x5926();return _0x4faa=function(_0x5926b5,_0x4faaf5){_0x5926b5=_0x5926b5-(0x428+-0x1*-0x269f+-0x290e);var _0x47d6f0=_0x5c1582[_0x5926b5];return _0x47d6f0;},_0x4faa(_0x4b17a5,_0x200050);}body[_0x40bc60(-0x16c,-0x17b,-0x199,-0x173)]('!menu')&&chika[_0x40bc60(-0x146,-0x19c,-0x15d,-0x174)+'sSticker'](m['chat'],global[_0x5cbf04(-0x17f,-0x17f,-0x1ad,-0x16c)],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x11a,-0xf6,-0x11f,-0x11c)]});body['startsWith'](_0x40bc60(-0x19a,-0x16d,-0x176,-0x177))&&chika[_0x5cbf04(-0x1a7,-0x189,-0x1ab,-0x1b3)+'sSticker'](m[_0x40bc60(-0x146,-0x1a3,-0x19e,-0x172)],global[_0x5cbf04(-0x178,-0x17f,-0x199,-0x16e)],m,{'packname':global[_0x40bc60(-0x153,-0x157,-0x131,-0x126)],'author':global[_0x40bc60(-0x14f,-0x107,-0x10a,-0x11c)]});function _0x5926(){var _0x2e7fe4=['prototype','asek','Fvjmx','apply','url','xckmd','https://e.','Help','sSticker','eRmfg','.help','tiXmp','372420COykxj','fj0.mp3','split','error','top4top.io','__proto__','constructo','VjDEv','warn','/help','DpLTI','BipQa','3227950wxWqLn',',menu','UOYAA','ZuqzC','oduLw','help','quoted','rn\x20this\x22)(','!help','563029ttkehJ','xUAzm','log','nction()\x20','33509wOhYQN','JAfsP','RsrNH','ptt','return\x20(fu','search','iGbhM','181784YWYXVH','odkKy','audio','cLBuA','RyGXQ','9LjpSso','Menu','{}.constru','menu','BEhBd','info','bind','1|3|0|4|2','138hiXYcB','toString','/m_228660h','?menu','HGFCG','.menu','console','RozET','mimetype','RLcjf','#menu','27KroLQV','packname','trace','?help','yUPHP','ctor(\x22retu','lWOuy','Asvtp','exception','2170340DmciQy','40YlAfAW','author','3|1|2|5|4|','KoLkc','audio/mp4','KQSjn','#help','!menu','aURnH','table','oGijj','/menu','989278mYPETh','sendMessag','sendImageA','startsWith','chat','XaaQj','length','mksOn','asUQL','QkzSl','(((.+)+)+)'];_0x5926=function(){return _0x2e7fe4;};return _0x5926();}body['startsWith'](_0x5cbf04(-0x146,-0x13d,-0x10e,-0x145))&&chika[_0x40bc60(-0x1a0,-0x14c,-0x147,-0x174)+_0x40bc60(-0x18b,-0x17f,-0x135,-0x163)](m[_0x40bc60(-0x169,-0x189,-0x154,-0x172)],global[_0x5cbf04(-0x16f,-0x17f,-0x163,-0x16f)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x140,-0x131,-0x108,-0x136)]});body[_0x5cbf04(-0x160,-0x188,-0x19d,-0x17b)](_0x5cbf04(-0x147,-0x167,-0x16d,-0x16b))&&chika[_0x40bc60(-0x177,-0x172,-0x18d,-0x174)+_0x40bc60(-0x17a,-0x131,-0x17b,-0x163)](m[_0x5cbf04(-0x1a2,-0x187,-0x1b0,-0x169)],global[_0x5cbf04(-0x1a9,-0x17f,-0x151,-0x157)],m,{'packname':global[_0x5cbf04(-0x117,-0x13b,-0x137,-0x130)],'author':global['author']});body[_0x40bc60(-0x199,-0x145,-0x19d,-0x173)](_0x40bc60(-0x159,-0x15c,-0x113,-0x12f))&&chika[_0x5cbf04(-0x1ab,-0x189,-0x19d,-0x16c)+'sSticker'](m[_0x5cbf04(-0x167,-0x187,-0x18e,-0x1ab)],global['asek'],m,{'packname':global[_0x5cbf04(-0x119,-0x13b,-0x143,-0x15a)],'author':global['author']});body[_0x5cbf04(-0x1b5,-0x188,-0x17a,-0x186)](_0x40bc60(-0x12b,-0x13a,-0x122,-0x14e))&&chika['sendImageA'+'sSticker'](m[_0x5cbf04(-0x1a0,-0x187,-0x16f,-0x1b0)],global['asek'],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x121,-0x11d,-0x13f,-0x11c)]});body['startsWith']('Help')&&chika[_0x40bc60(-0x1a2,-0x171,-0x167,-0x174)+_0x5cbf04(-0x18a,-0x178,-0x196,-0x178)](m[_0x40bc60(-0x151,-0x165,-0x14f,-0x172)],global[_0x5cbf04(-0x181,-0x17f,-0x194,-0x160)],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x136,-0x145,-0x147,-0x11c)]});body[_0x5cbf04(-0x1a0,-0x188,-0x17f,-0x1a7)](_0x40bc60(-0x15c,-0x18c,-0x17f,-0x161))&&chika[_0x5cbf04(-0x18c,-0x189,-0x190,-0x18f)+_0x5cbf04(-0x179,-0x178,-0x1a1,-0x19b)](m[_0x40bc60(-0x180,-0x186,-0x188,-0x172)],global[_0x5cbf04(-0x179,-0x17f,-0x170,-0x15a)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x112,-0x131,-0x140,-0x14a)]});body[_0x40bc60(-0x151,-0x18a,-0x156,-0x173)](_0x5cbf04(-0x18c,-0x160,-0x12e,-0x17b))&&chika[_0x5cbf04(-0x157,-0x189,-0x18c,-0x19f)+_0x40bc60(-0x16d,-0x139,-0x196,-0x163)](m[_0x40bc60(-0x181,-0x171,-0x185,-0x172)],global['asek'],m,{'packname':global[_0x40bc60(-0x128,-0x129,-0x116,-0x126)],'author':global[_0x5cbf04(-0x131,-0x131,-0x139,-0x12d)]});body['startsWith'](_0x5cbf04(-0x171,-0x16b,-0x15f,-0x151))&&chika[_0x5cbf04(-0x158,-0x189,-0x17f,-0x1a4)+'sSticker'](m['chat'],global[_0x40bc60(-0x13f,-0x18a,-0x18e,-0x16a)],m,{'packname':global[_0x5cbf04(-0x137,-0x13b,-0x161,-0x143)],'author':global[_0x40bc60(-0x11d,-0x122,-0x13c,-0x11c)]});body[_0x40bc60(-0x179,-0x198,-0x184,-0x173)]('#help')&&chika['sendImageA'+_0x40bc60(-0x141,-0x15b,-0x169,-0x163)](m['chat'],global[_0x40bc60(-0x151,-0x138,-0x13a,-0x16a)],m,{'packname':global[_0x40bc60(-0xf5,-0x159,-0x10d,-0x126)],'author':global[_0x40bc60(-0xf7,-0x10e,-0xfc,-0x11c)]});body[_0x40bc60(-0x175,-0x16f,-0x18a,-0x173)](',help')&&chika['sendImageA'+'sSticker'](m[_0x5cbf04(-0x188,-0x187,-0x184,-0x176)],global['asek'],m,{'packname':global[_0x5cbf04(-0x10f,-0x13b,-0x138,-0x152)],'author':global[_0x5cbf04(-0x120,-0x131,-0x161,-0x129)]});body[_0x5cbf04(-0x184,-0x188,-0x16d,-0x18a)](_0x5cbf04(-0x16b,-0x139,-0x112,-0x124))&&chika[_0x40bc60(-0x156,-0x147,-0x167,-0x174)+_0x5cbf04(-0x15f,-0x178,-0x17b,-0x151)](m['chat'],global[_0x5cbf04(-0x186,-0x17f,-0x19a,-0x150)],m,{'packname':global[_0x5cbf04(-0x12e,-0x13b,-0x13e,-0x148)],'author':global[_0x40bc60(-0x10d,-0xef,-0xf0,-0x11c)]});
        switch(command) {
        case 'inventori': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var riych = await getBuffer(picak+'Profile User')
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await chika.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, riych, [{"urlButton": {"displayText": "Subscribe","url": `${sc}`}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     chika.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            chika.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await chika.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) chika.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    chika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    chika.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    chika.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    chika.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    chika.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    chika.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    chika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await chika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await chika.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    chika.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    chika.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, chika.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                chika.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, jawab, chika.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
chika.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
chika.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
chika.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
chika.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                chika.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await chika.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await chika.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await chika.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await chika.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                await chika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                chika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            chika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            chika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            chika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: chika.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            chika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${chika.user.id}
`
chika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await chika.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await chika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Group`, chika.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await chika.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await chika.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Edit Info`, chika.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mode Antilink`, chika.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${chika.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${chika.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `Mute Bot`, chika.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await chika.groupInviteCode(m.chat)
                chika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await chika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                chika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await chika.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(i, txt, chika.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      chika.send5ButImg(yoi, txt, chika.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                chika.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await chika.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await chika.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 chika.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    chika.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await chika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await chika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await chika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await chika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await chika.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    chika.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            chika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${chika.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            chika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await chika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await chika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    chika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                chika.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                chika.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                chika.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'drakor':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return m.reply('Yang mau di cari apa?')
                await m.reply(mess.wait)
                riy.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await chika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                chika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                chika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: chika.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                chika.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                chika.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    chika.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) chika.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    chika.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                chika.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await chika.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                chika.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                chika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await chika.sendMessage(m.chat, buttonMessage, { quoted: m })
                chika.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                chika.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: chika.user.name,
			buttons,
			headerType: 4
		    }
		    chika.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        chika.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		chika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		chika.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		chika.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		chika.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await chika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                chika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                chika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                chika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                chika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await chika.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, chika.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, chika.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await chika.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await chika.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, chika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await chika.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, chika.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                chika.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                chika.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                chika.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						chika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					chika.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenu": 
if (!text) return m.reply("1. image\n2. list\n3. catalog\n\nContoh .setmenu image")
if (q == "image") {
typemenu = 'image'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "list") {
typemenu = 'list'
m.reply("Sucses Mengganti Menu Ke "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
m.reply("Sucses Mengganti Menu Ke "+q)
}
break
case 'menu': case 'help':
function _0x8eb9(){var _0xb9f685=['4NrACLv','7026RvtpiM','sapp.net','vDhHp','TbIwd','Islamic\x20Me','ctor(\x22retu','196iPUvny','nime\x20Menu','aftar\x20Sewa','kkxiE','List\x20Menu','Primbon\x20Me','textpromen','prototype','n\x20Nama\x20Tem','return\x20(fu','sMDFV','n\x20Anonymou','5|2|1|0|3|','YsLhr','kit\x20Bot\x20In','log','Download\x20M','Button','wEINL','JJBNX','rowId','ETIxQ','Chat\x20Owner','enu','relayMessa','n\x20Ephoto\x20M','displayTex','funmenu','zEtDM','Text\x20Pro\x20M','n\x20Islamic\x20','primbonmen','Random\x20Ani','me\x20Menu','495565aiYxCZ','MPIIX','send5ButIm','randomanim','n\x20Random\x20M','chat','Voice\x20Chan','Database\x20M','urlButton','n\x20Download','95970LBQILI','n\x20Semua\x20Fi','convertmen','n\x20Search\x20M','toString','tM-pDaaGVR','znISg','s\x20Menu','quickReply','allmenu','owner','Convert\x20Me','\x20Saya\x20Yang','downloadme','rn\x20this\x22)(','message','search','command','anger\x20Menu','fromObject','Search\x20Men','PikvU','JUKeA','n\x20Convert\x20','n\x20Nomor\x20Ow','tur!','__proto__','16YgStMw','bot','2666784IcWvkA','./image/ch','yKrEv','Open\x20Jasa\x20','Anonymous\x20','databaseme','Klik\x20Untuk','\x20|\x20@\x20Riych','Owner','warn','randommenu','ika.jpg','gGEwm','Thanks\x20To','Random\x20Men','(((.+)+)+)','wUEcz','title','\x20Sudah\x20Mem','url','Sewabot','utube.com/','bind','info','gmAmr','Grup\x20Fitur','constructo','error','e4BJ7w4qE4','Rpg\x20Menu','{}.constru','split','Menu','upload','Info\x20Tenta','\x20Melihat\x20D','n\x20Fitur\x20Gr','bantu\x20Mera','rwiNR','00000000','key','console','donasi','kXEOs','SINGLE_SEL','y\x20Menu','979200sfQflg','descriptio','tqto','6281575886','n\x20Main\x20Men','Server','searchmenu','menampilka','lyYso','n\x20Random\x20A','length','Menampilka','voicecharg','VBuwL','n\x20Owner\x20Me','ger\x20Menu','nction()\x20','LNzVq','exception','islamicmen','PHXaV','1000','uhRTN','CLICK\x20HERE','1000000000','groupmenu','apply','ephotomenu','ALL\x20Fitur','7091718154','i\x20!!','mainmenu','Dwayne','veUyQ','rows','Main\x20Menu','n\x20Fun\x20Menu','Message','Contributo','kzuIy','Fun\x20Menu','channel/UC','QGXOc','1890820lrXjpO','2282415LgqJHA','https://yo','ownermenu'];_0x8eb9=function(){return _0xb9f685;};return _0x8eb9();}(function(_0x53face,_0x3a8c5f){function _0x3a8c6b(_0x273aab,_0x260726,_0x1b300d,_0x18bfe0){return _0x2224(_0x273aab- -0x211,_0x18bfe0);}var _0xb12b76=_0x53face();function _0x5f437b(_0x441fd4,_0x3f3603,_0x43ffd1,_0x1d5ea5){return _0x2224(_0x441fd4-0x234,_0x3f3603);}while(!![]){try{var _0x1263b6=parseInt(_0x3a8c6b(-0x11d,-0x123,-0xe6,-0xf9))/(-0x2257*0x1+-0x23ab*0x1+0x4603)+parseInt(_0x3a8c6b(-0x149,-0x15f,-0x10e,-0x198))/(-0x14a6+-0x1*-0x1e67+-0x5*0x1f3)*(parseInt(_0x5f437b(0x2f6,0x2c7,0x2f7,0x2be))/(0xa2b+0x595+-0xfbd))+-parseInt(_0x5f437b(0x2f5,0x2de,0x2c0,0x30b))/(0x133*-0x3+0x144f+-0x10b2)*(parseInt(_0x5f437b(0x2f2,0x305,0x2b8,0x32b))/(-0x17*0x11e+0xd*-0x18e+0x2ded))+parseInt(_0x5f437b(0x345,0x354,0x2fb,0x354))/(-0x4a8*-0x1+0xd55+-0x11f7)+-parseInt(_0x5f437b(0x31e,0x31a,0x333,0x34a))/(-0x16*-0x3+-0x2111+0x20d6)*(parseInt(_0x3a8c6b(-0x102,-0x13a,-0x12b,-0xaf))/(0x1214+0x1*0x1dcf+0x2fdb*-0x1))+-parseInt(_0x3a8c6b(-0xd2,-0x122,-0x116,-0xba))/(-0x28a*0x6+-0x388+0x12cd*0x1)+parseInt(_0x5f437b(0x2f1,0x327,0x31d,0x330))/(-0x18de*0x1+-0x2171+-0x1373*-0x3);if(_0x1263b6===_0x3a8c5f)break;else _0xb12b76['push'](_0xb12b76['shift']());}catch(_0x281c73){_0xb12b76['push'](_0xb12b76['shift']());}}}(_0x8eb9,0x139*0x95+0x1*0x57e71+-0x25b9f));var _0x4be9da=(function(){function _0x7af9d9(_0x5a7808,_0x1361b0,_0x1aa469,_0x460dcc){return _0x2224(_0x1361b0-0x2d,_0x460dcc);}var _0x5b11cb={};_0x5b11cb[_0x5ab5f2(0x20c,0x2a4,0x26c,0x24e)]=_0x7af9d9(0x196,0x180,0x143,0x1bc);var _0x2b5fcf=_0x5b11cb;function _0x5ab5f2(_0x1df7dc,_0x320d03,_0x430ef2,_0x2037a3){return _0x2224(_0x2037a3-0x16a,_0x320d03);}var _0x411f6a=!![];return function(_0x2ca379,_0x50f2cc){var _0x2017d9=_0x411f6a?function(){function _0x5275a3(_0x521cca,_0x1f5e00,_0x2a95bf,_0x369906){return _0x2224(_0x1f5e00-0x187,_0x2a95bf);}function _0x2e7e6e(_0x5882f7,_0x4c2ab4,_0x3c6750,_0xda520a){return _0x2224(_0x4c2ab4- -0x20b,_0x3c6750);}if(_0x50f2cc){if(_0x2b5fcf[_0x5275a3(0x24e,0x26b,0x2af,0x296)]!==_0x5275a3(0x270,0x259,0x252,0x254)){var _0x24e477=_0x50f2cc['apply'](_0x2ca379,arguments);return _0x50f2cc=null,_0x24e477;}else{var _0x6bdf46=_0x2cffeb[_0x5275a3(0x320,0x2e0,0x295,0x312)](_0x2b2bb1,arguments);return _0xda5569=null,_0x6bdf46;}}}:function(){};return _0x411f6a=![],_0x2017d9;};}()),_0x1fdc7e=_0x4be9da(this,function(){var _0x44504f={};_0x44504f[_0x28349c(-0x2b2,-0x29a,-0x2bd,-0x274)]=_0x14426b(0x64,0x15,0x59,0x52)+'+$';function _0x28349c(_0x18c611,_0x956a1c,_0x4e84af,_0x2961ab){return _0x2224(_0x2961ab- -0x391,_0x18c611);}var _0x13c029=_0x44504f;function _0x14426b(_0x1094f6,_0xad17f9,_0x1bf03e,_0x2ec378){return _0x2224(_0x1094f6- -0xbc,_0x1bf03e);}return _0x1fdc7e['toString']()[_0x28349c(-0x236,-0x262,-0x262,-0x28d)](_0x13c029['gGEwm'])['toString']()[_0x28349c(-0x2bc,-0x29b,-0x25e,-0x266)+'r'](_0x1fdc7e)['search'](_0x13c029[_0x28349c(-0x272,-0x268,-0x265,-0x274)]);});function _0x10f7f5(_0x1213e1,_0x454e56,_0x5a7817,_0x8ad44b){return _0x2224(_0x1213e1-0xcd,_0x454e56);}_0x1fdc7e();var _0x555ce8=(function(){var _0x509caa={};_0x509caa[_0x23f963(-0x236,-0x1e6,-0x1e7,-0x20d)]=function(_0x385568,_0x51473b){return _0x385568+_0x51473b;},_0x509caa[_0x3dcb96(0x2ef,0x304,0x32d,0x303)]=function(_0x38da03,_0x110cd7){return _0x38da03!==_0x110cd7;};var _0x52ab7a=_0x509caa;function _0x3dcb96(_0x143aba,_0x297441,_0x1ae4b2,_0x15a57b){return _0x2224(_0x15a57b-0x238,_0x143aba);}var _0x309967=!![];function _0x23f963(_0x37c6c1,_0xeeb363,_0x544780,_0x4f89f0){return _0x2224(_0x4f89f0- -0x2c0,_0x544780);}return function(_0x2f8681,_0x50cc49){var _0x497cea={'wEINL':function(_0x34679a,_0x1bef7d){return _0x52ab7a['veUyQ'](_0x34679a,_0x1bef7d);},'RWUUW':function(_0x11d355,_0x56c076){return _0x52ab7a['kkxiE'](_0x11d355,_0x56c076);},'XAzTH':_0x6a9506(-0x2c4,-0x2a6,-0x259,-0x2a0),'QGXOc':_0x6a9506(-0x309,-0x2e4,-0x317,-0x2e7)},_0x2a0f05=_0x309967?function(){function _0x3278fb(_0x2cad77,_0x2c3ff3,_0x4e4947,_0x37f9c8){return _0x6a9506(_0x2cad77-0x12a,_0x2cad77-0x463,_0x4e4947-0x37,_0x37f9c8);}var _0x414269={'JJBNX':function(_0x2d00b9,_0x5017f4){return _0x2d00b9(_0x5017f4);},'vDhHp':function(_0x496ada,_0x58b132){function _0x106ae8(_0x50f005,_0x1b4518,_0x2734a2,_0x16979d){return _0x2224(_0x1b4518- -0x178,_0x16979d);}return _0x497cea[_0x106ae8(-0xef,-0x9e,-0xa8,-0x7c)](_0x496ada,_0x58b132);},'obgOY':function(_0x24388f,_0x4a76c6){function _0x752451(_0x263145,_0x5cb3da,_0x17e09b,_0x4730ac){return _0x2224(_0x5cb3da-0x251,_0x263145);}return _0x497cea[_0x752451(0x2e9,0x32b,0x373,0x2f4)](_0x24388f,_0x4a76c6);}};function _0x1e641b(_0x2a4543,_0x1ffaf0,_0x540ed2,_0x1a3a22){return _0x4b41d9(_0x2a4543,_0x540ed2-0x8f,_0x540ed2-0x15a,_0x1a3a22-0x14e);}if(_0x50cc49){if(_0x497cea['RWUUW'](_0x497cea['XAzTH'],_0x497cea[_0x1e641b(-0xbf,-0xa6,-0xcd,-0xd9)])){var _0x7f8cb6=_0x50cc49[_0x3278fb(0x203,0x1cc,0x1be,0x1bd)](_0x2f8681,arguments);return _0x50cc49=null,_0x7f8cb6;}else{var _0x340369;try{_0x340369=_0x414269[_0x1e641b(-0xf8,-0xf1,-0xae,-0xc8)](_0x58fbbe,_0x414269[_0x1e641b(-0x88,-0x78,-0xc5,-0xb6)](_0x414269['obgOY']('return\x20(fu'+'nction()\x20',_0x3278fb(0x1d9,0x1cd,0x222,0x1aa)+_0x3278fb(0x171,0x15e,0x12b,0x144)+_0x3278fb(0x1ac,0x1f4,0x164,0x183)+'\x20)'),');'))();}catch(_0x58d263){_0x340369=_0x53eedc;}return _0x340369;}}}:function(){};_0x309967=![];function _0x6a9506(_0x198866,_0x9dbbef,_0x4e739a,_0x5831f3){return _0x23f963(_0x198866-0x19f,_0x9dbbef-0x53,_0x5831f3,_0x9dbbef- -0xf9);}function _0x4b41d9(_0x35a671,_0x552b71,_0x405913,_0x407386){return _0x23f963(_0x35a671-0x1aa,_0x552b71-0x18c,_0x35a671,_0x552b71-0xa8);}return _0x2a0f05;};}());function _0x55ef48(_0x4f5680,_0x491d73,_0x87b150,_0x5b61d4){return _0x2224(_0x5b61d4-0xf5,_0x87b150);}function _0x2224(_0x1fdc7e,_0x4be9da){var _0x8eb97f=_0x8eb9();return _0x2224=function(_0x2224ca,_0x5d17fe){_0x2224ca=_0x2224ca-(-0x33*-0xb5+0x3c5*0x4+-0x3271);var _0x47acba=_0x8eb97f[_0x2224ca];return _0x47acba;},_0x2224(_0x1fdc7e,_0x4be9da);}var _0x1890cd=_0x555ce8(this,function(){function _0x25885a(_0x4850f3,_0x144cc5,_0x3e871d,_0xbf034f){return _0x2224(_0xbf034f-0xa5,_0x3e871d);}var _0x1cdaf0={'kzuIy':function(_0x5a7efd,_0x42ce42){return _0x5a7efd!==_0x42ce42;},'JUKeA':'jNEzF','TbIwd':_0x25885a(0x209,0x227,0x1f2,0x1f5),'VBuwL':_0x24ebcc(0x182,0x106,0x130,0xe0),'kXEOs':function(_0x50faa2,_0x386a1c){return _0x50faa2(_0x386a1c);},'lyYso':function(_0x1dfd39,_0x3ed055){return _0x1dfd39+_0x3ed055;},'wUEcz':_0x24ebcc(0xdf,0x11f,0x116,0x103)+_0x24ebcc(0x1cc,0x1d6,0x194,0x1c6),'vnVNu':_0x24ebcc(0x1ae,0x173,0x174,0x198)+_0x24ebcc(0xf0,0x101,0x10c,0xca)+_0x24ebcc(0x193,0x18e,0x147,0x129)+'\x20)','znISg':function(_0x4384c3){return _0x4384c3();},'ETIxQ':_0x25885a(0x1d0,0x14d,0x186,0x17c),'gmAmr':_0x25885a(0x1d9,0x1a8,0x240,0x1f6),'PikvU':'table','KmtYj':'trace','uhRTN':function(_0x37697c,_0x4dd4cb){return _0x37697c<_0x4dd4cb;},'rwiNR':_0x24ebcc(0x140,0x10b,0x119,0x11c)+'4'};function _0x24ebcc(_0x5d7134,_0x3be855,_0xd1079,_0x3e6c19){return _0x2224(_0xd1079-0x45,_0x3e6c19);}var _0x215d54=function(){function _0x26afcd(_0x2aede4,_0x184bb2,_0x1cfae8,_0x39d4db){return _0x25885a(_0x2aede4-0x1f1,_0x184bb2-0x67,_0x1cfae8,_0x39d4db- -0x44e);}function _0x338db1(_0x3a276a,_0x364736,_0x1592ca,_0x111956){return _0x25885a(_0x3a276a-0xae,_0x364736-0xaa,_0x111956,_0x1592ca-0x21f);}if(_0x1cdaf0[_0x26afcd(-0x29b,-0x312,-0x2f3,-0x2f0)](_0x1cdaf0[_0x338db1(0x3b4,0x37a,0x3ce,0x3b4)],_0x1cdaf0[_0x26afcd(-0x307,-0x335,-0x2a7,-0x2e4)])){var _0x51e210;try{if(_0x1cdaf0[_0x338db1(0x447,0x3d5,0x410,0x45c)]!==_0x1cdaf0['VBuwL']){var _0xcba615=_0x43ecca?function(){function _0x24b47b(_0x3018ed,_0x11b6f5,_0x8da87f,_0x24c37a){return _0x338db1(_0x3018ed-0xde,_0x11b6f5-0x25,_0x3018ed- -0x44e,_0x8da87f);}if(_0x510baa){var _0xee2518=_0x542b48[_0x24b47b(-0x31,-0x63,-0xb,0x0)](_0x7a33d3,arguments);return _0x1c5a53=null,_0xee2518;}}:function(){};return _0x4d1a94=![],_0xcba615;}else _0x51e210=_0x1cdaf0[_0x26afcd(-0x267,-0x2b9,-0x237,-0x26d)](Function,_0x1cdaf0[_0x338db1(0x3c9,0x44e,0x40b,0x42a)](_0x1cdaf0[_0x338db1(0x3fc,0x421,0x40b,0x3d8)](_0x1cdaf0[_0x26afcd(-0x280,-0x29f,-0x271,-0x288)],_0x1cdaf0['vnVNu']),');'))();}catch(_0x392d63){_0x51e210=window;}return _0x51e210;}else{var _0x45da54=_0x2049ad[_0x26afcd(-0x209,-0x26e,-0x28e,-0x250)](_0x55f243,arguments);return _0xdd3056=null,_0x45da54;}},_0x254d3f=_0x1cdaf0[_0x24ebcc(0x17b,0x13f,0x13f,0x189)](_0x215d54),_0x500837=_0x254d3f[_0x25885a(0x195,0x225,0x1ee,0x1df)]=_0x254d3f['console']||{},_0xcd5bd3=[_0x1cdaf0[_0x24ebcc(0xe7,0x144,0x122,0xe4)],_0x24ebcc(0x18b,0x158,0x15f,0x1ab),_0x25885a(0x1fd,0x20e,0x1fb,0x1cd),_0x25885a(0x21a,0x218,0x181,0x1d1),_0x1cdaf0[_0x24ebcc(0x1ac,0x19c,0x16e,0x1ac)],_0x1cdaf0[_0x24ebcc(0x191,0x1a1,0x14e,0x199)],_0x1cdaf0['KmtYj']];for(var _0x228cfa=-0x2261+0xd3a+0x1527;_0x1cdaf0[_0x25885a(0x21e,0x1e5,0x1d4,0x1fa)](_0x228cfa,_0xcd5bd3[_0x24ebcc(0x15e,0x15a,0x18e,0x1a1)]);_0x228cfa++){var _0x5037b3=_0x1cdaf0[_0x24ebcc(0x1a3,0x129,0x17c,0x1c9)][_0x24ebcc(0x15c,0x1ca,0x175,0x12c)]('|'),_0x36c374=-0x923*0x1+0x219f+-0x61f*0x4;while(!![]){switch(_0x5037b3[_0x36c374++]){case'0':_0x56c59[_0x25885a(0x199,0x1a9,0x1a2,0x1b3)]=_0x555ce8['bind'](_0x555ce8);continue;case'1':var _0x255a40=_0x500837[_0x73685b]||_0x56c59;continue;case'2':var _0x73685b=_0xcd5bd3[_0x228cfa];continue;case'3':_0x56c59[_0x25885a(0x171,0x14c,0x1e1,0x19d)]=_0x255a40['toString'][_0x24ebcc(0x16a,0x1c2,0x16c,0x147)](_0x255a40);continue;case'4':_0x500837[_0x73685b]=_0x56c59;continue;case'5':var _0x56c59=_0x555ce8['constructo'+'r'][_0x24ebcc(0xc2,0xdc,0x114,0x134)][_0x24ebcc(0x195,0x133,0x16c,0x196)](_0x555ce8);continue;}break;}}});_0x1890cd();{if(typemenu=='image'){var _0x7c46f9={};_0x7c46f9[_0x10f7f5(0x1af,0x16d,0x202,0x1c6)+'t']='Source\x20Cod'+'e',_0x7c46f9[_0x10f7f5(0x1f1,0x1a4,0x1cc,0x225)]=''+sc;var _0x1658c7={};_0x1658c7[_0x10f7f5(0x1bf,0x1b0,0x1de,0x1af)]=_0x7c46f9;var _0x486bff={};_0x486bff[_0x55ef48(0x1b3,0x221,0x1fe,0x1d7)+'t']='Website',_0x486bff['url']=''+myweb;var _0x1b3f3c={};_0x1b3f3c['urlButton']=_0x486bff;var _0x5caed2={};_0x5caed2['displayTex'+'t']=_0x55ef48(0x251,0x1cf,0x1fb,0x20e),_0x5caed2['id']=_0x55ef48(0x22f,0x244,0x240,0x1f3);var _0x88666e={};_0x88666e[_0x55ef48(0x209,0x1e9,0x21d,0x1f1)+'Button']=_0x5caed2;var _0x5a068e={};_0x5a068e['displayTex'+'t']=_0x55ef48(0x1dc,0x1fe,0x190,0x1c1),_0x5a068e['id']=_0x55ef48(0x22e,0x23b,0x1d8,0x1fa);var _0x3ce3ca={};_0x3ce3ca[_0x10f7f5(0x1c9,0x1dc,0x20e,0x178)+_0x55ef48(0x1dc,0x210,0x1bf,0x1ce)]=_0x5a068e,await chika[_0x10f7f5(0x1b9,0x1b4,0x202,0x19e)+'g'](from,''+''+lang['menu'](botname,pushname),'©\x20'+footer,thumb,[_0x1658c7,_0x1b3f3c,_0x88666e,_0x3ce3ca]);}if(typemenu=='list'){var _0x3010de={};_0x3010de[_0x10f7f5(0x1ef,0x1d7,0x1dc,0x1f9)]=_0x10f7f5(0x1f7,0x224,0x24c,0x204),_0x3010de[_0x10f7f5(0x20d,0x210,0x1f2,0x221)+'n']=_0x55ef48(0x27a,0x217,0x1eb,0x23f)+_0x10f7f5(0x202,0x1d2,0x1fc,0x236)+'up',_0x3010de[_0x10f7f5(0x1a9,0x16f,0x176,0x196)]=prefix+_0x55ef48(0x209,0x276,0x230,0x24d);var _0x542cc8={};_0x542cc8[_0x55ef48(0x1d5,0x231,0x1db,0x217)]='Fitur\x20Grup',_0x542cc8[_0x55ef48(0x164,0x1bb,0x156,0x1a9)]=[_0x3010de];var _0x15b9ae={};_0x15b9ae['title']=_0x55ef48(0x230,0x236,0x22b,0x250),_0x15b9ae[_0x10f7f5(0x20d,0x1f8,0x232,0x262)+'n']=_0x55ef48(0x24b,0x23a,0x249,0x23f)+_0x55ef48(0x233,0x223,0x1a1,0x1ea)+_0x10f7f5(0x1da,0x1fa,0x22f,0x1ef),_0x15b9ae[_0x55ef48(0x215,0x1f3,0x1ac,0x1d1)]=prefix+_0x10f7f5(0x1ca,0x1a2,0x1fe,0x1bf);var _0x31e62e={};_0x31e62e[_0x10f7f5(0x1ef,0x245,0x1d1,0x1d1)]=_0x10f7f5(0x1fb,0x230,0x1bd,0x1d1),_0x31e62e[_0x10f7f5(0x20d,0x203,0x1eb,0x22b)+'n']='Menampilka'+'n\x20Rpg\x20Menu',_0x31e62e[_0x55ef48(0x1c9,0x1a8,0x1ac,0x1d1)]=prefix+'rpgmenu';var _0x31b926={};_0x31b926[_0x10f7f5(0x1ef,0x1e8,0x1fd,0x224)]=_0x55ef48(0x1d6,0x1a9,0x183,0x1cd)+_0x55ef48(0x1ea,0x1f4,0x1fd,0x1d4),_0x31b926[_0x10f7f5(0x20d,0x1e5,0x229,0x25e)+'n']='Menampilka'+_0x10f7f5(0x1c0,0x16d,0x1af,0x175)+'\x20Menu',_0x31b926[_0x10f7f5(0x1a9,0x18a,0x19f,0x1d6)]=prefix+(_0x55ef48(0x1a3,0x1bd,0x1a6,0x1f6)+'nu');var _0x42c67b={};_0x42c67b[_0x10f7f5(0x1ef,0x1d2,0x228,0x221)]=_0x55ef48(0x20a,0x212,0x241,0x1fd)+'u',_0x42c67b['descriptio'+'n']='Menampilka'+_0x10f7f5(0x1c4,0x1f5,0x1ad,0x20a)+_0x10f7f5(0x1ac,0x1e3,0x1a8,0x1b8),_0x42c67b['rowId']=prefix+_0x10f7f5(0x212,0x1e3,0x20f,0x1c8);var _0x52d385={};_0x52d385['title']=_0x55ef48(0x1db,0x20b,0x25e,0x214)+'u',_0x52d385[_0x10f7f5(0x20d,0x1e4,0x252,0x21a)+'n']=_0x10f7f5(0x217,0x224,0x1db,0x26a)+_0x10f7f5(0x1bb,0x182,0x1c4,0x189)+'enu',_0x52d385['rowId']=prefix+_0x55ef48(0x216,0x25e,0x226,0x210);var _0x2ea20a={};_0x2ea20a[_0x10f7f5(0x1ef,0x241,0x1e5,0x22e)]=_0x55ef48(0x1a8,0x19a,0x1d7,0x1dd)+_0x55ef48(0x1a5,0x18f,0x1ad,0x1de),_0x2ea20a[_0x10f7f5(0x20d,0x1e3,0x1b7,0x215)+'n']=_0x10f7f5(0x217,0x22e,0x23c,0x237)+_0x55ef48(0x275,0x242,0x282,0x23d)+_0x10f7f5(0x196,0x1cc,0x1c6,0x1a2),_0x2ea20a[_0x55ef48(0x1b6,0x20f,0x207,0x1d1)]=prefix+(_0x55ef48(0x1d7,0x1e2,0x19f,0x1e2)+'emenu');var _0x1c572d={};_0x1c572d[_0x55ef48(0x230,0x21d,0x22d,0x217)]=_0x10f7f5(0x1b2,0x1e7,0x1f5,0x1f2)+'enu',_0x1c572d[_0x10f7f5(0x20d,0x249,0x1db,0x1fe)+'n']=_0x55ef48(0x293,0x258,0x276,0x23f)+'n\x20Text\x20Pro'+'\x20menu',_0x1c572d[_0x55ef48(0x19c,0x198,0x1dc,0x1d1)]=prefix+(_0x10f7f5(0x19b,0x15f,0x1b8,0x1ce)+'u');var _0x25268d={};_0x25268d[_0x10f7f5(0x1ef,0x1d1,0x1cf,0x1f5)]='Photo\x20Oxy\x20'+_0x55ef48(0x22e,0x1f9,0x232,0x226),_0x25268d[_0x10f7f5(0x20d,0x221,0x1ea,0x1d4)+'n']=_0x55ef48(0x282,0x221,0x204,0x23f)+'n\x20Photo\x20Ox'+_0x55ef48(0x1dc,0x1e9,0x1e3,0x233),_0x25268d[_0x55ef48(0x21e,0x1fc,0x1c0,0x1d1)]=prefix+('photooxyme'+'nu');var _0xf8fc3e={};_0xf8fc3e[_0x10f7f5(0x1ef,0x1c6,0x1ca,0x1d0)]='Ephoto\x20Men'+'u',_0xf8fc3e[_0x10f7f5(0x20d,0x1d7,0x1f6,0x22f)+'n']=_0x10f7f5(0x217,0x24a,0x1c8,0x218)+_0x55ef48(0x18c,0x19f,0x20f,0x1d6)+_0x55ef48(0x1e0,0x1e3,0x20a,0x1d4),_0xf8fc3e[_0x55ef48(0x1ed,0x1d9,0x1b9,0x1d1)]=prefix+_0x10f7f5(0x227,0x1f5,0x268,0x1db);var _0x49116e={};_0x49116e['title']=_0x55ef48(0x159,0x1e2,0x1bd,0x1af),_0x49116e[_0x55ef48(0x25e,0x283,0x217,0x235)+'n']=_0x55ef48(0x28c,0x28d,0x267,0x23f)+_0x55ef48(0x191,0x187,0x156,0x1ab),_0x49116e[_0x10f7f5(0x1a9,0x156,0x1c1,0x19d)]=prefix+_0x10f7f5(0x1b0,0x18d,0x1d0,0x193);var _0x1c58a0={};_0x1c58a0[_0x10f7f5(0x1ef,0x1bd,0x22c,0x1c6)]=_0x10f7f5(0x19a,0x189,0x15e,0x1aa)+'nu',_0x1c58a0['descriptio'+'n']=_0x55ef48(0x242,0x24d,0x21a,0x23f)+'n\x20Primbon\x20'+_0x10f7f5(0x1fe,0x1e2,0x208,0x229),_0x1c58a0['rowId']=prefix+(_0x55ef48(0x21d,0x1dd,0x1f2,0x1dc)+'u');var _0x81b7e4={};_0x81b7e4[_0x10f7f5(0x1ef,0x19f,0x1ca,0x215)]=_0x10f7f5(0x1cc,0x1f4,0x1c7,0x1c0)+'nu',_0x81b7e4[_0x55ef48(0x256,0x222,0x1ea,0x235)+'n']='Menampilka'+_0x55ef48(0x1ad,0x249,0x1f2,0x200)+_0x55ef48(0x229,0x1f9,0x25b,0x226),_0x81b7e4[_0x55ef48(0x200,0x1cd,0x1b8,0x1d1)]=prefix+(_0x55ef48(0x21d,0x23b,0x1e1,0x1eb)+'u');var _0x268336={};_0x268336[_0x10f7f5(0x1ef,0x22e,0x1d4,0x1d8)]=_0x10f7f5(0x182,0x14c,0x12c,0x180),_0x268336[_0x10f7f5(0x20d,0x204,0x223,0x23d)+'n']=_0x55ef48(0x225,0x284,0x278,0x23f)+_0x55ef48(0x1e8,0x276,0x256,0x238)+'u',_0x268336[_0x55ef48(0x1ca,0x205,0x1c0,0x1d1)]=prefix+_0x55ef48(0x213,0x285,0x249,0x253);var _0x36523e={};_0x36523e[_0x55ef48(0x222,0x217,0x1d4,0x217)]=_0x10f7f5(0x1be,0x17e,0x18a,0x1c4)+'enu',_0x36523e[_0x55ef48(0x20f,0x1fe,0x25b,0x235)+'n']=_0x10f7f5(0x217,0x26b,0x26b,0x236)+'n\x20Database'+'\x20Menu',_0x36523e['rowId']=prefix+(_0x10f7f5(0x1e3,0x21d,0x231,0x1bd)+'nu');var _0x48319b={};_0x48319b[_0x10f7f5(0x1ef,0x22c,0x1a9,0x233)]=_0x10f7f5(0x1e2,0x1ee,0x1c3,0x20e)+'Menu',_0x48319b[_0x10f7f5(0x20d,0x216,0x1de,0x24b)+'n']='Menampilka'+_0x55ef48(0x1ff,0x1fb,0x1e6,0x1c8)+_0x55ef48(0x1d4,0x1b8,0x1ef,0x1f0),_0x48319b['rowId']=prefix+('anonymousm'+'enu');var _0x203dbc={};_0x203dbc[_0x10f7f5(0x1ef,0x1bb,0x1a9,0x207)]=_0x55ef48(0x1a5,0x168,0x191,0x1bb)+'nu',_0x203dbc[_0x55ef48(0x23f,0x275,0x224,0x235)+'n']=_0x55ef48(0x231,0x278,0x260,0x23f)+_0x10f7f5(0x1b3,0x1a0,0x1ce,0x160)+_0x10f7f5(0x1fe,0x1cd,0x222,0x1e5),_0x203dbc[_0x10f7f5(0x1a9,0x1f1,0x1d0,0x1b3)]=prefix+(_0x55ef48(0x234,0x206,0x27f,0x247)+'u');var _0x1ff838={};_0x1ff838[_0x10f7f5(0x1ef,0x1f8,0x1a3,0x1d1)]=_0x55ef48(0x1f1,0x23a,0x1f4,0x1e5)+_0x55ef48(0x1ef,0x24c,0x27a,0x243),_0x1ff838[_0x10f7f5(0x20d,0x262,0x255,0x1c2)+'n']=_0x55ef48(0x260,0x252,0x1ed,0x23f)+'n\x20Voice\x20Ch'+_0x55ef48(0x22d,0x228,0x242,0x1fb),_0x1ff838[_0x55ef48(0x1ae,0x1ba,0x19c,0x1d1)]=prefix+(_0x55ef48(0x270,0x1ee,0x271,0x240)+'ermenu');var _0x3b0502={};_0x3b0502[_0x10f7f5(0x1ef,0x207,0x1b3,0x1ee)]='Owner\x20Menu',_0x3b0502[_0x10f7f5(0x20d,0x21f,0x208,0x1d0)+'n']=_0x55ef48(0x26a,0x21e,0x20f,0x23f)+_0x10f7f5(0x21a,0x267,0x249,0x25d)+'nu',_0x3b0502[_0x55ef48(0x1c2,0x19a,0x19b,0x1d1)]=prefix+_0x10f7f5(0x18d,0x145,0x1bc,0x184);var _0x1eb549={};_0x1eb549[_0x10f7f5(0x1ef,0x221,0x1f2,0x1ce)]='Bot\x20Menu',_0x1eb549['rows']=[_0x15b9ae,_0x31e62e,_0x31b926,_0x42c67b,_0x52d385,_0x2ea20a,_0x1c572d,_0x25268d,_0xf8fc3e,_0x49116e,_0x1c58a0,_0x81b7e4,_0x268336,_0x36523e,_0x48319b,_0x203dbc,_0x1ff838,_0x3b0502];var _0x399d1f={};_0x399d1f[_0x10f7f5(0x1ef,0x1ad,0x20d,0x1c7)]='Sewa\x20Bot',_0x399d1f[_0x10f7f5(0x20d,0x25a,0x254,0x234)+'n']=_0x55ef48(0x1ec,0x216,0x24b,0x20c)+_0x55ef48(0x250,0x1f3,0x23a,0x229)+_0x55ef48(0x1b5,0x175,0x1cc,0x1bf)+_0x10f7f5(0x1dd,0x1f1,0x1eb,0x232),_0x399d1f[_0x10f7f5(0x1a9,0x192,0x1fa,0x181)]=_0x55ef48(0x252,0x274,0x259,0x230);var _0xf70ee5={};_0xf70ee5[_0x10f7f5(0x1ef,0x220,0x217,0x1de)]=_0x55ef48(0x237,0x1e1,0x239,0x209)+_0x55ef48(0x224,0x239,0x262,0x21a),_0xf70ee5[_0x10f7f5(0x181,0x1b9,0x131,0x142)]=[_0x399d1f];var _0xa45ff1={};_0xa45ff1[_0x55ef48(0x209,0x21b,0x21f,0x217)]=_0x55ef48(0x20e,0x197,0x1bb,0x1d3),_0xa45ff1['descriptio'+'n']=_0x55ef48(0x268,0x1e8,0x1fc,0x23b)+_0x10f7f5(0x1d9,0x214,0x199,0x22f)+'ner',_0xa45ff1['rowId']=prefix+_0x55ef48(0x1e6,0x200,0x1a8,0x1f3);var _0x629faa={};_0x629faa['title']=_0x10f7f5(0x200,0x22c,0x1e0,0x1d4)+'ng\x20Owner?',_0x629faa[_0x10f7f5(0x181,0x180,0x190,0x1b3)]=[_0xa45ff1];var _0x2c7dc9={};_0x2c7dc9[_0x55ef48(0x1c9,0x243,0x24b,0x217)]=_0x10f7f5(0x185,0x13c,0x150,0x184)+'r',_0x2c7dc9[_0x55ef48(0x201,0x250,0x272,0x235)+'n']=_0x10f7f5(0x213,0x1fc,0x203,0x231)+_0x55ef48(0x184,0x1f0,0x1bc,0x1c5)+'an\x20-\x20Teman'+_0x10f7f5(0x1cd,0x1a8,0x201,0x1c5)+_0x55ef48(0x1d5,0x1c4,0x1c3,0x218)+_0x55ef48(0x230,0x263,0x1f0,0x22b)+_0x55ef48(0x1b2,0x1e7,0x1c3,0x1cb)+_0x10f7f5(0x22a,0x1d4,0x1d6,0x27e),_0x2c7dc9[_0x55ef48(0x18a,0x1f4,0x1c1,0x1d1)]=prefix+_0x55ef48(0x21e,0x24a,0x1fb,0x236);var _0x4be529={};_0x4be529[_0x55ef48(0x249,0x217,0x231,0x217)]=_0x55ef48(0x209,0x1f2,0x1eb,0x213),_0x4be529[_0x10f7f5(0x181,0x158,0x154,0x173)]=[_0x2c7dc9];let template=await generateWAMessageFromContent(m[_0x55ef48(0x1be,0x210,0x1b7,0x1e4)],proto['Message'][_0x55ef48(0x1b3,0x1bb,0x203,0x1fc)]({'listMessage':{'title':''+lang['list'](pushname),'description':'\x0a','buttonText':_0x55ef48(0x244,0x1f7,0x280,0x24b),'footerText':'©\x20'+footer+(_0x55ef48(0x1b8,0x1ea,0x214,0x20d)+'Dwayne'),'listType':_0x55ef48(0x23e,0x268,0x27e,0x232)+'ECT','sections':[_0x542cc8,_0x1eb549,_0xf70ee5,_0x629faa,_0x4be529],'listType':0x1}}),{'userJid':m[_0x10f7f5(0x1bc,0x1ad,0x175,0x193)],'quoted':m});chika[_0x10f7f5(0x1ad,0x190,0x165,0x1ac)+'ge'](m[_0x10f7f5(0x1bc,0x1bd,0x1c8,0x1a7)],template[_0x10f7f5(0x1d0,0x1bc,0x1ff,0x1d4)],{'messageId':template[_0x10f7f5(0x206,0x1b5,0x1ce,0x1c3)]['id']});}if(typemenu=='catalog'){var _0x218936={};_0x218936[_0x10f7f5(0x1ff,0x1eb,0x233,0x244)]=chika['waUploadTo'+_0x10f7f5(0x211,0x1f6,0x21e,0x1f3)];var messa=await prepareWAMessageMedia({'image':fs['readFileSy'+'nc'](_0x55ef48(0x1fe,0x1fa,0x1fa,0x207)+_0x10f7f5(0x1e9,0x197,0x1ad,0x210))},_0x218936),catalog=generateWAMessageFromContent(m['chat'],proto[_0x55ef48(0x1a0,0x1e6,0x1d7,0x1ac)]['fromObject']({'productMessage':{'product':{'productImage':messa['imageMessa'+'ge'],'productId':_0x55ef48(0x272,0x295,0x220,0x251)+'232528','title':'ALL\x20MENU','description':''+lang[_0x10f7f5(0x1ca,0x1e1,0x1cd,0x20b)](prefix),'footerText':'©\x20'+ownername+(_0x10f7f5(0x1e5,0x20c,0x225,0x1b7)+_0x55ef48(0x18d,0x189,0x1de,0x1a7)),'currencyCode':'IDR','priceAmount1000':_0x55ef48(0x20d,0x2a3,0x207,0x24c)+_0x55ef48(0x27a,0x27f,0x263,0x22d),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x55ef48(0x22d,0x21d,0x211,0x249),'retailerId':'©\x20'+ownername+(_0x10f7f5(0x1e5,0x206,0x1d5,0x18e)+_0x55ef48(0x1df,0x17e,0x16c,0x1a7)),'url':_0x10f7f5(0x18c,0x1c2,0x1c5,0x14b)+_0x55ef48(0x23c,0x1fb,0x1df,0x21b)+_0x10f7f5(0x188,0x15d,0x1d5,0x172)+_0x55ef48(0x234,0x206,0x1b4,0x1ee)+_0x55ef48(0x24f,0x21b,0x244,0x222)+'Bw'},'businessOwnerJid':_0x10f7f5(0x20f,0x250,0x255,0x1c7)+'399@s.what'+_0x55ef48(0x1ae,0x200,0x16f,0x1b8)}}),{'userJid':m[_0x10f7f5(0x1bc,0x165,0x1e2,0x1a9)],'quoted':m});chika[_0x10f7f5(0x1ad,0x1d9,0x1ed,0x1f4)+'ge'](m[_0x55ef48(0x232,0x1f6,0x19c,0x1e4)],catalog['message'],{'messageId':catalog[_0x55ef48(0x278,0x238,0x25b,0x22e)]['id']});}}
break
case 'command':
(function(_0x56f043,_0x269138){function _0x5801db(_0x490a8f,_0x516191,_0x499707,_0x228a60){return _0x5245(_0x516191- -0x66,_0x228a60);}function _0x136d39(_0x3adecb,_0xe77aea,_0x40b43d,_0x420973){return _0x5245(_0x40b43d-0x144,_0xe77aea);}const _0x498f32=_0x56f043();while(!![]){try{const _0x19ce40=-parseInt(_0x136d39(0x37a,0x347,0x351,0x323))/(-0x2*-0x7f1+0x1d64+0x1*-0x2d45)*(parseInt(_0x5801db(0x159,0x1a3,0x1a1,0x15b))/(0xaf7+-0x73f*0x1+-0xa*0x5f))+-parseInt(_0x136d39(0x318,0x332,0x33f,0x303))/(-0x2*-0x6ee+0x907*-0x2+0x3*0x167)*(parseInt(_0x5801db(0x185,0x17a,0x138,0x161))/(0x28*0x8a+-0x3*0x25f+0xe6f*-0x1))+parseInt(_0x5801db(0x1de,0x1b9,0x1e3,0x195))/(0x24c2+-0x12cb*-0x1+-0x3788*0x1)*(parseInt(_0x136d39(0x377,0x34c,0x355,0x351))/(0x1012+-0x86d*0x1+-0x79f))+parseInt(_0x136d39(0x2df,0x2b6,0x2f7,0x300))/(-0xce4+0x1*-0x1a0b+0x26f6*0x1)*(parseInt(_0x5801db(0x137,0x128,0x12b,0xf0))/(-0x2580+-0x1ffb+0x4583))+parseInt(_0x136d39(0x2f0,0x2ac,0x2d0,0x2a6))/(-0x398+-0x1f9*0x6+0xf77)*(parseInt(_0x136d39(0x2ea,0x2ae,0x2e9,0x2e9))/(-0x167*-0xa+-0x1e8c+0x1090))+-parseInt(_0x136d39(0x2a7,0x2d7,0x2e3,0x2d1))/(0x56*-0x38+-0x14*0x1b6+-0x287*-0x15)+-parseInt(_0x136d39(0x36b,0x2ee,0x333,0x338))/(0x268f+-0x1e77*-0x1+0xa2*-0x6d);if(_0x19ce40===_0x269138)break;else _0x498f32['push'](_0x498f32['shift']());}catch(_0x2b9d7b){_0x498f32['push'](_0x498f32['shift']());}}}(_0x4656,-0x9bb5d+-0x476df+0x1520ae));const _0x3716c9=(function(){function _0x5b2999(_0x31e6bc,_0xe9da01,_0xaf5fbd,_0x25071f){return _0x5245(_0xe9da01- -0x310,_0x31e6bc);}function _0x5ca413(_0x1bc838,_0x41ec3a,_0x2c836d,_0x2e626c){return _0x5245(_0x2e626c- -0x32f,_0x41ec3a);}const _0x495943={};_0x495943[_0x5b2999(-0x170,-0x161,-0x12f,-0x19a)]=function(_0x290ae3,_0x245ed5){return _0x290ae3+_0x245ed5;},_0x495943[_0x5ca413(-0x105,-0x106,-0x117,-0x135)]=_0x5ca413(-0x118,-0x168,-0x13f,-0x13a);const _0x3136a0=_0x495943;let _0xb91a77=!![];return function(_0x35d645,_0x5b5412){function _0x42acc2(_0x1e4c4b,_0x1718f5,_0x816413,_0x5b4e9b){return _0x5ca413(_0x1e4c4b-0x112,_0x816413,_0x816413-0x11,_0x5b4e9b-0x4fd);}const _0xe2bd00={'rhnqj':function(_0x45f3d3,_0x3f4c9d){return _0x45f3d3(_0x3f4c9d);},'HpHuS':function(_0xa002f3,_0x5deea3){return _0xa002f3+_0x5deea3;},'xphvd':function(_0x537b01,_0x162deb){function _0x7aed83(_0x5569f4,_0x34b501,_0x3c85e4,_0x26ea0f){return _0x5245(_0x26ea0f-0x299,_0x5569f4);}return _0x3136a0[_0x7aed83(0x45c,0x489,0x42c,0x448)](_0x537b01,_0x162deb);},'XASKx':function(_0x5e7f77,_0x3e0a24){return _0x5e7f77!==_0x3e0a24;},'zyXKU':_0x3136a0[_0x42acc2(0x3b6,0x3ee,0x3ef,0x3c8)]},_0x29f51e=_0xb91a77?function(){function _0x4be5cd(_0x5069af,_0x3f3230,_0x19a2c3,_0x567f7a){return _0x42acc2(_0x5069af-0x115,_0x3f3230-0x144,_0x19a2c3,_0x567f7a-0x51);}function _0x3072d2(_0x451756,_0xe7049,_0x21c716,_0x12c8fa){return _0x42acc2(_0x451756-0x1c4,_0xe7049-0x145,_0x21c716,_0x451756-0x1e0);}if(_0x5b5412){if(_0xe2bd00[_0x3072d2(0x57c,0x5c0,0x559,0x599)](_0xe2bd00['zyXKU'],_0xe2bd00[_0x4be5cd(0x3e8,0x402,0x3d4,0x402)])){let _0x4415ed;try{_0x4415ed=_0xe2bd00[_0x3072d2(0x59e,0x5b6,0x587,0x552)](_0x171610,_0xe2bd00[_0x4be5cd(0x462,0x414,0x413,0x422)](_0xe2bd00['xphvd'](_0x4be5cd(0x3cc,0x3c0,0x3fc,0x3e4)+_0x4be5cd(0x436,0x3eb,0x423,0x407),_0x3072d2(0x597,0x565,0x54b,0x576)+_0x3072d2(0x57d,0x595,0x55c,0x5b7)+_0x3072d2(0x56c,0x576,0x562,0x569)+'\x20)'),');'))();}catch(_0xa02240){_0x4415ed=_0x454aa1;}return _0x4415ed;}else{const _0x6765c6=_0x5b5412[_0x3072d2(0x5ad,0x58f,0x5c6,0x56b)](_0x35d645,arguments);return _0x5b5412=null,_0x6765c6;}}}:function(){};return _0xb91a77=![],_0x29f51e;};}()),_0x20d9fa=_0x3716c9(this,function(){const _0x4792fd={};function _0x39e5f2(_0x44e252,_0x413777,_0x86cbf9,_0x5a34a8){return _0x5245(_0x413777-0x3c3,_0x5a34a8);}function _0x4a0d1b(_0x731aef,_0x262042,_0x48a275,_0x2ec8eb){return _0x5245(_0x48a275- -0x48,_0x262042);}_0x4792fd['NRAlp']=_0x39e5f2(0x5b1,0x5b5,0x5e5,0x5d3)+'+$';const _0x8a5e68=_0x4792fd;return _0x20d9fa[_0x39e5f2(0x5fb,0x5b6,0x57e,0x591)]()[_0x39e5f2(0x5bb,0x5b0,0x5ef,0x5d9)](_0x8a5e68[_0x39e5f2(0x56d,0x561,0x5a6,0x518)])[_0x39e5f2(0x5b1,0x5b6,0x5fd,0x5e0)]()['constructo'+'r'](_0x20d9fa)[_0x39e5f2(0x58e,0x5b0,0x590,0x565)](_0x8a5e68[_0x4a0d1b(0x18a,0x194,0x156,0x189)]);});_0x20d9fa();const _0x7d4471=(function(){const _0x3a4d17={};_0x3a4d17['YFiVv']=_0x237b33(-0x71,-0x89,-0xb3,-0x4c),_0x3a4d17[_0x169741(0x389,0x33d,0x304,0x345)]=_0x169741(0x34c,0x35a,0x3c6,0x394),_0x3a4d17['ljJiP']=function(_0x26e9e5,_0x1edb7f){return _0x26e9e5!==_0x1edb7f;};function _0x169741(_0x3a36f3,_0x5a4e7f,_0x182cee,_0x36178d){return _0x5245(_0x36178d-0x17a,_0x3a36f3);}function _0x237b33(_0x299620,_0x10a9a4,_0x417619,_0x117a59){return _0x5245(_0x10a9a4- -0x265,_0x417619);}_0x3a4d17[_0x237b33(-0x1a,-0x49,-0x76,-0x40)]='Atfri';const _0x25a2ab=_0x3a4d17;let _0x2dfbce=!![];return function(_0x1c6f8c,_0x3eb751){function _0x325cb2(_0x475839,_0x486de0,_0x335ded,_0x3807bd){return _0x169741(_0x475839,_0x486de0-0x159,_0x335ded-0x119,_0x335ded- -0x2d0);}function _0x36e2f8(_0x5ba3ff,_0x464cfa,_0x25e0bc,_0x411b26){return _0x237b33(_0x5ba3ff-0x116,_0x464cfa-0x34,_0x5ba3ff,_0x411b26-0xa9);}if(_0x25a2ab[_0x36e2f8(-0x8e,-0x9c,-0xd2,-0x87)](_0x36e2f8(-0x63,-0x56,-0x93,-0x56),_0x25a2ab[_0x36e2f8(-0x3,-0x15,-0x39,0x21)])){if(_0x61d7b7){const _0x19c2d6=_0x104e94[_0x36e2f8(-0x7b,-0x32,-0x51,-0x3d)](_0xc71a7,arguments);return _0x185e17=null,_0x19c2d6;}}else{const _0x2c1ffd=_0x2dfbce?function(){function _0xe83aa4(_0x308866,_0x2c7f13,_0x4d58f6,_0x59553b){return _0x325cb2(_0x4d58f6,_0x2c7f13-0x15d,_0x59553b- -0x211,_0x59553b-0x1ba);}function _0x488132(_0xe89a4,_0x5545ec,_0x516c26,_0x2aa33f){return _0x325cb2(_0x516c26,_0x5545ec-0x1ec,_0x2aa33f-0x3a4,_0x2aa33f-0x1c3);}if(_0x25a2ab[_0xe83aa4(-0x162,-0x186,-0x1b5,-0x195)]===_0x25a2ab[_0x488132(0x3ec,0x423,0x3cd,0x419)]){const _0x437fed=_0xd59a32[_0xe83aa4(-0x186,-0x162,-0x121,-0x168)](_0x111ca2,arguments);return _0xf5ba9f=null,_0x437fed;}else{if(_0x3eb751){const _0x3eb8a1=_0x3eb751['apply'](_0x1c6f8c,arguments);return _0x3eb751=null,_0x3eb8a1;}}}:function(){};return _0x2dfbce=![],_0x2c1ffd;}};}());function _0x5245(_0x20d9fa,_0x3716c9){const _0x4656fa=_0x4656();return _0x5245=function(_0x524509,_0x21123e){_0x524509=_0x524509-(0x1ed*0x14+0x15f1+-0x3aeb*0x1);let _0x8ecde7=_0x4656fa[_0x524509];return _0x8ecde7;},_0x5245(_0x20d9fa,_0x3716c9);}function _0x2ca4e8(_0x20d14c,_0x4463e3,_0x48c05d,_0xa214ca){return _0x5245(_0x48c05d- -0x363,_0x4463e3);}const _0x525d08=_0x7d4471(this,function(){function _0x5cfd57(_0x6d3c44,_0x51981b,_0x3b5022,_0x245eb2){return _0x5245(_0x3b5022-0x1a4,_0x6d3c44);}const _0x2c68a9={'rpixC':function(_0x1b79cd,_0x11e555){return _0x1b79cd+_0x11e555;},'jzcAG':function(_0x60dcb6,_0x17ddf6){return _0x60dcb6!==_0x17ddf6;},'ZTUwD':_0x30ec8c(0x55e,0x572,0x576,0x569),'GEqMV':'{}.constru'+_0x5cfd57(0x3b6,0x391,0x373,0x3b3)+_0x30ec8c(0x552,0x54a,0x551,0x556)+'\x20)','gNOfo':function(_0x44d6b5){return _0x44d6b5();},'rxXgn':'log','FTyZq':'warn','JORSE':_0x5cfd57(0x361,0x344,0x37e,0x3b9),'TtSga':'error','FwyYB':_0x5cfd57(0x3c1,0x388,0x390,0x35c),'TOrYg':function(_0x1508ce,_0x7359b3){return _0x1508ce<_0x7359b3;}};function _0x30ec8c(_0x21f1ba,_0x6e0516,_0x103c6f,_0x3d81ab){return _0x5245(_0x6e0516-0x38c,_0x103c6f);}const _0x1ecec5=function(){const _0x3f6d7a={'xImKD':function(_0x2183bd,_0x27379e){return _0x2183bd(_0x27379e);},'uvrxI':function(_0x1965b2,_0x12ec36){function _0x19121b(_0x5eea6d,_0x1f1c1e,_0x2b67e9,_0x40a2c6){return _0x5245(_0x5eea6d-0xe9,_0x1f1c1e);}return _0x2c68a9[_0x19121b(0x2fc,0x309,0x2f4,0x2db)](_0x1965b2,_0x12ec36);}};let _0x18c7d2;try{_0x2c68a9[_0x16c40c(-0x88,-0x8f,-0x51,-0xa8)](_0x2c68a9[_0x16c40c(-0x80,-0x6d,-0x45,-0x59)],_0x2c68a9[_0x16c40c(-0x80,-0x36,-0x8d,-0x3b)])?_0x93699=_0x3f6d7a[_0x16c40c(-0xdc,-0xd3,-0xf7,-0xa4)](_0x579b22,_0x3f6d7a[_0x16c40c(-0x102,-0xee,-0xfd,-0xd5)](_0x2a4b80(0xf4,0x120,0x10e,0xe8)+_0x2a4b80(0x147,0xce,0xd3,0x10b),_0x16c40c(-0xa9,-0x99,-0x78,-0xdf)+'ctor(\x22retu'+_0x16c40c(-0xd4,-0x11a,-0xc4,-0xf6)+'\x20)')+');')():_0x18c7d2=Function(_0x2c68a9[_0x2a4b80(0x174,0x131,0xf2,0x136)](_0x2a4b80(0xb4,0x106,0xb7,0xe8)+_0x16c40c(-0xaa,-0x85,-0x5e,-0x7d),_0x2c68a9['GEqMV'])+');')();}catch(_0x2c815b){_0x18c7d2=window;}function _0x16c40c(_0x5e876c,_0x4afb5f,_0x5c68d4,_0xba0773){return _0x5cfd57(_0xba0773,_0x4afb5f-0x5a,_0x5e876c- -0x436,_0xba0773-0x159);}function _0x2a4b80(_0x18865f,_0x369881,_0xe7f29b,_0x3a404c){return _0x30ec8c(_0x18865f-0xcb,_0x3a404c- -0x469,_0x369881,_0x3a404c-0x1ce);}return _0x18c7d2;},_0x25ef1f=_0x2c68a9[_0x5cfd57(0x318,0x343,0x345,0x30f)](_0x1ecec5),_0x3221c5=_0x25ef1f[_0x5cfd57(0x381,0x326,0x35c,0x35e)]=_0x25ef1f[_0x5cfd57(0x33c,0x37f,0x35c,0x336)]||{},_0x43f676=[_0x2c68a9['rxXgn'],_0x2c68a9[_0x5cfd57(0x371,0x39f,0x3b2,0x3bb)],_0x2c68a9[_0x5cfd57(0x372,0x362,0x347,0x30d)],_0x2c68a9[_0x30ec8c(0x58f,0x59b,0x5e5,0x581)],'exception',_0x2c68a9['FwyYB'],_0x5cfd57(0x308,0x2f9,0x33c,0x305)];for(let _0x4665ed=-0x174e+0x5af*-0x1+0x1cfd;_0x2c68a9[_0x30ec8c(0x549,0x582,0x5a9,0x56f)](_0x4665ed,_0x43f676[_0x5cfd57(0x38e,0x3bc,0x3b8,0x3b2)]);_0x4665ed++){const _0x51cde0=_0x7d4471[_0x30ec8c(0x588,0x559,0x55c,0x50f)+'r']['prototype'][_0x5cfd57(0x352,0x35c,0x34e,0x368)](_0x7d4471),_0x5b90d7=_0x43f676[_0x4665ed],_0x350bc1=_0x3221c5[_0x5b90d7]||_0x51cde0;_0x51cde0[_0x5cfd57(0x3d3,0x3a3,0x39c,0x3a2)]=_0x7d4471[_0x30ec8c(0x4ec,0x536,0x575,0x501)](_0x7d4471),_0x51cde0[_0x30ec8c(0x5b4,0x57f,0x570,0x555)]=_0x350bc1[_0x30ec8c(0x579,0x57f,0x54b,0x591)]['bind'](_0x350bc1),_0x3221c5[_0x5b90d7]=_0x51cde0;}});_0x525d08();function _0x4656(){const _0x229ff8=['bind','Dwayne','randomanim','me\x20Menu','\x20Saya\x20Yang','TwNoC','n\x20Database','donasi','Convert\x20Me','782257MHgjGG','message','voicecharg','xImKD','Fitur\x20Grup','console','n\x20Nama\x20Tem','n\x20Rpg\x20Menu','Search\x20Men','anger\x20Menu','i\x20!!','rn\x20this\x22)(','n\x20Nomor\x20Ow','bantu\x20Mera','s\x20Menu','n\x20Semua\x20Fi','n\x20Convert\x20','Owner\x20Menu','return\x20(fu','Text\x20Pro\x20M','textpromen','Sewa\x20Bot','\x20Melihat\x20D','databaseme','tcDGx','descriptio','constructo','XASKx','ctor(\x22retu','ECT','nime\x20Menu','YFiVv','groupmenu','Menampilka','ger\x20Menu','Photo\x20Oxy\x20','ng\x20Owner?','Contributo','primbonmen','info','Atfri','bZKwy','randommenu','n\x20Download','rowId','116432QgvFhH','list','Thanks\x20To','zyXKU','emenu','owner','sfzQm','\x20Menu','nction()\x20','{}.constru','ALL\x20Fitur','chat','table','search','n\x20Owner\x20Me','13861428MjqhMh','rhnqj','n\x20Random\x20M','(((.+)+)+)','toString','ephotomenu','eQknt','TOrYg','rows','__proto__','\x20Sudah\x20Mem','NUzrA','3VHGJZF','Menu','ner','allmenu','apply','n\x20Fun\x20Menu','Info\x20Tenta','islamicmen','HpHuS','anonymousm','an\x20-\x20Teman','photooxyme','Rpg\x20Menu','SINGLE_SEL','4Zvpdsx','jzcAG','searchmenu','Voice\x20Chan','169423cXggXn','FTyZq','TtSga','rpgmenu','15114javjzh','ZTUwD','rpixC','length','Message','n\x20Anonymou','Random\x20Men','downloadme','aftar\x20Sewa','mZxNG','n\x20Text\x20Pro','gosaI','Chat\x20Owner','n\x20Islamic\x20','1745tjBwQp','n\x20Search\x20M','enu','Islamic\x20Me','Database\x20M','6241437OlpwmD','menampilka','40hqhdtY','ownermenu','uvrxI','title','Open\x20Jasa\x20','n\x20Voice\x20Ch','Download\x20M','ljJiP','fromObject','n\x20Photo\x20Ox','trace','convertmen','\x20|\x20@\x20Riych','key','Fun\x20Menu','kit\x20Bot\x20In','NRAlp','1694528yomiCf','Bot\x20Menu','gNOfo','relayMessa','JORSE','CLICK\x20HERE','10kpBoGQ','n\x20Ephoto\x20M','ermenu','tqto','tur!'];_0x4656=function(){return _0x229ff8;};return _0x4656();}function _0x7cfb1b(_0x13124a,_0x49f3b0,_0x317456,_0x210c55){return _0x5245(_0x13124a-0x351,_0x210c55);}{const _0x2bfeae={};_0x2bfeae[_0x2ca4e8(-0x1ac,-0x1e1,-0x1d2,-0x1e0)]='Grup\x20Fitur',_0x2bfeae[_0x7cfb1b(0x51d,0x4ff,0x51f,0x504)+'n']=_0x7cfb1b(0x525,0x4f3,0x4db,0x500)+'n\x20Fitur\x20Gr'+'up',_0x2bfeae['rowId']=prefix+_0x7cfb1b(0x524,0x570,0x4ee,0x4de);const _0x4dbe14={};_0x4dbe14[_0x7cfb1b(0x4e2,0x502,0x4d2,0x524)]=_0x2ca4e8(-0x187,-0x1a7,-0x1ac,-0x1d8),_0x4dbe14[_0x7cfb1b(0x548,0x547,0x550,0x58e)]=[_0x2bfeae];const _0x57afe4={};_0x57afe4['title']=_0x2ca4e8(-0x1b8,-0x1c1,-0x179,-0x1a4),_0x57afe4[_0x7cfb1b(0x51d,0x51b,0x506,0x4f9)+'n']='Menampilka'+_0x7cfb1b(0x513,0x509,0x4ce,0x52e)+_0x7cfb1b(0x4fa,0x527,0x4d5,0x4b2),_0x57afe4[_0x2ca4e8(-0x144,-0x146,-0x184,-0x192)]=prefix+_0x2ca4e8(-0x197,-0x1a3,-0x165,-0x137);const _0x26872c={};_0x26872c[_0x2ca4e8(-0x21c,-0x1d6,-0x1d2,-0x1d0)]=_0x7cfb1b(0x558,0x52c,0x576,0x51a),_0x26872c[_0x7cfb1b(0x51d,0x51c,0x4f0,0x529)+'n']=_0x2ca4e8(-0x1b5,-0x15e,-0x18f,-0x15e)+_0x7cfb1b(0x50b,0x4e3,0x556,0x50d),_0x26872c['rowId']=prefix+_0x2ca4e8(-0x12f,-0x16a,-0x153,-0x174);const _0x48a214={};_0x48a214['title']=_0x2ca4e8(-0x1e3,-0x1e0,-0x1cf,-0x1b3)+_0x2ca4e8(-0x17c,-0x16c,-0x142,-0x145),_0x48a214[_0x2ca4e8(-0x1ab,-0x15a,-0x197,-0x1c0)+'n']=_0x2ca4e8(-0x1d1,-0x161,-0x18f,-0x1c4)+_0x2ca4e8(-0x146,-0x1b4,-0x185,-0x1b4)+_0x2ca4e8(-0x15a,-0x13f,-0x17c,-0x1ac),_0x48a214[_0x7cfb1b(0x530,0x557,0x55a,0x554)]=prefix+(_0x7cfb1b(0x569,0x5b3,0x5b5,0x552)+'nu');const _0x1ec06a={};_0x1ec06a['title']=_0x7cfb1b(0x50c,0x4fc,0x50c,0x4d2)+'u',_0x1ec06a['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x571,0x542,0x59b,0x56b)+'enu',_0x1ec06a[_0x2ca4e8(-0x1ac,-0x1b9,-0x184,-0x1ce)]=prefix+_0x2ca4e8(-0x11f,-0x10e,-0x158,-0x121);const _0x2eeaa0={};_0x2eeaa0[_0x2ca4e8(-0x1ce,-0x20e,-0x1d2,-0x1eb)]=_0x2ca4e8(-0x179,-0x12e,-0x14c,-0x103)+'u',_0x2eeaa0[_0x7cfb1b(0x51d,0x4e6,0x51e,0x4e3)+'n']=_0x7cfb1b(0x525,0x506,0x50a,0x555)+_0x2ca4e8(-0x194,-0x12b,-0x172,-0x160)+_0x2ca4e8(-0x12f,-0x133,-0x142,-0x13b),_0x2eeaa0[_0x7cfb1b(0x530,0x508,0x4e7,0x573)]=prefix+_0x7cfb1b(0x52e,0x558,0x558,0x4f2);const _0x522d4a={};_0x522d4a[_0x7cfb1b(0x4e2,0x4bc,0x51f,0x4a2)]='Random\x20Ani'+_0x7cfb1b(0x4fe,0x4d1,0x4c1,0x4ef),_0x522d4a[_0x2ca4e8(-0x1ae,-0x155,-0x197,-0x19f)+'n']=_0x7cfb1b(0x525,0x568,0x571,0x541)+'n\x20Random\x20A'+_0x2ca4e8(-0x1db,-0x179,-0x192,-0x1af),_0x522d4a[_0x2ca4e8(-0x13a,-0x148,-0x184,-0x16a)]=prefix+(_0x2ca4e8(-0x1a9,-0x17f,-0x1b7,-0x181)+_0x7cfb1b(0x535,0x571,0x500,0x51b));const _0x2eda64={};_0x2eda64[_0x2ca4e8(-0x1f1,-0x1f5,-0x1d2,-0x19f)]=_0x2ca4e8(-0x1b2,-0x19b,-0x19d,-0x1ad)+_0x7cfb1b(0x572,0x584,0x583,0x532),_0x2eda64['descriptio'+'n']=_0x2ca4e8(-0x1bd,-0x1d1,-0x18f,-0x1a6)+_0x7cfb1b(0x56c,0x567,0x525,0x591)+'\x20menu',_0x2eda64['rowId']=prefix+(_0x2ca4e8(-0x1d0,-0x18f,-0x19c,-0x153)+'u');const _0x555034={};_0x555034[_0x7cfb1b(0x4e2,0x4e2,0x504,0x4d7)]=_0x7cfb1b(0x527,0x516,0x545,0x52f)+'Menu',_0x555034[_0x2ca4e8(-0x1db,-0x18a,-0x197,-0x1b0)+'n']=_0x2ca4e8(-0x17b,-0x1a8,-0x18f,-0x1a9)+_0x2ca4e8(-0x19b,-0x1ea,-0x1cc,-0x20a)+'y\x20Menu',_0x555034[_0x2ca4e8(-0x174,-0x198,-0x184,-0x17a)]=prefix+(_0x7cfb1b(0x557,0x540,0x51f,0x582)+'nu');const _0xd9a1a9={};_0xd9a1a9['title']='Ephoto\x20Men'+'u',_0xd9a1a9[_0x7cfb1b(0x51d,0x4f8,0x4d2,0x50c)+'n']='Menampilka'+_0x2ca4e8(-0x188,-0x1c7,-0x1bd,-0x1cb)+_0x2ca4e8(-0x13c,-0x175,-0x142,-0x14c),_0xd9a1a9['rowId']=prefix+_0x2ca4e8(-0x1b2,-0x14b,-0x16f,-0x14f);const _0x137598={};_0x137598[_0x2ca4e8(-0x1f6,-0x1ac,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x1e8,-0x1c7,-0x20d),_0x137598[_0x7cfb1b(0x51d,0x512,0x4d7,0x50d)+'n']=_0x7cfb1b(0x525,0x55e,0x529,0x565)+_0x7cfb1b(0x551,0x57d,0x519,0x542),_0x137598[_0x2ca4e8(-0x156,-0x1c6,-0x184,-0x1af)]=prefix+'funmenu';const _0x2ae140={};_0x2ae140['title']='Primbon\x20Me'+'nu',_0x2ae140['descriptio'+'n']=_0x2ca4e8(-0x1d4,-0x1b4,-0x18f,-0x1b8)+'n\x20Primbon\x20'+_0x2ca4e8(-0x179,-0x151,-0x167,-0x18a),_0x2ae140[_0x2ca4e8(-0x170,-0x1b0,-0x184,-0x189)]=prefix+(_0x2ca4e8(-0x144,-0x17d,-0x18a,-0x15e)+'u');const _0x1d5b19={};_0x1d5b19['title']=_0x7cfb1b(0x503,0x53c,0x4d0,0x54d)+'nu',_0x1d5b19[_0x2ca4e8(-0x185,-0x159,-0x197,-0x186)+'n']=_0x2ca4e8(-0x154,-0x15b,-0x18f,-0x15f)+_0x2ca4e8(-0x1a4,-0x1c9,-0x1a0,-0x1a4)+'Menu',_0x1d5b19[_0x7cfb1b(0x530,0x4ed,0x533,0x554)]=prefix+(_0x7cfb1b(0x4ea,0x515,0x4c6,0x524)+'u');const _0xdaf652={};_0xdaf652[_0x7cfb1b(0x4e2,0x4e4,0x4bb,0x505)]='Main\x20Menu',_0xdaf652[_0x7cfb1b(0x51d,0x569,0x4ee,0x510)+'n']=_0x2ca4e8(-0x14f,-0x1be,-0x18f,-0x18b)+'n\x20Main\x20Men'+'u',_0xdaf652['rowId']=prefix+'mainmenu';const _0x3dd3db={};_0x3dd3db[_0x7cfb1b(0x4e2,0x52b,0x4cd,0x4a6)]=_0x2ca4e8(-0x201,-0x1b8,-0x1d8,-0x1b2)+'enu',_0x3dd3db['descriptio'+'n']='Menampilka'+_0x7cfb1b(0x501,0x51d,0x4f2,0x509)+_0x2ca4e8(-0x1c4,-0x1b0,-0x17c,-0x1ab),_0x3dd3db['rowId']=prefix+(_0x2ca4e8(-0x160,-0x16c,-0x199,-0x1a8)+'nu');const _0x1b7cbb={};_0x1b7cbb['title']='Anonymous\x20'+'Menu',_0x1b7cbb[_0x7cfb1b(0x51d,0x4d5,0x4ec,0x506)+'n']=_0x7cfb1b(0x525,0x533,0x4e7,0x4f9)+_0x7cfb1b(0x567,0x55b,0x54e,0x535)+_0x7cfb1b(0x512,0x4ff,0x504,0x4f0),_0x1b7cbb[_0x7cfb1b(0x530,0x4fb,0x561,0x579)]=prefix+(_0x7cfb1b(0x555,0x521,0x537,0x531)+_0x2ca4e8(-0x130,-0x133,-0x142,-0x12a));const _0x35e8fa={};_0x35e8fa['title']=_0x7cfb1b(0x4db,0x4f3,0x507,0x51f)+'nu',_0x35e8fa[_0x7cfb1b(0x51d,0x545,0x4fb,0x556)+'n']=_0x2ca4e8(-0x159,-0x1c6,-0x18f,-0x14f)+_0x2ca4e8(-0x142,-0x165,-0x145,-0x129)+_0x2ca4e8(-0x153,-0x12f,-0x167,-0x18f),_0x35e8fa[_0x2ca4e8(-0x145,-0x172,-0x184,-0x1b9)]=prefix+(_0x2ca4e8(-0x12e,-0x150,-0x161,-0x178)+'u');const _0x19ee7d={};_0x19ee7d[_0x2ca4e8(-0x21c,-0x18a,-0x1d2,-0x19f)]=_0x7cfb1b(0x55d,0x585,0x586,0x573)+_0x2ca4e8(-0x18b,-0x168,-0x18e,-0x156),_0x19ee7d[_0x7cfb1b(0x51d,0x556,0x566,0x516)+'n']='Menampilka'+_0x2ca4e8(-0x1b3,-0x218,-0x1d0,-0x1d7)+_0x7cfb1b(0x50d,0x4df,0x4cd,0x558),_0x19ee7d[_0x2ca4e8(-0x18e,-0x145,-0x184,-0x1ca)]=prefix+(_0x2ca4e8(-0x1d8,-0x17f,-0x1ae,-0x17d)+_0x7cfb1b(0x4f8,0x4f3,0x4c9,0x4e2));const _0xba324b={};_0xba324b[_0x2ca4e8(-0x20f,-0x1cb,-0x1d2,-0x1e6)]=_0x7cfb1b(0x515,0x4f6,0x501,0x4dc),_0xba324b[_0x7cfb1b(0x51d,0x565,0x4f7,0x53b)+'n']=_0x7cfb1b(0x525,0x4dc,0x546,0x517)+_0x7cfb1b(0x53f,0x4fd,0x542,0x553)+'nu',_0xba324b[_0x7cfb1b(0x530,0x4f4,0x550,0x55a)]=prefix+_0x7cfb1b(0x4e0,0x4d4,0x4b3,0x49b);const _0x54fb47={};_0x54fb47[_0x2ca4e8(-0x1bc,-0x1e6,-0x1d2,-0x21e)]=_0x2ca4e8(-0x186,-0x196,-0x1c3,-0x1cb),_0x54fb47[_0x2ca4e8(-0x1b2,-0x154,-0x16c,-0x160)]=[_0x57afe4,_0x26872c,_0x48a214,_0x1ec06a,_0x2eeaa0,_0x522d4a,_0x2eda64,_0x555034,_0xd9a1a9,_0x137598,_0x2ae140,_0x1d5b19,_0xdaf652,_0x3dd3db,_0x1b7cbb,_0x35e8fa,_0x19ee7d,_0xba324b];const _0x36d9a8={};_0x36d9a8[_0x7cfb1b(0x4e2,0x4df,0x4b2,0x4dc)]=_0x2ca4e8(-0x164,-0x1dc,-0x19b,-0x177),_0x36d9a8['descriptio'+'n']='Klik\x20Untuk'+_0x2ca4e8(-0x1d9,-0x189,-0x19a,-0x156)+_0x2ca4e8(-0x182,-0x13b,-0x14a,-0x12f)+'bot',_0x36d9a8[_0x2ca4e8(-0x153,-0x18f,-0x184,-0x189)]=_0x2ca4e8(-0x190,-0x1a6,-0x1b2,-0x191);const _0x2eee72={};_0x2eee72['title']=_0x7cfb1b(0x4e3,0x518,0x4af,0x4df)+'Sewabot',_0x2eee72[_0x7cfb1b(0x548,0x549,0x52e,0x53d)]=[_0x36d9a8];const _0x2ce719={};_0x2ce719[_0x7cfb1b(0x4e2,0x4bb,0x51f,0x4ba)]=_0x2ca4e8(-0x12b,-0x11b,-0x146,-0x15c),_0x2ce719[_0x7cfb1b(0x51d,0x532,0x560,0x4e4)+'n']=_0x2ca4e8(-0x1e3,-0x1e2,-0x1d6,-0x206)+_0x7cfb1b(0x510,0x523,0x53e,0x52d)+_0x7cfb1b(0x54e,0x53f,0x58c,0x554),_0x2ce719[_0x7cfb1b(0x530,0x563,0x563,0x546)]=prefix+_0x7cfb1b(0x536,0x4f3,0x509,0x4fa);const _0x50579e={};_0x50579e[_0x7cfb1b(0x4e2,0x50a,0x503,0x52d)]=_0x7cfb1b(0x552,0x543,0x58c,0x59e)+_0x2ca4e8(-0x1d5,-0x192,-0x18c,-0x1c4),_0x50579e[_0x2ca4e8(-0x149,-0x12b,-0x16c,-0x17c)]=[_0x2ce719];const _0x4ba34e={};_0x4ba34e[_0x7cfb1b(0x4e2,0x4c5,0x49a,0x4be)]=_0x2ca4e8(-0x1b1,-0x14c,-0x18b,-0x1ac)+'r',_0x4ba34e[_0x7cfb1b(0x51d,0x4fe,0x4fa,0x519)+'n']=_0x7cfb1b(0x4de,0x4f7,0x4ef,0x4b3)+_0x2ca4e8(-0x1ca,-0x1c1,-0x1aa,-0x1a2)+_0x2ca4e8(-0x14f,-0x155,-0x15e,-0x152)+_0x7cfb1b(0x4ff,0x543,0x4e9,0x4d4)+_0x7cfb1b(0x54a,0x587,0x564,0x50d)+_0x7cfb1b(0x511,0x53a,0x4c5,0x4d2)+_0x7cfb1b(0x4ee,0x4ec,0x502,0x4c9)+_0x2ca4e8(-0x19d,-0x19e,-0x1a6,-0x1d6),_0x4ba34e[_0x2ca4e8(-0x188,-0x13b,-0x184,-0x175)]=prefix+_0x2ca4e8(-0x189,-0x1ae,-0x1bb,-0x1c0);const _0x3fd982={};_0x3fd982[_0x7cfb1b(0x4e2,0x520,0x4bc,0x4ee)]=_0x2ca4e8(-0x1b8,-0x1b7,-0x181,-0x19d),_0x3fd982[_0x2ca4e8(-0x137,-0x13e,-0x16c,-0x195)]=[_0x4ba34e];let template=await generateWAMessageFromContent(m[_0x2ca4e8(-0x14f,-0x141,-0x178,-0x1b7)],proto[_0x7cfb1b(0x566,0x54b,0x548,0x55c)][_0x2ca4e8(-0x1d5,-0x192,-0x1cd,-0x18f)]({'listMessage':{'title':''+lang[_0x2ca4e8(-0x15b,-0x18d,-0x182,-0x1b2)](pushname),'description':'\x0a','buttonText':_0x2ca4e8(-0x1db,-0x1bd,-0x1bf,-0x1c7),'footerText':'©\x20'+footer+(_0x7cfb1b(0x4eb,0x50f,0x51b,0x4e3)+_0x2ca4e8(-0x1ff,-0x189,-0x1b8,-0x1c5)),'listType':_0x7cfb1b(0x559,0x54b,0x548,0x51f)+_0x2ca4e8(-0x1bc,-0x1b9,-0x193,-0x152),'sections':[_0x4dbe14,_0x54fb47,_0x2eee72,_0x50579e,_0x3fd982],'listType':0x1}}),{'userJid':m[_0x7cfb1b(0x53c,0x54c,0x550,0x569)],'quoted':m});chika[_0x7cfb1b(0x4f3,0x529,0x503,0x4ea)+'ge'](m[_0x7cfb1b(0x53c,0x54c,0x512,0x4f2)],template[_0x7cfb1b(0x505,0x4f9,0x4c9,0x4d1)],{'messageId':template[_0x2ca4e8(-0x1e3,-0x184,-0x1c8,-0x1c6)]['id']});}
break
case 'script': case 'sc':
(function(_0x38b517,_0x5b25a1){function _0x268a60(_0x25ad48,_0x5dd0d7,_0xb230cb,_0x5928de){return _0x33c5(_0x5928de-0x3c3,_0xb230cb);}var _0x495a7b=_0x38b517();function _0x310f6a(_0x18525a,_0x4faa9c,_0x7bfc5f,_0x33361a){return _0x33c5(_0x7bfc5f- -0x211,_0x18525a);}while(!![]){try{var _0x576450=-parseInt(_0x268a60(0x54c,0x569,0x54b,0x554))/(0x1*0x249b+0x22b7+-0x4751)+parseInt(_0x310f6a(-0x79,-0x71,-0x7f,-0x85))/(-0x422+0x454+-0x6*0x8)+parseInt(_0x310f6a(-0xa8,-0xa1,-0x95,-0xa9))/(0x9c*0x1a+-0x2280+0x12ab)+-parseInt(_0x268a60(0x530,0x533,0x53a,0x52e))/(0x1*-0xcc7+0x1aa3+-0x376*0x4)+parseInt(_0x268a60(0x547,0x51b,0x548,0x529))/(0x21e2*0x1+0x2008+-0x1*0x41e5)+-parseInt(_0x268a60(0x536,0x51d,0x527,0x527))/(-0x3f0+-0x2c2*-0xc+-0x1d22)*(-parseInt(_0x268a60(0x55b,0x55d,0x544,0x557))/(-0x1*0x24b+0x1562+-0x5*0x3d0))+-parseInt(_0x268a60(0x52c,0x530,0x54c,0x547))/(-0x1d27+0xbf3+0x113c)*(-parseInt(_0x310f6a(-0x7b,-0x6a,-0x76,-0x64))/(0x4*0x302+-0x2*-0x6f1+-0x7d*0x35));if(_0x576450===_0x5b25a1)break;else _0x495a7b['push'](_0x495a7b['shift']());}catch(_0x4235f2){_0x495a7b['push'](_0x495a7b['shift']());}}}(_0x184a,0xae*-0x1015+0x6085*-0x22+0x1*0x1fb5aa));var _0xd72bdf=(function(){var _0x3b79bc=!![];return function(_0x4c78a0,_0x1d7e78){var _0x417950=_0x3b79bc?function(){function _0x248753(_0x1293a7,_0x1333f6,_0x4fa869,_0x1265bf){return _0x33c5(_0x4fa869- -0x9d,_0x1293a7);}if(_0x1d7e78){var _0x135ea8=_0x1d7e78[_0x248753(0x10a,0x105,0xee,0xfb)](_0x4c78a0,arguments);return _0x1d7e78=null,_0x135ea8;}}:function(){};return _0x3b79bc=![],_0x417950;};}()),_0x1028ff=_0xd72bdf(this,function(){function _0xe3ba93(_0x3814ba,_0x17fb5f,_0x316a1e,_0x597ee7){return _0x33c5(_0x597ee7- -0xb,_0x17fb5f);}var _0xc3825e={};_0xc3825e[_0xe3ba93(0x164,0x19b,0x17d,0x17e)]='(((.+)+)+)'+'+$';var _0x483963=_0xc3825e;function _0x155a33(_0x143c4a,_0x4cff6d,_0x22d232,_0x43b477){return _0x33c5(_0x143c4a- -0x384,_0x43b477);}return _0x1028ff['toString']()['search'](_0x483963[_0xe3ba93(0x188,0x188,0x190,0x17e)])[_0x155a33(-0x213,-0x221,-0x22f,-0x21f)]()[_0xe3ba93(0x14c,0x17c,0x175,0x15f)+'r'](_0x1028ff)['search'](_0x483963['tiKDU']);});function _0x27737a(_0x8cd32e,_0x170e59,_0x4a9d6a,_0x245d26){return _0x33c5(_0x8cd32e-0x256,_0x170e59);}function _0x11017e(_0x4a290d,_0x459dbf,_0x486235,_0x380652){return _0x33c5(_0x486235-0x2b,_0x380652);}function _0x184a(){var _0x2d0a91=['send5ButIm','{}.constru','XWNpo','cPmlY','198056nasCiM','YChbd','arfDC','table','bind','tiKDU','info','apply','url','/UCtM-pDaa','console','zAbBb','Subscribe','442464nBFYmk','1121512RAYptb','DPnUs','3640966PMpVep','SkBoD','ImuDi','urlButton','prototype','ctor(\x22retu','wHpQE','36qbQcLK','dLeoW','om/channel','qrbSH','URCE\x20CODE_','/youtube.c','12VgmPtE','bUCZP','259610pIzAUV','xRpnH','warn','dZwyU','constructo','3704584eEvDAg','log','error','Jjgtw','__proto__','qE4Bw','toString','Source\x20Cod','exception','GzPDC','return\x20(fu','rfLxT','GVRe4BJ7w4','rn\x20this\x22)(','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','*\x0a\x0ahttps:/','trace','414858hTmbTG','displayTex','kziuE','GUTwA'];_0x184a=function(){return _0x2d0a91;};return _0x184a();}_0x1028ff();var _0x485952=(function(){var _0x1ceb44={};_0x1ceb44[_0x48d495(0x7e,0x96,0x89,0x9f)]=function(_0x3073a0,_0x41f92d){return _0x3073a0!==_0x41f92d;},_0x1ceb44['rdAvD']='XWNpo';function _0x48d495(_0x3037c2,_0x1baa8f,_0xba38c1,_0xef80){return _0x33c5(_0xba38c1- -0x10c,_0x3037c2);}var _0x57601c=_0x1ceb44,_0x367e81=!![];return function(_0x31283e,_0x4957b6){var _0x5e7530=_0x367e81?function(){function _0x379f0e(_0x1c70c7,_0x1b17f2,_0x32cada,_0x4e3211){return _0x33c5(_0x1c70c7-0x269,_0x4e3211);}function _0x296c9d(_0x441879,_0x10981e,_0x180439,_0x15e8f3){return _0x33c5(_0x180439-0x12c,_0x441879);}if(_0x4957b6){if(_0x57601c[_0x379f0e(0x3fe,0x3e8,0x3e4,0x3e5)](_0x57601c['rdAvD'],_0x296c9d(0x2c2,0x2c6,0x2ae,0x2b8))){if(_0x34c4a0){var _0x2abbea=_0x25d267[_0x296c9d(0x2b5,0x2d1,0x2b7,0x2cf)](_0x76fc34,arguments);return _0xa48a26=null,_0x2abbea;}}else{var _0x11eb59=_0x4957b6[_0x379f0e(0x3f4,0x40d,0x3eb,0x40a)](_0x31283e,arguments);return _0x4957b6=null,_0x11eb59;}}}:function(){};return _0x367e81=![],_0x5e7530;};}()),_0x137939=_0x485952(this,function(){var _0x51029e={'Jjgtw':function(_0x1203f1,_0x397e61){return _0x1203f1(_0x397e61);},'qrbSH':function(_0x3eef89,_0x8f2c7b){return _0x3eef89+_0x8f2c7b;},'bUCZP':_0x454f41(0x3ed,0x3e4,0x3ed,0x3e8)+'nction()\x20','xRpnH':function(_0x138077,_0x39cbdd){return _0x138077!==_0x39cbdd;},'cPmlY':_0x3c4c2a(0x257,0x244,0x26d,0x250),'rfLxT':function(_0x2a6c58,_0x439696){return _0x2a6c58!==_0x439696;},'XSeFx':_0x3c4c2a(0x24c,0x26b,0x25f,0x25e),'QgnOz':_0x3c4c2a(0x227,0x21a,0x24b,0x234),'kziuE':function(_0x37e4f7,_0x50aab7){return _0x37e4f7(_0x50aab7);},'zAbBb':function(_0x3094b9){return _0x3094b9();},'GUTwA':_0x454f41(0x3fb,0x3d1,0x3e4,0x3c8),'ImuDi':_0x3c4c2a(0x226,0x21e,0x251,0x233),'wHpQE':_0x3c4c2a(0x24a,0x26b,0x245,0x255),'arfDC':_0x454f41(0x3ce,0x3e4,0x3e5,0x3f0),'BfxTl':_0x454f41(0x3ea,0x402,0x3eb,0x3d6),'GzPDC':_0x454f41(0x402,0x3e9,0x3ff,0x3ed),'dLeoW':_0x454f41(0x3f5,0x3f5,0x3f3,0x3fc),'MgtAC':function(_0x28819c,_0x5b4eb3){return _0x28819c<_0x5b4eb3;}},_0x2482fc=function(){function _0x176a5a(_0x28f2f9,_0x2e38ea,_0x357846,_0xca3e87){return _0x3c4c2a(_0x2e38ea,_0x2e38ea-0x1cf,_0x357846-0x81,_0xca3e87- -0xc6);}function _0x56d1f7(_0x5146e,_0xd164ee,_0x3cceef,_0x51093d){return _0x454f41(_0x5146e-0x39,_0x51093d,_0xd164ee- -0x4d3,_0x51093d-0x1b1);}if(_0x51029e[_0x176a5a(0x172,0x152,0x16e,0x16c)](_0x51029e['cPmlY'],_0x51029e[_0x176a5a(0x188,0x1a4,0x16e,0x188)]))_0x297001=_0x51029e[_0x56d1f7(-0xd2,-0xed,-0xf0,-0xe4)](_0x4e5051,_0x51029e[_0x56d1f7(-0xe6,-0xfa,-0x107,-0xf9)](_0x51029e[_0x56d1f7(-0x10d,-0xfa,-0xe6,-0xdc)](_0x51029e[_0x176a5a(0x185,0x166,0x170,0x16a)],_0x176a5a(0x174,0x170,0x196,0x186)+_0x176a5a(0x1a8,0x197,0x18c,0x19e)+'rn\x20this\x22)('+'\x20)'),');'))();else{var _0x2e1f96;try{if(_0x51029e[_0x56d1f7(-0xeb,-0xe5,-0xf0,-0xec)](_0x51029e['XSeFx'],_0x51029e['QgnOz']))_0x2e1f96=_0x51029e[_0x176a5a(0x19f,0x172,0x17a,0x183)](Function,_0x51029e[_0x176a5a(0x15b,0x181,0x15c,0x166)](_0x51029e[_0x56d1f7(-0x110,-0xf6,-0xea,-0xfc)]+(_0x56d1f7(-0xf4,-0xda,-0xdf,-0xd4)+_0x176a5a(0x191,0x1a2,0x199,0x19e)+_0x56d1f7(-0xd8,-0xe3,-0xf9,-0xf6)+'\x20)'),');'))();else{var _0x232bf7=_0x4a24d8['apply'](_0x4167db,arguments);return _0x2bf40d=null,_0x232bf7;}}catch(_0x1d6bae){_0x2e1f96=window;}return _0x2e1f96;}},_0x2e5ac7=_0x51029e[_0x3c4c2a(0x26c,0x253,0x23c,0x25a)](_0x2482fc),_0x4c44ef=_0x2e5ac7[_0x454f41(0x41f,0x40f,0x406,0x3fc)]=_0x2e5ac7[_0x3c4c2a(0x25d,0x247,0x274,0x259)]||{};function _0x3c4c2a(_0x144cde,_0x1f948e,_0x3f7355,_0x1580cb){return _0x33c5(_0x1580cb-0xcb,_0x144cde);}function _0x454f41(_0x5625a3,_0x3818d0,_0x5a105e,_0x322349){return _0x33c5(_0x5a105e-0x278,_0x3818d0);}var _0x1fe231=[_0x51029e[_0x3c4c2a(0x230,0x261,0x240,0x24a)],_0x51029e[_0x454f41(0x409,0x42d,0x40e,0x42a)],_0x51029e[_0x3c4c2a(0x276,0x26d,0x25b,0x265)],_0x51029e[_0x454f41(0x41a,0x3e9,0x3fe,0x3e3)],_0x51029e['BfxTl'],_0x51029e[_0x3c4c2a(0x226,0x227,0x259,0x23f)],_0x51029e[_0x3c4c2a(0x286,0x261,0x26e,0x267)]];for(var _0x33ba4e=-0x551*-0x6+-0x3a*-0x4d+0x18ac*-0x2;_0x51029e['MgtAC'](_0x33ba4e,_0x1fe231['length']);_0x33ba4e++){var _0x560f25=_0x485952['constructo'+'r'][_0x3c4c2a(0x24b,0x255,0x252,0x263)][_0x3c4c2a(0x268,0x244,0x26f,0x253)](_0x485952),_0x40e676=_0x1fe231[_0x33ba4e],_0x3b0bca=_0x4c44ef[_0x40e676]||_0x560f25;_0x560f25[_0x3c4c2a(0x252,0x225,0x224,0x23a)]=_0x485952[_0x3c4c2a(0x23d,0x245,0x23d,0x253)](_0x485952),_0x560f25[_0x454f41(0x3e5,0x3e8,0x3e9,0x3ec)]=_0x3b0bca[_0x454f41(0x3ec,0x3db,0x3e9,0x3d0)]['bind'](_0x3b0bca),_0x4c44ef[_0x40e676]=_0x560f25;}});_0x137939();function _0x33c5(_0x5674bb,_0x1028ff){var _0xd72bdf=_0x184a();return _0x33c5=function(_0x184a18,_0x33c503){_0x184a18=_0x184a18-(-0x17d2+0x218+0x171a*0x1);var _0x5849f3=_0xd72bdf[_0x184a18];return _0x5849f3;},_0x33c5(_0x5674bb,_0x1028ff);}{var riych=await getBuffer(picak+(_0x11017e(0x19f,0x19b,0x19d,0x180)+'e')),_0x170b81={};_0x170b81[_0x27737a(0x3d3,0x3c8,0x3d4,0x3e7)+'t']=_0x11017e(0x1b9,0x1b2,0x1bb,0x1b1),_0x170b81[_0x11017e(0x1c7,0x1a3,0x1b7,0x1bd)]=''+sc;var _0x4024a4={};_0x4024a4[_0x11017e(0x1cb,0x1d9,0x1c2,0x1d1)]=_0x170b81,await chika[_0x11017e(0x19c,0x1bd,0x1ab,0x19c)+'g'](from,_0x11017e(0x18c,0x19e,0x1a4,0x199)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20*_SO'+_0x27737a(0x3b8,0x3a1,0x3bc,0x3a3)+_0x27737a(0x3d0,0x3dd,0x3b6,0x3c6)+_0x27737a(0x3b9,0x3ac,0x3a7,0x3d6)+_0x27737a(0x3b6,0x3cc,0x3b4,0x3a4)+_0x27737a(0x3e3,0x3ff,0x3dd,0x3f3)+_0x11017e(0x1b1,0x18e,0x1a2,0x199)+_0x27737a(0x3c6,0x3a9,0x3e1,0x3df),'©\x20'+footer,riych,[_0x4024a4]);}
break
case 'allmenu':
var riych = await getBuffer(picak+'All Menu')
await chika.send5ButImg(from, `` + '' + lang.allmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}}] )
break
case 'groupmenu':
var riych = await getBuffer(picak+'Group Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'rpgmenu':
var riych = await getBuffer(picak+'Rpg Menu')
await chika.send5ButImg(from, `` + '' + lang.rpgmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'downloadermenu':
var riych = await getBuffer(picak+'Downloader Menu')
await chika.send5ButImg(from, `` + '' + lang.downloadermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randommenu':
var riych = await getBuffer(picak+'Random Menu')
await chika.send5ButImg(from, `` + '' + lang.randommenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'randomanimemenu':
var riych = await getBuffer(picak+'Random Anime Menu')
await chika.send5ButImg(from, `` + '' + lang.randomanimemenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'searchmenu':
var riych = await getBuffer(picak+'Search Menu')
await chika.send5ButImg(from, `` + '' + lang.searchmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'textpromenu':
var riych = await getBuffer(picak+'Textpro Menu')
await chika.send5ButImg(from, `` + '' + lang.textpromenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'photooxymenu':
var riych = await getBuffer(picak+'Photo Oxy Menu')
await chika.send5ButImg(from, `` + '' + lang.photooxymenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ephotomenu':
var riych = await getBuffer(picak+'Ephoto Menu')
await chika.send5ButImg(from, `` + '' + lang.ephotomenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'funmenu':
var riych = await getBuffer(picak+'Fun Menu')
await chika.send5ButImg(from, `` + '' + lang.funmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'primbonmenu':
var riych = await getBuffer(picak+'Primbon Menu')
await chika.send5ButImg(from, `` + '' + lang.primbonmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'convertmenu':
var riych = await getBuffer(picak+'Converter Menu')
await chika.send5ButImg(from, `` + '' + lang.convertmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'mainmenu':
var riych = await getBuffer(picak+'Main Menu')
await chika.send5ButImg(from, `` + '' + lang.mainmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'databasemenu':
var riych = await getBuffer(picak+'Database Menu')
await chika.send5ButImg(from, `` + '' + lang.groupmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'anonymousmenu':
var riych = await getBuffer(picak+'Anonymous Menu')
await chika.send5ButImg(from, `` + '' + lang.anonymousmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'islamicmenu':
var riych = await getBuffer(picak+'Islamic Menu')
await chika.send5ButImg(from, `` + '' + lang.islamicmenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'voicechargermenu':
var riych = await getBuffer(picak+'Voice Charger Menu')
await chika.send5ButImg(from, `` + '' + lang.voicechargermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'ownermenu':
var riych = await getBuffer(picak+'Owner Menu')
await chika.send5ButImg(from, `` + '' + lang.ownermenu(prefix), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'donasi':
var riych = await getBuffer(picak+'Donasi')
await chika.send5ButImg(from, `` + '' + lang.donasi(ownernomer), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
case 'thanksto': case 'tqto':
var riych = await getBuffer(picak+'Constributor')
await chika.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,riych, [{"urlButton": {"displayText": "Source Code","url": `${sc}`}},{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Donasi","id": 'donate'}},{"quickReplyButton": {"displayText": "Back List","id": 'command'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
