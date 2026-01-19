import { Link } from 'react-router-dom'
import { getImageSrc } from '../../../utils/helpers'
import './RecipeCard.css'

export default function RecipeCard({ recipe, index }) {
  const { title, image, cuisine, difficulty, cookingTime } = recipe

  return (
    <Link to={`/recipe/${index}`} className="recipe-card">
      <img
        className="recipe-card__image"
        src={getImageSrc(image)}
        alt={title}
        width={320}
        height={200}
      />

      <div className="recipe-card__body">
        <h2 className="recipe-card__title">{title}</h2>

        <div className="recipe-card__meta">
          <span className="pill">{cuisine}</span>
          <span className="pill pill--muted">{difficulty}</span>
          <span className="pill pill--muted">{cookingTime} min</span>
        </div>
      </div>
    </Link>
  )
}