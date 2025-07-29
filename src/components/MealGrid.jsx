import MealCard from "./MealCard"

const MealGrid = ({ meals, loading, error, onMealClick, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-400 text-xl mb-4">{error}</div>
        <p className="text-gray-400">Try searching for something else!</p>
      </div>
    )
  }

  if (meals.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-xl mb-4">No meals found</div>
        <p className="text-gray-500">Try a different search term</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Search Results</h2>
        <p className="text-gray-400">Found {meals.length} meal(s)</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
            onMealClick={onMealClick}
            onAddToFavorites={onAddToFavorites}
            onRemoveFromFavorites={onRemoveFromFavorites}
            isFavorite={isFavorite(meal.idMeal)}
          />
        ))}
      </div>
    </div>
  )
}

export default MealGrid
