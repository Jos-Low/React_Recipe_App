import { Routes, Route } from 'react-router-dom'
import useRecipes from './hooks/useRecipes'
import FeedPage from './pages/FeedPage/FeedPage'
import CreateRecipe from './pages/CreateRecipe/CreateRecipe'
import ViewRecipe from './pages/ViewRecipe/ViewRecipe'
import './App.css'

function App() {
  const { recipes, isLoading, error, addRecipe, getRecipeByIndex } = useRecipes()

  return (
    <Routes>
      <Route
        path="/"
        element={
          <FeedPage
            recipes={recipes}
            isLoading={isLoading}
            error={error}
          />
        }
      />
      <Route
        path="/create"
        element={<CreateRecipe onAddRecipe={addRecipe} />}
      />
      <Route
        path="/recipe/:id"
        element={<ViewRecipe getRecipeByIndex={getRecipeByIndex} />}
      />
    </Routes>
  )
}

export default App