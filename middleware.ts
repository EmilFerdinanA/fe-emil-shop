import { NextRequest, NextResponse } from "next/server";
import { match } from "path-to-regexp";

const permissionMap = [
  {
    pattern: "/dashboard",
    permission: "super_admin",
  },
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const raw = request.cookies.get("persist%3Aauth")?.value;

  if (pathname === "/login") {
    if (raw) {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    } else {
      return NextResponse.next();
    }
  }

  if (!raw) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  let user;
  try {
    const parseCookie = JSON.parse(raw);
    user = JSON.parse(parseCookie.user);
  } catch {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  for (const element of permissionMap) {
    const isMatch = match(element.pattern);
    const result = isMatch(pathname);

    if (result) {
      if (user.permissions.includes(element.permission)) {
        return NextResponse.next();
      } else {
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|unauthorized).*)"],
};
