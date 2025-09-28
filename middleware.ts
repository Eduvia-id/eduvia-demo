import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const isAdmin = hostname.startsWith("admin.");

  console.log("hostname:", hostname);

  if (isAdmin) {
    // rewrite to /admin routes
    return NextResponse.rewrite(
      new URL(`/admin${request.nextUrl.pathname}`, request.url)
    );
  }

  return NextResponse.rewrite(
    new URL(`/main${request.nextUrl.pathname}`, request.url)
  );
}

export const config = {
  // Run middleware on all routes except static files, _next, favicon, etc.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
