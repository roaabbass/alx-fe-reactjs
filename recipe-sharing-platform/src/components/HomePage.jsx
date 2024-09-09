import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  if (recipes.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>  {/* Wrap the recipe card with Link */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
