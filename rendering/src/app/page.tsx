export default function Home() {
  // 환경
  const os = require('os')
  console.log(os.hostname())

  // 서버 컴포넌트
  console.log('너 혹시 서버 컴포넌트야? 어디 있는데?')

  return <div className="p-8 m-4">안녕하세요. next.js 입니다</div>
}
