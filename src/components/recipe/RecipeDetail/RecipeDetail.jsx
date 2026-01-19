import { getImageSrc } from '../../../utils/helpers'
import './RecipeDetail.css'

export default function RecipeDetail({ recipe }) {
  const { title, cuisine, cookingTime, difficulty, image, ingredients, steps } = recipe

  return (
    <article className="recipe-detail">
      <header className="recipe-detail__header">
        <h1 className="recipe-detail__title">{title}</h1>
        <p className="recipe-detail__meta">
          <span><strong>Cuisine:</strong> {cuisine}</span>
          <span className="recipe-detail__separator">•</span>
          <span><strong>Time:</strong> {cookingTime} min</span>
          <span className="recipe-detail__separator">•</span>
          <span><strong>Difficulty:</strong> {difficulty}</span>
        </p>
      </header>

      <section className="recipe-detail__hero">
        <img
          src={getImageSrc(image)}
          alt={title}
          width={480}
          height={320}
        />
      </section>

      <section className="recipe-detail__section">
        <h2>Ingredients</h2>
        <ul className="recipe-detail__list">
          {ingredients?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-detail__section">
        <h2>Steps</h2>
        <ol className="recipe-detail__steps">
          {steps?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  )
}