import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ully" element={<HomePage waNumber="6281283822163" agentName="Ully" />} />
        <Route path="/armiyati" element={<HomePage waNumber="6281369459077" agentName="Armiyati" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App