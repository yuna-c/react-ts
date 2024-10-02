/*************************************************************/

//NOTE - React 18
// : https://ko.react.dev/blog/2022/03/29/react-v18

/*************************************************************/

//NOTE - 새롭게 추가된 훅

// - useId
// : https://ko.react.dev/reference/react/useId
// : 컴포넌트별로 유니크한 값을 생성하는 훅

// : RSC 라는 서버컴포넌트를 지원
// : 하이드레이션까지 고려하여 유니크한 값을 부여해야 하는데 굉장히 까다로운 작업
// : seId 훅을 사용하면 클라이언트와 서버의 불일치를 피해서 서버~클라이언트 컴포넌트를 공유하는 고유한 값을 생성
export default function UniqueIdComponent() {
  return <div>{Math.random()}</div>
}

// - useTransition
// : https://ko.react.dev/reference/react/useTransition
// : UI 변경을 가로막지 않고 상태를 업데이트 할 수 있는 React 훅

// : React 동시성 관련된 기능 중 하나로 느린 렌더링 과정에서
// : 로딩 화면을 보여주거나 지금 진행 중인 렌더링을 버리고 새로운 상태값으로 다시 렌더링을 하는 작업

/*
useTransition 사용 시 주의할 점

1. startTransition 내부는 반드시 setState 같은 상태 업데이트 하는 함수 작업만 가능. 만약 props나 사용자 정의 훅에서 반환하는 값을 사용하고 싶다면, useDeferredValue를 써야 함.
2. startTransition으로 넘겨주는 상태 업데이트는 다른 동기업데이트로 인해 지연될 수 있음.
3. startTransition으로 넘겨주는 함수는 반드시 동기 함수여야 함. 만약 이 안에 비동기 함수(e.g. setTimeout) 같은 함수를 넣으면 제대로 동작하지 않음.
*/

// - useDeferredValue
// : https://ko.react.dev/reference/react/useDeferredValue
// : 컴포넌트 트리에서 리렌더링이 급하지 않은 부분을 지연할 수 있게 도와주는 훅
// : 디바운스랑 비슷하지만, 고정된 지연 시간이 없이 첫 번째 렌더링이 완료된 후 useDeferredValue로 지연된 렌더링을 수행.

/*
useTransition과의 차이점

- useTransition : state 값을 업데이트 하는 함수를 감싸서 사용.
- useDeferredValue : state 값 자체만을 감싸서 사용.
*/

// - Automatic Batching (자동배치)
// : React18에서 여러 상태 업데이트를 단일 리렌더링으로 그룹화 하는 것
// : 여러 상태를 묶어서 성능을 향상 시키는 방법

// 자동 배치의 장점
// : flushSync : 자동배치 해제
// : flushSync는 React에게 제공된 콜백 내부의 모든 업데이트를 동기적으로 처리하도록 강제
// : DOM이 즉시 업데이트되는 것을 보장
// 비추

function handleClick() {
  sleep(3000).then(() => {
    flushSync(() => {
      setCount((c) => c + 1)
    })
    flushSync(() => {
      setFlag((f) => !f)
    })
  })
}

// - Suspense
// : 비동기 컴포넌트가 로드될 때까지 대체 UI를 제공하는 기능
// : 로딩 상태에서 사용자에게 로딩 창을 보여줌으로써 UX를 개선
// : 데이터 페칭이나 코드 분할(lazy loading) 등의 상황에서 유용

// : 비동기 컴포넌트가 로드될 때까지 fallback 컴포넌트를 보여주는 기능

import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./LazyComponent'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App

// -- Next.js와의 통합
// : Next.js에서도 Suspense를 사용

// -- 컴포넌트 마운트 전 effect 실행 문제
// : 컴포넌트가 화면에 실제로 노출될 때 effect가 실행

// -- 컴포넌트 상태 인지 문제
// : Suspense로 인해 컴포넌트가 보이거나 사라질 때도 effect가 정상적으로 실행
// - **노출 시**: `useLayoutEffect`의 effect (`componentDidMount`)가 실행
// - **가려질 때**: `useLayoutEffect`의 cleanUp (`componentWillUnmount`)이 실행

// -- 쓰로틀링 추가
// : Suspense 내에 쓰로틀링이 추가되어, 중첩된 Suspense의 fallback이 있다면 자동으로 쓰로틀링 되어 최대한 자연스럽게 보여줌
