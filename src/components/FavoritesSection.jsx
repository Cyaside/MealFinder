import MealCard from "./MealCard"

const FavoritesSection = ({ favorites, onMealClick, onRemoveFromFavorites }) => {
  
  // Empty state - no fav
  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-bold text-white mb-4">No Favorites Yet</h2>
          <p className="text-gray-400">Start adding your Fav meals to your favorites to see them here!</p>
        </div>
      </div>
    )
  }

  // Display favorites in grid layout
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with favorites count */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Favorite Meals</h1>
          <p className="text-gray-400">You have {favorites.length} favorite meal(s)</p>
        </div>

        {/* Grid of favorite meal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              onMealClick={onMealClick}
              onAddToFavorites={() => {}}
              onRemoveFromFavorites={onRemoveFromFavorites}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesSection
