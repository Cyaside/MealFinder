const Navigation = ({ currentView, onHomeClick, onFavoritesClick }) => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-pink-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2
                className="text-2xl font-bold text-white cursor-pointer hover:text-orange-200 transition-colors"
                onClick={onHomeClick}
              >
                MealFinder
              </h2>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={onHomeClick}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  currentView === "home"
                    ? "text-orange-200 border-orange-200"
                    : "text-white hover:text-orange-200 border-transparent hover:border-orange-200"
                }`}
              >
                Home
              </button>
              <button
                onClick={onFavoritesClick}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  currentView === "favorites"
                    ? "text-orange-200 border-orange-200"
                    : "text-white hover:text-orange-200 border-transparent hover:border-orange-200"
                }`}
              >
                Favorites
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-2 rounded-md hover:from-orange-500 hover:to-pink-600 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
