from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    """Application settings with environment variable support."""

    # Application
    APP_NAME: str = "Firewall Log Monitoring API"
    APP_VERSION: str = "1.0.0"

    # Database
    DATABASE_URL: str = "sqlite+aiosqlite:///./database/firewall_logs.db"

    # Security
    SECRET_KEY: str = "development-secret-key-change-in-production"

    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )

    @property
    def cors_origins_list(self) -> List[str]:
        """Convert CORS_ORIGINS to list if it's a string."""
        if isinstance(self.CORS_ORIGINS, str):
            return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]
        return self.CORS_ORIGINS


settings = Settings()
