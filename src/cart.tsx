import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { products } from './data/products'

type CartItem = { id: string; qty: number }

type CartContextValue = {
  items: CartItem[]
  add: (id: string, qty?: number) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
  count: number
  total: number
}

const STORAGE_KEY = 'sport-black-cart'
const CartContext = createContext<CartContextValue | null>(null)

function load(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return parsed.filter((i) => products.some((p) => p.id === i.id && i.qty > 0))
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(load)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const add = (id: string, qty = 1) => {
      setItems((prev) => {
        const found = prev.find((i) => i.id === id)
        if (found) {
          return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
        }
        return [...prev, { id, qty }]
      })
    }
    const setQty = (id: string, qty: number) => {
      setItems((prev) =>
        qty < 1
          ? prev.filter((i) => i.id !== id)
          : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
      )
    }
    const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id))
    const clear = () => setItems([])
    const count = items.reduce((s, i) => s + i.qty, 0)
    const total = items.reduce((s, i) => {
      const p = products.find((x) => x.id === i.id)
      return s + (p ? p.price * i.qty : 0)
    }, 0)
    return { items, add, setQty, remove, clear, count, total }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart outside provider')
  return ctx
}
