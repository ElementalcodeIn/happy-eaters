import { FaCog, FaCrown, FaUtensils, FaBullseye, FaHeadset, FaGlobe, FaInstagram, FaStar, FaFileContract, FaFileAlt, FaEdit, FaSync } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function Setting() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-8 px-0 md:px-8">
      {/* Header */}
      <div className="flex items-center bg-purple-300 px-4 md:px-12 py-3 rounded-b-3xl shadow max-w-2xl mx-auto">
        <button className="mr-3 text-purple-700 text-2xl"></button>
        <h2 className="flex-1 text-lg md:text-2xl font-bold text-purple-900 text-center">Account Settings</h2>
        <span className="w-8" /> 
      </div>

      {/* Profile Card */}
      <div className="bg-white mx-4 md:mx-auto mt-4 rounded-2xl shadow-lg flex items-center p-4 md:p-8 relative z-10 max-w-2xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
          alt="avatar"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-purple-200"
        />
        <div className="ml-4 flex-1">
          <div className="flex items-center">
            <span className="font-semibold text-lg md:text-xl text-gray-800">{name}</span>
            <button onClick={() => navigate('/profile')} className="ml-2 text-purple-500 hover:text-purple-700">
              <FaEdit />
            </button>
          </div>
          <div className="text-gray-500 text-sm md:text-base">8 months</div>
        </div>
        <button className="text-purple-500 hover:text-purple-700 text-xl md:text-2xl">
          <FaSync />
        </button>
      </div>

      {/* Sections */}
      <div className="mt-6 mx-4 md:mx-auto space-y-6 max-w-2xl">
        {/* Accounts */}
        <SectionTitle>Accounts</SectionTitle>
        <MenuItem icon={<FaCog className="text-purple-500" />} label="Account Settings" />
        <MenuItem icon={<FaCrown className="text-yellow-500" />} label="Manage Subscriptions" />

        {/* Manage Preferences */}
        <SectionTitle>Manage Preferences</SectionTitle>
        <MenuItem icon={<FaUtensils className="text-orange-500" />} label="Preferred Cuisine(s)" />
        <MenuItem icon={<FaBullseye className="text-pink-500" />} label="Update Goal" />

        {/* Help & Support */}
        <SectionTitle>Help & Support</SectionTitle>
        <MenuItem icon={<FaHeadset className="text-blue-500" />} label="Support" />
        <MenuItem icon={<FaGlobe className="text-purple-400" />} label="Explore Babyverse" />

        {/* Social */}
        <SectionTitle>Social</SectionTitle>
        <MenuItem icon={<FaInstagram className="text-pink-600" />} label="Follow on Instagram" />
        <MenuItem icon={<FaStar className="text-yellow-400" />} label="Rate Us" />

        {/* Terms & Policy */}
        <SectionTitle>Terms & Policy</SectionTitle>
        <MenuItem icon={<FaFileContract className="text-blue-400" />} label="Terms of Service" />
        <MenuItem icon={<FaFileAlt className="text-blue-400" />} label="Privacy Policy" />

        {/* Logout*/}
        <SectionTitle>Logout</SectionTitle>
        <MenuItem icon={<FiLogOut className="text-red-600"/>} label="Logout"/>
      </div>
    </div>
  );
}


function SectionTitle({ children }) {
  return (
    <div className="mt-4 mb-1 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">
      {children}
    </div>
  );
}


function MenuItem({ icon, label }) {
  return (
    <button className="w-full flex items-center bg-white py-3 md:py-4 px-3 md:px-6 rounded-xl shadow-sm mb-2 hover:bg-purple-50 transition">
      <span className="text-xl md:text-2xl mr-3">{icon}</span>
      <span className="flex-1 text-gray-800 text-sm md:text-base text-left">{label}</span>
      <span className="text-gray-400 text-lg md:text-xl">&gt;</span>
    </button>
  );
}