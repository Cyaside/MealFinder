import { Heart } from "lucide-react"

const MealCard = ({ meal, onMealClick, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    if (isFavorite) {
      onRemoveFromFavorites(meal.idMeal)
    } else {
      onAddToFavorites(meal)
    }
  }

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
      onClick={() => onMealClick(meal.idMeal)}
    >
      <div className="relative">
        <img src={meal.strMealThumb || "/placeholder.svg"} alt={meal.strMeal} className="w-full h-48 object-cover" />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
          }`}
        >
          <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">{meal.strMeal}</h3>
        <div className="flex items-center justify-between">
          <span className="text-orange-400 text-sm font-medium">{meal.strCategory}</span>
          <span className="text-gray-400 text-sm">{meal.strArea}</span>
        </div>
      </div>
    </div>
  )
}

export default MealCard