import { NextResponse } from 'next/server';

export async function GET() {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0',
    checks: {
      server: 'healthy',
      memory: getMemoryUsage(),
      disk: 'healthy', // Could add actual disk check
    },
  };

  try {
    // Add any additional health checks here
    // e.g., database connectivity, external services, etc.
    
    return NextResponse.json(healthCheck, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        ...healthCheck,
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}

function getMemoryUsage() {
  const used = process.memoryUsage();
  const usage = {
    rss: Math.round((used.rss / 1024 / 1024) * 100) / 100,
    heapTotal: Math.round((used.heapTotal / 1024 / 1024) * 100) / 100,
    heapUsed: Math.round((used.heapUsed / 1024 / 1024) * 100) / 100,
    external: Math.round((used.external / 1024 / 1024) * 100) / 100,
  };

  return {
    ...usage,
    status: usage.heapUsed < 100 ? 'healthy' : 'warning', // MB threshold
  };
}

// Add CORS headers if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}