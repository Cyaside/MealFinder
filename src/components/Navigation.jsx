const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-pink-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Samping*/}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">MealFinder</h2>
            </div>
          </div>

          {/* Nav Link*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:text-orange-200 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-200"
              >
                Home
              </a>
              <a
                href="#search"
                className="text-white hover:text-orange-200 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-200"
              >
                Search
              </a>
              <a
                href="#favorites"
                className="text-white hover:text-orange-200 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-200"
              >
                Favorites
              </a>
              <a
                href="#about"
                className="text-white hover:text-orange-200 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-200"
              >
                About
              </a>
            </div>
          </div>


          {/* Mobile*/}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-2 rounded-md hover:from-orange-500 hover:to-pink-600 transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 backdrop-blur-sm border-t border-pink-300/50">
          <a
            href="#home"
            className="text-white hover:text-orange-200 block px-3 py-2 text-base font-medium transition-colors duration-200">
            Home
          </a>
          <a
            href="#search"
            className="text-white hover:text-orange-200 block px-3 py-2 text-base font-medium transition-colors duration-200">
            Search
          </a>
          <a
            href="#favorites"
            className="text-white hover:text-orange-200 block px-3 py-2 text-base font-medium transition-colors duration-200">
            Favorites
          </a>
          <a
            href="#about"
            className="text-white hover:text-orange-200 block px-3 py-2 text-base font-medium transition-colors duration-200">
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
