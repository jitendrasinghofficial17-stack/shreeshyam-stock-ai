export default async function handler(req, res) {

const url =
"https://query1.finance.yahoo.com/v7/finance/quote?symbols=RELIANCE.NS,TCS.NS,HDFCBANK.NS,INFY.NS,ICICIBANK.NS";

const response = await fetch(url);
const data = await response.json();

const stocks = data.quoteResponse.result.map(s => ({
name: s.shortName,
price: s.regularMarketPrice,
change: s.regularMarketChangePercent
}));

res.status(200).json(stocks);

}
