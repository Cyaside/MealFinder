import { useState, useEffect } from "react"
import { Search } from "lucide-react"

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <form onSubmit={handleSearch} className="flex items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search for a Meal..."
            className="w-full max-w-md px-5 py-3 rounded-l-full border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-white text-lg shadow-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-r-full transition-colors duration-200 shadow-lg"
            aria-label="Search"
          >
            <Search size={24} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default SearchSection
