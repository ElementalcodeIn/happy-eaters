import React, { useState } from "react";
import { FaChevronLeft, FaChartBar, FaBalanceScale, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Height() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("height");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-purple-400 px-4 py-4 flex items-center shadow">
        <button onClick={() => navigate('/')} className="mr-2 text-white">
          <FaChevronLeft size={22} />
        </button>
        <span className="inline-flex items-center mr-2">
          <FaBalanceScale className="text-white w-7 h-7" />
        </span>
        <span className="text-white font-bold text-lg">Growth Tracker</span>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 mb-6 gap-4">
        <button onClick={() => setActiveTab("weight")}>
          <div className={`bg-white rounded-xl shadow px-8 py-2 font-semibold flex items-center gap-2 transition-all duration-200
            ${activeTab === "weight" ? "border-2 border-red-200 text-red-500" : "text-gray-400"}`}>
            <FaBalanceScale className={`w-6 h-6 ${activeTab === "weight" ? "text-red-500" : "opacity-50"}`} />
            Weight
          </div>
        </button>
        <button onClick={() => setActiveTab("height")}>
          <div className={`bg-white rounded-xl shadow px-8 py-2 font-semibold flex items-center gap-2 transition-all duration-200
            ${activeTab === "height" ? "border-2 border-red-200 text-red-500" : "text-gray-400"}`}>
            <FaChartBar className={`w-6 h-6 ${activeTab === "height" ? "text-red-500" : "opacity-50"}`} />
            Height
          </div>
        </button>
      </div>

      {/* Conditional Content */}
      {activeTab === "height" ? (
        <>
          <div className="flex flex-col items-center mt-2">
            <FaChartBar className="text-purple-400 w-40 h-40 mb-2" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Track Height</h2>
            <p className="text-center text-gray-500 mb-6 px-6">
              You haven't added any height data yet add them to see more insights
            </p>
          </div>
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
          <div className="fixed bottom-4 left-0 w-full flex justify-center">
            <button className="bg-purple-400 text-white rounded-full px-16 py-3 font-semibold text-lg shadow transition-all duration-200 hover:bg-purple-500">
              Add height
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center mt-2">
          <FaBalanceScale className="text-purple-400 w-40 h-40 mb-2" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Track Weight</h2>
          <p className="text-center text-gray-500 mb-6 px-6">
            You haven't added any weight data yet add them to see more insights
          </p>
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
          <div className="fixed bottom-4 left-0 w-full flex justify-center">
            <button className="bg-purple-400 text-white rounded-full px-16 py-3 font-semibold text-lg shadow transition-all duration-200 hover:bg-purple-500">
              Add weight
            </button>
          </div>
        </div>
      )}
    </div>
  );
}