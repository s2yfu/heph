exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const order = JSON.parse(event.body);

    const msg =
`🖋️ *NEW HEPH ORDER*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${order.name}
📞 *Phone:* ${order.phone}
📍 *Wilaya:* ${order.wilaya}
🏠 *Address:* ${order.address}
━━━━━━━━━━━━━━━━━━
📐 *Size:* ${order.size}
📄 *Pages:* ${order.pages}
🟫 *Cover:* ${order.cover}
✒️ *Embossing:* ${order.emboss}
━━━━━━━━━━━━━━━━━━
📝 *Notes:* ${order.notes}
🕐 *Time:* ${order.timestamp}`;

    const res = await fetch(
      `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text: msg,
          parse_mode: 'Markdown'
        })
      }
    );

    const data = await res.json();

    if (data.ok) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } else {
      return { statusCode: 500, body: JSON.stringify({ success: false }) };
    }

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
