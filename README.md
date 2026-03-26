# 🖋️ Heph — Artisan Sketchbook E-Commerce System

[![Platform: Netlify](https://img.shields.io/badge/Platform-Netlify-00ad9f?style=flat-square&logo=netlify)](https://www.netlify.com/)
[![Tech: Serverless](https://img.shields.io/badge/Tech-Serverless-ff69b4?style=flat-square&logo=serverless)](https://www.netlify.com/products/functions/)

* Heph : is a bespoke, high-end e-commerce solution developed to manage the full order-to-delivery pipeline for an artisan leather sketchbook brand. The project bridges luxury branding with modern web architecture, providing a seamless user experience and secure backend operations through serverless technology.

🔗 **Live Demo:** [heph.netlify.app](https://heph.netlify.app/)

---

## 🚀 Key Technical Features

* **Serverless Architecture:** Leverages **Netlify Functions (Node.js)** to handle backend logic and API requests. This eliminates the need for a persistent server, ensuring high scalability and cost-efficiency.
* **Real-time Order Integration:** Fully integrated with the **Telegram Bot API**. Orders are processed and dispatched instantly as structured HTML notifications to the administrative team.
* **Security-First Implementation:** Sensitive credentials (API Tokens, Chat IDs) are managed strictly via **Environment Variables** in the deployment environment, preventing any exposure in the client-side code or public repository.
* **Luxury UI/UX Design:** A custom-crafted interface using modern CSS (Grid, Flexbox, Custom Properties) and Intersection Observer API for smooth, high-end scroll animations.
* **Data Integrity:** Implements backend parsing and sanitization to ensure that customer inputs (notes, addresses) are handled safely across different platforms.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Modern UI/UX with high-end typography), JavaScript (ES6+).
- **Backend:** Node.js, Netlify Serverless Functions.
- **Communication:** Telegram Bot API for real-time CRM and notification management.
- **Deployment:** Continuous Integration/Continuous Deployment (CI/CD) via GitHub and Netlify.

---

## 📂 Project Structure

```text
heph/
├── index.html          # Main landing page & client-side logic
├── hero.jpg            # Optimized brand imagery
├── logo.png            # Brand identity assets
└── netlify/
    └── functions/
        └── order.js    # Serverless backend (Order processing & TG API)
