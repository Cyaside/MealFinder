

import { useState } from "react"
import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation"
import SearchSection from "./components/SearchSection"
import MealGrid from "./components/MealGrid"
import FavoritesSection from "./components/FavoritesSection"
import "./App.css"

function App() {
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("mealFavorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })
  const [currentView, setCurrentView] = useState("home") // 'home', 'search', 'detail', 'favorites'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Search meals from API
  const searchMeals = async (searchTerm) => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setError("")
    setCurrentView("search")

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      const data = await response.json()

      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
        setError("No meals found. Try a different search term.")
      }
    } catch (err) {
      setError("Failed to fetch meals. Please try again.")
      setMeals([])
    } finally {
      setLoading(false)
    }
  }


  // Add to favorites
  const addToFavorites = (meal) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal)
    if (!isAlreadyFavorite) {
      const newFavorites = [...favorites, meal]
      setFavorites(newFavorites)
      localStorage.setItem("mealFavorites", JSON.stringify(newFavorites))
    }
  }

  // Remove from favorites
  const removeFromFavorites = (mealId) => {
    const newFavorites = favorites.filter((fav) => fav.idMeal !== mealId)
    setFavorites(newFavorites)
    localStorage.setItem("mealFavorites", JSON.stringify(newFavorites))
  }

  // Check if meal is favorite
  const isFavorite = (mealId) => {
    return favorites.some((fav) => fav.idMeal === mealId)
  }

  // Navigation handlers
  const goHome = () => {
    setCurrentView("home")
    setSelectedMeal(null)
    setMeals([])
    setError("")
  }

  const goToFavorites = () => {
    setCurrentView("favorites")
    setSelectedMeal(null)
    setError("")
  }

  const goBack = () => {
    if (currentView === "detail") {
      setCurrentView("search")
      setSelectedMeal(null)
    } else {
      goHome()
    }
  }

  return (
    <div className="App">
      <Navigation currentView={currentView} onHomeClick={goHome} onFavoritesClick={goToFavorites} />

      {currentView === "home" && (
        <>
          <HeroSection />
          <SearchSection onSearch={searchMeals} />
        </>
      )}

      {currentView === "search" && (
        <div className="min-h-screen bg-gray-900">
          <SearchSection onSearch={searchMeals} />
          <MealGrid
            meals={meals}
            loading={loading}
            error={error}
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
            isFavorite={isFavorite}
          />
        </div>
      )}


      {currentView === "favorites" && (
        <FavoritesSection
          favorites={favorites}
          onRemoveFromFavorites={removeFromFavorites}
        />
      )}
    </div>
  )
}

export default App
