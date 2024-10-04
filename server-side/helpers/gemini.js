require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini = async (game) => {
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const Base_URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY_RAWG}`

    const prompt = `tell a little about the game ${game} and return it in JSON format `;

    const result = await model.generateContent(prompt);
    return result.response.text()
}

module.exports = gemini