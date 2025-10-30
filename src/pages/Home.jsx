import TopBar from '../components/Home/TopBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import ProductSlider from '../components/Home/ProductSlider'
import ProductGrid from '../components/Home/ProductGrid'
import SubscribeBanner from '../components/Home/SubscribeBanner'
import BrandFeature from '../components/Home/BrandFeature'
import Reviews from '../components/Home/Reviews'
import ChallengeBanner from '../components/Home/ChallengeBanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>

      <Hero />
      <ProductGrid />
      <ProductSlider />
      <SubscribeBanner />
      <BrandFeature />
      <Reviews />
      <ChallengeBanner />
      <Footer />
    </>
  )
}
