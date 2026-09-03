import { Link, useSearchParams } from 'react-router-dom'
import { BallVisual } from '../components/BallVisual'
import {
  CATEGORIES,
  categoryLabel,
  formatPrice,
  products,
} from '../data/products'
import type { SportCategory } from '../types'

export function CatalogPage() {
  const [params, setParams] = useSearchParams()
  const cat = (params.get('cat') ?? 'all') as SportCategory | 'all'
  const list =
    cat === 'all' ? products : products.filter((p) => p.category === cat)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-[12px] tracking-[0.28em] uppercase text-[#8a8a8a]">Каталог</p>
      <h1 className="mt-4 font-display text-5xl text-white">М’ячі</h1>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              if (c.id === 'all') setParams({})
              else setParams({ cat: c.id })
            }}
            className={`text-[12px] tracking-[0.18em] uppercase ${
              cat === c.id ? 'text-white' : 'text-[#8a8a8a] hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-px bg-[#2c2c2c] sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="bg-black">
            <BallVisual category={p.category} />
            <div className="border-t border-[#2c2c2c] px-6 py-6">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8a8a]">
                {categoryLabel(p.category)} · {p.size}
              </p>
              <h2 className="mt-2 font-display text-2xl text-white">{p.name}</h2>
              <p className="mt-3 text-sm text-[#8a8a8a]">{formatPrice(p.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
