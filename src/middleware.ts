import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.headers.get('Authorization');

  if (!token) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 403 });
  }

  if (token !== '741ccc29-9272-448a-b68e-7d8b3849ce6f') {
    return NextResponse.json({ error: 'Invalid API key' }, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
