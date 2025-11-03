import './App.css'
import Footer from './components/Footer'
import TopBar from './components/Home/TopBar'
import Navbar from './components/Navbar'
import MobileBottomNav from './components/MobileBottomNav'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Navbar />
        <SmoothScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  )
}

export default App
