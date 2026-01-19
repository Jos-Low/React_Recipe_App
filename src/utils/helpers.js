import { PATHS } from '../constants/recipes'

/**
 * Generates the full image path for a food image filename
 */
export function getImageSrc(fileName) {
  return `${PATHS.FOOD_IMAGES}/${fileName}`
}

/**
 * Converts multi-line text into an array of items
 * Useful for parsing ingredients and steps from textarea inputs
 */
export function linesToList(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
}

/**
 * Generates a unique ID for new recipes
 */
export function generateId() {
  return `recipe-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}