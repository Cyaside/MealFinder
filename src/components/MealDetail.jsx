import { ArrowLeft, Heart } from "lucide-react"

const MealDetail = ({ meal, onBack, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(meal.idMeal)
    } else {
      onAddToFavorites(meal)
    }
  }

  // Get ingredients list
  const getIngredients = () => {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`)
      }
    }
    return ingredients
  }

  const ingredients = getIngredients()

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-orange-400 hover:text-orange-300 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Results
            </button>
            <button
              onClick={handleFavoriteClick}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                isFavorite ? "bg-red-500 text-white hover:bg-red-600" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <Heart size={20} className="mr-2" fill={isFavorite ? "currentColor" : "none"} />
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img
              src={meal.strMealThumb || "/placeholder.svg"}
              alt={meal.strMeal}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">{meal.strMeal}</h1>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center text-orange-400">
                <span className="font-medium">{meal.strCategory}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>{meal.strArea} Cuisine</span>
              </div>
            </div>

            {/* Tag */}
            {meal.strTags && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {meal.strTags.split(",").map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Ingredients</h2>
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="space-y-2">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Instructions</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">{meal.strInstructions}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MealDetail
