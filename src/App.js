import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Homepage = () => {
  return (


    <div className="container mx-auto p-8 text-center bg-pink-200 min-h-screen flex flex-col justify-center items-center">
      /*<h1 className="text-5xl font-bold mb-2 text-pink-800">What Are You Looking For?</h1>
      <h2 className="text-2xl mb-8 text-gray-600">Dress Better, Stress Less</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-pink-800">An Outfit For A...</h3>
        <p className="text-lg text-gray-700">any event!</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
          <h3 className="text-lg font-medium">Style</h3>
          <p>Explore different outfit styles</p>
          <Button>This is a Button</Button>

          <h3 className="text-lg font-medium">Palette</h3>
          <p>Match colors for your outfits</p>
      </div>
    </div>
  );
};

export default Homepage;
