import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiStar } from 'react-icons/fi'
import Breadcrumbs from '../components/ProductDetail/Breadcrumbs'
import ProductImageGallery from '../components/ProductDetail/ProductImageGallery'
import ProductBadges from '../components/ProductDetail/ProductBadges'
import ProductAccordion from '../components/ProductDetail/ProductAccordion'
import ProductReviews from '../components/ProductDetail/ProductReviews'

// Helper function to create product data structure
const createProduct = (id, title, tag, info, price, oldPrice, discount, category, description, breadcrumbs, rating = 4.1, reviews = 413) => ({
  id,
  title,
  tag,
  info,
  rating,
  reviews,
  price,
  oldPrice,
  discount,
  category,
  breadcrumbs: breadcrumbs || ['Home', 'All Products', category, title],
  images: ['/product.png', '/product.png', '/product.png', '/product.png'],
  description: description || `${title} - Premium quality product with natural ingredients.`,
  accordionSections: [
    {
      title: 'Best fruit extracts & vitamins',
      content: 'Our products are carefully crafted with premium fruit extracts and essential vitamins. Each item contains natural ingredients sourced from the finest sources, providing you with hydration and nutritional benefits.'
    },
    {
      title: 'How it works',
      content: 'Simply use our product according to the instructions and enjoy instant benefits. Each product is designed for maximum effectiveness and convenience in your daily routine.'
    },
    {
      title: 'Your sustainable alternative',
      content: 'We are committed to sustainability. Our products use minimal packaging, are 100% recyclable, and made with environmental responsibility in mind. By choosing our products, you are making a choice for a better planet.'
    }
  ],
  badges: [
    { icon: '🌿', label: 'With Fruit Extracts' },
    { icon: '🍊', label: 'Valuable Vitamins' },
    { icon: '🍬', label: 'Zero Sugar' },
    { icon: '🔥', label: 'Low-Calorie' },
    { icon: '🌱', label: 'Vegan' },
    { icon: '🇩🇪', label: 'Made in Germany' }
  ],
  shipping: [
    'Free Gift for Orders Above €60',
    'Our standard delivery time is 4-6 business days.',
    'Free shipping!'
  ]
})

// Mock product data - In a real app, this would come from an API or context
const PRODUCT_DATA = {
  'microdrink-bestseller-set': {
    ...createProduct(
      'microdrink-bestseller-set',
      'Microdrink Bestseller Set',
      'BESTSELLER',
      '48 Servings - Vitamins and Zero Sugar',
      '€44.99',
      '€49.96',
      '-10%',
      'Microdrink',
      "Regardless if they're an old flame or a new introduction, our most popular Microdrinks PEACH, PASSION FRUIT, BLACKBERRY, and COLA guarantee to make hearts race. Try them now as part of this exclusive set—it will be love at first sip!",
      ['Home', 'All Products', 'All Flavors', 'Hydration + Vitamins', 'Microdrink Bestseller Set']
    ),
    accordionSections: [
      {
        title: 'Best fruit extracts & vitamins',
        content: 'Our Microdrinks are carefully crafted with premium fruit extracts and essential vitamins. Each cube contains natural ingredients sourced from the finest fruits, providing you with hydration and nutritional benefits in every sip.'
      },
      {
        title: 'How waterdrop® works',
        content: 'Simply drop one cube into your water, watch it dissolve, and enjoy instant hydration with natural flavors. Each cube is designed to dissolve quickly, releasing a burst of flavor and essential vitamins that keep you refreshed throughout the day.'
      },
      {
        title: 'Your sustainable alternative',
        content: 'We are committed to sustainability. Our products use minimal packaging, are 100% recyclable, and made with environmental responsibility in mind. By choosing our Microdrinks, you are making a choice for a better planet.'
      }
    ]
  },
  'turbo-boost-twin-pack': createProduct(
    'turbo-boost-twin-pack',
    'TURBO BOOST Twin Pack',
    'LIMITED TIME ONLY',
    '24 Servings - Natural Caffeine and Zero Sugar',
    '€17,99',
    '€19,98',
    '-10%',
    'Microdrink',
    null,
    null,
    4.3,
    287
  ),
  'neon-energy-bottle-set': createProduct(
    'neon-energy-bottle-set',
    'Neon Energy Bottle Set',
    null,
    '48 Servings - No Sugar - Stainless Steel Bottle',
    '€53,99',
    '€62,88',
    '-14%',
    'Steel Bottles',
    null,
    null,
    4.5,
    521
  ),
  'ultimate-energy-booster-set': createProduct(
    'ultimate-energy-booster-set',
    'Ultimate Energy Booster Set',
    null,
    '38 Servings - Natural Caffeine and Zero Sugar',
    '€34,90',
    '€39,98',
    '-13%',
    'Microenergy',
    null,
    null,
    4.2,
    398
  ),
  'turbo-workout-hydration-set': createProduct(
    'turbo-workout-hydration-set',
    'Turbo Workout Hydration Set',
    null,
    '36 Servings - Electrolytes, Natural Caffeine, Zero Sugar',
    '€25,90',
    '€29,97',
    '-14%',
    'Microsytle',
    null,
    null,
    4.4,
    445
  ),
  'limited-edition-frosted-glass-set': createProduct(
    'limited-edition-frosted-glass-set',
    'Limited Edition Frosted Glass Set',
    'LIMITED EDITION',
    '24 Servings - Zero Sugar - Borosilicate Glass Bottle',
    '€42,90',
    '€49,98',
    '-14%',
    'Glass Bottles',
    null,
    null,
    4.6,
    612
  ),
  // Homepage ProductGrid products
  'fizzy-refreshment-4-1-set': createProduct(
    'fizzy-refreshment-4-1-set',
    'Fizzy Refreshment 4+1 Set',
    'LIMITED TIME ONLY',
    '20 Servings - Zero Sugar - Premium Quality',
    '€35,96',
    '€44,95',
    '-20%',
    'Microdrink',
    null,
    null,
    5.0,
    245
  ),
  'fresh-fizzy-set': createProduct(
    'fresh-fizzy-set',
    'Fresh & Fizzy Set',
    'LIMITED TIME ONLY',
    '18 Servings - Natural Flavors - Zero Sugar',
    '€23,90',
    '€26,97',
    '-11%',
    'Microdrink',
    null,
    null,
    4.5,
    189
  ),
  'ice-tea-peach': createProduct(
    'ice-tea-peach',
    'ICE TEA PEACH',
    'BESTSELLER',
    '12 Servings - Refreshing Peach Flavor - Zero Sugar',
    '€8,99',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.6,
    312
  ),
  'clear-glass': createProduct(
    'clear-glass',
    'Clear Glass',
    null,
    'Premium Borosilicate Glass Bottle - Durable & Elegant',
    '€22,90',
    '€26,90',
    '-15%',
    'Glass Bottles',
    null,
    null,
    4.9,
    456
  ),
  'citrus-zest': createProduct(
    'citrus-zest',
    'Citrus Zest',
    null,
    '12 Servings - Zesty Citrus Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.3,
    178
  ),
  'berry-boost': createProduct(
    'berry-boost',
    'Berry Boost',
    'Bestseller',
    '12 Servings - Mixed Berry Flavor - Vitamin Enriched',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.8,
    423
  ),
  'mango-boost': createProduct(
    'mango-boost',
    'Mango Boost',
    null,
    '12 Servings - Tropical Mango Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.7,
    356
  ),
  'cherry-boost': createProduct(
    'cherry-boost',
    'Cherry Boost',
    null,
    '12 Servings - Sweet Cherry Flavor - Zero Sugar',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.4,
    267
  ),
  'turbo-boost-berry': createProduct(
    'turbo-boost-berry',
    'Turbo Boost Berry',
    'NEW',
    '24 Servings - Berry Flavor - Natural Caffeine & Vitamins',
    '€11,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.9,
    534
  ),
  'turbo-boost-mango': createProduct(
    'turbo-boost-mango',
    'Turbo Boost Mango',
    'NEW',
    '24 Servings - Mango Flavor - Natural Caffeine & Vitamins',
    '€11,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.8,
    487
  ),
  // ProductSlider products
  'pomegranate-mint': createProduct(
    'pomegranate-mint',
    'Pomegranate Mint',
    null,
    '12 Servings - Refreshing Pomegranate & Mint - Zero Sugar',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.5,
    289
  ),
  'blackberry': createProduct(
    'blackberry',
    'BLACKBERRY',
    null,
    '12 Servings - Rich Blackberry Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.6,
    378
  ),
  'grapefruit': createProduct(
    'grapefruit',
    'GRAPEFRUIT',
    null,
    '12 Servings - Tangy Grapefruit Flavor - Vitamin C Enriched',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.4,
    312
  ),
  'orange': createProduct(
    'orange',
    'ORANGE',
    null,
    '12 Servings - Classic Orange Flavor - Vitamin C Boost',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.7,
    445
  ),
  'lemon-lime': createProduct(
    'lemon-lime',
    'LEMON LIME',
    null,
    '12 Servings - Zesty Lemon Lime Flavor - Refreshing',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.5,
    398
  ),
  // Handle duplicate IDs (same products, different instances)
  'fizzy-refreshment-4-1-set-2': createProduct(
    'fizzy-refreshment-4-1-set-2',
    'Fizzy Refreshment 4+1 Set',
    'LIMITED TIME ONLY',
    '20 Servings - Zero Sugar - Premium Quality',
    '€35,96',
    '€44,95',
    '-20%',
    'Microdrink',
    null,
    null,
    5.0,
    245
  ),
  'fresh-fizzy-set-2': createProduct(
    'fresh-fizzy-set-2',
    'Fresh & Fizzy Set',
    'LIMITED TIME ONLY',
    '18 Servings - Natural Flavors - Zero Sugar',
    '€23,90',
    '€26,97',
    '-11%',
    'Microdrink',
    null,
    null,
    4.5,
    189
  ),
  'ice-tea-peach-2': createProduct(
    'ice-tea-peach-2',
    'ICE TEA PEACH',
    'BESTSELLER',
    '12 Servings - Refreshing Peach Flavor - Zero Sugar',
    '€8,99',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.6,
    312
  ),
  'clear-glass-2': createProduct(
    'clear-glass-2',
    'Clear Glass',
    null,
    'Premium Borosilicate Glass Bottle - Durable & Elegant',
    '€22,90',
    '€26,90',
    '-15%',
    'Glass Bottles',
    null,
    null,
    4.9,
    456
  ),
  'citrus-zest-2': createProduct(
    'citrus-zest-2',
    'Citrus Zest',
    null,
    '12 Servings - Zesty Citrus Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.3,
    178
  ),
  'berry-boost-2': createProduct(
    'berry-boost-2',
    'Berry Boost',
    'Bestseller',
    '12 Servings - Mixed Berry Flavor - Vitamin Enriched',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.8,
    423
  ),
  'mango-boost-2': createProduct(
    'mango-boost-2',
    'Mango Boost',
    null,
    '12 Servings - Tropical Mango Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.7,
    356
  ),
  'ice-tea-peach-bestseller': createProduct(
    'ice-tea-peach-bestseller',
    'ICE TEA PEACH',
    'BESTSELLER',
    '12 Servings - Refreshing Peach Flavor - Zero Sugar',
    '€8,99',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.6,
    312
  ),
  'berry-boost-bestseller': createProduct(
    'berry-boost-bestseller',
    'Berry Boost',
    'Bestseller',
    '12 Servings - Mixed Berry Flavor - Vitamin Enriched',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.8,
    423
  ),
  'mango-boost-bestseller': createProduct(
    'mango-boost-bestseller',
    'Mango Boost',
    null,
    '12 Servings - Tropical Mango Flavor - Natural Ingredients',
    '€9,90',
    null,
    null,
    'Microdrink',
    null,
    null,
    4.7,
    356
  ),
  'clear-glass-bestseller': createProduct(
    'clear-glass-bestseller',
    'Clear Glass',
    null,
    'Premium Borosilicate Glass Bottle - Durable & Elegant',
    '€22,90',
    '€26,90',
    '-15%',
    'Glass Bottles',
    null,
    null,
    4.9,
    456
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(0) // First accordion open by default

  const product = PRODUCT_DATA[id]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-neutral-900 text-white rounded-full"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', product.title, quantity)
    // You can integrate with cart context/state management here
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={product.breadcrumbs} />

        {/* Main Content */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Product Images */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductImageGallery images={product.images} tag={product.tag} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Product Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              {product.title}
            </h1>

            {/* Product Info */}
            <p className="text-base text-neutral-600 mb-4">
              {product.info}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const filled = i < Math.floor(product.rating)
                  const half = i === Math.floor(product.rating) && product.rating % 1 >= 0.5
                  return (
                    <FiStar
                      key={i}
                      className={`h-5 w-5 ${
                        filled
                          ? 'fill-amber-400 text-amber-400'
                          : half
                          ? 'fill-amber-200 text-amber-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  )
                })}
              </div>
              <span className="text-base font-semibold text-neutral-900">
                {product.rating}/5
              </span>
              <a
                href="#reviews"
                className="text-sm text-neutral-600 hover:text-neutral-900 underline"
              >
                ({product.reviews} reviews)
              </a>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {product.price}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-xl text-neutral-500 line-through">
                    {product.oldPrice}
                  </span>
                  {product.discount && (
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                      {product.discount}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-8">
              {/* <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium text-neutral-700">Quantity:</label>
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                    <span className="px-4 py-2 min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div> */}
              <button
                onClick={handleAddToCart}
                className="w-full px-8 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-full transition-colors"
              >
                ADD TO CART
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-2 mb-8">
              {product.shipping.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Product Badges */}
            <ProductBadges badges={product.badges} />

            {/* Accordion Sections */}
            <div className="mt-8 border-t border-neutral-200 pt-6">
              {product.accordionSections.map((section, index) => (
                <ProductAccordion
                  key={index}
                  title={index === 0 ? 'Description' : section.title}
                  content={index === 0 ? product.description : section.content}
                  isOpen={openAccordion === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
        

        {/* Reviews Section */}
        <ProductReviews productId={product.id} />
      </div>
    </div>
  )
}

