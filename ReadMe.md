# Weather Forecast App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Weather Forecast App** is a web application designed to provide users with real-time weather forecasts for their specified locations. Built with a modern MERN stack (MongoDB, Express, React, Node.js), this app integrates with external weather APIs to fetch and display weather data seamlessly, allowing users to stay informed about the weather in their cities.

## Features

- **User Authentication**: 
  - Secure sign-up and login functionality using JWT for authentication.
  - Users can manage their profiles, including their username and city.

- **Weather Forecasts**: 
  - Users can search for weather information by entering their city.
  - The app fetches and displays current weather conditions, temperature, humidity, and forecasts for the next few days.

- **Responsive Design**: 
  - The application is designed to be mobile-friendly, ensuring a seamless experience across devices.

- **Error Handling**: 
  - Comprehensive error handling for network requests and user input validation.

- **User-Friendly Interface**: 
  - Intuitive navigation and clean layout, enhancing user experience.

## Technologies Used

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Vite**: Build tool that provides a fast development environment.
  - **Tailwind CSS**: Utility-first CSS framework for styling components.
  - **Axios**: Promise-based HTTP client for making API requests.
  - **React Router**: For managing navigation and routing within the application.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server-side application.
  - **Express**: Web framework for Node.js to build APIs.
  - **MongoDB**: NoSQL database for storing user data and weather information.
  - **JWT (JSON Web Token)**: For secure user authentication.
  - **Bcrypt**: For hashing passwords before storing them in the database.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- MongoDB (or a MongoDB Atlas account)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tejdekiwadiya/Weather_Forecast_App.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Weather_Forecast_App
   ```

3. Install dependencies for the server:

   ```bash
   cd server
   npm install
   ```

4. Install dependencies for the client:

   ```bash
   cd client
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of the server directory with the following variables:

```plaintext
MONGODB_URI=url
PORT=3001
ORIGIN_URL=http://localhost:3000
JWT_SECRET_KEY=key
JWT_SECRET_KEY_EXPIRED_IN=1h
```

In the client directory, create a `.env` file with the following variables:

```plaintext
VITE_API_KEY=key
```

### Usage

1. Start the server:

   ```bash
   cd server
   npm run nodemon
   ```

2. Start the client:

   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the app.

## API Endpoints

- **POST /api/v1/register**: Register a new user
  - **Request Body**: 
    ```json
    {
      "username": "user123",
      "password": "securepassword",
      "city": "New York"
    }
    ```
  - **Response**: 
    ```json
    {
      "message": "✅ User successfully registered!",
      "data": {...},
      "JWToken": "your_jwt_token"
    }
    ```

- **POST /api/v1/login**: Log in an existing user
  - **Request Body**: 
    ```json
    {
      "username": "user123",
      "password": "securepassword"
    }
    ```
  - **Response**: 
    ```json
    {
      "message": "✅ User logged in successfully",
      "data": {...},
      "JWToken": "your_jwt_token"
    }
    ```

- **GET /api/v1/**: Get user profile (protected)
  - **Headers**: 
    ```plaintext
    Authorization: Bearer your_jwt_token
    ```

- **POST /api/v1/logout**: Log out the user

## Authentication

This app uses JWT for authentication. Upon successful login or registration, a token is generated and stored in cookies. The token is required for accessing protected routes, such as fetching user profiles.

## Deployment

For production deployment, consider using services like Heroku, Vercel, or AWS. Follow these steps for deployment:

1. **Prepare for Production**:
   - Ensure that your environment variables are set up correctly in your hosting environment.
   - Set up MongoDB Atlas (if using) and adjust the connection string in your `.env` file.

2. **Deploying the Server**:
   - Use Heroku CLI or another hosting provider to deploy the server.
   - Ensure that the server listens to the appropriate port (e.g., `process.env.PORT`).

3. **Deploying the Client**:
   - Build the client application using Vite:
     ```bash
     npm run build
     ```
   - Serve the static files from the `dist` directory using a web server or host on platforms like Vercel.

## Testing

To ensure your application works as expected, consider implementing tests using tools like Jest and Supertest for the backend and React Testing Library for the frontend.

## Troubleshooting

- **Cannot connect to MongoDB**: Check your database connection string in the `.env` file. Ensure your MongoDB server is running or your Atlas cluster is accessible.
- **JWT Errors**: Ensure that you have the correct JWT_SECRET_KEY set in your environment variables.
- **CORS Issues**: Verify that your CORS settings are correct, and your front-end application is allowed to access the backend.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-YourFeature`).
5. Open a Pull Request.