// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { proxy } from "./proxy";

describe("proxy", () => {
  it("sends / to /en", () => {
    const response = proxy(new NextRequest("http://localhost:3000/"));

    expect(response?.status).toBe(307);
    expect(response?.headers.get("location")).toBe("http://localhost:3000/en");
  });
  it("leaves /en and /es alone", () => {
    expect(proxy(new NextRequest("http://localhost:3000/en"))).toBeUndefined();
    expect(proxy(new NextRequest("http://localhost:3000/es"))).toBeUndefined();
  });
});
