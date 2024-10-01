import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //TODO - 인터셉트 가능
  console.log(request.headers)
  console.log(request.nextUrl)
  console.log(request.cookies)

  // return NextResponse.redirect(new URL('/home', request.url))
  // 리다이랙터 후 슬래시 로 홈으로감

  //TODO - 검증을 위한 비동기 함수를 사용해도 함수는 서버에서 비동기로 동작 하기 때문에 원활히 작동
  // await fetch('')

  const isLogin = false

  if (!isLogin && request.nextUrl.pathname.includes('/cart')) {
    //TODO - if문 안의 특정 조건을 활용해서 따로 작성 하면 그대로 동작
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  //TODO - 기본
  // return NextResponse.rewrite(new URL('/cart', request.url))
  // 유저 다른 페이지로
}

export const config = {
  //TODO - 매쳐
  // matcher: '/' // home에 접근했을때 request를 실행
  // matcher: '/about/:path*'
  // matcher: ['/about/:path*', '/dashboard/:path*'] // 배열형태
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
    // 정적인 컨텐츠까지 매처로 가능
  ]
}

//TODO - 인터셉터 라우터 랑 미들웨어랑 뭐가달라
