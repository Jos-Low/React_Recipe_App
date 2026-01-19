import { useParams, Link } from 'react-router-dom'
import RecipeDetail from '../../components/recipe/RecipeDetail/RecipeDetail'
import EmptyState from '../../components/common/EmptyState/EmptyState'
import './ViewRecipe.css'

export default function ViewRecipe({ getRecipeByIndex }) {
  // useParams grabs values from the URL
  // Remember our route was "/recipe/:id" - so we get "id"
  const { id } = useParams()
  
  // Use the passed-in function to get the recipe
  const recipe = getRecipeByIndex(id)

  // If no recipe found, show an error state
  if (!recipe) {
    return (
      <main className="view-recipe-page">
        <EmptyState
          title="Recipe not found"
          description="The recipe you're looking for doesn't exist or has been removed."
          action={<Link to="/" className="back-link">← Back to feed</Link>}
        />
      </main>
    )
  }

  return (
    <main className="view-recipe-page">
      <nav className="view-recipe-nav">
        <Link to="/" className="back-link">← Back to feed</Link>
      </nav>

      <RecipeDetail recipe={recipe} />
    </main>
  )
}