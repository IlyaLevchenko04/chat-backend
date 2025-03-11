# Backend API with Socket.IO

## Description

This backend is built with Express.js and TypeScript, providing API routes for
messaging functionality and real-time communication using Socket.IO.

## Features

- REST API for handling messages
- WebSockets for real-time communication
- MongoDB integration
- CORS enabled
- Error handling middleware

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/IlyaLevchenko04/chat-backend
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the required environment
   variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   or build and start the production server:
   ```sh
   npm run build
   npm start
   ```

```

## API Endpoints

### Messages

#### `GET /api/messages`

- Fetch all messages.

#### `POST /api/messages`

- Create a new message.
- **Request Body:** `{ user: string, text: string }`

## WebSocket Events

| Event Name   | Description                         |
| ------------ | ----------------------------------- |
| `message`    | Sent when a new message is received |
| `connect`    | Emitted when a client connects      |
| `disconnect` | Emitted when a client disconnects   |

```
