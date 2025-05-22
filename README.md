# Expense Tracker Backend

This is a simple backend for an Expense Tracker application. It allows users to add transactions, view all transactions, delete transactions, and get their balance.

## Features

- Add a new user
- Add a transaction for a user
- Get all transactions for a user
- Edit a transaction
- Delete a transaction
- Get the balance for a user

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:

   ```sh
   npm install
   ```

4. Make sure MongoDB is running locally on port 27017.
5. Create a `.env` file in the `backend` directory with the following content:

   ```
   PORT=3000
   ```

### Running the Server

```sh
node server.js
```

The server will start on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### User APIs

- **Add User**
  - `POST /user/adduser`
  - Body:
    ```json
    {
      "name": "username",
      "password": "password"
    }
    ```

### Transaction APIs

- **Add Transaction**
  - `POST /trans/addTrans`
  - Body:
    ```json
    {
      "userName": "username",
      "amount": 100,
      "Type": "credit",
      "category": "food",
      "description": "Lunch"
    }
    ```

- **Get All Transactions**
  - `POST /trans/getAll`
  - Body:
    ```json
    {
      "userName": "username"
    }
    ```

- **Edit Transaction**
  - `POST /trans/edit`
  - Body:
    ```json
    {
      "userName": "username",
      "index": 0,
      "amount": 200,
      "Type": "debit",
      "category": "shopping",
      "description": "Clothes"
    }
    ```

- **Delete Transaction**
  - `POST /trans/delete`
  - Body:
    ```json
    {
      "userName": "username",
      "index": 0
    }
    ```

- **Get Balance**
  - `POST /trans/balance`
  - Body:
    ```json
    {
      "userName": "username"
    }
    ```

## Notes

- All endpoints expect JSON bodies.
- Transactions are stored per user.
- The balance is calculated as the sum of all credits minus the sum of all debits.

---

Made with Node.js, Express, and MongoDB.
