# capstone_project
Alpine Adventures web app consists of two parts for each frontend and backend

Frontend (Vite)
------------------
* React with javascript. 
* Meterial UI for styles.
* Axios to fetch external weather data 
* vite.config.js: Add a proxy server to allow internally fetched URLs to be proxied from front to back end. This lets us use relative URLs like /users instead of hardcoding a localhost port like http://localhost:8000/users

Backend buit with
-----------------
* Node js 
* Express js
* MongoDB - Atlas cloud based database
* NodeMailer - Email function
* Multer - for file uploading
* bcrypt for password hashing
* jwt - token support for usr authorization


DEVELOPMENT - Local
1. Clone the repos

    Clone this repo into a location to your device
    

2. Prep the environment variables

	Inside .env file you can change some environment variable as you needed. 
    DB_URI ={mongodb URL , it can be local or cloud }
	JWT_KEY={change the string here as you want}
	APP_PW={this for email send support. this pw must be your email service provider app password}
	USER={email id must here which used by the app to communicate with user}
3. Prep Database
	database and collections must be populated at first run of backend app -> by server.js

4. To Run
	Backend API 
	using you command prompt/terminal navigate to backend folder and run "npm install"
	to complete installation of all dependencies
	and once it successfully run "npm start"
	
	Frontend
	using you command prompt/terminal navigate to frontend folder and run "npm install"
	to complete installation of all dependencies
	and once it successfully run "npm run dev" / Note : This will run as development mode 


