import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './NavBar.css';

export default function NavBar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      navigate(`/shop?search=${encodeURIComponent(trimmedSearch)}`);
    } else {
      navigate('/shop');
    }
  };

  return (
    <nav className="navbar">

      {/* =========================
          BRAND
      ========================= */}

      <Link to="/" className="brand">
        <img
          src="/Vaqessa-logo-big.png"
          alt="Vaqessa"
          className="brand-logo"
        />
      </Link>


      {/* =========================
          SEARCH
      ========================= */}

      <form
        className="navbar-search"
        onSubmit={handleSearch}
      >
        <svg
          className="navbar-search-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="6.5"
          />
          <path
            d="M16 16L21 21"
          />
        </svg>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />

        {search && (
          <button
            type="button"
            className="navbar-search-clear"
            onClick={() => setSearch('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </form>


      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        {isAuthenticated && (
          <Link to="/orders">
            My Orders
          </Link>
        )}

        <Link
          to="/cart"
          className="cart-link"
        >
          Cart

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>


        {/* =========================
            AUTH
        ========================= */}

        {isAuthenticated ? (
          <>
            <span className="navbar-user">
              Hi, {user.username}
            </span>

            <button
              className="btn-link"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}