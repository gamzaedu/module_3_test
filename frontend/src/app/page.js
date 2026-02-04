'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function Home() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkHealth();
  }, []);

  const checkHealth = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get('/health');
      setHealth(data);
    } catch (err) {
      setError(err.message || '백엔드 서버에 연결할 수 없습니다.');
      console.error('Health check failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          방화벽 로그 모니터링 시스템
        </h1>
        <p className="text-xl text-gray-600">
          실시간 로그 분석 및 모니터링
        </p>
      </div>

      {/* System Status */}
      <div className="card">
        <h2 className="card-header">시스템 상태</h2>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
          </div>
        )}

        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          </div>
        )}

        {!loading && !error && health && (
          <div className="space-y-4">
            {/* Status Badge */}
            <div className={`p-4 rounded-md ${
              health.status === 'healthy'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center">
                <svg
                  className={`h-5 w-5 mr-2 ${
                    health.status === 'healthy' ? 'text-green-400' : 'text-red-400'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={`font-medium ${
                  health.status === 'healthy' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {health.status === 'healthy' ? '✓ 모든 시스템 정상 작동 중' : '⚠ 시스템 오류'}
                </span>
              </div>
            </div>

            {/* Health Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">데이터베이스:</span>
                <span className={`ml-2 ${
                  health.database === 'connected' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {health.database === 'connected' ? '연결됨' : '연결 실패'}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">서비스:</span>
                <span className="ml-2 text-gray-600">{health.service}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">상태:</span>
                <span className="ml-2 text-gray-600">{health.status}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">타임스탬프:</span>
                <span className="ml-2 text-gray-600">
                  {new Date(health.timestamp).toLocaleString('ko-KR')}
                </span>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={checkHealth}
              className="btn-primary mt-4"
            >
              새로고침
            </button>
          </div>
        )}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">전체 로그</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">차단</p>
              <p className="text-3xl font-bold text-red-600 mt-2">0</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">허용</p>
              <p className="text-3xl font-bold text-green-600 mt-2">0</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
