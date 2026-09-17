<div align="center">

# ⚡ LucidTrade

### AI-Based Trading Platform

*Trading platforms show you numbers. LucidTrade explains them.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-lucidtrade--frontend.vercel.app-blue?style=for-the-badge)](https://lucidtrade-frontend.vercel.app)

</div>

---

## About

LucidTrade is a full-stack stock trading platform built on the MERN stack, featuring secure JWT authentication and two AI-powered features that go beyond what platforms like Zerodha, Groww, or Upstox currently offer:

- **Plain-English portfolio explanations** — understand *why* your P&L looks the way it does, not just the raw numbers
- **Real-time "why is this stock moving"** — get an AI-generated explanation backed by live news, without leaving the app

**[→ Try the live demo](https://lucidtrade-frontend.vercel.app)**

*Note: the backend runs on a free-tier server that spins down after inactivity — the first request after some idle time may take 30-50 seconds to respond. Give it a moment on first load.*

---

## Features

| | |
|---|---|
|  **Secure Authentication** | JWT-based signup/login with bcrypt password hashing and cross-domain cookie sessions |
|  **Live Portfolio Tracking** | Holdings, Positions, and Orders synced per authenticated user |
|  **Order Management** | Place buy orders, tracked and tied to your account |
|  **AI Portfolio Insights** | Calculates real P&L, top gainers/losers, and portfolio concentration, then uses Gemini to generate a plain-English performance summary |
|  **"Why Is This Moving?"** | Fetches real, recent news for any stock and uses Gemini to explain what might be driving its price movement, with source links |
|  **Full Broker Architecture** | Separate marketing site and authenticated trading dashboard, matching real-world broker platform design |

---

## Tech Stack

**Frontend (Marketing site):** React, React Router
**Dashboard (Trading UI):** React, React Router, MUI, Chart.js
**Backend:** Node.js, Express, MongoDB, Mongoose
**Authentication:** JWT, bcrypt, HTTP cookies (cross-domain, `SameSite=None`)
**AI/ML:** Google Gemini API
**News Data:** GNews API
**Deployment:** Render (backend) · Vercel (frontend & dashboard)

LucidTrade/
├── backend/ # Express API, MongoDB models, JWT auth, AI insight generation
├── dashboard/ # React trading dashboard (post-login)
└── frontend/ # React marketing/landing site (pre-login), including Login & Signup


---

## Running Locally

Each folder runs independently. You'll need Node.js, a MongoDB connection (local or Atlas), a Gemini API key, and a GNews API key.

**1. Backend**
```bash
cd backend
npm install
# Add MONGO_URL, TOKEN_KEY, GEMINI_API_KEY, and GNEWS_API_KEY to a .env file
npm start
```
Runs on `http://localhost:3002`

**2. Frontend (marketing site)**
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3001` (or next available port)

**3. Dashboard (trading UI)**
```bash
cd dashboard
npm install
npm start
```
Runs on `http://localhost:3003`

---

## Author

Built by **Pranav** — [GitHub](https://github.com/PranavB110)

---

## Project Structure
