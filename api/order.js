// api/order.js
const fetch = require('node-fetch'); 

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const order = req.body;

    const msg = `
<b>NEW HEPH ORDER</b>
👤 <b>Name:</b> ${order.name}
📞 <b>Phone:</b> ${order.phone}
📍 <b>Wilaya:</b> ${order.wilaya}
🏠 <b>Address:</b> ${order.address}
📐 <b>Size:</b> ${order.size}
🟫 <b>Cover:</b> ${order.cover}
🕐 <b>Time:</b> ${order.timestamp}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text: msg,
          parse_mode: 'HTML'
        })
      }
    );

    const data = await telegramRes.json();

    if (data.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: data.description });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
