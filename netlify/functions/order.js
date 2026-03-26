exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const order = JSON.parse(event.body);

    // Using HTML instead of Markdown for better stability with special characters
    const msg =
`🖋️ <b>NEW HEPH ORDER</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${order.name}
📞 <b>Phone:</b> ${order.phone}
📍 <b>Wilaya:</b> ${order.wilaya}
🏠 <b>Address:</b> ${order.address}
━━━━━━━━━━━━━━━━━━
📐 <b>Size:</b> ${order.size}
📄 <b>Pages:</b> ${order.pages}
🟫 <b>Cover:</b> ${order.cover}
✒️ <b>Embossing:</b> ${order.emboss}
━━━━━━━━━━━━━━━━━━
📝 <b>Notes:</b> ${order.notes}
🕐 <b>Time:</b> ${order.timestamp}`;

    const res = await fetch(
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

    const data = await res.json();

    if (data.ok) {
      // Returning success: true to match index.html logic
      return { 
        statusCode: 200, 
        body: JSON.stringify({ success: true }) 
      };
    } else {
      console.error('Telegram API Error:', data);
      return { 
        statusCode: 500, 
        body: JSON.stringify({ success: false, error: data.description }) 
      };
    }

  } catch (err) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ success: false, error: err.message }) 
    };
  }
};
