'use client'

import { rePath, reTag } from '@/server-action'

export default function ButtonContainer() {
  return (
    <div className="Button flex gap-5">
      <button
        onClick={() => {
          rePath()
        }}
      >
        패스 리벨리데이션
      </button>
      <button
        onClick={() => {
          reTag()
        }}
      >
        태그 리벨리데이션
      </button>
    </div>
  )
}
