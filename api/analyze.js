export default function handler(req, res) {

const stock = req.query.stock || "Reliance";

res.status(200).json({
result: "AI Analysis for " + stock + ": Strong company with long term bullish outlook."
});

}
