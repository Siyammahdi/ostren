import { useEffect, useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FiInbox } from 'react-icons/fi'
import ProductCard from '../ProductCard'

const categories = [
  { key: 'advent', label: 'Advent Calendar' },
  { key: 'turbo', label: 'NEW: TURBO BOOST' },
  { key: 'bestsellers', label: 'Bestsellers' },
  { key: 'sale', label: 'SALE %' },
]

const allProducts = {
  advent: [
    { title: 'Fizzy Refreshment 4+1 Set', price: '€35,96', oldPrice: '€44,95', tag: 'LIMITED TIME ONLY', image: 'https://images.unsplash.com/photo-1619551734318-0602c65f7d8f?w=800&h=1066&fit=crop&crop=center', rating: 5.0, discount: 20 },
    { title: 'Fresh & Fizzy Set', price: '€23,90', oldPrice: '€26,97', tag: 'LIMITED TIME ONLY', image: 'https://images.unsplash.com/photo-1622484211290-cb5db1f2fd51?w=800&h=1066&fit=crop&crop=center', rating: 4.5, discount: 11 },
    { title: 'ICE TEA PEACH', price: '€8,99', tag: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?w=800&h=1066&fit=crop&crop=center', rating: 4.6 },
    { title: 'Clear Glass', price: '€22,90', oldPrice: '€26,90', image: 'https://images.unsplash.com/photo-1526404800610-2ae3e34a7b88?w=800&h=1066&fit=crop&crop=center', rating: 4.9, discount: 15 },
    { title: 'Citrus Zest', price: '€9,90', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&h=1066&fit=crop&crop=center', rating: 4.3 },
    { title: 'Berry Boost', price: '€9,90', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=1066&fit=crop&crop=center', rating: 4.8 },
    { title: 'Mango Boost', price: '€9,90', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=1066&fit=crop&crop=center', rating: 4.7 },
    { title: 'Cherry Boost', price: '€9,90', image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=800&h=1066&fit=crop&crop=center', rating: 4.4 },
    { title: 'Fizzy Refreshment 4+1 Set', price: '€35,96', oldPrice: '€44,95', tag: 'LIMITED TIME ONLY', image: 'https://images.unsplash.com/photo-1619551734318-0602c65f7d8f?w=800&h=1066&fit=crop&crop=center', rating: 5.0, discount: 20 },
    { title: 'Fresh & Fizzy Set', price: '€23,90', oldPrice: '€26,97', tag: 'LIMITED TIME ONLY', image: 'https://images.unsplash.com/photo-1622484211290-cb5db1f2fd51?w=800&h=1066&fit=crop&crop=center', rating: 4.5, discount: 11 },
    { title: 'ICE TEA PEACH', price: '€8,99', tag: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?w=800&h=1066&fit=crop&crop=center', rating: 4.6 },
    { title: 'Clear Glass', price: '€22,90', oldPrice: '€26,90', image: 'https://images.unsplash.com/photo-1526404800610-2ae3e34a7b88?w=800&h=1066&fit=crop&crop=center', rating: 4.9, discount: 15 },
    { title: 'Citrus Zest', price: '€9,90', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&h=1066&fit=crop&crop=center', rating: 4.3 },
    { title: 'Berry Boost', price: '€9,90', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=1066&fit=crop&crop=center', rating: 4.8 },
    { title: 'Mango Boost', price: '€9,90', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=1066&fit=crop&crop=center', rating: 4.7 },
  ],
  turbo: [
    { title: 'Turbo Boost Berry', price: '€11,90', tag: 'NEW', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=1066&fit=crop&crop=center', rating: 4.9 },
    { title: 'Turbo Boost Mango', price: '€11,90', tag: 'NEW', image: 'https://images.unsplash.com/photo-1502741126161-b048400d0e2c?w=800&h=1066&fit=crop&crop=center', rating: 4.8 },
  ],
  bestsellers: [
    { title: 'ICE TEA PEACH', price: '€8,99', tag: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?w=800&h=1066&fit=crop&crop=center', rating: 4.6 },
    { title: 'Berry Boost', price: '€9,90', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=1066&fit=crop&crop=center', rating: 4.8 },
    { title: 'Mango Boost', price: '€9,90', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=1066&fit=crop&crop=center', rating: 4.7 },
    { title: 'Clear Glass', price: '€22,90', oldPrice: '€26,90', image: 'https://images.unsplash.com/photo-1526404800610-2ae3e34a7b88?w=800&h=1066&fit=crop&crop=center', rating: 4.9, discount: 15 },
  ],
  sale: [],
}

function chunkInto(arr, size) {
  const res = []
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size))
  return res
}

export default function ProductGrid() {
  const [active, setActive] = useState(categories[0].key)
  const [pageIndex, setPageIndex] = useState(0)
  const swiperRef = useRef(null)

  const pages = useMemo(() => chunkInto(allProducts[active] ?? [], 4), [active])

  useEffect(() => {
    setPageIndex(0)
    if (swiperRef.current) swiperRef.current.slideTo(0, 0)
  }, [active, pages.length])

  const progress = pages.length > 0 ? ((pageIndex + 1) / pages.length) * 100 : 0

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[32px] sm:text-[38px] leading-none font-extrabold tracking-tight text-neutral-900 mb-10">Discover our products</h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`rounded-full border px-4 py-2 text-sm ${active === c.key ? 'bg-neutral-900 text-white border-neutral-900' : 'border-neutral-300 text-neutral-900 hover:bg-neutral-50'}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <a href="#" className="hidden lg:inline text-sm font-medium underline underline-offset-4">View All</a>
        </div>

        {pages.length > 0 ? (
          <div className="mt-6">
            <Swiper
              modules={[Navigation]}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => setPageIndex(s.realIndex ?? 0)}
              slidesPerView={1}
              spaceBetween={24}
            >
              {pages.map((page, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {page.map((p) => (
                      <ProductCard key={p.title} {...p} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={() => swiperRef.current?.slidePrev()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">‹</button>
                  <button onClick={() => swiperRef.current?.slideNext()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">›</button>
                </div>
                <div className="text-sm text-neutral-600">
                  <span>{pageIndex + 1}</span> / <span>{pages.length}</span>
                </div>
                <a href="#" className="text-sm font-medium underline underline-offset-4">View All</a>
              </div>

              <div className="mt-4 h-[2px] w-full bg-neutral-200 rounded-full">
                <div className="h-full bg-neutral-900 rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-36 text-neutral-600">
            <div className="text-center">
              <FiInbox className="mx-auto h-20 w-20" />
              <p className="mt-3">No products available in this category right now.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
