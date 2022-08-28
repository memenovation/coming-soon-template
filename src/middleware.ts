// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") {
    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (
        user === process.env.BASIC_AUTH_USERNAME &&
        pwd === process.env.BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }
    }

    url.pathname = "/api/auth";
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: "/",
};
// See "Matching Paths" below to learn more
