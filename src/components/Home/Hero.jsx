import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const slides = [
  {
    id: 1,
    title: "HYDRATION + ENERGY",
    subtitle: "With 90-160mg of natural caffeine & vitamins, it's an energy kick that's actually good for you*",
    ctaText: "SHOP NOW",
    ctaSecondary: "Learn More",
    backgroundImage: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&h=600&fit=crop&crop=center",
    gradient: "from-orange-400 via-pink-500 to-red-500"
  },
  {
    id: 2,
    title: "NATURAL INGREDIENTS",
    subtitle: "Zero sugar, zero artificial flavors. Just pure, natural energy that your body loves.",
    ctaText: "EXPLORE FLAVORS",
    ctaSecondary: "View Ingredients",
    backgroundImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&h=600&fit=crop&crop=center",
    gradient: "from-emerald-400 via-teal-500 to-blue-500"
  },
  {
    id: 3,
    title: "PREMIUM QUALITY",
    subtitle: "Crafted with care, designed for the modern lifestyle. Experience the difference.",
    ctaText: "DISCOVER MORE",
    ctaSecondary: "Our Story",
    backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",
    gradient: "from-purple-400 via-pink-500 to-rose-500"
  }
]

export default function Hero() {
  return (
    <section className="relative py-6 lg:py-2 px-4 md:px-8 ">
      <div className="mx-auto max-w-[1600px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination'
          }}
          className="hero-swiper rounded-3xl overflow-hidden"
        >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-[70vh] min-h-[500px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-30`} />
              
              {/* Content overlay */}
              <div className="relative z-10 h-full flex items-center">
                <div className="w-full px-8 sm:px-12 lg:px-16">
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-5 text-white">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs mb-4">
                        <span>New</span>
                        <span className="h-1 w-1 rounded-full bg-white" />
                        <span>Turbo Boost</span>
                      </div>
                      
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg">
                        {slide.subtitle}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <button className="inline-flex h-12 items-center rounded-full bg-white px-8 text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
                          {slide.ctaText}
                        </button>
                        <button className="inline-flex h-12 items-center rounded-full border-2 border-white/60 px-8 text-white font-semibold hover:bg-white/10 transition-colors">
                          {slide.ctaSecondary}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="custom-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2"></div>
      </div>

      <style>{`
        .hero-swiper {
          height: 70vh;
          min-height: 500px;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: white;
          width: 60px;
        }
      `}</style>
    </section>
  )
}
