import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { format, startOfWeek, addDays, isToday } from 'date-fns'
import { MdHome } from 'react-icons/md'
import { FaUtensils, FaSearch, FaChartLine } from 'react-icons/fa'

function Meal() {
  const [open, setOpen] = useState(true)
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [weekOffset, setWeekOffset] = useState(0)
  const today = new Date()
  const weekStart = startOfWeek(addDays(today, weekOffset * 7), { weekStartsOn: 0 }) 

  
  const weekDays = Array.from({ length: 7 }).map((_, idx) => {
    const date = addDays(weekStart, idx)
    return {
      day: format(date, 'EEE'), 
      date: format(date, 'd'),  
      isToday: isToday(date),
      fullDate: date,
    }
  })

  return (
     <>
      <div className="bg-purple-400 rounded-b-3xl shadow relative w-full mx-auto mt-0.2 ">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <button
            className="flex items-center"
            onClick={() => setOpen(o => !o)}
          >
            <span className="bg-white text-purple-700 font-bold px-4 py-1 rounded-full shadow mr-2">Today</span>
            {open
              ? <IoIosArrowUp className="text-white text-xl" />
              : <IoIosArrowDown className="text-white text-xl" />}
          </button>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-7 h-7" />
        </div>
        {/* Animated Panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-36 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="bg-white px-4 py-2">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-2">
              <button onClick={() => setWeekOffset(weekOffset - 1)} className="px-2 py-1 text-lg">{'<'}</button>
              <span className="font-semibold">
                {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'MMM d')}
              </span>
              <button onClick={() => setWeekOffset(weekOffset + 1)} className="px-2 py-1 text-lg">{'>'}</button>
            </div>
            {/* Days Row */}
            <div className="flex justify-between">
              {weekDays.map(({ day }) => (
                <div key={day} className="text-gray-700 text-center flex-1">{day}</div>
              ))}
            </div>
            {/* Dates Row */}
            <div className="flex justify-between mt-1">
              {weekDays.map(({ date, isToday, fullDate }, idx) => {
                const dateStr = format(fullDate, 'yyyy-MM-dd')
                const isSelected = selectedDate === dateStr
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`flex-1 text-center focus:outline-none ${
                      isSelected
                        ? 'bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                        : isToday
                        ? 'border border-purple-400 rounded-full w-8 h-8 flex items-center justify-center mx-auto'
                        : ''
                    }`}
                  >
                    {date}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
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
              {/* Bookmark Icon */}
              <svg className="text-gray-400 text-xl" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"/>
              </svg>
            </div>
            <p className="text-gray-500 text-xs mb-2">Snacks, Hotel Friendly + 5 more.</p>
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="clock">⏰</span> 15 mins
              </span>
              <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                <span role="img" aria-label="grains">🌾</span> Grains
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
            {/* Swap Icon */}
            <svg className="mr-1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M19 5l-7 7-7-7"/>
            </svg>
            Swap
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
              {/* Bookmark Icon */}
              <svg className="text-gray-400 text-xl" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"/>
              </svg>
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
            {/* Swap Icon */}
            <svg className="mr-1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M19 5l-7 7-7-7"/>
            </svg>
            Swap
          </button>
        </div>
      </div>

      {/* Snack1 Section */}
      <div className="bg-yellow-50 rounded-2xl mx-3 mb-4 p-3">
        <div className="flex items-center mb-2">
          <img src="/snack1.png" alt="Snack1" className="w-7 h-7 mr-2" />
          <span className="font-bold text-base text-blue-900">Snack1</span>
        </div>
        <div className="bg-white rounded-xl shadow flex items-center p-3 mb-2">
          <img src="/pineapple-sapota.jpg" alt="Pineapple Sapota (Chikoo) Fruit Bowl" className="w-20 h-20 rounded-xl object-cover mr-3" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-blue-900">Pineapple Sapota (Chikoo) Fruit Bowl</h4>
              {/* Bookmark Icon */}
              <svg className="text-gray-400 text-xl" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"/>
              </svg>
            </div>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                <span role="img" aria-label="clock">⏰</span> 15 mins
              </span>
              <span className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                <span role="img" aria-label="fruit">🧃</span> Fruit
              </span>
              <span className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                <span role="img" aria-label="fruit">🧃</span> Fruit
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-blue-900 font-semibold">
            <span role="img" aria-label="baby">👶</span> 3+ babies tried
          </span>
          <button className="flex items-center bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
            {/* Swap Icon */}
            <svg className="mr-1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M19 5l-7 7-7-7"/>
            </svg>
            Swap
          </button>
        </div>
      </div>

      {/* Update Cuisine Preferences */}
      <div className="bg-red-50 rounded-2xl mx-3 mb-3 flex items-center px-4 py-3">
        <img src="/cuisine.png" alt="Cuisine" className="w-8 h-8 mr-3" />
        <span className="font-semibold text-base text-gray-800 flex-1">Update your Cuisine Preferences</span>
        <span className="bg-white rounded-full shadow p-1">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </div>

      {/* Grocery List */}
      <div className="bg-white rounded-2xl mx-3 mb-3 flex items-center px-4 py-3 shadow">
        <img src="/grocery.png" alt="Grocery" className="w-8 h-8 mr-3" />
        <span className="font-semibold text-base text-gray-800 flex-1">Grocery List</span>
        <span className="bg-gray-50 rounded-full shadow p-1">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </div>

      {/* Allergy Question */}
      <div className="bg-gray-100 rounded-2xl mx-3 mb-4 pb-15">
        <div className="flex items-center mb-3">
          <img src="/no-butter-milk.png" alt="No Buttermilk" className="w-16 h-16 rounded-xl object-cover mr-4 bg-white p-2" />
          <span className="font-bold text-base text-blue-900 flex-1">Is prayag allergic to buttermilk?</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-50 rounded-xl py-2 font-semibold text-blue-900 shadow">Yes</button>
          <button className="flex-1 bg-blue-100 rounded-xl py-2 font-semibold text-blue-900 shadow">No</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around items-center shadow-inner border-t">
        <div className="flex flex-col items-center text-purple-600 text-xs">
          <MdHome size={20} />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-xs">
          <FaUtensils size={20} />
          <span>Meal Plan</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-xs">
          <FaSearch size={20} />
          <span>Recipe Search</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-xs">
          <FaChartLine size={20} />
          <span>Growth Plan</span>
        </div>
      </div>

    </>
  )
}

export default Meal