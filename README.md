🛍️ Vaqessa – Full-Stack E-Commerce Application

<p align="center">
  A hands-on full-stack e-commerce application built using
  <b>Python, Django REST Framework and React.js</b>.
  <br/>
  Exploring real-world web development through product management,
  authentication, REST APIs and shopping cart functionality.
</p><p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/DRF-A30000?style=for-the-badge"/>
</p><p align="center">
  <img src="https://img.shields.io/badge/Project-Personal%20Learning-purple"/>
  <img src="https://img.shields.io/badge/Status-Under%20Development-orange"/>
</p>---

📌 About the Project

Vaqessa is a full-stack e-commerce web application developed as a hands-on project to explore the development of modern web applications.

The application combines a React-based frontend with a Django REST Framework backend, providing a structured approach to handling user interactions, product data, API communication and shopping cart operations.

The primary objective is to gain practical experience in full-stack development, backend architecture, database operations and frontend-backend integration.

✨ Key Features

Feature| Description
👤 User Management| User registration and login
🛍️ Product Catalogue| Browse and explore available products
🔎 Product Search| Search and filter products
🏷️ Categories| Browse products by category
🛒 Shopping Cart| Add, update and remove cart items
🔗 REST APIs| Backend APIs using Django REST Framework
⚙️ Admin Panel| Manage application data through Django Admin
🔄 Frontend Integration| React and Django API communication

🛠️ Tech Stack

Technology| Purpose
Python| Backend programming
Django| Backend framework
Django REST Framework| REST API development
React.js| Frontend development
JavaScript| Frontend functionality
React Router| Client-side navigation
Context API| State management
Axios| HTTP requests and API integration
SQLite| Database

🏗️ Application Architecture

          ┌──────────────────────┐
          │     React Frontend   │
          │                      │
          │  Components & Pages  │
          │  Context API         │
          └──────────┬───────────┘
                     │
                  Axios
                     │
                     ▼
          ┌──────────────────────┐
          │   Django REST API    │
          │                      │
          │  Views & Serializers │
          │  Business Logic      │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │      SQLite DB       │
          │                      │
          │ Users, Products,     │
          │ Cart & Orders         │
          └──────────────────────┘

📂 Project Structure

Fullstack_e-Commerce_application/
│
├── backend/
│   ├── backend/
│   ├── accounts/
│   ├── core/
│   ├── orders/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── context/
│   │   ├── components/
│   │   └── pages/
│   └── package.json
│
└── README.md

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

- Python 3.x
- Node.js and npm
- Git

1. Clone the Repository

git clone https://github.com/Yashmika-P/Fullstack_e-Commerce_application.git

cd Fullstack_e-Commerce_application

2. Set Up the Backend

cd backend

python -m venv venv

Activate the virtual environment:

Windows

venv\Scripts\activate

Linux / macOS

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Run database migrations:

python manage.py migrate

Create an admin account:

python manage.py createsuperuser

Start the backend server:

python manage.py runserver

Backend: "http://127.0.0.1:8000/"

3. Set Up the Frontend

Open a new terminal:

cd frontend

npm install

npm run dev

Frontend: "http://localhost:5173/"

Make sure the frontend API configuration points to the running Django backend.

📚 Key Learning Areas

- Building RESTful APIs with Django REST Framework.
- Understanding Django models, views and serializers.
- Connecting React applications with backend services.
- Managing frontend state using Context API.
- Performing database operations using Django ORM.
- Structuring and developing a full-stack application.

🔮 Future Enhancements

- Complete checkout and order processing workflow.
- Implement simulated payment and transaction management.
- Improve authentication and authorization.
- Add transaction history and payment status tracking.
- Enhance validation and error handling.

👩‍💻 Author

Yashmika P.

<p align="left">
  <a href="https://github.com/Yashmika-P">
    <img src="https://img.shields.io/badge/GitHub-Yashmika--P-181717?style=for-the-badge&logo=github"/>
  </a>
  <a href="https://www.linkedin.com/in/yashmika-p-3568a2253">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin"/>
  </a>
</p>---

<p align="center">
  ⭐ <i>Built to learn, experiment and grow as a full-stack developer.</i>
</p>
