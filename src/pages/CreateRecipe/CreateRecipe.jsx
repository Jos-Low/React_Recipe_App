import { useNavigate } from 'react-router-dom'
import RecipeForm from '../../components/recipe/RecipeForm/RecipeForm'
import './CreateRecipe.css'

export default function CreateRecipe({ onAddRecipe }) {
  const navigate = useNavigate()

  const handleSubmit = (recipe) => {
    console.log('Recipe submitted:', recipe)
    
    if (onAddRecipe) {
      onAddRecipe(recipe)
    }
    
    // After submitting, go back to the feed
    navigate('/')
  }

  return (
    <main className="create-recipe-page">
      <header className="create-recipe-header">
        <h1>Create Recipe</h1>
        <p>Add a new recipe to your collection</p>
      </header>

      <RecipeForm onSubmit={handleSubmit} submitLabel="Save Recipe" />
    </main>
  )
}