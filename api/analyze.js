export default async function handler(req, res) {

const stock = req.query.stock;

const response = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{
role: "user",
content: `Analyze this stock from Indian market: ${stock}.
Give trend, risk and recommendation.`
}
]
})
});

const data = await response.json();

res.status(200).json({
result: data.choices[0].message.content
});

}
