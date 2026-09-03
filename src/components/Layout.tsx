import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../cart'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[13px] tracking-[0.18em] uppercase ${
    isActive ? 'text-white' : 'text-[#8a8a8a] hover:text-white'
  }`

export function Layout() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-svh bg-black text-[#f4f4f4]">
      <header className="sticky top-0 z-20 border-b border-[#2c2c2c] bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="font-display text-2xl tracking-wide text-white">
            Sport Black
          </NavLink>
          <nav className="hidden items-center gap-10 md:flex">
            <NavLink to="/catalog" className={linkClass}>
              Каталог
            </NavLink>
            <NavLink to="/cart" className={linkClass}>
              Кошик{count > 0 ? ` · ${count}` : ''}
            </NavLink>
          </nav>
          <button
            type="button"
            className="text-[13px] tracking-[0.18em] uppercase text-[#8a8a8a] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? 'Закрити' : 'Меню'}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-[#2c2c2c] px-6 py-5 md:hidden">
            <NavLink to="/catalog" className={linkClass} onClick={() => setOpen(false)}>
              Каталог
            </NavLink>
            <NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>
              Кошик{count > 0 ? ` · ${count}` : ''}
            </NavLink>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-24 border-t border-[#2c2c2c]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-[#8a8a8a] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-white">Sport Black</p>
          <p className="text-sm tracking-wide">© Sport Black</p>
        </div>
      </footer>
    </div>
  )
}
