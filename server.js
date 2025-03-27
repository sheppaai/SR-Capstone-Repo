require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

const API_URL = "https://api.openai.com/v1/chat/completions";

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: userMessage }],
                temperature: 0.7,
            }),
        });

        const data = await response.json();

        // Debugging: Log the entire response
        console.log("OpenAI Response:", data);

        if (data.choices && data.choices[0] && data.choices[0].message) {
            const reply = data.choices[0].message.content;
            console.log("Bot Reply:", reply);  // Log the bot's reply
            res.json({ reply });
        } else {
            // If the expected structure is not found
            console.error("Error: Response structure is not as expected", data);
            res.status(500).json({ error: "Unexpected API response structure" });
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));