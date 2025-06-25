import React, { useState } from "react";
import { FaChevronLeft, FaChartBar, FaBalanceScale, FaThumbsUp, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GrowthTracker() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("weight");
  const [showModal, setShowModal] = useState(false);
  const [showHeightModal, setShowHeightModal] = useState(false);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [childHeight, setChildHeight] = useState("");
  const [fatherHeight, setFatherHeight] = useState("");
  const [motherHeight, setMotherHeight] = useState("");

  function formatDisplayDate(dateStr) {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-purple-400 px-4 py-4 flex items-center">
        <button onClick={() => navigate('/')} className="mr-2 text-white cursor-pointer">
          <FaChevronLeft size={22} />
        </button>
        <img src="/growth-baby.png" alt="Growth" className="w-7 h-7 mr-2" />
        <span className="text-white font-bold text-lg">Growth Tracker</span>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 mb-6 gap-4">
        <button onClick={() => setActiveTab("weight")}>
          <div className={`bg-white rounded-xl shadow px-8 py-2 font-semibold flex items-center gap-2
            ${activeTab === "weight" ? "border-2 border-red-200 text-red-500" : "text-gray-400"}`}>
            <FaBalanceScale className={`w-6 h-6 ${activeTab === "weight" ? "text-red-500" : "opacity-50"}`} />
            Weight
          </div>
        </button>
        <button onClick={() => setActiveTab("height")}>
          <div className={`bg-white rounded-xl shadow px-8 py-2 font-semibold flex items-center gap-2
            ${activeTab === "height" ? "border-2 border-red-200 text-red-500" : "text-gray-400"}`}>
            <FaChartBar className={`w-6 h-6 ${activeTab === "height" ? "text-red-500" : "opacity-50"}`} />
            Height
          </div>
        </button>
      </div>

      {/* Conditional Content */}
      {activeTab === "weight" ? (
        <>
          {/* Weight Main Content */}
          <div className="flex flex-col items-center mt-2">
            <img src="/babytrack.jpeg" alt="Baby on scale" className="w-40 h-40 mb-2" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Track Weight</h2>
            <p className="text-center text-gray-500 mb-6 px-6">
              You haven't added any weight data yet add them to see more insights
            </p>
          </div>
          {/* Weight Perks */}
          <div className="px-6">
            <h3 className="font-bold text-lg text-blue-900 mb-3 text-center">Top perks of adding weight data</h3>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="bg-blue-100 rounded-full p-3 mb-2">
                  <FaChartBar className="text-blue-500" size={32} />
                </span>
                <div className="font-bold text-blue-900">Weight Comparison</div>
                <div className="text-gray-500 text-sm text-center">Intuitive chart with weight data</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-red-100 rounded-full p-3 mb-2">
                  <FaBalanceScale className="text-red-400" size={32} />
                </span>
                <div className="font-bold text-blue-900">Track growth by weight history</div>
                <div className="text-gray-500 text-sm text-center">Recall your growth memories</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-yellow-100 rounded-full p-3 mb-2">
                  <FaThumbsUp className="text-yellow-500" size={32} />
                </span>
                <div className="font-bold text-blue-900">View Recommendations</div>
                <div className="text-gray-500 text-sm text-center">Dishes and article that helps growth</div>
              </div>
            </div>
          </div>
          {/* Add Weight Button */}
          <div className="fixed bottom-4 left-0 w-full flex justify-center">
            <button
              className="bg-purple-400 text-white rounded-full px-16 py-3 font-semibold text-lg shadow"
              onClick={() => setShowModal(true)}
            >
              Add weight
            </button>
          </div>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 w-[95vw] max-w-md shadow-lg relative">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                  
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold text-blue-900 mb-1">Add Weight</h2>
                <p className="text-gray-700 mb-4">Enter the weight details here</p>
                <div className="mb-3">
                  <label className="font-bold text-blue-900 block mb-1">Date</label>
                  <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3">
                    <input
                      type="date"
                      className="bg-transparent outline-none flex-1 text-blue-900 font-semibold"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      style={{ minWidth: 0 }}
                    />  
                  </div>
                </div>
                <div className="mb-6">
                  <label className="font-bold text-blue-900 block mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none font-semibold text-blue-900"
                    placeholder="Enter Weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    className="flex-1 border-2 border-purple-300 text-purple-500 rounded-full py-2 font-semibold text-lg"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-1 bg-purple-400 text-white rounded-full py-2 font-semibold text-lg"
                    onClick={() => {
                      
                      setShowModal(false);
                    }}
                  >
                    Save Weight
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Height Main Content */}
          <div className="flex flex-col items-center mt-2">
            <FaChartBar className="text-purple-400 w-40 h-40 mb-2" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Track Height</h2>
            <p className="text-center text-gray-500 mb-6 px-6">
              You haven't added any height data yet add them to see more insights
            </p>
          </div>
          {/* Height Perks */}
          <div className="px-6">
            <h3 className="font-bold text-lg text-blue-900 mb-3 text-center">Top perks of adding height data</h3>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="bg-blue-100 rounded-full p-3 mb-2">
                  <FaChartBar className="text-blue-500" size={32} />
                </span>
                <div className="font-bold text-blue-900">Height Comparison</div>
                <div className="text-gray-500 text-sm text-center">Intuitive chart with height data</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-red-100 rounded-full p-3 mb-2">
                  <FaBalanceScale className="text-red-400" size={32} />
                </span>
                <div className="font-bold text-blue-900">Track growth by height history</div>
                <div className="text-gray-500 text-sm text-center">Recall your growth memories</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-yellow-100 rounded-full p-3 mb-2">
                  <FaThumbsUp className="text-yellow-500" size={32} />
                </span>
                <div className="font-bold text-blue-900">View Recommendations</div>
                <div className="text-gray-500 text-sm text-center">Dishes and article that helps growth</div>
              </div>
            </div>
          </div>
          {/* Add Height Button */}
          <div className="fixed bottom-4 left-0 w-full flex justify-center">
            <button
              className="bg-purple-400 text-white rounded-full px-16 py-3 font-semibold text-lg shadow transition-all duration-200 hover:bg-purple-500"
              onClick={() => setShowHeightModal(true)}
            >
              Add height
            </button>
          </div>
          {/* Height Modal */}
          {showHeightModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 w-[95vw] max-w-md shadow-lg relative">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
                  onClick={() => setShowHeightModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold text-blue-900 mb-1">Add Height</h2>
                <p className="text-gray-700 mb-4">Enter the height details here</p>
                {/* Date */}
                <div className="mb-3">
                  <label className="font-bold text-blue-900 block mb-1">Date</label>
                  <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3">
                    <input
                      type="date"
                      className="bg-transparent outline-none flex-1 text-blue-900 font-semibold"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      style={{ minWidth: 0 }}
                    />
                    <FaRegCalendarAlt className="text-purple-400 text-xl ml-2" />
                  </div>
                </div>
                {/* Child's Height */}
                <div className="mb-3">
                  <label className="font-bold text-blue-900 block mb-1">Child's Height (cm)</label>
                  <input
                    type="number"
                    className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none font-semibold text-blue-900"
                    placeholder="Enter child's Height"
                    value={childHeight}
                    onChange={e => setChildHeight(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                </div>
                {/* Feet to cm info */}
                <div className="mb-3">
                  <div className="bg-blue-50 text-blue-900 text-sm rounded-xl px-4 py-2">
                    <span className="font-semibold">For feet to cm:</span> Multiply by 30.48<br />
                    <span className="text-gray-600">(e.g., 2 feet × 30.48 = 60.96 cm)</span>
                  </div>
                </div>
                {/* Parent's Height */}
                <div className="mb-6">
                  <label className="font-bold text-blue-900 block mb-1">Parent's Height (cm)</label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      className="w-1/2 bg-gray-50 rounded-xl px-4 py-3 outline-none font-semibold text-blue-900"
                      placeholder="Father Height"
                      value={fatherHeight}
                      onChange={e => setFatherHeight(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                    <input
                      type="number"
                      className="w-1/2 bg-gray-50 rounded-xl px-4 py-3 outline-none font-semibold text-blue-900"
                      placeholder="Mother Height"
                      value={motherHeight}
                      onChange={e => setMotherHeight(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-between gap-4">
                  <button
                    className="flex-1 border-2 border-purple-300 text-purple-500 rounded-full py-2 font-semibold text-lg"
                    onClick={() => setShowHeightModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-1 bg-purple-400 text-white rounded-full py-2 font-semibold text-lg"
                    onClick={() => {
                      // Save logic here
                      setShowHeightModal(false);
                    }}
                  >
                    Save height
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}