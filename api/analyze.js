export default async function handler(req, res) {

const stock = req.query.stock;

try {

const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}.NS`;

const response = await fetch(url);
const data = await response.json();

const stockData = data.quoteResponse.result[0];

const price = stockData.regularMarketPrice;
const change = stockData.regularMarketChangePercent;

let signal = "HOLD";
let score = 5;
let multibagger = "LOW";

if(change > 2){
signal = "BUY";
score = 8;
multibagger = "HIGH";
}
else if(change < -2){
signal = "SELL";
score = 3;
multibagger = "LOW";
}

res.status(200).json({
stock: stock,
price: price,
change: change,
aiScore: score,
signal: signal,
multibaggerProbability: multibagger
});

} catch (error) {

res.status(200).json({
error: "Stock not found"
});

}

}
