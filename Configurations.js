require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "6285175363668";   // nomor admin //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://moonchikuemochi:moonchi1237654KKU@cluster0.gbwv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Miku-Bot`;
global.author = process.env.AUTHOR || "by: Hamba Allah";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
