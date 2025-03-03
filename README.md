# 🌐 DataNest: MongoDB & Node.js Project
---

Welcome to DataNest, my first go-to project using the integration of **MongoDB** and **Node.js** using **Postman**! This will be a simple API-REST app in which I will create a MongoDB database, create a server with NodeJS, use a RESTful client and use a MVC model🚀 This repository demonstrates how to build a robust backend application using modern JavaScript technologies. Whether you're a beginner like me or an experienced developer, this project is designed to help you understand the fundamentals and advanced concepts of working with databases and backend development.

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🔍 Requirement](#-features)
- [📦 Technologies Used](#-technologies-used)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🎥 Demo](#-demo)
- [🏁 How to Start the App](#-how-to-start-the-app)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

✔️ RESTful API built with **Express.js**  
✔️ CRUD operations (Create, Read, Update, Delete) for managing data  
✔️ MongoDB database integration with **Mongoose**  
✔️ Clean and modular code structure for scalability 🛠️  
✔️ Error handling and middleware implementation  
✔️ Easy-to-follow setup for quick deployment  

---

## Prerequisites

- Node.js >=18.12

---

## 📦 Technologies Used

| Technology      | Description                          |
|------------------|--------------------------------------|
| **Node.js**     | JavaScript runtime for server-side   |
| **Express.js**  | Web framework for building APIs      |
| **MongoDB**     | NoSQL database for data storage      |
| **Mongoose**    | ODM library for MongoDB integration  |

---

## ⚙️ Installation

Follow these steps to get started with DataNest on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ornella-Gigante/DataNest_MongoDB_NodeJS.git
   cd DataNest_MongoDB_NodeJS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Run the application**:
   ```bash
   cd DataNest_MongoDB_NodeJS
   npm start
   ```

5. Open your browser or API client (like Postman) and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🚀 Usage

This project provides a RESTful API that allows you to perform CRUD operations on your data. Below are some example endpoints:

### 📌 Endpoints:

#### 1️⃣ **Get all items**
```http
GET /api/items
```

#### 2️⃣ **Get a single item by ID**
```http
GET /api/items/:id
```

#### 3️⃣ **Create a new item**
```http
POST /api/items
```
Body (JSON):
```json
{
  "name": "Sample Item",
  "description": "A brief description of the item"
}
```

#### 4️⃣ **Update an item**
```http
PUT /api/items/:id
```
Body (JSON):
```json
{
  "name": "Updated Item Name"
}
```

#### 5️⃣ **Delete an item**
```http
DELETE /api/items/:id
```

---

## 📂 Project Structure

```plaintext
DataNest_MongoDB_NodeJS/
├── models/          # Database schemas (Mongoose models)
├── routes/          # API route handlers
├── controllers/     # Business logic for routes
├── middleware/      # Middleware functions (e.g., error handling)
├── config/          # Configuration files (e.g., database connection)
├── .env.example     # Example environment variables file
├── server.js        # Entry point of the application
└── README.md        # Project documentation (this file!)
```

---

## 🎥 Demo

🎉 Check out the live demo of this project! You can interact with the API endpoints directly using tools like Postman or curl.

🚀 Demo URL: [https://vimeo.com/1051126415](https://vimeo.com/1051126415) 

---

## 🏁 How to Start the App

Follow these steps to set up and run the application:

### 1️⃣ Start MongoDB  
Open a terminal and run the following command to start the MongoDB server:
```bash
mongod
```
Make sure MongoDB is installed and running on its default port (27017).

### 2️⃣ Install Dependencies  
Navigate to the project folder in your terminal and install all required dependencies:
```bash
npm install
```

### 3️⃣ Start the Application  
Once the dependencies are installed, start the server using:
```bash
npm start
```
This will run the app using `nodemon`, which automatically restarts the server when changes are detected.

### 4️⃣ Access the API  
The server will be running on:
```
http://localhost:3700
```
You can now test the API endpoints using tools like Postman or curl.

---

## 🤝 Contributing

We ❤️ contributions! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Feel free to report issues or suggest features by opening an issue in this repository.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### 🌟 Show Your Support!

If you found this project helpful, please give it a ⭐ on GitHub! It helps others discover it too.

Happy coding! 💻✨
