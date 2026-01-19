import { useState, useEffect } from 'react'
import { PATHS } from '../constants/recipes'
import { generateId } from '../utils/helpers'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load recipes once when the app starts
  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(PATHS.RECIPES_JSON)

        if (!response.ok) {
          throw new Error(`Failed to load recipes: ${response.status}`)
        }

        const data = await response.json()
        setRecipes(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  // Add a new recipe to state
  const addRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: generateId(),
      createdAt: new Date().toISOString(),
    }

    setRecipes((prev) => [...prev, newRecipe])
    return newRecipe
  }

  // Get a recipe by index (from URL params, for example)
  const getRecipeByIndex = (index) => {
    const idx = Number(index)
    return Number.isInteger(idx) ? recipes[idx] : undefined
  }

  return {
    recipes,
    isLoading,
    error,
    addRecipe,
    getRecipeByIndex,
  }
}