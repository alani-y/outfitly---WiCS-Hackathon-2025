import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Homepage = () => {
  return (
    <div className="container mx-auto p-8 text-center bg-pink-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-2 text-pink-800">What Are You Looking For?</h1>
      <h2 className="text-2xl mb-8 text-gray-600">Dress Better, Stress Less</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-800">An Outfit For A...</h3>
        <p className="text-lg text-gray-700">any event!</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Link to="/style" className="border-2 border-pink-800 p-6 rounded-lg text-center shadow-lg bg-white hover:shadow-xl transition w-64 h-40 flex flex-col justify-center items-center">
          <img src="/images/style.jpg" alt="Style" className="w-full h-24 object-cover rounded" />
          <h3 className="text-lg font-medium text-pink-800 mt-2">Style</h3>
          <p className="text-gray-700">Find an Outfit for a Style</p>
        </Link>

        <Link to="/colorpalette" className="border-2 border-pink-800 p-6 rounded-lg text-center shadow-lg bg-white hover:shadow-xl transition w-64 h-40 flex flex-col justify-center items-center">
          <img src="/images/palette.jpg" alt="Palette" className="w-full h-24 object-cover rounded" />
          <h3 className="text-lg font-medium text-pink-800 mt-2">Palette</h3>
          <p className="text-gray-700">Find an Outfit for a Palette</p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
