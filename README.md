

---


# Employee Management System

A simple Employee Management System built using React.js for the front end, Node.js for the backend, and MongoDB for the database.

## Features

- Allows users to add employees with details such as First Name, Last Name, Email, Phone, and Address.
- Saves employee data to a MongoDB database via a Node.js backend.
- Displays a list of all employees below the form.


### Click on play button see Demo:


https://github.com/Ankitsingh160/PandoIndia/assets/76763750/474b9717-aa4e-4aff-8ddc-b04b4db0495f


## Technologies Used

- React.js
- Node.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible via a URL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankitsingh160/PandoIndia.git
   ```

2. Navigate to the project directory:

   ```bash
   cd employee-management-system
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `backend` directory.
   - Add the MongoDB connection URI:

     ```
     MONGODB_URI=your-mongodb-connection-uri
     ```

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Fill out the employee details in the form.
2. Click the "Add Employee" button to save the employee record.
3. The newly added employee will appear in the list below the form.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

