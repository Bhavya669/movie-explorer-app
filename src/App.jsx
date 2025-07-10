import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎬 Movie Explorer</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className="w-full max-w-md p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Dummy movie cards */}
        <div className="bg-gray-800 p-4 rounded">
          <div className="h-40 bg-gray-700 mb-2 rounded"></div>
          <h2 className="text-lg font-semibold">Movie Title 1</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <div className="h-40 bg-gray-700 mb-2 rounded"></div>
          <h2 className="text-lg font-semibold">Movie Title 2</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <div className="h-40 bg-gray-700 mb-2 rounded"></div>
          <h2 className="text-lg font-semibold">Movie Title 3</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <div className="h-40 bg-gray-700 mb-2 rounded"></div>
          <h2 className="text-lg font-semibold">Movie Title 4</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
