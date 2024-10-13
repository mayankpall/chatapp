# ChatNest 

This is a real-time chat application built with the MERN stack, using **Socket.io** for real-time communication and **TailwindCSS** + **Daisy UI** for a responsive, modern user interface. The app is ideal for dynamic teams where members can be added or removed frequently, such as in temporary project environments.

### Live Demo
Check out the live app here: [ChatNest](https://chat-app-tjsd.onrender.com)

## Key Benefits

- **Automatic Contact Management**: New users are added automatically, and old users are removed from the contacts list without manual updates.
- **Privacy by Design**: No personal information is shared directly between users. The app updates the contact list automatically to reflect only active users, ensuring minimal data sharing.
- **Flexible Team Setup**: Users can join or leave projects seamlessly. This makes the app perfect for teams that need flexibility, allowing members to collaborate on projects quickly without complicated setup.

This setup ensures that teams can work together without needing to exchange personal contact information repeatedly, providing a secure and efficient communication environment for both short-term and long-term projects.


## Usage

### Testing with a Temporary Team
1. **Add New Users**: Anyone can sign up for a temporary account by providing a username and password on the sign-up page.
2. **Automatic Contact Fetching**: Upon login, the app will automatically fetch and display all online users for easy contact initiation.
3. **Remove Old Users**: Old users can be removed from the database if they are no longer needed. This will automatically update the contacts list for all current users.

### Test Credentials
To test the app without creating a new account, you can log in with the following credentials:

- **Username**: `testuser`
- **Password**: `password`

### Note for Team Use
This chat app is designed for flexibility, with the ability to easily manage temporary users. This means:
- **User data is not retained** after removal, ensuring no lingering personal data.
- **Team members can join and leave** as needed without affecting the core functionality.
  
## Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **State Management**: Zustand
- **Authentication**: JWT (JSON Web Token)



### Screenshots
#### Home Page - Chat User List

<img width="1440" alt="Screenshot 2024-10-07 at 9 18 13 PM" src="https://github.com/user-attachments/assets/7815005e-e287-46fb-a6b4-9f86529e6d2b">

#### Real-Time Messaging
<img width="1440" alt="Screenshot 2024-10-07 at 9 11 15 PM" src="https://github.com/user-attachments/assets/d86e1f3d-a634-46cb-b422-05abe4021ea7">
<img width="346" alt="Screenshot 2024-10-07 at 9 12 00 PM" src="https://github.com/user-attachments/assets/9cc2f315-a517-475e-b2d9-731893d8b3fd">


#### Login Page
<img width="1440" alt="Screenshot 2024-10-07 at 9 18 13 PM" src="https://github.com/user-attachments/assets/601a3710-725f-43a7-b424-98578f86f678">

#### Signup Page
<img width="1440" alt="Screenshot 2024-10-07 at 9 18 20 PM" src="https://github.com/user-attachments/assets/74b87310-3c02-46e1-a927-9133e53a8f94">


## Features


- **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI
- **Authentication & Authorization**: Secure login and sign-up system using JWT tokens.
- **Real-Time Messaging**: Utilizes Socket.io for fast, bidirectional communication.
- **Online User Status**: Real-time online/offline status updates with Socket.io and React Context.
- **Global State Management**: Managed with Zustand for a smoother experience.
- **Error Handling**: Comprehensive error handling on both the server and client sides.
- **Temporary Team Setup**: Add and remove users with ease, without retaining old user data, allowing flexibility for new team members to join and interact instantly.
- **Automatic Contact Fetching**: Upon login, users can see all other active users and initiate chats immediately.

## Installation

To get a local copy of this project up and running, follow these steps.

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB (You can use a local MongoDB instance or MongoDB Atlas for the database).

### Installation Steps


2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` folder and add the following variables:
   ```plaintext
   MONGODB_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

5. **Start the application:**

   In the `server` directory, start the backend server:
   ```bash
   npm start
   ```

   In the `client` directory, start the frontend client:
   ```bash
   npm run dev
   ```

6. **Access the application:**

   Open your browser and go to `http://localhost:3000` to use the app.



## Contributing

If you’d like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


