import { useUser } from "../context/UserContext"; 
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdInfoOutline, MdHome} from 'react-icons/md';

export default function Profile() {
  const { name, setName } = useUser(); 
  const [localName, setLocalName] = useState(name || "");
  const [gender, setGender] = useState("Boy");
  const [dob, setDob] = useState("");
  const [premature, setPremature] = useState(false);
  const [weight, setWeight] = useState("0.0");
  const [partnerCode, setPartnerCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName(localName); 
    
  }

  return (
    <div className="min-h-screen bg-purple-200 pb-8">
      {/* Header */}
      <div className="relative bg-purple-400 pb-16 rounded-b-3xl">
        <h2 className="text-center pt-6 text-lg md:text-2xl font-bold text-white">Child Profile</h2>
        <div className="flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-20 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
              alt="avatar"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white mt-24 md:mt-32 rounded-2xl shadow-lg p-4 md:p-8 space-y-5">
        {/* Gender */}
        <div className="flex justify-center mb-2">
          <button
            type="button"
            className={`px-6 py-2 rounded-l-xl border-2 border-purple-400 font-semibold focus:outline-none ${
              gender === "Boy"
                ? "bg-purple-400 text-white"
                : "bg-white text-purple-400"
            }`}
            onClick={() => setGender("Boy")}
          >
            Boy
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-r-xl border-2 border-purple-400 font-semibold focus:outline-none ${
              gender === "Girl"
                ? "bg-purple-400 text-white"
                : "bg-white text-purple-400"
            }`}
            onClick={() => setGender("Girl")}
          >
            Girl
          </button>
        </div>

        {/* Baby's Name */}
        <div>
          <label className="block font-semibold mb-1">Baby's Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Baby's Name"
              value={localName}
              onChange={e => setLocalName(e.target.value)}
              className="w-full border rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <span className="absolute right-3 top-2.5 text-purple-400">
              <FaEdit />
            </span>
          </div>
        </div>

        {/* Baby's DOB */}
        <div>
          <label className="block font-semibold mb-1">Baby's DOB</label>
          <input
            type="date"
            value={dob}
            onChange={e => setDob(e.target.value)}
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Premature Switch */}
        <div className="flex items-center justify-between">
          <label className="font-semibold">Is your baby born prematurely ?</label>
          <input
            type="checkbox"
            checked={premature}
            onChange={() => setPremature(!premature)}
            className="form-checkbox h-5 w-5 text-purple-500"
          />
        </div>

        {/* Info Box */}
        <div className="bg-blue-100 text-xs text-blue-900 rounded-lg p-3 flex items-start">
          <span className="font-bold mr-1 pt-2.5"><MdInfoOutline size={16}/></span>
          <span>
            Choosing your child's age ensures <span className="font-semibold">safe and age appropriate</span> mealplans. We recommend mealplans from 6 months to 8 years.
          </span>
        </div>

        {/* Baby's Weight */}
        <div>
          <label className="block font-semibold mb-1">Baby's Weight (Kg)</label>
          <div className="relative">
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="w-full border rounded-lg py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <span className="absolute right-3 top-2.5 text-purple-400">
              <FaEdit />
            </span>
          </div>
        </div>

        {/* Partner Code */}
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Link Partner code</div>
              <div className="text-xs text-gray-500">Have a code by Happy eater's partner ?</div>
            </div>
            <button
              type="button"
              className="border-2 border-purple-400 text-purple-500 px-4 py-1 rounded-xl font-semibold hover:bg-purple-50"
            >
              Link now
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-purple-400 text-white font-semibold py-3 rounded-full mt-2 text-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}