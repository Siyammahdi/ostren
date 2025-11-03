import { useState } from "react"
import ShopBanner from "../components/Shop/ShopBanner"
import ShopCategoryTabs from "../components/Shop/ShopCategoryTabs"
import ShopProducts from "../components/Shop/ShopProducts"
import ShopGallerySlider from "../components/Shop/ShopGallerySlider"
import ShopHowItWorks from "../components/Shop/ShopHowItWorks"

const ALL_PRODUCTS = [
  { id: "turbo-boost-twin-pack", title: "TURBO BOOST Twin Pack", price: "€17,99", oldPrice: "€19,98", tag: "LIMITED TIME ONLY", discount: "-10%", image: "/product.png", info: "24 Servings - Natural Caffeine and Zero Sugar", category: "Microdrink" },
  { id: "neon-energy-bottle-set", title: "Neon Energy Bottle Set", price: "€53,99", oldPrice: "€62,88", discount: "-14%", image: "/product.png", info: "48 Servings - No Sugar - Stainless Steel Bottle", category: "Steel Bottles" },
  { id: "ultimate-energy-booster-set", title: "Ultimate Energy Booster Set", price: "€34,90", oldPrice: "€39,98", discount: "-13%", image: "/product.png", info: "38 Servings - Natural Caffeine and Zero Sugar", category: "Microenergy" },
  { id: "turbo-workout-hydration-set", title: "Turbo Workout Hydration Set", price: "€25,90", oldPrice: "€29,97", discount: "-14%", image: "/product.png", info: "36 Servings - Electrolytes, Natural Caffeine, Zero Sugar", category: "Microsytle" },
  { id: "limited-edition-frosted-glass-set", title: "Limited Edition Frosted Glass Set", price: "€42,90", oldPrice: "€49,98", tag: "LIMITED EDITION", discount: "-14%", image: "/product.png", info: "24 Servings - Zero Sugar - Borosilicate Glass Bottle", category: "Glass Bottles" },
]

const CATEGORY_LIST = [
  "All products", "Microdrink", "Microsytle", "Microenergy", "SILA", "Glass Bottles", "Steel Bottles", "Homeware & Accessories", "LUCY", "Gift Card", "Advent"
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All products")
  const [page, setPage] = useState(1)
  const pageSize = 8

  // Filter products
  const filtered = selectedCategory === 'All products'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === selectedCategory)
  // Pagination
  const display = filtered.slice((page-1)*pageSize, page*pageSize)

  // On category change, reset to page 1
  const handleTab = (cat) => {
    setSelectedCategory(cat); setPage(1);
  }

  return (
    <>
      <ShopBanner />
      <ShopCategoryTabs selected={selectedCategory} onSelect={handleTab} />
      <ShopGallerySlider />
      <ShopProducts products={display} page={page} setPage={setPage} pageSize={pageSize} total={filtered.length} />
      <ShopHowItWorks />
    </>
  )
}


