import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //TODO - 미들웨어에서 판단하기
  // console.log(request.cookies)
  // console.log(request.cookies.get('accessToken')?.value)

  //TODO - 인터셉트 가능
  console.log(request.headers)
  console.log(request.nextUrl)
  console.log(request.cookies)

  // return NextResponse.redirect(new URL('/home', request.url))
  // 리다이랙터 후 슬래시 로 홈으로감

  //TODO - 검증을 위한 비동기 함수를 사용해도 함수는 서버에서 비동기로 동작 하기 때문에 원활히 작동
  // await fetch('')

  // 로그인 값 안에 토큰이 있으면 로그인이 된것
  const isLogin = !!request.cookies.get('accessToken')?.value

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

// 넥스트 인터셉터 라우터 : 토큰의 만료 시간이 요청을 보낼 때는 만료 시간이 지나지 않았는데 그다음에 지났다 -> 실패 -> 실패 끝 아니고 => 올바른 토큰을 받아와서 처리를 할 때 (누르면 할 수도 있고)
// 서버에서 에러 있을 때 인터셉터가 가로채서 처리를 할 수 도 있는 거고,
// 그 다음은 요청 실패했을 때 후속처리를 어떻게 할 것 인가
// 서비스의 정책이 로그인 실패 했을때 리스폰스 인터셉터 or 세션을 연장한 다음에 새로운 토큰을 받아와서 그 토큰을 가지고 이전의 실패된 요청을 다시 한 번 할 수 있는
// 토큰 같은 경우 이전에는 로컬 스토리지에 저장했었는데 넥스트를 사용하면 미들웨어, 인터셉터 내에서 쿠키에 있는 토큰을 가져와서 처리를 해 줘도 되는
// 로컬 스토리지에 있는 걸 가지고 와도 되고
