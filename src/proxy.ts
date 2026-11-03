// Proxy: runs before a page loads.
// To build: send visitors who open "/" to /en or /es. Start with /en; later,
// pick the language from the visitor's browser settings.
// Until this exists, "/" shows "page not found". Open /en directly.
// Docs: node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md
//
// Below is the smallest proxy Next.js accepts (it does nothing, so every request
// continues as normal). Replace it as you build.

export function proxy() {}
