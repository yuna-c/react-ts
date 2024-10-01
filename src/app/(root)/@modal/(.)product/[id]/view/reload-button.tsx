'use client'
export default function reloadButton() {
  return (
    <button className="bg-gray-800 text-white px-4 py-2 rounded-md" onClick={() => window.location.reload()}>
      View Detail
    </button>
  )
}
