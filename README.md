# RLX - User Management System 🔥

A robust Node.js backend application built with Express and TypeScript, featuring comprehensive user authentication, authorization, and management capabilities.

## ✨ Features

- **Authentication & Authorization**
  - User registration and login
  - JWT-based authentication
  - Role-based access control (Admin & User)
  - Email verification workflow

- **User Management**
  - User CRUD operations
  - Block/Unblock users
  - Advanced search and filtering
  - Pagination support

- **Admin Dashboard**
  - User analytics
  - System statistics
  - User activity monitoring

- **Email Notifications**
  - Welcome emails for new users
  - SMTP integration
  - Template-based email system

- **File Upload**
  - Cloudinary integration
  - Multer middleware for file handling

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **File Upload:** Multer + Cloudinary
- **Email:** Nodemailer (SMTP)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account
- SMTP email service (Gmail recommended)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rlx.git
   cd rlx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   # See .env.example for reference
   ```

4. **Run the application**
   
   Development mode:
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm run build
   npm start
   ```

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port number |
| `DATABASE` | MongoDB connection string |
| `NODE_ENV` | Environment (development/production) |
| `BCRYPT_SALT` | Salt rounds for password hashing |
| `JWT_ACCESS_TOKEN` | Secret key for access token |
| `JWT_ACCESS_EXPIRES` | Access token expiration time |
| `JWT_REFRESH_TOKEN` | Secret key for refresh token |
| `JWT_REFRESH_EXPIRES` | Refresh token expiration time |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username |
| `SMTP_FROM` | Email sender address |
| `SMTP_PASS` | SMTP password |
| `CLUDINARY_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

## 📚 API Endpoints

### Authentication Routes

```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - User login
POST   /api/auth/logout      - User logout
```

### User Routes

```
GET    /api/users/           - Get all users (Admin only)
GET    /api/users/get-single - Get single user
PUT    /api/users/update     - Update user profile
POST   /api/users/block/:userId    - Block user (Admin only)
POST   /api/users/un-block/:userId - Unblock user (Admin only)
```

### Admin Routes

```
GET    /api/admin/           - Get admin analytics (Admin only)
```

## 🏗️ Project Structure

```
src/
├── config/          # Configuration files (multer, cloudinary, etc.)
├── errors/          # Custom error classes
├── middlewares/     # Express middlewares (auth, validation, etc.)
├── modules/
│   ├── auth/        # Authentication module
│   ├── user/        # User module
│   └── analysis/    # Analytics module
├── utils/           # Utility functions
└── app.ts           # Express app setup
```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Request validation
- Environment variable protection

## 📧 Email Templates

The application includes a template-based email system for sending:
- Welcome emails to new users
- Account verification emails
- Password reset emails (if implemented)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- Email: samiohasan6@gmail.com

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- TypeScript handbook

---

Made with ❤️ by Samio Hasan
