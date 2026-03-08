export default async function handler(req, res) {

const stock = req.query.stock || "Unknown";

const analysis = `AI Analysis for ${stock}

• Market trend: Bullish
• Risk level: Medium
• Long term potential: Strong`;

res.status(200).json({analysis});

}
