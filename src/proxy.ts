// Runs before a page loads. For now it only sends "/" to the English home page.
// TODO (later ticket): pick /en or /es from the browser's language instead.
// Docs: node_modules/next/dist/docs/01-app/02-guides/internationalization.md

import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/en", request.url));
}

// Only run on the home page; every other URL already has /en or /es.
export const config = {
  matcher: ["/"],
};
