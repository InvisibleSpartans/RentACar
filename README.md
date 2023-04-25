# RentACar

This project is a web-based application for managing a car rental service. The application consists of a client-side application built using Angular, and a server-side application built using .NET Core, with a SQL database for storing and managing data.

# Features
The application includes the following features:

User authentication and authorization using JWT (JSON Web Tokens)
User roles: admin, employee, and customer
CRUD (create, read, update, delete) operations for cars, customers, and rentals
Dashboard for employees and admin with important statistics
Ability for customers to browse cars, view details, and make reservations
Email notifications for customers when a rental is due soon or overdue
Integration with Google Maps for location and directions

# Technologies Used
Angular 12 for the client-side application
.NET Core 5 for the server-side application
SQL Server for the database management
Entity Framework Core for object-relational mapping
Angular Material for UI components and styling
Google Maps API for mapping and location services
JWT for user authentication and authorization

# Setup
To run the application, follow these steps:

Clone the repository to your local machine.
Open the solution in Visual Studio.
Build and run the solution to restore NuGet packages and build the application.
Run the SQL script to create and seed the database.
In the command prompt, navigate to the ClientApp directory and run npm install to install the necessary dependencies.
Once the dependencies are installed, run ng serve to start the Angular client-side application.
Navigate to http://localhost:4200 to access the application.

# Conclusion
This Rent-A-Car application provides a comprehensive solution for managing a car rental service. Its features include user authentication, authorization, and roles, CRUD operations for cars, customers, and rentals, and integration with Google Maps for location and directions. The application is built using Angular for the client-side, .NET Core for the server-side, and SQL Server for the database management, providing a scalable and secure architecture.
