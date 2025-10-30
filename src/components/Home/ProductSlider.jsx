import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const items = [
  { title: 'Pomegranate Mint', image: '/product.png' },
  { title: 'BLACKBERRY', image: '/product.png' },
  { title: 'GRAPEFRUIT', image: '/product.png' },
  { title: 'ICE TEA PEACH', image: '/product.png' },
  { title: 'BERRY BOOST', image: '/product.png' },
  { title: 'ORANGE', image: '/product.png' },
  { title: 'LEMON LIME', image: '/product.png' },
]

export default function ProductSlider() {
  const swiperRef = useRef(null)
  const [index, setIndex] = useState(0)

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] sm:text-[34px] font-medium text-center tracking-tight text-neutral-900">Your favourite flavours</h2>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => swiperRef.current?.slidePrev()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">‹</button>
            <button onClick={() => swiperRef.current?.slideNext()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">›</button>
          </div>
        </div>

        <div className="mt-6 relative">

          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setIndex((s.realIndex ?? 0) % items.length)}
            loop={true}
            loopedSlides={items.length}
            loopAdditionalSlides={items.length}
            loopedSlidesLimit={false}
            loopPreventsSliding={false}
            watchSlidesProgress={true}
            slidesPerGroup={1}
            speed={500}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            className="overflow-visible"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <div className="h-48 sm:h-56 lg:h-72 w-full max-w-[280px] mx-auto overflow-hidden rounded-xl bg-white">
                    <img src="/single-product.png" alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="text-sm font-medium tracking-wide text-neutral-900">
                    {item.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile buttons */}
          <div className="mt-6 flex md:hidden items-center justify-center gap-3">
            <button onClick={() => swiperRef.current?.slidePrev()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">‹</button>
            <button onClick={() => swiperRef.current?.slideNext()} className="h-9 w-9 grid place-content-center rounded-full border border-neutral-300 text-lg">›</button>
          </div>
        </div>
      </div>
    </section>
  )
}
