import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api/axios';

import './Home.css';

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [categories, setCategories] = useState([]);

  const featuredArrival = newArrivals[0];

  /*
   * =========================
   * LOAD CATEGORIES
   * =========================
   */

  useEffect(() => {
    api
      .get('/categories/')
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(() => {});
  }, []);


  /*
   * =========================
   * LOAD TRENDING PRODUCTS
   * =========================
   */

  useEffect(() => {
    api
      .get('/products/')
      .then(({ data }) => {
        setTrendingProducts(data.slice(0, 4));
      })
      .catch(() => {});
  }, []);


  /*
   * =========================
   * LOAD NEW ARRIVALS
   * =========================
   */

  useEffect(() => {
    api
      .get('/products/')
      .then(({ data }) => {
        const recentlyAdded = [...data]
          .sort((a, b) => b.id - a.id)
          .slice(0, 5);

        setNewArrivals(recentlyAdded);
      })
      .catch(() => {});
  }, []);


  return (
    <div className="home">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-eyebrow">
            WELCOME TO VAQESSA
          </p>

          <h1>
            Discover.
            <br />
            Choose.
            <br />
            <span>Belong.</span>
          </h1>

          <p className="hero-description">
            Find something that feels uniquely yours.
            Explore products curated for every kind of you.
          </p>

          <Link
            to="/shop"
            className="hero-button"
          >
            SHOP NOW
            <span>→</span>
          </Link>

        </div>


        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-brand-card">

            <img
              src="/Vaqessa-logo-big.png"
              alt="Vaqessa"
            />

            <p>
              Discover something beautiful.
            </p>

          </div>

          <div className="hero-orbit orbit-one"></div>

          <div className="hero-orbit orbit-two"></div>

          <div className="hero-floating-card">

            <span>✦</span>

            <div>
              <strong>VAQESSA</strong>
              <small>Curated for you</small>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SHOP BY CATEGORY
      ========================= */}

      <section
        id="categories"
        className="category-showcase"
      >

        <div className="category-showcase-header">

          <div>

            <p className="section-eyebrow">
              EXPLORE BY CATEGORY
            </p>

            <h2>
              Shop by Category
            </h2>

          </div>

          <p className="category-showcase-description">
            Find something that fits your style, your space,
            and your everyday life.
          </p>

        </div>


        <div className="category-showcase-grid">

          {categories.map((cat) => {

            const icons = {
              books: '✦',
              electronics: '◈',
              fashion: '◇',
              'home-kitchen': '⌂',
            };

            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="category-showcase-card"
              >

                <div className="category-icon">
                  {icons[cat.slug] || '✦'}
                </div>

                <div className="category-card-content">

                  <h3>
                    {cat.name}
                  </h3>

                  <span>
                    Explore collection
                    <b>→</b>
                  </span>

                </div>

                <div className="category-card-number">
                  {String(
                    categories.indexOf(cat) + 1
                  ).padStart(2, '0')}
                </div>

              </Link>
            );

          })}

        </div>

      </section>


      {/* =========================
          PROMOTIONAL BANNER
      ========================= */}

      <section className="promo-banner">

        <div className="promo-banner-content">

          <p className="promo-eyebrow">
            THE VAQESSA EDIT
          </p>

          <h2>
            A little something
            <br />
            <span>made for you.</span>
          </h2>

          <p className="promo-description">
            Explore carefully selected pieces for everyday moments,
            thoughtful spaces, and everything in between.
          </p>

          <Link
            to="/shop"
            className="promo-button"
          >
            EXPLORE THE COLLECTION
            <span>→</span>
          </Link>

        </div>


        <div className="promo-banner-visual">

          <div className="promo-circle promo-circle-large"></div>

          <div className="promo-circle promo-circle-small"></div>

          <div className="promo-brand-mark">
            <span>V</span>
          </div>

          <div className="promo-floating-note">

            <span>✦</span>

            <div>
              <strong>VAQESSA</strong>
              <small>Curated for you</small>
            </div>

          </div>

          <div className="promo-vertical-text">
            DISCOVER · CHOOSE · BELONG
          </div>

        </div>

      </section>


      {/* =========================
          TRENDING NOW
      ========================= */}

      <section className="trending-section">

        <div className="trending-header">

          <div>

            <p className="section-eyebrow">
              WHAT'S IN RIGHT NOW
            </p>

            <h2>
              Trending Now
            </h2>

          </div>

          <Link
            to="/shop"
            className="trending-view-all"
          >
            View all
            <span>→</span>
          </Link>

        </div>


        <div className="trending-grid">

          {trendingProducts.map((product) => (

            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="trending-card"
            >

              <div className="trending-image-wrap">

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <div className="trending-image-placeholder">
                    {product.name[0]}
                  </div>
                )}

                <span className="trending-label">
                  TRENDING
                </span>

              </div>


              <div className="trending-info">

                <p>
                  {product.category?.name}
                </p>

                <h3>
                  {product.name}
                </h3>

                <div className="trending-price-row">

                  <span>
                    ₹{product.price}
                  </span>

                  <span className="trending-arrow">
                    ↗
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================
          NEW ARRIVALS
      ========================= */}

      <section className="new-arrivals-section">

        <div className="new-arrivals-header">

          <div>

            <p className="section-eyebrow">
              JUST ADDED
            </p>

            <h2>
              New Arrivals
            </h2>

          </div>

          <div className="new-arrivals-header-right">

            <p>
              Fresh finds waiting to become part
              of your collection.
            </p>

            <Link
              to="/shop"
              className="new-arrivals-view-all"
            >
              View all
              <span>→</span>
            </Link>

          </div>

        </div>


        {featuredArrival && (

          <div className="new-arrivals-layout">

            {/* =========================
                FEATURED NEW ARRIVAL
            ========================= */}

            <Link
              to={`/products/${featuredArrival.slug}`}
              className="new-arrival-featured"
            >

              <div className="new-arrival-image">

                {featuredArrival.image ? (
                  <img
                    src={featuredArrival.image}
                    alt={featuredArrival.name}
                  />
                ) : (
                  <div className="new-arrival-placeholder">
                    {featuredArrival.name[0]}
                  </div>
                )}

                <span className="new-arrival-badge">
                  NEW
                </span>

              </div>


              <div className="new-arrival-featured-info">

                <div>

                  <p>
                    {featuredArrival.category?.name}
                  </p>

                  <h3>
                    {featuredArrival.name}
                  </h3>

                </div>

                <span className="new-arrival-price">
                  ₹{featuredArrival.price}
                </span>

              </div>

            </Link>


            {/* =========================
                SMALLER NEW ARRIVALS
            ========================= */}

            <div className="new-arrivals-small-grid">

              {newArrivals
                .slice(1, 5)
                .map((product) => (

                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className="new-arrival-small"
                  >

                    <div className="new-arrival-small-image">

                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                        />
                      ) : (
                        <div className="new-arrival-placeholder">
                          {product.name[0]}
                        </div>
                      )}

                    </div>


                    <div className="new-arrival-small-info">

                      <p>
                        {product.category?.name}
                      </p>

                      <h3>
                        {product.name}
                      </h3>

                      <span>
                        ₹{product.price}
                      </span>

                    </div>

                  </Link>

                ))}

            </div>

          </div>

        )}

      </section>

    </div>
  );
}