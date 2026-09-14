# LucidTrade — AI-Based Trading Platform

LucidTrade is a full-stack stock trading platform built on the MERN stack, featuring secure JWT authentication and an AI-powered portfolio insights feature that explains your holdings and P&L in plain English — a capability not currently offered by platforms like Zerodha, Groww, or Upstox.

## Features

- Secure Authentication — JWT-based signup/login with bcrypt password hashing and cookie-based sessions
- Live Portfolio Tracking — Holdings, Positions, and Orders synced per authenticated user
- Order Management — Place buy orders, tracked and tied to your account
- AI Portfolio Insights (in progress) — Get a plain-English explanation of your portfolio performance, powered by LLM integration
- Marketing Site + Trading Dashboard — Separate landing page and authenticated trading UI, matching real-world broker architecture

## Tech Stack

- Frontend (Marketing site): React, React Router
- Dashboard (Trading UI): React, React Router, MUI, Chart.js
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT, bcrypt, HTTP cookies

## Project Structure

LucidTrade/
- backend/ — Express API, MongoDB models, JWT auth logic
- dashboard/ — React trading dashboard (post-login)
- frontend/ — React marketing/landing site (pre-login), including Login and Signup

## Running Locally

Each folder runs independently. You'll need Node.js and a MongoDB connection (local or Atlas).

### 1. Backend
cd backend
npm install
(Add MONGO_URL and TOKEN_KEY to a .env file)
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
