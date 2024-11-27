function Home() {
  return (
    <div className="container mx-auto px-6">
      <div className="py-16 text-center">
        <h1 className="text-5xl font-bold text-primary-600 mb-6">
          Welcome to Sweet Delights
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Indulge in our artisanal cakes, crafted with passion and the finest ingredients. 
          Each creation tells a story of elegance and taste.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fresh Ingredients</h2>
            <p className="text-gray-600 leading-relaxed">Sourced from premium suppliers, ensuring quality in every bite.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Orders</h2>
            <p className="text-gray-600 leading-relaxed">Your dream cake, crafted exactly as you envision it.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h2>
            <p className="text-gray-600 leading-relaxed">Swift and secure delivery to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
