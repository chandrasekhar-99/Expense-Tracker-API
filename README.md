1.Setup and Run Instructions:

-> clone the project by run the following commands
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
  II . GET /transactions
  III . GET /transactions/:id
  IV . PUT /transactions/:id
  V . DELETE /transactions/:id
   
