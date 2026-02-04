# Firewall Log Monitoring - Frontend

Next.js frontend for firewall log monitoring system.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables (Optional)

Create `.env.local` file:

```bash
API_BASE_URL=http://localhost:8000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable React components
│   │   └── Layout/       # Layout components
│   └── lib/              # Utilities and API client
│       ├── api.js        # Axios instance
│       └── constants.js  # Constants
├── public/               # Static files
└── package.json          # Dependencies
```

## Tech Stack

- Next.js 14.2.15 - React framework (App Router)
- React 18.3.1 - UI library
- Tailwind CSS 3.4.14 - CSS framework
- Axios 1.7.7 - HTTP client

## Features

- Server-side rendering with Next.js App Router
- Responsive design with Tailwind CSS
- API integration with backend
- Real-time health monitoring
