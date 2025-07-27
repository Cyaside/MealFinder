const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 overflow-hidden">
      
      {/* Banner */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Hero*/}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Tulisan Atas */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Perfect Meal
          </span>
        </h1>

        {/* Tulisan Bawah */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore thousands of delicious recipes from around the world. Find your next favorite dish with just a few
          clicks.
        </p>
      </div>


    </section>
  )
}

export default HeroSection
