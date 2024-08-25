// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:id" render={(props) => (
            <RecipeDetails recipeId={parseInt(props.match.params.id)} />
          )} />
        </Switch>
        <AddRecipeForm />
      </div>
    </Router>
  );
};

export default App;
