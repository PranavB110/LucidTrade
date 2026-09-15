# LucidTrade — AI-Based Trading Platform

LucidTrade is a full-stack stock trading platform built on the MERN stack, featuring secure JWT authentication and two AI-powered features that go beyond what platforms like Zerodha, Groww, or Upstox currently offer: plain-English portfolio explanations and real-time "why is this stock moving" insights, both powered by Google Gemini.

## Features

- Secure Authentication — JWT-based signup/login with bcrypt password hashing and cookie-based sessions
- Live Portfolio Tracking — Holdings, Positions, and Orders synced per authenticated user
- Order Management — Place buy orders, tracked and tied to your account
- AI Portfolio Insights — Calculates real P&L, top gainers/losers, and portfolio concentration, then uses Gemini to generate a plain-English performance summary
- "Why Is This Moving?" — Fetches real, recent news for any stock and uses Gemini to explain what might be driving its price movement, with source links
- Marketing Site + Trading Dashboard — Separate landing page and authenticated trading UI, matching real-world broker architecture

## Tech Stack

- Frontend (Marketing site): React, React Router
- Dashboard (Trading UI): React, React Router, MUI, Chart.js
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT, bcrypt, HTTP cookies
- AI/ML: Google Gemini API
- News Data: GNews API

## Project Structure

LucidTrade/
- backend/ — Express API, MongoDB models, JWT auth logic, AI insight generation
- dashboard/ — React trading dashboard (post-login)
- frontend/ — React marketing/landing site (pre-login), including Login and Signup

## Running Locally

Each folder runs independently. You'll need Node.js, a MongoDB connection (local or Atlas), a Gemini API key, and a GNews API key.

### 1. Backend
cd backend
npm install
(Add MONGO_URL, TOKEN_KEY, GEMINI_API_KEY, and GNEWS_API_KEY to a .env file)
npm start

Runs on http://localhost:3002

### 2. Frontend (marketing site)
cd frontend
npm install
npm start

Runs on http://localhost:3001 (or next available port)

### 3. Dashboard (trading UI)
cd dashboard
npm install
npm start

Runs on http://localhost:3003

## Author

Built by Pranav — https://github.com/PranavB110
