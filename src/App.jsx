import React, { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      setBmi(null);
      setCategory("Please enter valid inputs.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <div className="p-8 rounded-2xl shadow-lg w-96 border border-purple-500 bg-black/40 backdrop-blur-xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-400 drop-shadow-md mb-6">
          BMI Calculator
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-purple-300">Weight (kg)</label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-purple-300">Height (cm)</label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-lg">
                Your BMI: <span className="font-bold text-pink-400">{bmi}</span>
              </p>
              <p className="text-xl font-semibold text-purple-300">{category}</p>
            </div>
          )}

          {category && !bmi && (
            <p className="text-center mt-4 text-red-400">{category}</p>
          )}
        </div>
      </div>
    </div>
  );
}