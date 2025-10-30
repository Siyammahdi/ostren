import './App.css'
import Footer from './components/Footer'
import TopBar from './components/Home/TopBar'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
<div>
<TopBar />
<Navbar />
<Router>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
    <Footer />
</div>

  )
}

export default App
