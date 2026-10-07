import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "@/data/profile";

// Send visitors of "/" to their language: German browsers get /de, everyone else /en.
export function proxy(request: NextRequest) {
  const preferred = request.headers.get("accept-language") ?? "";
  const first = preferred.split(",")[0].trim().toLowerCase();
  const locale = first.startsWith("de") ? "de" : defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
