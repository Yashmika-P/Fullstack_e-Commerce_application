Vaqessa | E-Commerce Web Application

A full-stack e-commerce application developed as a hands-on project using Python, Django REST Framework and React.js. The project focuses on practical experience in backend development, REST API integration, database management and frontend development.

Project Status: Under Development
Project Type: Personal Learning Project

---

Overview

Vaqessa is a web-based e-commerce application designed to explore the core functionalities of an online shopping platform. It combines a React frontend with a Django REST Framework backend to manage product information, user interactions and shopping cart operations.

Technology Stack

Category| Technologies
Backend| Python, Django
API Development| Django REST Framework
Frontend| React.js, JavaScript
Routing| React Router
State Management| React Context API
API Communication| Axios
Database| SQLite
Styling| CSS

Features

Feature| Description
User Management| User registration and login
Product Catalogue| Browse products and view product details
Search & Filtering| Search and filter available products
Shopping Cart| Add, update and remove products
REST APIs| Backend API development and integration
Admin Panel| Manage application data through Django Admin

Application Architecture

<pre>
       React Frontend
              |
              |  HTTP Requests (Axios)
              |
       Django REST Framework
              |
              |  Django ORM
              |
        SQLite Database
</pre>Project Structure

<pre>
Fullstack_e-Commerce_application/
│
├── backend/
│   ├── accounts/
│   ├── core/
│   ├── orders/
│   ├── backend/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   └── package.json
│
└── README.md
</pre>Installation & Setup

Prerequisites

Requirement| Version
Python| 3.x
Node.js| Compatible with the frontend dependencies
npm| Compatible with Node.js
Git| Latest available version

1. Clone the Repository

<pre>
git clone https://github.com/Yashmika-P/Fullstack_e-Commerce_application.git

cd Fullstack_e-Commerce_application
</pre>2. Backend Setup

Navigate to the backend directory:

<pre>
cd backend
</pre>Create a virtual environment:

<pre>
python -m venv venv
</pre>Activate the virtual environment.

Windows:

<pre>
venv\Scripts\activate
</pre>Linux / macOS:

<pre>
source venv/bin/activate
</pre>Install the required dependencies:

<pre>
pip install -r requirements.txt
</pre>Apply database migrations:

<pre>
python manage.py migrate
</pre>Create an administrator account:

<pre>
python manage.py createsuperuser
</pre>Start the development server:

<pre>
python manage.py runserver
</pre>Backend: http://127.0.0.1:8000/

Admin Panel: http://127.0.0.1:8000/admin/

3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

<pre>
cd frontend
</pre>Install dependencies:

<pre>
npm install
</pre>Start the development server:

<pre>
npm run dev
</pre>Frontend: http://localhost:5173/

Ensure that the frontend API configuration points to the running Django backend.

Learning Objectives

- Developing REST APIs using Django REST Framework.
- Understanding Django models, views and serializers.
- Integrating React frontend with Django backend.
- Performing database operations using Django ORM.
- Managing application state using React Context API.
- Working with API requests and frontend-backend communication.
- Understanding full-stack application architecture.

Planned Enhancements

- Complete checkout and order management workflow.
- Implement simulated payment and transaction processing.
- Improve authentication and authorization.
- Add transaction history and payment status management.
- Enhance application validation and error handling.

---

Author

Yashmika P.

"GitHub" (https://github.com/Yashmika-P) · "LinkedIn" (https://www.linkedin.com/in/yashmika-p-3568a2253)

---

<p align="center">
  <i>A hands-on project built to learn, experiment and grow as a full-stack developer.</i>
</p>
