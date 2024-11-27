import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-primary-600">
            Sweet Delights
          </Link>
          <div className="space-x-8 text-sm tracking-wide font-medium">
            <Link to="/" className="hover:text-primary-600 transition-colors">HOME</Link>
            <Link to="/menu" className="hover:text-primary-600 transition-colors">MENU</Link>
            <Link to="/contact" className="hover:text-primary-600 transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
