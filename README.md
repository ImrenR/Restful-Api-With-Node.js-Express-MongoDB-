
#  Simple Blog Post API (Node.js + Express + MongoDB)

A minimal RESTful API built with **Node.js**, **Express**, and **MongoDB** to perform basic CRUD operations on blog posts.

---

##  Features

- Create a blog post ✅
- Retrieve all posts ✅
- Get a specific post by ID ✅
- Delete a post ✅
- JSON-based API using Express ✅
- MongoDB with Mongoose ✅

---


##  Getting Started

### Install dependencies 

npm install

### Set up your .env file

DB_CONNECTION=mongodb+srv://yourUser:yourPassword@yourCluster.mongodb.net/yourDB?retryWrites=true&w=majority
PORT=8000

### Run the server

nodemon app.js

### Your server should now be running at:
http://localhost:8000

### API Endpoints
Method	  Endpoint	       Description
GET	     /posts	           Get all posts
POST 	   /posts	           Create a new post
GET	     /posts/:postId    	Get a post by ID
DELETE 	 /posts/:postid	   Delete a post by ID

### Built With 

Node.js

Express.js

MongoDB

Mongoose

