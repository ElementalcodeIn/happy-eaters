import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GrowthApp from './pages/Home'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Meal from './pages/Meal'
import Weight from './pages/weight'
import Height from './pages/Height'
import GrowthTracker from './pages/GrowthTracker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<GrowthApp/>} />
      <Route path="/setting" element={<Setting/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/meal" element={<Meal/>} />
      <Route path="/weight" element={<Weight/>} />
      <Route path="/height" element={<Height/>} />
      <Route path="/growth" element={<GrowthTracker/>} />

    </Routes>
  )
}

export default App
