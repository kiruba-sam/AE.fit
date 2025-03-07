import { useState } from "react";
import { motion } from "framer-motion";

const workoutSplits = {
  "male-3": "Full Body 3-Day Split",
  "male-4": "Upper-Lower 4-Day Split",
  "male-5": "Bro Split 5-Day Routine",
  "male-6": "Push Pull Legs 6-Day Split",
  "male-7": "Advanced Bodybuilding 7-Day",
  "female-3": "Full Body 3-Day for Women",
  "female-4": "Upper-Lower 4-Day for Women",
  "female-5": "Glutes & Core Focus 5-Day",
  "female-6": "Functional Strength 6-Day",
  "female-7": "Endurance & Strength 7-Day",
};

export default function WorkoutSplitModal({ onClose, onSelect }) {
  const [gender, setGender] = useState("male");
  const [days, setDays] = useState(3);

  const handleSubmit = () => {
    const key = `${gender}-${days}`;
    onSelect(gender, days);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-3xl shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Select Your Workout Plan
        </h2>

        <div className="mt-4 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              gender === "male" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              gender === "female" ? "bg-pink-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Workout Days per Week</label>
          <select
            className="w-full mt-1 p-2 border rounded-lg"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            {[3, 4, 5, 6, 7].map((day) => (
              <option key={day} value={day}>
                {day} Days
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Get My Workout Plan
        </button>
      </motion.div>
    </div>
  );
}
