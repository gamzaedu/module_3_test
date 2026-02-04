# Firewall Log Monitoring - Backend

FastAPI backend for firewall log monitoring system.

## Setup

### 1. Create Virtual Environment (Recommended)

```bash
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Linux/Mac:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables (Optional)

```bash
copy .env.example .env
```

Edit `.env` file to customize settings.

### 5. Run Development Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Documentation

After starting the server, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
backend/
├── app/
│   ├── api/          # API endpoints
│   ├── core/         # Configuration and database
│   ├── models/       # SQLAlchemy models
│   ├── schemas/      # Pydantic schemas
│   └── main.py       # FastAPI application
├── database/         # SQLite database files
└── requirements.txt  # Python dependencies
```

## Tech Stack

- FastAPI 0.115.0 - Web framework
- SQLAlchemy 2.0.35 - ORM
- aiosqlite 0.20.0 - Async SQLite driver
- Pydantic 2.9.2 - Data validation
- Uvicorn 0.32.0 - ASGI server
