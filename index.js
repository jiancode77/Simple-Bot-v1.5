/*/
nga Usah Hapus Nama Safa Kontol
 Hapus? Liat Aja 
 my istri safa love 🩷
 credit @vyero3
/*/

const { Telegraf } = require("telegraf")
const fetch = require("node-fetch")
const fs = require("fs")
const axios = require("axios")
const path = require("path")
const FormData = require("form-data")
const { token, vercelToken } = require("./safa")
const bot = new Telegraf(token)
const startTime = Date.now()
const images = [
  "https://uploader.zenzxz.dpdns.org/uploads/1759754470092.jpeg",
  "https://uploader.zenzxz.dpdns.org/uploads/1759750355524.jpeg",
  "https://uploader.zenzxz.dpdns.org/uploads/1759754484671.jpeg"
]

function formatUptime(ms) {
  let sec = Math.floor(ms / 1000)
  let min = Math.floor(sec / 60)
  let hrs = Math.floor(min / 60)
  let days = Math.floor(hrs / 24)
  sec %= 60
  min %= 60
  hrs %= 24
  let t = []
  if (days) t.push(`${days} hari`)
  if (hrs) t.push(`${hrs} jam`)
  if (min) t.push(`${min} menit`)
  if (sec) t.push(`${sec} detik`)
  return t.join(" ")
}

function userInfo(ctx) {
  const name = ctx.from.username ? `@${ctx.from.username}` : "Unknown"
  return `◇ User: ${name} (${ctx.from.id})
◇ Language: JavaScript
◇ Waktu aktif 😡: ${formatUptime(Date.now() - startTime)}`
}

bot.on("callback_query", async (ctx) => {
  const data = ctx.callbackQuery.data
  const img = images[Math.floor(Math.random() * images.length)]
  
  if (data === "next_page") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>🍂 Simple BOT V1.5 Привет, босс! Добро пожаловать в скрипт версии</blockquote>

${userInfo(ctx)}

<blockquote>Доступные команды</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [[{ text: "« ɴᴀᴢᴀᴅ ◀", callback_data: "back_page" }]]
        }
      }
    )
  }
  
  if (data === "back_page") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>🍂 Simple BOT V1.5 Привет, босс! Добро пожаловать в скрипт версии</blockquote>

${userInfo(ctx)}

<blockquote>Добро пожаловать в Simple V1.5</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [[{ text: "» ᴄʟᴇᴇᴅ ➤", callback_data: "next_page" }]]
        }
      }
    )
  }

  if (data === "ai_menu") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>╭─⪩⧼ᴀɪ ᴍᴇɴᴜ ⧽⪨ 
││/ᴀɪᴅᴇᴇᴘsᴇᴋ
││
╰────────────────⧽⪨</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "« ʙᴀᴄᴋ", callback_data: "main_menu" }]
          ]
        }
      }
    )
  }

  if (data === "download_menu") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>╭─⪩⧼ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ⧽⪨
││/ᴛɪᴋᴛᴏᴋ
││
╰────────────────⧽⪨</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "« ʙᴀᴄᴋ", callback_data: "main_menu" }]
          ]
        }
      }
    )
  }

  if (data === "tools_menu") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>╭─⪩⧼ᴛᴏᴏʟs ᴍᴇɴᴜ ⧽⪨
││/ʙʀᴀᴛ
││/ʙʀᴀᴛᴠɪᴅ
││/ᴘʟᴀʏ
││/ssᴡᴇʙ
││
╰────────────────⧽⪨</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "« ʙᴀᴄᴋ", callback_data: "main_menu" }]
          ]
        }
      }
    )
  }

  if (data === "main_menu") {
    await ctx.editMessageMedia(
      {
        type: "photo",
        media: img,
        caption: `<blockquote>🍂 Simple BOT V1.5 Привет, босс! Добро пожаловать в скрипт версии</blockquote>

${userInfo(ctx)}

<blockquote>Добро пожаловать в Simple V1.5</blockquote>`,
        parse_mode: "HTML"
      },
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: " ᴀɪ ᴍᴇɴᴜ", callback_data: "ai_menu" },
              { text: " ᴅᴏᴡɴʟᴏᴀᴅ", callback_data: "download_menu" }
            ],
            [
              { text: " ᴛᴏᴏʟs ᴍᴇɴᴜ", callback_data: "tools_menu" }
            ]
          ]
        }
      }
    )
  }
})

bot.command("start", async (ctx) => {
  const img = images[Math.floor(Math.random() * images.length)]
  await ctx.replyWithPhoto(
    { url: img },
    {
      caption: `<blockquote>🍂 Simple BOT V1.5 Привет, босс! Добро пожаловать в скрипт версии</blockquote>

${userInfo(ctx)}

<blockquote>Добро пожаловать в Simple V1.5</blockquote>`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: " ᴀɪ ᴍᴇɴᴜ", callback_data: "ai_menu" },
            { text: " ᴅᴏᴡɴʟᴏᴀᴅ", callback_data: "download_menu" }
          ],
          [
            { text: " ᴛᴏᴏʟs ᴍᴇɴᴜ", callback_data: "tools_menu" }
          ]
        ]
      }
    }
  )
})

bot.command("brat", async (ctx) => {
  const t = ctx.message.text.replace("/brat", "").trim()
  if (!t) return ctx.reply("Введите текст\n\nПример:\n/brat Привет")
  const r = await fetch(`https://apizsa.vercel.app/tools/brat?text=${encodeURIComponent(t)}`)
  const b = await r.buffer()
  await ctx.replyWithSticker({ source: b })
})

bot.command("bratvid", async (ctx) => {
  const t = ctx.message.text.replace("/bratvid", "").trim()
  if (!t) return ctx.reply("Введите текст\n\nПример:\n/bratvid Привет")
  const r = await fetch(`https://apizsa.vercel.app/tools/bratvid?text=${encodeURIComponent(t)}`)
  const b = await r.buffer()
  await ctx.replyWithSticker({ source: b })
})

bot.command("iqc", async (ctx) => {
  const args = ctx.message.text.replace("/iqc", "").trim()
  if (!args) return ctx.reply("<blockquote>Введите параметры\n\nПример:\n/iqc 20:14|100|woi</blockquote>", { parse_mode: "HTML" })
  const parts = args.split("|")
  const time = parts[0] || "20:00"
  const battery = parts[1] || "100"
  const message = parts[2] || "Hello"
  const res = await fetch(`https://apizsa.vercel.app/tools/iqc?time=${encodeURIComponent(time)}&battery=${encodeURIComponent(battery)}&message=${encodeURIComponent(message)}`)
  const buffer = await res.buffer()
  await ctx.replyWithPhoto({ source: buffer })
})

bot.command("play", async (ctx) => {
  const t = ctx.message.text.replace("/play", "").trim()
  if (!t) return ctx.reply("Введите название\n\nПример:\n/play Kami")
  const r = await fetch(`https://apizsa.vercel.app/tools/play?q=${encodeURIComponent(t)}`)
  const j = await r.json()
  if (!j.status) return ctx.reply("Видео не найдено")
  await ctx.replyWithAudio({ url: j.download.audio.url })
})

bot.command("ssweb", async (ctx) => {
  const urlInput = ctx.message.text.replace("/ssweb", "").trim()
  if (!urlInput) return ctx.reply("<blockquote>ᴍᴀsᴜᴋᴋᴀɴ ᴜʀʟ ᴡᴇʙsɪᴛᴇ!\n\nᴄᴏɴᴛᴏʜ:\n/ssweb https://apizsa.vercel.app/</blockquote>", { parse_mode: "HTML" })
  try {
    const res = await fetch(`https://apizsa.vercel.app/tools/ssweb?url=${encodeURIComponent(urlInput)}`)
    const data = await res.json()
    if (!data.status || !data.screenshot) return ctx.reply("<blockquote>ɢᴀɢᴀʟ ᴍᴇɴɢᴀᴍʙɪʟ sᴄʀᴇᴇɴsʜᴏᴛ. ᴘᴀsᴛɪᴋᴀɴ ᴜʀʟ ᴠᴀʟɪᴅ.</blockquote>", { parse_mode: "HTML" })
    await ctx.replyWithPhoto({ url: data.screenshot })
  } catch (err) {
    console.error(err)
    ctx.reply("<blockquote>ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ sᴀᴀᴛ ᴍᴇᴍᴘʀᴏsᴇs ʀᴇǫᴜᴇsᴛ.</blockquote>", { parse_mode: "HTML" })
  }
})

bot.command("tiktok", async (ctx) => {
  const urlInput = ctx.message.text.replace("/tiktok", "").trim()
  if (!urlInput) return ctx.reply("<blockquote>ᴍᴀsᴜᴋᴋᴀɴ ᴜʀʟ ᴛɪᴋᴛᴏᴋ!\n\nᴄᴏɴᴛᴏʜ:\n/tiktok https://vt.tiktok.com/ZSUJcxQpB/</blockquote>", { parse_mode: "HTML" })
  try {
    const res = await fetch(`https://apizsa.vercel.app/download/tiktok?url=${encodeURIComponent(urlInput)}`)
    const data = await res.json()
    if (!data.status || !data.result || !data.result.download_links || !data.result.download_links.hd_quality) return ctx.reply("<blockquote>ɢᴀɢᴀʟ ᴍᴇɴɢᴀᴍʙɪʟ ᴠɪᴅᴇᴏ. ᴘᴀsᴛɪᴋᴀɴ ᴜʀʟ ᴠᴀʟɪᴅ.</blockquote>", { parse_mode: "HTML" })
    await ctx.replyWithVideo({ url: data.result.download_links.hd_quality })
  } catch (err) {
    console.error(err)
    ctx.reply("<blockquote>ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ sᴀᴀᴛ ᴍᴇᴍᴘʀᴏsᴇs ʀᴇǫᴜᴇsᴛ.</blockquote>", { parse_mode: "HTML" })
  }
})

bot.command("deploy", async (ctx) => {
  if (!ctx.message.reply_to_message || !ctx.message.reply_to_message.document)
    return ctx.reply("<blockquote>ʀᴇᴘʟʏ ᴋᴀɴ ᴅᴏᴄᴜᴍᴇɴᴛ .html ᴀᴛᴀᴜ .zip + ᴋᴇᴛɪᴋ ɴᴀᴍᴀ ᴡᴇʙsɪᴛᴇ (ᴄᴏɴᴛᴏʜ: /deploy hamzay)</blockquote>", { parse_mode: "HTML" });

  const file = ctx.message.reply_to_message.document;
  const args = ctx.message.text.split(" ").slice(1);
  if (!args[0]) return ctx.reply("<blockquote>ᴋᴇᴛɪᴋ ɴᴀᴍᴀ ᴡᴇʙsɪᴛᴇ sᴇᴛᴇʟᴀʜ ᴘᴇʀɪɴᴛᴀʜ /deploy</blockquote>", { parse_mode: "HTML" });

  const webNameRaw = args[0].trim();
  const webName = webNameRaw.toLowerCase().replace(/[^a-z0-9-_]/g, "");

  if (!file.file_name.endsWith(".zip") && !file.file_name.endsWith(".html"))
    return ctx.reply("<blockquote>ғɪʟᴇ ʜᴀʀᴜs ʙᴇʀᴇᴋsᴛᴇɴsɪ .html ᴀᴛᴀᴜ .zip</blockquote>", { parse_mode: "HTML" });

  const checking = await ctx.reply("<blockquote>⏳ ᴍᴇᴍᴇʀɪᴋsᴀ ᴋᴇᴛᴇʀsᴇᴅɪᴀᴀɴ ɴᴀᴍᴀ...</blockquote>", { parse_mode: "HTML" });

  try {
    const check = await fetch(`https://${webName}.vercel.app`);
    if (check.status === 200) {
      return ctx.reply(`<blockquote>❌ ɴᴀᴍᴀ <b>${webName}</b> sᴜᴅᴀʜ ᴅɪɢᴜɴᴀᴋᴀɴ!</blockquote>`, { parse_mode: "HTML" });
    }
  } catch {}

  await ctx.telegram.editMessageText(ctx.chat.id, checking.message_id, null, "<blockquote>🚀 ᴍᴇᴍᴘʀᴏsᴇs ᴅᴇᴘʟᴏʏ ᴋᴇ ᴠᴇʀᴄᴇʟ...</blockquote>", { parse_mode: "HTML" });

  try {
    const fileUrl = await ctx.telegram.getFileLink(file.file_id);
    const fileBuffer = await fetch(fileUrl.href).then(res => res.buffer());
    const filesToUpload = [];

    if (file.file_name.endsWith(".zip")) {
      const zipBuffer = Buffer.from(fileBuffer);
      const directory = await unzipper.Open.buffer(zipBuffer);
      for (const zipFile of directory.files) {
        if (zipFile.type === "File") {
          const content = await zipFile.buffer();
          const filePath = zipFile.path.replace(/^\/+/, "").replace(/\/\//g, "/");
          filesToUpload.push({ file: filePath, data: content.toString("base64"), encoding: "base64" });
        }
      }
      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith("index.html"))) {
        return ctx.reply("<blockquote>❌ File <code>index.html</code> ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ᴢɪᴘ.</blockquote>", { parse_mode: "HTML" });
      }
    } else if (file.file_name.endsWith(".html")) {
      filesToUpload.push({ file: "index.html", data: Buffer.from(fileBuffer).toString("base64"), encoding: "base64" });
    }

    const headers = { Authorization: `Bearer ${vercelToken}`, "Content-Type": "application/json" };
    await fetch("https://api.vercel.com/v9/projects", {
      method: "POST",
      headers,
      body: JSON.stringify({ name: webName })
    }).catch(() => {});

    const deployRes = await fetch("https://api.vercel.com/v13/deployments", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: webName,
        project: webName,
        files: filesToUpload,
        projectSettings: { framework: null }
      })
    });

    const deployData = await deployRes.json().catch(() => null);

    if (!deployData || !deployData.url || !deployData.id) {
      return ctx.reply(`<blockquote>❌ ɢᴀɢᴀʟ ᴅᴇᴘʟᴏʏ:\n${JSON.stringify(deployData)}</blockquote>`, { parse_mode: "HTML" });
    }

    await fetch(`https://api.vercel.com/v2/deployments/${deployData.id}/aliases`, {
      method: "POST",
      headers,
      body: JSON.stringify({ alias: `${webName}.vercel.app` })
    }).catch(() => {});

    await ctx.telegram.editMessageText(
      ctx.chat.id,
      checking.message_id,
      null,
      `<blockquote>✅ sᴜᴋsᴇs ᴅᴇᴘʟᴏʏ!\n\n🌐 ᴜʀʟ: https://${webName}.vercel.app</blockquote>`,
      {
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[{ text: "🌐 ʙᴜᴋᴀ ᴡᴇʙsɪᴛᴇ", url: `https://${webName}.vercel.app` }]] }
      }
    );
  } catch (err) {
    console.error(err);
    await ctx.telegram.editMessageText(ctx.chat.id, checking.message_id, null, `<blockquote>❌ ᴇʀʀᴏʀ: ${err.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

bot.command("save2zip", async (ctx) => {
  const args = ctx.message.text.split(" ").slice(1);
  if (!args[0]) return ctx.reply("<blockquote>ᴋᴇᴛɪᴋ ᴜʀʟ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ sɪᴍᴘᴀɴ ᴊᴀᴅɪ ᴢɪᴘ\n\nᴄᴏɴᴛᴏʜ:\n/save2zip https://api.nekolabs.my.id</blockquote>", { parse_mode: "HTML" });
  const url = args[0];
  const proses = await ctx.reply("<blockquote>⏳ ᴍᴇᴍᴘʀᴏsᴇs ᴘᴇɴʏɪᴍᴘᴀɴᴀɴ ᴡᴇʙsɪᴛᴇ...</blockquote>", { parse_mode: "HTML" });
  try {
    const res = await fetch(`https://api.nekolabs.my.id/tools/web2zip?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    if (!data.status || !data.result || !data.result.downloadUrl) {
      return ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, "<blockquote>❌ ɢᴀɢᴀʟ ᴍᴇɴʏɪᴍᴘᴀɴ ᴡᴇʙsɪᴛᴇ</blockquote>", { parse_mode: "HTML" });
    }
    await ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, "<blockquote>✅ sᴜᴄᴄᴇss ᴅɪ sɪᴍᴘᴀɴ!\n\n📦 sᴇᴅᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ᴢɪᴘ...</blockquote>", { parse_mode: "HTML" });
    await ctx.replyWithDocument({ url: data.result.downloadUrl, filename: "website.zip" }, { caption: `<blockquote>✅ sᴜᴋsᴇs sɪᴍᴘᴀɴ ᴡᴇʙsɪᴛᴇ\n🌐 ${url}</blockquote>`, parse_mode: "HTML" });
  } catch (err) {
    await ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, `<blockquote>❌ ᴇʀʀᴏʀ: ${err.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

bot.command("aideepsek", async (ctx) => {
  const text = ctx.message.text.split(" ").slice(1).join(" ");
  if (!text) return ctx.reply("<blockquote>ᴋᴇᴛɪᴋ ᴛᴇᴋs ʏᴀɴɢ ɪɴɢɪɴ ᴅɪᴛᴀɴʏᴀᴋᴀɴ\n\nᴄᴏɴᴛᴏʜ:\n/aideepsek Hai</blockquote>", { parse_mode: "HTML" });
  const proses = await ctx.reply("<blockquote>⏳ sᴇᴅᴀɴɢ ᴍᴇɴɢᴘʀᴏsᴇs ᴊᴀᴡᴀʙᴀɴ ᴀɪ...</blockquote>", { parse_mode: "HTML" });
  try {
    const res = await fetch(`https://apizsa.vercel.app/ai/deepseek?text=${encodeURIComponent(text)}`);
    const data = await res.json();
    if (!data.status || !data.result || !data.result.data || !data.result.data.response) {
      return ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, "<blockquote>❌ ɢᴀɢᴀʟ ᴍᴇɴɢᴀᴍʙɪʟ ᴊᴀᴡᴀʙᴀɴ ᴀɪ</blockquote>", { parse_mode: "HTML" });
    }
    await ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, `<blockquote>${data.result.data.response}</blockquote>`, { parse_mode: "HTML" });
  } catch (err) {
    await ctx.telegram.editMessageText(ctx.chat.id, proses.message_id, null, `<blockquote>❌ ᴇʀʀᴏʀ: ${err.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

bot.launch()
