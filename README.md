# FullStack ToDo App

This is a simple task managing application where users can add a list of 'todo' items and tick them off when its completed.  Everything is saved in a database(MongoDB) so the items you add, edit or delete are persistent when refreshing the page or relaunching the site on localhost:3000.

For me this was an intro into full stack development, where I wanted to learn more about **CRUD apps**, **RESTful APIs** and **Databases**. This project definitely helped clear me understand the basics of these concepts, particular the backend side of development, where I had most of my confusion. I also learnt some very basic concepts of security using **dotenv** and **.gitignore**, to abstract the DB connection string (which contains private username/pass for the database) away from the public users, whilst still being able to use it to make connections to the DB.

## To Run App

1. Start by cloning this repository using either of the following: 
	> git clone git@github.com:niranjan-gurung/Todo-App.git (using SSH)
	> git clone https://github.com/niranjan-gurung/Todo-App.git (using HTTPS)

2. Install all the dependencies
	> npm install 
	
3. For this particular project, you will need a MongoDB account and a database setup along with its connection string thats specific for your account. If you only want to run the project locally, then follow 3a. However, if you want to publicly host the project on your own repository, follow step 3b. 

	**3a**
	***The parts in bold is where you will insert the specifics for your database.***
	Your connection string should look similar to this:
	<pre>MONGO_URI=mongodb+srv://<b>username</b>:<b>password</b>@todoapp.4luhgwv.mongodb.net/<b>name_of_your_db</b>?retryWrites=true&w=majority</pre>
	
	Once you have the database setup, go to the server.js file and make the following change on line 8 + 9:
	```js
	// change from 'process.env.MONGO_URI' to your 'connection string':
	const DB_URI = MONGO_URI=mongodb+srv://<username>:<password>@todoapp.4luhgwv.mongodb.net/<name_of_your_db>?retryWrites=true&w=majority;
	// change from 'process.env.PORT' to whatever port you require (like 3000):
	const PORT = 3000;
	```
		
	**3b**

	If for any reason you want to push this project into your own remote repository, ***make sure the project is private***. If you want it to be a public repo, please make the following changes to not leak your sensitive database information:
	- Create a .env file at the root of the project directory
	- Inside the .env file, add these two variables:
	<pre> - MONGO_URI=mongodb+srv://<b>username</b>:<b>password</b>@todoapp.4luhgwv.mongodb.net/<b>name_of_your_db</b>?retryWrites=true&w=majority
	- PORT=3000</pre>
	
	Parts in bold is where you will insert information specific to you from your connection string. The port number can be kept or changed to anything you like.
	
4. Run the server
	> npm run dev

5. Go to [http://localhost:3000/](http://localhost:3000/) to see the application!