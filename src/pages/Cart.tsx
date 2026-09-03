import { Link } from 'react-router-dom'
import { useCart } from '../cart'
import { BallVisual } from '../components/BallVisual'
import { formatPrice, getProduct } from '../data/products'

export function CartPage() {
  const { items, setQty, remove, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="font-display text-5xl text-white">Кошик</h1>
        <p className="mt-6 text-[#8a8a8a]">Порожньо.</p>
        <Link
          to="/catalog"
          className="mt-10 inline-flex bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
        >
          Каталог
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-5xl text-white">Кошик</h1>
      <ul className="mt-12 divide-y divide-[#2c2c2c] border-y border-[#2c2c2c]">
        {items.map((item) => {
          const p = getProduct(item.id)
          if (!p) return null
          return (
            <li key={item.id} className="grid grid-cols-[72px_1fr] gap-5 py-6 sm:grid-cols-[96px_1fr_auto]">
              <BallVisual category={p.category} className="h-[72px] sm:h-[96px]" />
              <div>
                <p className="font-display text-2xl text-white">{p.name}</p>
                <p className="mt-1 text-sm text-[#8a8a8a]">{formatPrice(p.price)}</p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <button
                    type="button"
                    className="text-[#8a8a8a]"
                    onClick={() => setQty(item.id, item.qty - 1)}
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    type="button"
                    className="text-[#8a8a8a]"
                    onClick={() => setQty(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="ml-4 text-[12px] tracking-[0.14em] uppercase text-[#8a8a8a]"
                    onClick={() => remove(item.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
              <p className="hidden text-right text-white sm:block">
                {formatPrice(p.price * item.qty)}
              </p>
            </li>
          )
        })}
      </ul>
      <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-lg text-white">Разом {formatPrice(total)}</p>
        <Link
          to="/checkout"
          className="bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
        >
          Оформити замовлення
        </Link>
      </div>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#8a8a8a]">
        Доставка по Україні. Після заявки менеджер не телефонує — це демо без
        відправки даних.
      </p>
    </div>
  )
}
