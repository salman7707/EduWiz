import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const cookie = await cookies()
    const authCookie = cookie.has('auth')
    if (authCookie && (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup")) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    if (!authCookie && (request.nextUrl.pathname === "/dashboard" || request.nextUrl.pathname === "/allstudents")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: ["/:path*"]
}