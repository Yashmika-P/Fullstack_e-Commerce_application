Vaqessa – Django + React E-Commerce App

A full-stack e-commerce web application built using Django REST Framework for the backend and React.js for the frontend.

The application features user authentication, product browsing, category filtering, search, shopping cart management, checkout, and order tracking.

Tech Stack
Layer	Technology
Backend	Django, Django REST Framework
Authentication	JWT (djangorestframework-simplejwt)
Database	SQLite, Django ORM
Frontend	React.js, React Router
State Management	React Context API
HTTP Client	Axios
Notifications	React Toastify
CORS	django-cors-headers

Key Features
User registration and login with JWT authentication.
Product listing and detailed product views.
Category-based product filtering.
Product search and sorting.
Shopping cart management (add, update, and remove items).
Checkout and order creation.
Order history and order details.
Automatic JWT access token refresh using Axios interceptors.
Django admin panel for managing application data.

Project Structure

ecommerce-project/
│
├── backend/
│   ├── backend/          # Project settings and root URLs
│   ├── accounts/         # User model and authentication APIs
│   ├── core/             # Category and Product models and APIs
│   ├── orders/           # Cart, Order, and OrderItem models and APIs
│   ├── manage.py
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── api/          # Axios configuration
    │   ├── context/      # AuthContext and CartContext
    │   ├── components/   # Reusable components
    │   └── pages/        # Application pages
    └── package.json


Backend Setup
bash
cd backend

python3 -m venv venv
source venv/bin/activate

# Windows: venv\Scripts\activate

pip install -r requirements.txt

python3 manage.py migrate
python3 manage.py seed_data
python3 manage.py createsuperuser

python3 manage.py runserver


Backend URL: http://127.0.0.1:8000/

Admin Panel: http://127.0.0.1:8000/admin/

Frontend Setup
bash
cd frontend

npm install
npm run dev


Frontend URL: http://localhost:5173/

The API base URL is configured in src/api/axios.js.

Technologies: Python, JavaScript, Django, Django REST Framework, React.js, React Router, React Context API, Axios, JWT, SQLite.
