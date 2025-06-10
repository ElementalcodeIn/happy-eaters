import { useState, useEffect } from 'react';
import logo from "../assets/logo_cleaned.png"
import img from "../assets/dish.png"
import { FaCrown, FaUtensils, FaSearch, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { PiCirclesFourDuotone, PiArrowSquareRightFill } from "react-icons/pi";
import { MdInfoOutline, MdHome} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function GrowthApp() {
  const [timer, setTimer] = useState(3600);

  const{name} = useUser();
  const navigate =useNavigate();

  const ads = [
    {
      live: true,
      title: "Is your child underweight? Here's what you must know.",
      desc: "Learn the key reasons behind low weight in children and discover practical steps to support their healthy growth.",
      date: "Tuesday, 20 May 2025 • 🕓 4:00 PM • ₹99",
      bonus: "🎁 Free E-Book",
      img: "/expert.png"
    },
    {
      live: false,
      title: "Healthy Eating Habits for Kids",
      desc: "Discover simple strategies to encourage healthy eating habits in your child.",
      date: "Friday, 23 May 2025 • 🕓 5:00 PM • ₹149",
      bonus: "🎁 Free Meal Plan",
      img: "/expert.png"
    },
    {
      live: true,
      title: "Boost Immunity with Nutrition",
      desc: "Explore foods and tips to naturally boost your child's immunity.",
      date: "Sunday, 25 May 2025 • 🕓 11:00 AM • ₹129",
      bonus: "🎁 Free Immunity Guide",
      img: "/expert.png"
    }
  ];

 
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd(prev => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(adInterval);
  }, [ads.length]);

  const formatTime = (t) => {
    const hrs = String(Math.floor(t / 3600)).padStart(2, '0');
    const mins = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
    const secs = String(t % 60).padStart(2, '0');
    return `${hrs} hrs : ${mins} mins : ${secs} secs`;
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-2 md:p-6 lg:p-12 pb-32 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-8 rounded-xl shadow mb-6">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-12 w-12 md:h-16 md:w-16" />
          <div>
            <h2 className="text-lg md:text-2xl font-semibold">Welcome {name}</h2>
            <p className="text-sm md:text-base text-gray-500">8 months</p>
          </div>
        </div>
        <div className="flex space-x-3 text-purple-600 mt-4 md:mt-0">
          <FaCrown size={28} />
          <button onClick={() => navigate('/setting')}>
            <PiCirclesFourDuotone size={28}/>
          </button>
        </div>
      </div>

      {/* Weight Section */}
      <div className="bg-white p-4 md:p-8 rounded-xl shadow flex flex-col md:flex-row items-center justify-between mb-6">
        <div>
          <p className="text-sm md:text-base text-gray-500 flex items-center gap-1">Weight details <MdInfoOutline /></p>
          <p className="text-2xl md:text-4xl font-bold">--.-- kg</p>
        </div>
        <div className="bg-blue-900 text-white p-3 rounded-full mt-4 md:mt-0">
          <FaArrowRight size={28}/>
        </div>
      </div>

      {/* Update Reminder */}
      <div className="text-center text-sm md:text-base text-white bg-purple-600 font-medium rounded-full py-2 mb-6 shadow">
        <button className="cursor-pointer">
          Update every 15 days to track progress.
        </button>
      </div>

      {/* Today's Tasty Pick */}
      <div className="bg-white p-4 md:p-8 rounded-xl shadow flex flex-col md:flex-row items-center mb-6">
        <img src={img} alt="Dish" className="w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-8" />
        <div>
          <h3 className="font-semibold text-lg md:text-xl mb-1">Today's Tasty Pick!</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-2">Most Loved Dishes by Happy Eaters Community</p>
          <h4 className="font-semibold text-base md:text-lg">Chikoo Rice Porridge with Seed Premix</h4>
          <p className="text-xs md:text-sm text-gray-500">Tiffin Friendly | Gut Friendly | Snacks</p>
          <p className="text-xs md:text-sm text-yellow-700 mt-1">⏱ 15 mins • Grains</p>
        </div>
      </div>

      {/* Live Section */}
      <div className="bg-white p-4 md:p-8 rounded-xl shadow mb-8 transition-all duration-500">
        <div className="text-xs md:text-sm mb-1 flex items-center gap-2">
          {ads[currentAd].live && (
            <span className="bg-red-500 text-white px-2 py-0.5 rounded">LIVE</span>
          )}
          <span className="bg-purple-300 text-purple-900 px-2 py-0.5 rounded">Recording Available</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="font-semibold text-base md:text-lg">{ads[currentAd].title}</h4>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{ads[currentAd].desc}</p>
            <div className="text-xs md:text-sm mt-2">📅 {ads[currentAd].date}</div>
            <div className="text-xs md:text-sm text-purple-600">{ads[currentAd].bonus}</div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm mt-4">Join Now</button>
          </div>
          <img src={ads[currentAd].img} alt="Expert" className="h-16 w-16 md:h-24 md:w-24 rounded-full mt-4 md:mt-0" />
        </div>
        <div className="flex justify-center mt-2 space-x-2">
          {ads.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${currentAd === idx ? 'bg-purple-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentAd(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Growth Guide Grid */}
      <div className="mt-8 text-center">
        <h4 className="font-semibold text-lg md:text-xl">Your Daily Growth Guide</h4>
        <p className="text-xs md:text-base text-gray-500 mb-4">Explore key tools for smarter parenting.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Daily Meal Plan */}
          <button onClick={() => navigate('/meal')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">Daily Meal Plan</h4>
            <p className="text-gray-500 mb-3">Check Today's Recipes</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/mealplan.png" alt="Daily Meal Plan" className="w-16 h-16" />
          </button>
          {/* Weight Gain Meals */}
          <button onClick={() => navigate('/weight')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">Weight Gain Meals</h4>
            <p className="text-gray-500 mb-3">High-calorie meal ideas</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/weightgain.png" alt="Weight Gain Meals" className="w-16 h-16" />
          </button>
          {/* Open your Fridge */}
          <button onClick={() => navigate('/fridge')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">Open your Fridge</h4>
            <p className="text-gray-500 mb-3">Use what you have</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/fridge.png" alt="Open your Fridge" className="w-16 h-16" />
          </button>
          {/* Grocery List */}
          <button onClick={() => navigate('/grocery')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">Grocery List</h4>
            <p className="text-gray-500 mb-3">Shop for next week</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/grocery.png" alt="Grocery List" className="w-16 h-16" />
          </button>
          {/* Your baby's Growth */}
          <button onClick={() => navigate('/activity')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">Your baby's Growth</h4>
            <p className="text-gray-500 mb-3">Track baby's progress</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/growth.png" alt="Your baby's Growth" className="w-16 h-16" />
          </button>
          {/* Cookbook */}
          <button onClick={() => navigate('/personalMeal')} className="bg-white rounded-2xl shadow flex flex-col items-center p-4 hover:shadow-lg transition">
            <h4 className="font-bold text-base mb-1">{name}&#39;s cookbook</h4>
            <p className="text-gray-500 mb-3">Track history</p>
            <div className="flex justify-center items-center w-8 h-8 bg-blue-900 rounded mb-3">
              <PiArrowSquareRightFill size={24} className="text-white" />
            </div>
            <img src="/cookbook.png" alt="Cookbook" className="w-16 h-16" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around items-center shadow-inner border-t z-50">
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
    </div>
  );
}
