import { Link } from 'react-router-dom'
import { BallVisual } from '../components/BallVisual'
import { CATEGORIES, formatPrice, products } from '../data/products'

const featured = products.filter((_, i) => i % 3 === 0).slice(0, 4)

export function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <p className="text-[12px] tracking-[0.28em] uppercase text-[#8a8a8a]">
          Магазин м’ячів
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
          Чорне поле.
          <br />
          Точний м’яч.
        </h1>
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[#8a8a8a]">
          Демо-каталог. Доставка по Україні. Оплата при оформленні заявки — без
          онлайн-платежу.
        </p>
        <Link
          to="/catalog"
          className="mt-12 inline-flex bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
        >
          Каталог
        </Link>
      </section>

      <section className="border-y border-[#2c2c2c]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-5">
          {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
            <Link
              key={c.id}
              to={`/catalog?cat=${c.id}`}
              className="border-[#2c2c2c] px-6 py-8 text-[12px] tracking-[0.2em] uppercase text-[#8a8a8a] hover:text-white md:border-r md:last:border-r-0"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl text-white">Вибране</h2>
        <div className="mt-10 grid gap-px bg-[#2c2c2c] sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="bg-black">
              <BallVisual category={p.category} />
              <div className="border-t border-[#2c2c2c] px-5 py-5">
                <p className="text-[12px] tracking-[0.16em] uppercase text-[#8a8a8a]">
                  {p.name}
                </p>
                <p className="mt-2 text-sm text-white">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
