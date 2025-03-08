# MEAN Stack Application

## Overview

This is a MEAN stack application, which uses MongoDB, Express.js, Angular, and Node.js to create a full-stack web application.

## Technologies

- **MongoDB**: NoSQL database used to store application data
- **Express.js**: Web application framework for Node.js
- **Angular**: Front-end web application framework
- **Node.js**: JavaScript runtime environment

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install server dependencies

   ```
   npm install
   ```

3. Install client dependencies

   ```
   cd client
   npm install
   cd ..
   ```

4. Configure environment variables
   - Create a `.env` file in the root directory
   - Add necessary environment variables (MongoDB URI, JWT secret, etc.)

### Running the Application

1. Start the server

   ```
   npm start
   ```

2. Start the Angular client

   ```
   cd client
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`

## Project Structure

- `/client` - Angular front-end application
- `/server` - Node.js/Express back-end application
- `/models` - MongoDB data models
- `/routes` - API routes
- `/controllers` - Request handlers
- `/middleware` - Custom middleware functions

## API Endpoints

- `GET /api/items` - Get all items
- `POST /api/items` - Create a new item
- `GET /api/items/:id` - Get a specific item
- `PUT /api/items/:id` - Update a specific item
- `DELETE /api/items/:id` - Delete a specific item

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
