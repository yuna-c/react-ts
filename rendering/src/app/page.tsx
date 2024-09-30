import ClientExample from './components/ClientExample'

export default function Home() {
  // 환경
  const os = require('os')
  console.log(os.hostname())

  // 서버 컴포넌트
  console.log('안녕 나는 서버 컴포넌트야❤')

  return (
    <div className="p-8 m-4">
      안녕하세요. next.js 입니다
      <ClientExample />
    </div>
  )
}
