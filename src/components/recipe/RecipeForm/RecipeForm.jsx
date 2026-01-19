import { useState } from 'react'
import { IMAGE_OPTIONS, DIFFICULTY_LEVELS } from '../../../constants/recipes'
import { linesToList } from '../../../utils/helpers'
import ImageSelector from '../ImageSelector/ImageSelector'
import './RecipeForm.css'

/**
 * RecipeForm component for creating/editing recipes
 * - Uses ONE useState per field (easier to read at first)
 * - Each input has its own value + onChange handler
 */
export default function RecipeForm({ onSubmit, submitLabel = 'Save Recipe' }) {
  const [title, setTitle] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS[0].value)
  const [image, setImage] = useState(IMAGE_OPTIONS[0])
  const [ingredientsText, setIngredientsText] = useState('')
  const [stepsText, setStepsText] = useState('')

  const resetForm = () => {
    setTitle('')
    setCuisine('')
    setCookingTime('')
    setDifficulty(DIFFICULTY_LEVELS[0].value)
    setImage(IMAGE_OPTIONS[0])
    setIngredientsText('')
    setStepsText('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build the final recipe object from each piece of state
    const recipe = {
      title: title.trim(),
      cuisine: cuisine.trim(),
      cookingTime: Number(cookingTime) || 0,
      difficulty,
      image,
      ingredients: linesToList(ingredientsText),
      steps: linesToList(stepsText),
    }

    onSubmit(recipe)
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <label className="recipe-form__field">
        <span className="recipe-form__label">Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
          required
        />
      </label>

      <label className="recipe-form__field">
        <span className="recipe-form__label">Cuisine</span>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="e.g., Italian, Thai"
          required
        />
      </label>

      <label className="recipe-form__field">
        <span className="recipe-form__label">Cooking Time (minutes)</span>
        <input
          type="number"
          min="0"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          placeholder="e.g., 45"
          required
        />
      </label>

      <label className="recipe-form__field">
        <span className="recipe-form__label">Difficulty</span>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          {DIFFICULTY_LEVELS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <ImageSelector
        value={image}
        onChange={setImage}
        options={IMAGE_OPTIONS}
      />

      <label className="recipe-form__field">
        <span className="recipe-form__label">Ingredients (one per line)</span>
        <textarea
          value={ingredientsText}
          onChange={(e) => setIngredientsText(e.target.value)}
          placeholder={'2 cups flour\n1 tbsp sugar\nPinch of salt'}
          rows={6}
          required
        />
      </label>

      <label className="recipe-form__field">
        <span className="recipe-form__label">Steps (one per line)</span>
        <textarea
          value={stepsText}
          onChange={(e) => setStepsText(e.target.value)}
          placeholder={'Preheat oven to 375°F\nMix dry ingredients\nBake for 25 minutes'}
          rows={6}
          required
        />
      </label>

      <button type="submit" className="recipe-form__submit">
        {submitLabel}
      </button>
    </form>
  )
}