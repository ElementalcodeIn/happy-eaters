import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GrowthApp from './pages/Home'
import Setting from './pages/Setting'
import Profile from './pages/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<GrowthApp/>} />
      <Route path="/setting" element={<Setting/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  )
}

export default App
