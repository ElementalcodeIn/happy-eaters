import GrowthApp from './Home';
import Meal from './Meal';

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 min-h-screen bg-gray-100">
      {/* Home Section */}
      <div className="w-full lg:w-1/2">
        <GrowthApp />
      </div>
      {/* Meal Section */}
      <div className="w-full lg:w-1/2">
        <Meal />
      </div>
    </div>
  );
}