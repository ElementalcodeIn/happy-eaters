import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GrowthApp from './pages/Home'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Meal from './pages/Meal'
import GrowthTracker from './pages/GrowthTracker'
import Dashboard from './pages/Dashboard' // <-- import Dashboard

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> {/* Show Dashboard on home */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/growth" element={<GrowthTracker />} />
    </Routes>
  )
}

export default App
