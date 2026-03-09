export default async function handler(req, res) {

const stock = req.query.stock;

const response = await fetch("https://api.openai.com/v1/chat/completions", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": "Bearer " + process.env.OPENAI_KEY
},
body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{
role: "user",
content: `Analyze Indian stock ${stock}. Give trend, risk and buy sell hold recommendation`
}
]
})
});

const data = await response.json();

res.status(200).json(data);

}
