import React from "react";
import Navigation from "../NavigationBar";
import Bg from "../bg.jpg";

export default function Male6Days() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen relative flex flex-col"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation Bar */}
      <Navigation />

      {/* Centered Content Box */}
      <div className="relative flex flex-col items-center justify-center flex-grow p-6">
        <div className="bg-black/70 text-white p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold">Male 6-Day Workout Plan</h1>
          <p className="mt-4 text-lg">
            Push-pull-legs split repeated twice weekly.
          </p>

          <ul className="list-disc text-left mt-6 space-y-3 px-6">
            <li>
              <strong>Day 1:</strong> Push (Chest, Shoulders, Triceps)
            </li>
            <li>
              <strong>Day 2:</strong> Pull (Back, Biceps)
            </li>
            <li>
              <strong>Day 3:</strong> Legs & Core
            </li>
            <li>
              <strong>Day 4:</strong> Push
            </li>
            <li>
              <strong>Day 5:</strong> Pull
            </li>
            <li>
              <strong>Day 6:</strong> Legs & Core
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
