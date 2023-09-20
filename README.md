Apna Bazzar - MERN Stack Ecommerce Project
![image](https://github.com/mayank8029/Apana-Bazar/assets/90167664/1d64c2f5-1172-4f70-9fed-3f3f0062d128)

Apna Bazzar

Apna Bazzar is a full-stack ecommerce project built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a robust and scalable solution for building an online marketplace with features like product listing, user authentication, shopping cart functionality, and more.

Technologies Used
Frontend: React.js Library, React Redux, React Router, Google Fonts, Material UI.
Backend: Express.js, MongoDB Atlas (online database), Cloudinary (cloud-based image storage).
Authentication: JSON Web Token (JWT).
Password Recovery: Nodemailer.
Password Hashing: Bcrypt.

Project Structure:
The project follows a modular structure to keep the codebase organized and maintainable. Here's an overview of the main directories and files:

/frontend: Contains the frontend codebase built with React.js. This directory includes components, routes, Redux store, and other related files for the user interface.
/backend: Contains the backend codebase written in Express.js. This directory includes routes, controllers, models, middleware, and other server-side logic.
/frontend/public: Contains static files that are served to the client-side application, such as images, CSS, and JavaScript files.
/backend/config: Contains configuration files for database connections, authentication, and other environment-specific settings.
/backend/utils: Contains utility functions and modules used across the application.
Getting Started
To get started with the Apna Bazzar project, follow these steps:

Clone the repository: git clone https://github.com/Swagat-Satprem-Jena/ApnaBazzar_Dev
Navigate to the project directory: cd ApnaBazzar_Dev
Install dependencies:
For the frontend, navigate to the /frontend directory and run npm install.
For the backend, navigate to the / directory and run npm install.
Set up the database:
Create a MongoDB Atlas account and set up a new database.
Update the /config/database.js file with your database connection details.
Set up Cloudinary:
Create a Cloudinary account and obtain your API credentials.
Update the /config/server.js file with your Cloudinary API details.
Set up environment variables:
Create a config.env file in the /backend/config directory.
Define the required environment variables (e.g., PORT, DB_URI, JWT_SECRET, STRIPE_API_KEY, STRIPE_SECRET_KEY, JWT_EXPIRE, COOKIE_EXPIRE, SMTP_SERVICE, SMTP_MAIL, SMTP_PASSWORD, SMTP_SERVICE_HOST, SMTP_SERVICE_PORT, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET) in the config.env file.
Start the development server:
For the frontend, navigate to the /frontend directory and run npm start.
For the backend, navigate to the / directory and run npm run dev.
Contributing
Contributions to Apna Bazzar are welcome! If you encounter any issues or have suggestions for improvements, please create an issue on the GitHub repository. Pull requests are also encouraged.

Please make sure to follow the existing code style and conventions. Include relevant test cases for your changes and ensure all tests pass before submitting a pull request.

Acknowledgements
Apna Bazzar relies on the following libraries, frameworks, and services:

React.js
Redux
React Router
Google Fonts
Material UI
Express.js
MongoDB Atlas
Cloudinary
JSON Web Token (JWT)
Nodemailer
Bcrypt
We express our gratitude to the developers and contributors of these technologies for providing such amazing tools for building modern web applications.

Contact
For any inquiries or further information, please contact the project maintainer:

Name: Swagat Satprem Jena

Email: swagatjena12@gmail.com

Name: Mayank Jhanwar

Email: mayankjhanwar29@gmail.com

We appreciate your interest and support for Apna Bazzar. Happy coding!
