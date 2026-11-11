Vaqessa — Django + React E-Commerce App

A full-stack e-commerce web application built with Django REST Framework (backend) and React.js (frontend), featuring JWT authentication, product catalog, cart management, and checkout.

The application supports user registration and login, product browsing, category filtering, search, shopping cart management, order creation, and order tracking.

Tech Stack
Layer	Technology
Backend	Django, Django REST Framework
Authentication	JWT (djangorestframework-simplejwt)
Database	SQLite (Django ORM)
Frontend	React.js, React Router, React Context API
HTTP Client	Axios (with interceptors for JWT and automatic token refresh)
Notifications	React Toastify
CORS	django-cors-headers
Project Structure
text
ecommerce-project/
├── backend/
│   ├── backend/
│   ├── accounts/
│   ├── core/
│   ├── orders/
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── api/axios.js
    │   ├── context/
    │   ├── components/
    │   └── pages/
    │       ├── Home
    │       ├── ProductDetail
    │       ├── Login
    │       ├── Register
    │       ├── Cart
    │       ├── Checkout
    │       ├── Orders
    │       └── OrderDetail
    └── package.json

Key Features
User registration and login with JWT authentication.
Product listing and product detail views.
Category-based product filtering.
Product search and sorting.
Shopping cart with add, update, and remove functionality.
Checkout and order creation.
Order history and individual order details.
Automatic JWT access token refresh using Axios interceptors.
Django admin panel for managing application data.
Key API Endpoints
Method	Endpoint	Description
POST	/api/accounts/register/	User registration
POST	/api/accounts/login/	User login
POST	/api/accounts/login/refresh/	Refresh access token
GET	/api/accounts/me/	Retrieve logged-in user profile
GET	/api/categories/	List categories
GET	/api/products/	List products with filtering and search
GET	/api/products/<slug>/	Retrieve product details
GET	/api/orders/cart/	Retrieve current user's cart
POST	/api/orders/cart/items/	Add item to cart
PATCH	/api/orders/cart/items/<id>/	Update cart item quantity
DELETE	/api/orders/cart/items/<id>/	Remove item from cart
GET	/api/orders/	Retrieve user's orders
POST	/api/orders/	Create an order from cart
GET	/api/orders/<id>/	Retrieve order details
Backend Setup
bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python3 manage.py migrate
python3 manage.py seed_data
python3 manage.py createsuperuser

python3 manage.py runserver


Backend runs at http://127.0.0.1:8000/

Admin panel: http://127.0.0.1:8000/admin/

Frontend Setup
bash
cd frontend
npm install
npm run dev


Frontend runs at http://localhost:5173/

The API base URL is configured in src/api/axios.js.

Resume-Ready Description

Built a full-stack e-commerce web application using Django REST Framework and React.js, featuring user authentication, product browsing, category filtering, shopping cart management, and order processing. Implemented JWT authentication with automatic token refresh using Axios interceptors. Designed database models using Django ORM and managed frontend authentication and cart state using React Context API.

Technologies: Python, JavaScript, Django, Django REST Framework, React.js, React Router, React Context API, Axios, JWT Authentication, SQLite, django-cors-headers.
