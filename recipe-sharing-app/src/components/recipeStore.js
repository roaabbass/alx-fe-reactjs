import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => set(state => {
    const searchTerm = term.toLowerCase();
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm)
    );
    return { searchTerm, filteredRecipes };
  }),

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    const filteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes };
  }),

  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    const filteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes };
  }),

  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const filteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes };
  }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;