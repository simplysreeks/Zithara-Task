# React and Node.js Application with PostgreSQL Database

## Overview
This project is a full-stack web application built using React.js and Node.js, with data stored in a PostgreSQL database. The application provides functionality to manage customer records, including creating 50 dummy records, displaying them in a paginated table format, implementing search by name or location, and sorting by date or time.

## Features
- **Database Initialization:** Automatically creates 50 records with fields such as sno, customer name, age, phone, location, and created_at.
- **Single Page Application:** Provides a user-friendly interface to view and manage customer records.
- **Table Display:** Displays customer records in a tabular format with pagination, showing 20 records per page.
- **Search Functionality:** Allows users to search for records by customer name or location, enhancing data accessibility.
- **Date and Time Display:** Splits the created_at column into separate date and time columns for improved readability.
- **Sorting Options:** Enables users to sort records by either date or time, enhancing data organization.

## Technologies Used
- **React.js:** Frontend development framework for building dynamic user interfaces.
- **Node.js:** Backend JavaScript runtime environment for building scalable server-side applications.
- **PostgreSQL:** Open-source relational database management system for storing and retrieving data.
- **Express.js:** Web application framework for Node.js used for handling server-side logic.
- **Sequelize:** Promise-based ORM (Object-Relational Mapping) for Node.js, used for database interactions.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend using `npm install`.
4. Set up PostgreSQL database and configure database connection.
5. Run the database migration scripts to create the necessary tables.
6. Start the backend server by running `npm start` in the root directory.
7. Start the frontend development server by running `npm start` in the frontend directory.
8. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Credits
This project was created by Jonnalagadla Sreekaree.
