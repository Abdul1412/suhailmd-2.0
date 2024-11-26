const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348064903862";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_50_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtERW5qNlAxbmIydDFSV09TMVRzWFFPb2w4SU9MQTgybmJTVDJDOUd1dDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9aRnJhX2RKUzItQ1dOd0xGTjQ0YWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTAxZGQzNjMtNjZiMS00Y2JkLWEyNzYtODA4NDgyZjM4NjBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE1NyxcbiAgICAgIDE2MCxcbiAgICAgIDIzNCxcbiAgICAgIDMxLFxuICAgICAgMjUsXG4gICAgICAzOSxcbiAgICAgIDIxNyxcbiAgICAgIDEwMixcbiAgICAgIDE1MSxcbiAgICAgIDIyNyxcbiAgICAgIDcyLFxuICAgICAgODQsXG4gICAgICAwLFxuICAgICAgMTcsXG4gICAgICAxNDQsXG4gICAgICAxOTMsXG4gICAgICAxMjIsXG4gICAgICAxOTcsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMjEwLFxuICAgICAgNSxcbiAgICAgIDMwLFxuICAgICAgMTI0LFxuICAgICAgMTc2LFxuICAgICAgNTcsXG4gICAgICAzNixcbiAgICAgIDE3NyxcbiAgICAgIDMsXG4gICAgICAyNixcbiAgICAgIDIzMixcbiAgICAgIDE4OSxcbiAgICAgIDE0LFxuICAgICAgNDAsXG4gICAgICAxMzMsXG4gICAgICAxOTUsXG4gICAgICAyMzQsXG4gICAgICAxMDAsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSEpHTEpWSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NDkwMzg2MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NDkyMzUyNTI1MTI2ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxTzlZVURFT0hNbUxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFFlTlh4VVlQeWZRVnRjUGZTeGpLVEpLZXh4Ykhoc05nZjVOVUthTXpTQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSa1dNM3VSOVRBWkpCdDV5UDJhZ1BNL1JHUk5jbzNSN0VyOFBuWmZvSjhKUEZLRDg5WXBIcjNHOG5uUmVxeldBbndrblFRSS80dGNWaFBHd3ozMEZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZbVBXVkJYNkJ1R2cwUGttNW1WQzVhK0JYSmo1dEt3NlE1L09vR3BERXhFMVF3Tmt6RzhHQ1l1WEl0a3ZqNXBJSk5GYlFiM01TT091M24wL1hzZkVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY0OTAzODYyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjY1MDU5N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
