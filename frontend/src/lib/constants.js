// API Configuration
export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';
export const API_VERSION = '/api/v1';

// Page Configuration
export const ITEMS_PER_PAGE = 20;

// Status Constants
export const LOG_STATUS = {
  BLOCKED: 'blocked',
  ALLOWED: 'allowed',
  UNKNOWN: 'unknown',
};

export const SYSTEM_STATUS = {
  HEALTHY: 'healthy',
  UNHEALTHY: 'unhealthy',
  ERROR: 'error',
};

// Navigation Menu
export const NAV_ITEMS = [
  { label: '대시보드', href: '/' },
  { label: '로그 목록', href: '/logs' },
  { label: '통계', href: '/statistics' },
  { label: '설정', href: '/settings' },
];
