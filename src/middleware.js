import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, locale } = request.nextUrl

  // ルートパス (/) へのアクセスのみ処理
  if (pathname === '/') {
    // Accept-Languageヘッダーから優先言語を取得
    const acceptLanguage = request.headers.get('accept-language') || ''

    // 英語が優先言語の場合
    const preferredLanguage = acceptLanguage
      .split(',')[0]
      ?.split('-')[0]
      ?.toLowerCase()

    // 英語圏のユーザーで、現在のロケールが日本語の場合
    if (preferredLanguage === 'en' && locale === 'ja') {
      const url = request.nextUrl.clone()
      url.pathname = '/en'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/'
}
