const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "XAYHXY4Q#x3vLBEuiUsB2afTlX9vPNKYuLtYfipMPvYADN2130dg", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 DANUWA-MD Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyAF-9vzxJE-V6eLW7T-MEnuGhZXS973Mn4", // Add Gemini API key here
  REMOVE_BG_API_KEY:"mLwV78G9EgTUndAcJm6L1qxg", // Add removebg API key here
  WEATHER_API_KEY: "2d313ab9f9f14b97a8d71148252206", // Add your weather API key here
  BOT_OWNER: "94787039023", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94787039023"], // Replace your bot owner number here (same as bot owner number)
  AUTO_STATUS_REACT: "true",
  AUTO_STATUS_REPLY: "true",
  AUTO_STATUS_SEEN: "true",
  MODE: "private", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REPLY|| defaultConfig.AUTO_STATUS_REPLY,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.ownerNumber
    ? process.env.ownerNumber.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
