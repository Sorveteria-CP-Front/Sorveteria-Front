import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Error from './pages/Error'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.8),_rgba(255,255,255,1)_38%,_rgba(252,231,243,0.9)_100%)] text-slate-800">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sorvetes" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
