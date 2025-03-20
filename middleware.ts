import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define which routes are public and which need authentication
const publicRoutes = [
  '/auth/signin',
  '/auth/signup',
  '/auth/reset-password',
  '/auth/callback',
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  // Check if the user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  // Get the current path
  const path = req.nextUrl.pathname;
  
  // If the user is on a public route, let them through
  if (publicRoutes.some(route => path.startsWith(route))) {
    return res;
  }
  
  // For API routes, handle authentication in the route handlers
  if (path.startsWith('/api')) {
    return res;
  }
  
  // If the user is not authenticated and not on a public route, redirect to login
  if (!session && !publicRoutes.some(route => path.startsWith(route))) {
    const redirectUrl = new URL('/auth/signin', req.url);
    return NextResponse.redirect(redirectUrl);
  }
  
  // If the user is authenticated and trying to access a public route, redirect to dashboard
  if (session && publicRoutes.some(route => path.startsWith(route))) {
    const redirectUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(redirectUrl);
  }
  
  return res;
}

// Specify which routes this middleware applies to
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
