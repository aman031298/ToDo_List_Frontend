ToDo List Application
Overview
This is a ToDo List web application built using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend. The app allows users to add, update, delete, and view tasks. It's a simple application designed to help you manage your tasks with ease.

Features
Add new tasks to the list.
Update existing tasks.
Delete tasks.
View the tasks in a clean, simple UI.
Frontend built with HTML, CSS, and JavaScript.
Backend built with Spring Boot, connected to a MySQL database.
Technologies Used
Backend: Spring Boot, Java 17, MySQL
Frontend: HTML, CSS, JavaScript
Database: MySQL
Deployment Platforms: Railway (for backend), Netlify (for frontend)
Setup Instructions
Prerequisites
JDK 17 or higher
Maven
MySQL (for local development)
Git
Local Development

![image](https://github.com/user-attachments/assets/b91dcd2f-4ae2-4ec8-a3fc-aed5d04a0ee3)

Clone the repository:

bash
Copy code
git clone https://github.com/aman031298/ToDo_List.git
cd ToDo_List/backend
Set up the MySQL database (for local development):

Create a database called todolist_db.
In the src/main/resources/application.properties, update the connection details:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/todolist_db
spring.datasource.username=root
spring.datasource.password=yourpassword
Build the backend:

bash
Copy code
mvn clean package
Run the backend application:

bash
Copy code
mvn spring-boot:run
Open the application:

The application will be available at http://localhost:8080.
Run the frontend:

Open the frontend/index.html file in a browser to view the application.
Deployment Instructions
Deploy the Backend on Railway
Create a Railway account: Sign up at Railway.
![image](https://github.com/user-attachments/assets/3f203703-80b5-4832-9528-580b46c749c6)

Create a new project:

From your Railway dashboard, click on "New Project".
Choose the option to "Deploy from GitHub" and select this repository.
Configure the environment variables:

In the Railway dashboard, go to the "Environment" section.
Add the following environment variables for database connection:
DB_URL
DB_USERNAME
DB_PASSWORD
Push your code:

Railway will automatically build and deploy your Spring Boot application.
Access the backend:

Once deployed, Railway will provide a URL to access your backend API.
Deploy the Frontend on Netlify
Create a Netlify account: Sign up at Netlify.

Deploy from GitHub:

Go to the Netlify dashboard, and click on "New Site from Git".
Select this repository and choose the frontend folder to deploy.
Configure build settings (optional):

Build Command: npm run build (if using a build system like React, Angular, etc.)
Publish Directory: frontend/ (or wherever your build files are located).
Deploy:

Click "Deploy" and Netlify will automatically build and host your frontend application.
Access the frontend:

Once deployed, Netlify will provide a URL to access your frontend.
