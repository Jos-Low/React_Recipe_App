import { Link } from 'react-router-dom'
import RecipeCard from '../../components/recipe/RecipeCard/RecipeCard'
import EmptyState from '../../components/common/EmptyState/EmptyState'
import Loading from '../../components/common/Loading/Loading'
import './FeedPage.css'

export default function FeedPage({ recipes = [], isLoading, error }) {
  const hasRecipes = recipes.length > 0

  if (isLoading) {
    return (
      <main className="feed-page">
        <Loading message="Loading recipes..." />
      </main>
    )
  }

  if (error) {
    return (
      <main className="feed-page">
        <EmptyState
          title="Failed to load recipes"
          description={error}
        />
      </main>
    )
  }

  return (
    <main className="feed-page">
      <header className="feed-header">
        <div>
          <h1 className="feed-title">Recipes</h1>
          <p className="feed-subtitle">Browse your saved recipes</p>
        </div>

        <Link className="create-button" to="/create">
          + Create Recipe
        </Link>
      </header>

      {!hasRecipes ? (
        <EmptyState
          title="No recipes yet"
          description="Create your first recipe to see it here."
          action={
            <Link className="create-button" to="/create">
              + Create Recipe
            </Link>
          }
        />
      ) : (
        <section className="recipe-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id || index} recipe={recipe} index={index} />
          ))}
        </section>
      )}
    </main>
  )
}