import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between z-50">
      <div className="text-2xl font-bold text-indigo-600">
        <Link to="/" className="hover:text-indigo-800 transition-colors">Products App</Link>
      </div>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
