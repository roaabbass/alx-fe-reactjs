import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {recipes.map(recipe => (
    <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:shadow-lg hover:scale-105">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
      </div>
    </div>
  ))}
</div>


  );
};

export default HomePage;
s