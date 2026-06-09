module.exports = {
    name: "sticker",
    alias: ["s"],
    desc: "Convert image/video to sticker",
    category: "Utilities",
    usage: "sticker <reply to image/video>",
    react: "👹",
    start: async (Yaka, m, { prefix, quoted, mime }) => {
        if (/image/.test(mime)) {
            let media = await quoted.download();
            await Yaka.sendMessage(m.from, { sticker: media }, { quoted: m });
        } 
        else if (/video/.test(mime)) {
            let media = await quoted.download();
            if ((quoted.msg || quoted).seconds > 15) {
                return Yaka.sendMessage(
                    m.from,
                    { text: 'Please send video less than 15 seconds.' },
                    { quoted: m }
                );
            }
            await Yaka.sendMessage(m.from, { sticker: media }, { quoted: m });
        } 
        else {
            await Yaka.sendMessage(
                m.from,
                { text: `Reply to an *image/video* and type *${prefix}s* to create sticker.` },
                { quoted: m }
            );
        }
    }
}            const stickerBuffer2 = await stickerMess.toBuffer()
             Yaka.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m })
    }else{
        Yaka.sendMessage(m.from,{text:`Please mention an *image/video* and type *${prefix}s* to create sticker.`},{quoted:m})
    } 
}}
