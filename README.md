1.Setup and Run Instructions:

-> clone the project by run the following commands:

        git clone https://github.com/chandrasekhar-99/Expense-Tracker-API.git
        
        cd Expense-Tracker-API
        
        npm install (to install necessary dependencies)

2.Setup and Environmaent variables:

  PORT = 3000 (API will run on this port)
  
  MONGO_URI = mongodb://127.0.0.1:27017/transactions (replave with your actual MONOGO DB string)


  

3.Run Applicaion and Start server by using this command:
  npm start 

The server will run on http://localhost:3000 by default.


4.API Documntation:

  I . POST /transactions: Adds a new transaction

  ![image alt](https://github.com/chandrasekhar-99/Expense-Tracker-API/blob/c5fc75a3482fac34b3a31891c22292f566905811/post%20transaction.png) 
  
  II . GET /transactions

   ![image alt](https://github.com/chandrasekhar-99/Expense-Tracker-API/blob/076f646044096dda32e94f106e4e7d060a8ab576/get%20all%20transactions.png) 
   
  III . GET /transactions/:id

   ![image alt](https://github.com/chandrasekhar-99/Expense-Tracker-API/blob/076f646044096dda32e94f106e4e7d060a8ab576/get%20by%20id.png) 
   
  IV . PUT /transactions/:id

   ![image alt](https://github.com/chandrasekhar-99/Expense-Tracker-API/blob/076f646044096dda32e94f106e4e7d060a8ab576/put%20by%20id.png) 
   
  V . DELETE /transactions/:id

   ![image alt](https://github.com/chandrasekhar-99/Expense-Tracker-API/blob/076f646044096dda32e94f106e4e7d060a8ab576/delete%20by%20id.png) 

   
   
