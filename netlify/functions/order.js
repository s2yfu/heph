const https = require('https');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const order = JSON.parse(event.body);
  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  const text = `🖋️ NEW HEPH ORDER\n━━━━━━━━━━━━━━━━━━\n👤 Name: ${order.name}\n📞 Phone: ${order.phone}\n📍 Wilaya: ${order.wilaya}\n🏠 Address: ${order.address}\n━━━━━━━━━━━━━━━━━━\n📐 Size: ${order.size}\n📄 Pages: ${order.pages}\n🟫 Cover: ${order.cover}\n✒️ Embossing: ${order.emboss}\n━━━━━━━━━━━━━━━━━━\n📝 Notes: ${order.notes}\n🕐 Time: ${order.timestamp}`;

  const payload = JSON.stringify({ chat_id: chatId, text: text });

  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${token}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.ok) {
          resolve({ statusCode: 200, body: JSON.stringify({ success: true }) });
        } else {
          resolve({ statusCode: 500, body: JSON.stringify({ error: result }) });
        }
      });
    });
    req.on('error', (e) => {
      resolve({ statusCode: 500, body: JSON.stringify({ error: e.message }) });
    });
    req.write(payload);
    req.end();
  });
};
