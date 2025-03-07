import React, { useState } from "react";
import Navigation from "./NavigationBar";
import { motion } from "framer-motion";
import Bg from "./bg.jpg";

export default function WorkoutSplitPopup({ onClose }) {
  const [gender, setGender] = useState("");
  const [workoutDays, setWorkoutDays] = useState(3);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-xl shadow-lg w-96 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Customize Your Workout Plan
        </h2>

        {/* Gender Selection */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Workout Days Selection */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">
            Days per Week
          </label>
          <select
            value={workoutDays}
            onChange={(e) => setWorkoutDays(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded-md"
          >
            {[3, 4, 5, 6, 7].map((day) => (
              <option key={day} value={day}>
                {day} Days
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Confirm
        </motion.button>
      </motion.div>
    </div>
  );
}
