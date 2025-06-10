import { useState, useEffect } from 'react';
import logo from "../assets/logo_cleaned.png"
import img from "../assets/dish.png"
import { FaCrown, FaUtensils, FaSearch, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { PiCirclesFourDuotone } from "react-icons/pi";
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
    <div className="font-sans bg-gray-100 min-h-screen p-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-12 w-12 " />
          <div>
            <h2 className="text-lg font-semibold">Welcome {name}</h2>
            <p className="text-sm text-gray-500">8 months</p>
          </div>
        </div>
        <div className="flex space-x-3 text-purple-600">
          <FaCrown size={24} />
          <button onClick={() => navigate('/setting')} >
            <PiCirclesFourDuotone size={24}/>
          </button>
        </div>
      </div>


      <div className="bg-white mt-4 p-4 rounded-xl shadow flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 flex items-center gap-1">Weight details <MdInfoOutline /></p>
          <p className="text-2xl font-bold">--.-- kg</p>
        </div>
        <div className="bg-blue-900 text-white p-2 rounded-full">
          <FaArrowRight />
        </div>
      </div>

      <div className="text-center mt-2 text-sm text-white bg-purple-600 font-medium rounded-full ">
        <button className="cursor-pointer">
        Update every 15 days to track progress.
        </button>
      </div>


      <div className="mt-6">
        <h3 className="font-semibold text-sm">Today's Tasty Pick!</h3>
        <p className="text-xs text-gray-500 mb-2">Most Loved Dishes by Happy Eaters Community</p>

        <div className="bg-yellow-50 p-3 rounded-lg flex items-center space-x-3">
          <img src={img} alt="Dish" className="w-16 h-16 " />
          <div>
            <h4 className="font-semibold text-sm">Chikoo Rice Porridge with Seed Premix</h4>
            <p className="text-xs text-gray-500">Tiffin Friendly | Gut Friendly | Snacks</p>
            <p className="text-xs text-yellow-700 mt-1">⏱ 15 mins • Grains</p>
          </div>
        </div>
      </div>


      <div className="text-center mt-2 text-sm text-white bg-purple-600 font-medium rounded-full">
        <button className="cursor-pointer">
        Refreshes in {formatTime(timer)}
        </button>
      </div>


      <div className="mt-6 bg-white p-4 rounded-xl shadow transition-all duration-500">
        <div className="text-xs mb-1">
          {ads[currentAd].live && (
            <span className="bg-red-500 text-white px-2 py-0.5 rounded mr-2">LIVE</span>
          )}
          <span className="bg-purple-300 text-purple-900 px-2 py-0.5 rounded">Recording Available</span>
        </div>
        <h4 className="font-semibold text-sm">{ads[currentAd].title}</h4>
        <p className="text-xs text-gray-500 mt-1">{ads[currentAd].desc}</p>
        <div className="text-xs mt-2">📅 {ads[currentAd].date}</div>
        <div className="text-xs text-purple-600">{ads[currentAd].bonus}</div>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">Join Now</button>
          <img src={ads[currentAd].img} alt="Expert" className="h-12 w-12 rounded-full" />
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


      <div className="mt-8 text-center">
        <h4 className="font-semibold text-sm">Your Daily Growth Guide</h4>
        <p className="text-xs text-gray-500">Explore key tools for smarter parenting.</p>

        <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
          <div className="bg-white p-3 rounded-lg shadow">Daily Meal Plan</div>
          <div className="bg-white p-3 rounded-lg shadow">Weight Gain Meals</div>
          <div className="bg-white p-3 rounded-lg shadow">Growth Plan</div>
        </div>
      </div>


      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around items-center shadow-inner border-t">
        <div className="flex flex-col items-center text-purple-600 text-xs">
          <MdHome size={20} />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-purple-600 text-xs">
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
