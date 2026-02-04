from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from datetime import datetime
from app.core.database import get_db

router = APIRouter()


@router.get("/health")
async def health_check(db: AsyncSession = Depends(get_db)):
    """
    Health check endpoint.

    Returns:
        - status: Overall system status
        - database: Database connection status
        - timestamp: Current server time
    """
    try:
        # Test database connection
        await db.execute(text("SELECT 1"))
        db_status = "connected"
    except Exception as e:
        db_status = f"error: {str(e)}"

    return {
        "status": "healthy" if db_status == "connected" else "unhealthy",
        "database": db_status,
        "timestamp": datetime.utcnow().isoformat(),
        "service": "Firewall Log Monitoring API"
    }
