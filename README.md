<!-- steps to run the application   -->

# Steps to run the application

    []: # 1. Clone or download the repository

    []: # 2. Naviagte to project directory

    []: # 3. Setting up enviroment variable's
                # First create a new mongoDB database using mongoDB atlas, https://www.mongodb.com/atlas/database
                # Using the mongoDB atlas, create a new cluster and get the connection string from the cluster
                # Create a .env file in the server directory and add the following
                    # MONGO_PASSWORD = <your password>
                    # MONGO_STRING = <your mongoDB connection string>
                    # PORT = <your port number> || 8001
                    # NODE_ENV = development

    []: # 4. Install dependencies
                    # Navigate to server directory by using commamd "cd .\server\"
                    # Run `npm install`


    []: # 5. Run the application
                    # Navigate to server directory by using commamd "cd .\server\"
                    # Run `npm run watch` to start your server locally
                    # The application will run on port 8001
                    # visit http://localhost:8001/api/ping
