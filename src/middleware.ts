import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const sessionId = request.cookies.get('sessionId')?.value;
	const path = request.nextUrl.pathname;

	if (path === '/login' && sessionId) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}
