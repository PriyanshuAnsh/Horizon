# Horizon Banking Application

Horizon is a modern banking application designed to simplify financial management. Built with a focus on clean, responsive design and seamless user experience, it provides users with real-time access to their banking data and actionable insights through advanced visualization tools.

![Dashboard Screenshot](./path-to-your-image.png)

## Features

- **Real-Time Banking Data**: Securely access and display up-to-date banking data using the Plaid API.
- **Advanced Data Visualization**: Leverage Chart.js for intuitive graphs and spending insights.
- **User-Friendly Interface**: Designed with React.js, Next.js, and JSX to ensure a seamless, responsive experience.
- **Scalable Backend**: Utilized Appwrite for efficient and robust database management.
- **Secure Deployment**: Deployed on Vercel for reliable and high-performance hosting.

## Technologies Used

- **Frontend**:
  - TypeScript
  - React.js
  - Next.js
  - JSX
  - Chart.js
- **Backend**:
  - Appwrite (Database Management)
- **APIs**:
  - Plaid API (Real-Time Banking Data)
- **Hosting**:
  - Vercel (Deployment Platform)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/horizon-banking-app.git
   cd horizon-banking-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_PLAID_CLIENT_ID=your_plaid_client_id
     NEXT_PUBLIC_PLAID_SECRET=your_plaid_secret
     APPWRITE_PROJECT_ID=your_appwrite_project_id
     APPWRITE_ENDPOINT=your_appwrite_endpoint
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- **Connect Bank Accounts**: Securely link your accounts using the Plaid API.
- **Track Transactions**: View recent transactions with categorized insights.
- **Visualize Spending**: Analyze your spending habits through interactive charts.

## Project Structure

```
Horizon
├── components
├── pages
├── public
├── styles
├── utils
└── ...
```

## License

This project is licensed under the [MIT License](./LICENSE).

## Acknowledgements

- [Plaid API](https://plaid.com/)
- [Appwrite](https://appwrite.io/)
- [Chart.js](https://www.chartjs.org/)
- [Vercel](https://vercel.com/)
