function Menu() {
  const cakes = [
    { 
      name: 'Chocolate Dream', 
      price: '$35', 
      description: 'Rich chocolate layers with smooth ganache and chocolate shavings',
      category: 'Signature'
    },
    { 
      name: 'Vanilla Cloud', 
      price: '$30', 
      description: 'Light vanilla sponge with silky buttercream and Madagascar vanilla',
      category: 'Classic'
    },
    { 
      name: 'Red Velvet', 
      price: '$40', 
      description: 'Classic red velvet with cream cheese frosting and white chocolate curls',
      category: 'Popular'
    },
    { 
      name: 'Strawberry Delight', 
      price: '$35', 
      description: 'Fresh strawberry cake with whipped cream and berry compote',
      category: 'Seasonal'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-primary-600 mb-2 text-center">Our Creations</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light">
        Each cake is handcrafted with love and attention to detail, ensuring a perfect celebration every time.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cakes.map((cake, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-1 bg-primary-100">
              <span className="text-xs font-semibold text-primary-600 px-2">{cake.category}</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{cake.name}</h2>
              <p className="text-gray-600 text-sm mb-4 font-light">{cake.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary-600">{cake.price}</span>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm hover:bg-primary-700 transition-colors font-medium">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
