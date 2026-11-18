// Proxy: runs before a page loads.
// Sends visitors who open "/" to /en. Later: pick /en or /es from the
// visitor's browser language.
// Docs: node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }
}
