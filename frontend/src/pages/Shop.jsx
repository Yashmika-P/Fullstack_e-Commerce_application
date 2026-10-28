import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

import './Shop.css';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();


  /* =========================
     READ URL PARAMETERS
  ========================= */

  useEffect(() => {
    const urlSearch =
      searchParams.get('search') || '';

    const urlCategory =
      searchParams.get('category') || '';

    setSearch(urlSearch);
    setActiveCategory(urlCategory);
  }, [searchParams]);


  /* =========================
     LOAD CATEGORIES
  ========================= */

  useEffect(() => {
    api
      .get('/categories/')
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(() => {
        toast.error('Could not load categories.');
      });
  }, []);


  /* =========================
     LOAD PRODUCTS FROM BACKEND
  ========================= */

  useEffect(() => {
    setLoading(true);

    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (activeCategory) {
      params.category = activeCategory;
    }

    api
      .get('/products/', { params })
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        toast.error('Could not load products.');
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [search, activeCategory]);


  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      toast.info(
        'Please login to add items to your cart.'
      );

      return;
    }

    try {
      await addToCart(productId, 1);

      toast.success('Added to cart!');
    } catch {
      toast.error(
        'Could not add item to cart.'
      );
    }
  };


  /* =========================
     UPDATE CATEGORY
  ========================= */

  const handleCategoryChange = (slug) => {
    const params = {};

    if (slug) {
      params.category = slug;
    }

    if (search.trim()) {
      params.search = search.trim();
    }

    setSearchParams(params);
  };


  /* =========================
     UPDATE SEARCH
  ========================= */

  const handleSearchChange = (value) => {
    const params = {};

    if (value.trim()) {
      params.search = value.trim();
    }

    if (activeCategory) {
      params.category = activeCategory;
    }

    setSearchParams(params);
  };


  /* =========================
     CLEAR SEARCH
  ========================= */

  const handleClearSearch = () => {
    const params = {};

    if (activeCategory) {
      params.category = activeCategory;
    }

    setSearchParams(params);
  };


  /* =========================
     CLEAR ALL FILTERS
  ========================= */

  const handleClearFilters = () => {
    setSearchParams({});
  };


  /* =========================
     ACTIVE CATEGORY NAME
  ========================= */

  const activeCategoryName =
    categories.find(
      (category) =>
        category.slug === activeCategory
    )?.name || '';


  /* =========================
     PAGE HEADING
  ========================= */

  const getPageHeading = () => {
    if (search) {
      return `Results for "${search}"`;
    }

    if (activeCategoryName) {
      return activeCategoryName;
    }

    return 'All Products';
  };


  const getPageEyebrow = () => {
    if (search) {
      return 'SEARCH RESULTS';
    }

    if (activeCategoryName) {
      return activeCategoryName.toUpperCase();
    }

    return 'THE COMPLETE COLLECTION';
  };


  return (
    <div className="shop-page">


      {/* =========================
          SHOP HERO
      ========================= */}

      <section className="shop-hero">

        <div className="shop-hero-content">

          <p className="shop-eyebrow">
            VAQESSA COLLECTION
          </p>

          <h1>
            Explore.
            <br />
            <span>Discover.</span>
          </h1>

          <p className="shop-description">
            Browse the complete VAQESSA collection and find
            something that feels uniquely yours.
          </p>

        </div>


        <div className="shop-hero-mark">

          <span>V</span>

          <small>
            DISCOVER · CHOOSE · BELONG
          </small>

        </div>

      </section>


      {/* =========================
          SHOP CONTENT
      ========================= */}

      <section className="shop-content">


        {/* =========================
            HEADER
        ========================= */}

        <div className="shop-header">

          <div>

            <p className="shop-section-eyebrow">
              {getPageEyebrow()}
            </p>

            <h2>
              {getPageHeading()}
            </h2>

            {!loading && (
              <p className="shop-result-count">

                {products.length}

                {' '}

                {products.length === 1
                  ? 'product'
                  : 'products'}

              </p>
            )}

          </div>


          {/* =========================
              SHOP SEARCH
          ========================= */}

          <div className="shop-search-wrapper">

            <input
              className="shop-search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                handleSearchChange(e.target.value)
              }
            />

            {search && (
              <button
                type="button"
                className="shop-search-clear"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

        </div>


        {/* =========================
            CATEGORY FILTERS
        ========================= */}

        <div className="shop-filters">

          <button
            className={
              !activeCategory
                ? 'active'
                : ''
            }
            onClick={() =>
              handleCategoryChange('')
            }
          >
            All
          </button>


          {categories.map((category) => (

            <button
              key={category.id}
              className={
                activeCategory === category.slug
                  ? 'active'
                  : ''
              }
              onClick={() =>
                handleCategoryChange(
                  category.slug
                )
              }
            >
              {category.name}
            </button>

          ))}

        </div>


        {/* =========================
            ACTIVE FILTER INFO
        ========================= */}

        {(search || activeCategory) && (
          <div className="shop-active-filters">

            <span>
              {search
                ? `Search: ${search}`
                : activeCategoryName}
            </span>

            <button
              onClick={handleClearFilters}
            >
              Clear filters
            </button>

          </div>
        )}


        {/* =========================
            LOADING
        ========================= */}

        {loading && (

          <div className="shop-loading">

            <div className="shop-loading-mark">
              V
            </div>

            <p>
              Loading the collection...
            </p>

          </div>

        )}


        {/* =========================
            EMPTY STATE
        ========================= */}

        {!loading && products.length === 0 && (

          <div className="shop-empty">

            <div className="shop-empty-icon">
              ◇
            </div>

            <h3>
              No products found
            </h3>

            <p>
              We couldn't find anything matching
              your current search or category.
              Try another search or explore the
              complete collection.
            </p>

            <button
              onClick={handleClearFilters}
            >
              VIEW ALL PRODUCTS
            </button>

          </div>

        )}


        {/* =========================
            PRODUCT GRID
        ========================= */}

        {!loading && products.length > 0 && (

          <div className="shop-product-grid">

            {products.map((product) => (

              <article
                className="shop-product-card"
                key={product.id}
              >


                {/* =========================
                    PRODUCT IMAGE
                ========================= */}

                <Link
                  to={`/products/${product.slug}`}
                  className="shop-product-image"
                >

                  {product.image ? (

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  ) : (

                    <div className="shop-product-placeholder">
                      {product.name?.[0] || 'V'}
                    </div>

                  )}


                  {!product.in_stock && (
                    <span className="shop-stock-badge">
                      OUT OF STOCK
                    </span>
                  )}

                </Link>


                {/* =========================
                    PRODUCT INFORMATION
                ========================= */}

                <div className="shop-product-info">

                  <p className="shop-product-category">
                    {product.category?.name}
                  </p>


                  <Link
                    to={`/products/${product.slug}`}
                    className="shop-product-name"
                  >
                    {product.name}
                  </Link>


                  <div className="shop-product-bottom">

                    <span className="shop-product-price">
                      ₹{product.price}
                    </span>


                    <button
                      className="shop-add-button"
                      disabled={!product.in_stock}
                      onClick={() =>
                        handleAddToCart(
                          product.id
                        )
                      }
                    >
                      {product.in_stock
                        ? 'Add to Cart'
                        : 'Out of Stock'}
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}