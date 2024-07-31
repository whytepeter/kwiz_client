import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!); // Your JWT secret

export async function middleware(request: NextRequest) {
  // Get the cookie from the request
  const tokenCookie = request.cookies.get("authToken");

  // Extract the token value
  const token = tokenCookie ? tokenCookie.value : null;

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  try {
    // Verify the token
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    console.log("Token verification failed:", error);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
