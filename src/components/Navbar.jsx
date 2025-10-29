import { useState } from 'react'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import CartDrawer from './CartDrawer'
import NavMegaDrawer from './NavMegaDrawer'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [hoverKey, setHoverKey] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Featured', href: '#' },
    { label: 'Flavours', href: '#' },
    { label: 'Bottles & More', href: '#' },
    { label: 'Learn More', href: '#' }
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200" onMouseLeave={() => setMenuOpen(false)}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center ">
              <div className='w-10 h-10'><img src="/ostren.png" alt="" /></div>
              <span className="font-semibold text-2xl tracking-tight text-neutral-900 -ml-1 ">stren</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors font-medium" 
                  href={item.href}
                  onMouseEnter={() => { setHoverKey(item.label); setMenuOpen(true); }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="h-9 w-9 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50 transition-colors">
                <FiUser className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50 transition-colors">
                <FiSearch className="h-4 w-4" />
              </button>
              <button onClick={() => setCartOpen(true)} className="h-9 w-9 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50 transition-colors relative">
                <FiShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 text-xs text-white flex items-center justify-center">0</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden h-10 w-10 grid place-content-center rounded-md border border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              <span className="sr-only">Toggle menu</span>
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mega drawer (desktop) */}
        <div className="hidden lg:block">
          <NavMegaDrawer open={menuOpen} active={hoverKey} onClose={() => setMenuOpen(false)} />
        </div>

        {/* Mobile menu with transition */}
        <div aria-hidden={!open} className={`lg:hidden transition-all duration-300 ease-out ${open ? 'opacity-100 translate-y-0 max-h-[480px] mt-4' : 'opacity-0 -translate-y-2 max-h-0'} `}>
          <div className={`overflow-hidden border-t border-neutral-200 ${open ? 'pt-4 pb-4' : 'pt-0 pb-0'}`}>
            <nav className="grid gap-2 text-sm text-neutral-700">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  className="px-3 py-2 rounded-md hover:bg-neutral-50 font-medium" 
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <button className="h-10 w-10 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50">
                <FiUser className="h-4 w-4" />
              </button>
              <button className="h-10 w-10 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50">
                <FiSearch className="h-4 w-4" />
              </button>
              <button onClick={() => setCartOpen(true)} className="h-10 w-10 rounded-full border border-neutral-300 grid place-content-center hover:bg-neutral-50 relative">
                <FiShoppingCart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 text-xs text-white flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}