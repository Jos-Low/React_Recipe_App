# 🍳 React Recipe Storage App

A modern, responsive recipe management application built with React and Vite. Browse, create, and view detailed recipes with an intuitive user interface.

## ✨ Features

- **Browse Recipes**: View all your saved recipes in a clean, organized grid layout
- **Create New Recipes**: Add recipes with title, cuisine, cooking time, difficulty level, ingredients, and step-by-step instructions
- **View Recipe Details**: See complete recipe information including ingredients list and cooking steps
- **Image Selection**: Choose from a variety of food images to represent your recipes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading States**: Smooth loading indicators for better user experience
- **Error Handling**: Graceful error states when things go wrong

## 🛠️ Technologies Used

- **React 18.3** - Modern React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **React Router DOM** - Client-side routing
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with modern CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🏁 Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/Jos-Low/React_Recipe_App.git
cd React_Recipe_App
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## 📁 Project Structure

```
react-recipe-app/
├── public/
│   └── assets/
│       ├── dummy-recipes/
│       │   └── recipes.json
│       └── food-images/
│           └── (food images)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── EmptyState/
│   │   │   ├── Loading/
│   │   │   └── Pill/
│   │   └── recipe/
│   │       ├── ImageSelector/
│   │       ├── RecipeCard/
│   │       ├── RecipeDetail/
│   │       └── RecipeForm/
│   ├── constants/
│   │   └── recipes.js
│   ├── hooks/
│   │   └── useRecipes.js
│   ├── pages/
│   │   ├── CreateRecipe/
│   │   ├── FeedPage/
│   │   └── ViewRecipe/
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

## 🎯 Usage

### Viewing Recipes
- Navigate to the home page (`/`) to see all your recipes
- Click on any recipe card to view its full details

### Creating a Recipe
1. Click the "+ Create Recipe" button
2. Fill out the form with:
   - Recipe title
   - Cuisine type
   - Cooking time (in minutes)
   - Difficulty level
   - Select a food image
   - Add ingredients (one per line)
   - Add cooking steps (one per line)
3. Click "Save Recipe" to add it to your collection

### Recipe Details
- View complete recipe information including:
  - Recipe image
  - Cuisine, cooking time, and difficulty
  - Full ingredients list
  - Step-by-step cooking instructions
- Click "← Back to feed" to return to the recipe list

## 🧩 Key React Concepts Used

This project demonstrates several important React concepts:

- **useState** - Managing component state
- **useEffect** - Handling side effects and data fetching
- **Custom Hooks** - Reusable logic with `useRecipes`
- **React Router** - Client-side routing and navigation
- **Props** - Passing data between components
- **Conditional Rendering** - Showing different UI based on state
- **Component Composition** - Building complex UIs from smaller components
