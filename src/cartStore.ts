import { Product } from '@/type/product'
import { createStore } from 'zustand'

export type CartProduct = Product & { quantity: number }

export interface CartProps {
  products: CartProduct[]
}

export interface CartState extends CartProps {
  addProduct: (product: CartProduct) => void
  // local에서 삭제 되었기 때문에 useMutation을 통해 delete를 해 주어야 서버 데이터까지 모두 날아감
  removeProduct: (id: number) => void
}

export type CartStore = ReturnType<typeof createCartStore>

export const createCartStore = (initProps?: Partial<CartProps>) => {
  const DEFAULT_PROPS: CartProps = {
    products: []
  }
  // createStore((set) => {배열 반환 ...DEFAULT_PROPS, ...initProps 이니셜라이즈 있을 때 대비 하고, addProduct 데이터 핸들러})
  return createStore<CartState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addProduct: (product: CartProduct) =>
      set((state) => ({
        products: [...state.products, product]
      })),

    // local에서 삭제 되었기 때문에 useMutation을 통해 delete를 해 주어야 서버 데이터까지 모두 날아감
    removeProduct: (id: number) => {
      set((state) => ({
        products: state.products.filter((p) => p.id !== id)
      }))
    }
  }))
}
