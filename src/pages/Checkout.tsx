import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart'
import { formatPrice } from '../data/products'

export function CheckoutPage() {
  const { items, total, clear } = useCart()
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24">
        <h1 className="font-display text-5xl text-white">Заявку прийнято</h1>
        <p className="mt-6 text-sm leading-relaxed text-[#8a8a8a]">
          Дані нікуди не відправлені. Це демонстраційне оформлення.
        </p>
        <Link
          to="/catalog"
          className="mt-10 inline-flex bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
        >
          Каталог
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[#8a8a8a]">Кошик порожній.</p>
        <Link to="/catalog" className="mt-6 inline-block text-white underline">
          До каталогу
        </Link>
      </div>
    )
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    clear()
    setDone(true)
  }

  const field =
    'w-full border border-[#2c2c2c] bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-[#5a5a5a] focus:border-[#8a8a8a]'

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-display text-5xl text-white">Оформити замовлення</h1>
      <p className="mt-4 text-sm text-[#8a8a8a]">Разом {formatPrice(total)}</p>
      <form className="mt-12 flex flex-col gap-5" onSubmit={onSubmit}>
        <label className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a8a]">
          Ім’я
          <input name="name" required className={`mt-2 ${field}`} />
        </label>
        <label className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a8a]">
          Телефон
          <input name="phone" required className={`mt-2 ${field}`} />
        </label>
        <label className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a8a]">
          Місто
          <input name="city" className={`mt-2 ${field}`} placeholder="Україна" />
        </label>
        <label className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a8a]">
          Коментар
          <textarea name="note" rows={4} className={`mt-2 resize-none ${field}`} />
        </label>
        <button
          type="submit"
          className="mt-4 bg-white px-8 py-3 text-[12px] tracking-[0.22em] uppercase text-black"
        >
          Надіслати заявку
        </button>
      </form>
    </div>
  )
}
