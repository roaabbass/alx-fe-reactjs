import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to manage the form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Run validation checks
    if (!validateForm()) {
      return;
    }

    // Handle successful form submission logic here
    console.log('Form submitted:', { title, ingredients, steps });

    // Optionally clear the form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  // Function to validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // Simple validation checks
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients || ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, separated by commas.';
    }
    if (!steps) newErrors.steps = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>

      {/* Ingredients Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients (separate each by a comma)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
        {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        />
        {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
