export type Product = {
  id: number // 제품의 고유 ID
  handle: string // 제품을 식별하기 위한 문자열 핸들 (URL 등)
  availableForSale: boolean // 판매 가능 여부
  isNew: boolean // 새 제품인지 여부
  title: string // 제품 제목
  description: string // 제품 설명
  descriptionHtml: string // HTML 형식의 제품 설명
  options: {
    // 제품의 선택 옵션
    name: string // 옵션 이름 (예: 색상, 사이즈 등)
    values: string[] // 가능한 옵션 값들
  }[]
  price: {
    // 제품 가격 정보
    amount: string // 금액 (숫자 문자열 형태)
    currencyCode: string // 화폐 코드 (예: USD, KRW 등)
  }
  images: string // 이미지 URL
  seo: {
    // SEO 관련 정보
    title: string // SEO 타이틀
    description: string // SEO 설명
  }
  tags: string[] // 제품에 관련된 태그들
  rating: number // 제품 평점
}
