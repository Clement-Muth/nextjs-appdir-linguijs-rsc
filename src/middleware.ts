import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { AVAILABLE_LOCALES } from "~/core/locale";

const locales = ["en", "fr"];

export function middleware(request: NextRequest) {
  const locale = cookies().get("lang")?.value ?? AVAILABLE_LOCALES.fr;
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)"
};
