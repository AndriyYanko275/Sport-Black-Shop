import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../cart'
import { BallVisual } from '../components/BallVisual'
import { categoryLabel, formatPrice, getProduct } from '../data/products'

export function ProductPage() {
  const { id } = useParams()
  const product = id ? getProduct(id) : undefined
  const { add } = useCart()
  const navigate = useNavigate()

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[#8a8a8a]">Товар не знайдено.</p>
        <Link to="/catalog" className="mt-6 inline-block text-white underline">
          До каталогу
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-0 px-6 py-16 lg:grid-cols-2">
      <BallVisual category={product.category} className="min-h-[320px] lg:min-h-[520px]" />
      <div className="flex flex-col justify-center border border-[#2c2c2c] px-8 py-12 lg:border-l-0">
        <p className="text-[12px] tracking-[0.22em] uppercase text-[#8a8a8a]">
          {categoryLabel(product.category)}
        </p>
        <h1 className="mt-4 font-display text-5xl text-white">{product.name}</h1>
        <p className="mt-6 text-sm leading-relaxed text-[#8a8a8a]">{product.description}</p>
        <dl className="mt-8 grid grid-cols-2 gap-4 text-sm text-[#8a8a8a]">
          <div>
            <dt className="tracking-[0.16em] uppercase">Розмір</dt>
            <dd className="mt-1 text-white">{product.size}</dd>
          </div>
          <div>
            <dt className="tracking-[0.16em] uppercase">Матеріал</dt>
            <dd className="mt-1 text-white">{product.material}</dd>
          </div>
        </dl>
        <p className="mt-10 text-xl text-white">{formatPrice(product.price)}</p>
        <button
          type="button"
          className="mt-8 w-fit bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
          onClick={() => {
            add(product.id)
            navigate('/cart')
          }}
        >
          Додати в кошик
        </button>
      </div>
    </div>
  )
}
