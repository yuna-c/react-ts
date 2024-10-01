'use client'

import { createContext, useRef, PropsWithChildren } from 'react'
import { useCounterStore } from '../store/counterStore'

export const CounterContext = createContext<typeof useCounterStore | null>(null)

type CounterProviderProps = PropsWithChildren<{}>
export function CounterProvider({ children }: CounterProviderProps) {
  const storeRef = useRef<typeof useCounterStore>()
  if (!storeRef.current) {
    storeRef.current = useCounterStore
  }
  return <CounterContext.Provider value={storeRef.current}>{children}</CounterContext.Provider>
}
