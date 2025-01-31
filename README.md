

# Email Password Auth API using Express JSON WebToken

This project implements a RESTful API for user authentication using email and password, along with features like access token generation, password reset functionality, and protected routes using JSON Web Tokens (JWT). It's built with Node.js, Express.js, MongoDB, and Nodemailer.

## Features

- **User Registration**: Users can register with their email and password.
- **User Authentication**: Users can authenticate using their registered email and password to obtain an access token.
- **Access Token**: Access tokens are generated upon successful authentication and can be used to access protected routes.
- **Protected Routes**: Certain routes are protected and require a valid access token for access.
- **Password Reset**: Users can request a password reset by providing their email address, and a reset token will be sent to their email for verification.
- **Reset Password**: Users can reset their password by providing the reset token received via email.
- **Error Handling**: Comprehensive error handling for various scenarios.

## Installation

1. Clone the repository:

    ```bash
    https://github.com/SabarishCodeWizard/Email-Password-Auth-API-using-Express-JSON-WebToken-Access-Token-Reset-Password-.git
    ```

2. Install dependencies:

    ```bash
   
    npm install
    ```

3. Set up environment variables:
   
    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    SECRET_KEY=<your-secret-key>
    ```

    Replace `<your-mongodb-uri>` with your MongoDB connection URI and `<your-secret-key>` with a secret key for JWT token generation.

4. Start the server:

    ```bash
    npm start
    ```

5. Access the API at `http://localhost:3000`.

## API Endpoints

- **POST /api/user**: Register a new user.
- **POST /api/authenticate**: Authenticate user and generate access token.
- **GET /api/data**: Access protected data (requires authentication).
- **POST /api/reset**: Request password reset.
- **POST /api/reset**: Reset password using reset token.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Nodemailer




