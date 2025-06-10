import React, { useState } from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa'
import { PiArrowsClockwiseBold } from 'react-icons/pi'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

function Meal() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selected, setSelected] = useState(new Date())

  // Weekdays and dates for the top bar
  const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const today = new Date()
  const startOfWeek = new Date(selected)
  startOfWeek.setDate(selected.getDate() - selected.getDay())
  const weekDates = Array.from({length: 7}, (_, i) => {
    const d = new Date(startOfWeek)
    d.setDate(startOfWeek.getDate() + i)
    return d
  })

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* Top Bar */}
      <div className="relative bg-purple-400 rounded-b-3xl shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <button
              className="bg-white text-purple-700 font-bold px-4 py-1 rounded-full shadow"
              onClick={() => {
                setSelected(today)
                setShowCalendar(false)
              }}
            >
              Today
            </button>
            <button
              className="ml-1"
              onClick={() => setShowCalendar(v => !v)}
              aria-label="Toggle calendar"
            >
              <IoIosArrowDown className={`text-white text-xl transition-transform ${showCalendar ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <FaWhatsapp className="text-white text-2xl" />
        </div>

        {/* Week Bar */}
        <div className="flex justify-between items-center px-4 pb-2">
          {weekDays.map((d, i) => {
            const date = weekDates[i]
            const isSelected =
              date.toDateString() === selected.toDateString()
            return (
              <div key={d} className="flex flex-col items-center">
                <span className="text-xs text-gray-100">{d}</span>
                <span className={`text-base font-semibold ${isSelected ? 'text-purple-700' : 'text-white'}`}>
                  {date.getDate()}
                </span>
                {isSelected && (
                  <span className="w-7 h-7 bg-white border-2 border-purple-400 rounded-full flex items-center justify-center mt-1 -mb-2">
                    <span className="text-purple-700 font-bold">{date.getDate()}</span>
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Calendar Dropdown */}
        {showCalendar && (
          <div className="absolute left-4 top-16 z-50 bg-white rounded-xl shadow-lg p-2">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={date => {
                if (date) setSelected(date)
                setShowCalendar(false)
              }}
              weekStartsOn={0}
              modifiersClassNames={{
                selected: 'bg-purple-400 text-white rounded-full'
              }}
              styles={{
                caption: { color: '#7c3aed' },
                head_cell: { color: '#7c3aed' }
              }}
            />
          </div>
        )}
      </div>

      {/* Expert Meal Plan Card */}
      <div className="bg-white rounded-2xl shadow flex items-center p-4 mx-3 mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Want Expert-Guided Meal Plans?</h3>
          <p className="text-gray-500 text-sm">Upgrade your meal plan into one made just for you with daily expert guidance</p>
        </div>
        <img
          src="/doctor.png"
          alt="Expert"
          className="w-24 h-24 object-cover rounded-2xl ml-2"
        />
      </div>

      {/* Breakfast Section */}
      <div className="bg-purple-100 rounded-2xl mx-3 mb-4 p-3">
        <div className="flex items-center mb-2">
          <img src="/breakfast.png" alt="Breakfast" className="w-7 h-7 mr-2" />
          <span className="font-bold text-base text-blue-900">Breakfast</span>
        </div>
        <div className="bg-white rounded-xl shadow flex items-center p-3 mb-2">
          <img src="/cashew-halwa.jpg" alt="Cashew Halwa" className="w-20 h-20 rounded-xl object-cover mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-blue-900">Cashew Halwa</h4>
              <FaRegBookmark className="text-gray-400 text-xl" />
            </div>
            <p className="text-gray-500 text-xs mb-2">Snacks, Hotel Friendly + 5 more.</p>
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="clock">⏰</span> 15 mins
              </span>
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="grains">🔔</span> Grains
              </span>
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="nut">🥜</span> Nut
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-blue-900 font-semibold">
            <span role="img" aria-label="baby">👶</span> 52+ babies tried
          </span>
          <button className="flex items-center bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
            <PiArrowsClockwiseBold className="mr-1" /> Swap
          </button>
        </div>
      </div>

      {/* Lunch Section */}
      <div className="bg-pink-100 rounded-2xl mx-3 mb-4 p-3">
        <div className="flex items-center mb-2">
          <img src="/lunch.png" alt="Lunch" className="w-7 h-7 mr-2" />
          <span className="font-bold text-base text-blue-900">Lunch</span>
        </div>
        <div className="bg-white rounded-xl shadow flex items-center p-3 mb-2">
          <img src="/rajma-tikki.jpg" alt="Rajma Tikki" className="w-20 h-20 rounded-xl object-cover mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-blue-900">Rajma Tikki</h4>
              <FaRegBookmark className="text-gray-400 text-xl" />
            </div>
            <p className="text-gray-500 text-xs mb-2">Tiffin Friendly, BLW Friendly + 7 more.</p>
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="clock">⏰</span> 30 mins
              </span>
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="pulses">🫘</span> Pulses
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-blue-900 font-semibold">
            <span role="img" aria-label="baby">👶</span> 107+ babies tried
          </span>
          <button className="flex items-center bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
            <PiArrowsClockwiseBold className="mr-1" /> Swap
          </button>
        </div>
      </div>

      {/* Add More Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-2xl shadow">+</button>
      </div>
    </div>
  )
}

export default Meal