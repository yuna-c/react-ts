'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useCounterStore } from './store/counterStore'

export default function Home() {
  // 프리패칭
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['counter'],
      queryFn: async () => {
        const response = await fetch('/api/counter')
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
      }
    })
  }, [queryClient])

  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
