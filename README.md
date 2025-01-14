# Rent Payment Platform

## About the Project

This project is a **Rent Payment Platform** designed as a landing page for rent payments. The platform provides onboarding screens for new users and a dashboard to display payment details. It's built to provide a seamless user experience for managing and tracking rent-related activities.

This project is developed using the following technologies:

-   **React.js** (for building the user interface)
-   **Vite** (for fast development and build tooling)
-   **Tailwind CSS** (for efficient and responsive styling)

---

## Features

1. **Landing Page**:

    - Overview of the platform.
    - Testimonials section featuring carousel functionality.

2. **Onboarding Screens**:

    - Signup and Login forms with validation.
    - OTP on vai phone number
    - User details form
    - Payment processing form
    - Error handling and user feedback.

3. **Dashboard**:

    - Payment details and account management.
    - Analytics and charts for payment tracking.
    - User-friendly modals like `AccountModal`, `PauseAccountModal` and `CloseAccount` for account actions.

4. **Responsive Design**:
    - Fully responsive for desktop, tablet, and mobile views.

---

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

-   **Node.js** (>= 16.x recommended)
-   **npm** or **yarn**

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/waleedikhlaq001/react-rentr.git
    cd react-rentr
    ```

2. Install dependencies:

    ```bash
    npm install
    # or using yarn
    yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or using yarn
    yarn dev
    ```

4. Open your browser and visit:
    ```
    http://localhost:5173/
    ```

---

## Project Structure

```
├── src
│   ├── assets       # Contains images and static assets
│   ├── components   # Reusable React components
│   ├── pages        # Different pages like Login, Signup, Dashboard
│   ├── App.jsx      # Main application file
│   ├── main.jsx     # Application entry point
├── public           # Static files for the app
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies and scripts
```

---

## Key Components

1. **Navbar**

    - Central navigation across the application.
    - Links to Signup, Login, and Dashboard.

2. **Modals**

    - A generic modal system for actions like pausing accounts.
    - Example: `PauseAccountModal` for confirming account pause actions.

3. **Testimonial Section**

    - Carousel with user testimonials, built using `react-slick`.

4. **Forms**
    - Signup and Login forms with client-side validation.
    - OTP on vai phone number
    - User details form
    - Payment processing form
    - Error messages for invalid inputs.

---

## Styling

The project uses **Tailwind CSS** for styling, ensuring:

-   A consistent and modern design.
-   Flexibility for custom styles when required.

Key styling utilities are defined in `tailwind.config.js`.

---

## Build and Deployment

To create a production-ready build:

```bash
npm run build
# or using yarn
yarn build
```

The output will be located in the `dist/` directory. You can deploy this directory to your hosting provider.

---

## Libraries Used

1. **React.js**

    - Component-based architecture for a scalable UI.

2. **Vite**

    - Faster development with minimal configuration.

3. **Tailwind CSS**

    - Utility-first styling for rapid UI development.

4. **react-slick**
    - Carousel functionality for testimonials.

---

## Future Enhancements

1. **Integrate Backend**: Add APIs for user authentication and payment management.

---

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/new-feature
    ```
3. Commit changes and push the branch:
    ```bash
    git push origin feature/new-feature
    ```
4. Create a Pull Request.

---
