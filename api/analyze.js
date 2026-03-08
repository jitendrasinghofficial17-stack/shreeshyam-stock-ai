export default async function handler(req, res) {

const stock = req.query.stock;

try {

const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}.NS`;

const response = await fetch(url);
const data = await response.json();

const stockData = data.quoteResponse.result[0];

res.status(200).json({
stock: stock,
price: stockData.regularMarketPrice,
change: stockData.regularMarketChangePercent
});

} catch (error) {

res.status(200).json({
error: "Stock not found"
});

}

}
