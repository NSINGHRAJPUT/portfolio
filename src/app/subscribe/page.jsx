import React from 'react';

const Subscribe = () => {
  return (
    <div className=" p-10 rounded-md w-[95%] bg-gray-800 mt-10">
      <h2 className="text-white text-4xl font-bold mb-5">Subscribe to My Newsletter</h2>
      <form className="flex flex-col md:flex-row items-center md:space-x-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-md text-blue-900"
        />
        <button
          type="submit"
          className="mt-5 md:mt-0 bg-white text-green-900 p-3 rounded-md font-bold hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
