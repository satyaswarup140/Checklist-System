# Checklist System

The **Checklist System** is a Node.js application that evaluates various rules against input data and displays the results in a user-friendly dashboard. It fetches application data from an external API and processes it to validate predefined rules.

## Features

- Fetches application data from an external API.
- Evaluates a series of checklist rules, including:
  - Valuation fee payment status.
  - UK residency status.
  - Risk rating evaluation.
  - Loan-to-Value (LTV) calculation.
- Displays the results on a dynamically rendered dashboard.
- Modular architecture for scalability.

## Technologies Used

- **Backend**: Node.js, Express.js
- **View Engine**: EJS (Embedded JavaScript)
- **API Requests**: Axios
- **Version Control**: Git
- **Package Manager**: npm
- **Hosting**: Local or any Node.js-supported hosting platform.

## Prerequisites

Before running this project, ensure you have the following installed:

1. [Node.js](https://nodejs.org/)
2. [Git](https://git-scm.com/)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/satyaswarup140/Checklist-System.git
   cd Checklist-System
2. Install Dependencies:
   npm install
3. Run the Application:
   npm start
The application will run on http://localhost:4000 by default.

## Project Structure
   Checklist-System/
├── controllers/             # Contains logic for fetching data and rendering the dashboard
│   └── controllerChecklist.js
├── routes/                  # Express route definitions
│   └── checklist.js
├── views/                   # EJS templates for rendering the frontend
│   └── dashboard.ejs
├── public/                  # Static files (CSS, JS, images)
├── .gitignore               # Files and directories to be ignored by Git
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── app.js                   # Main application entry point

## Checklist Rules
   The following rules are evaluated:
   1. Valuation Fee Paid: isValuationFeePaid must be true.
   2. UK Resident: isUkResident must be true.
   3. Risk Rating Medium: riskRating must be "Medium".
   4. Loan-to-Value (LTV):
      . Formula: (Loan Required / Purchase Price) * 100.
      . Should be below 60%.
      
## API Integration
   The application fetches data from an external API. Ensure the API URL in controllerChecklist.js is correct.
   Current API URL:
   const API_URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
   
## How to Use
   1. Open your browser and navigate to http://localhost:3000.
   2. The dashboard displays the evaluation results of the checklist rules.
      
## Contribution
   Contributions are welcome! To contribute:
   1. Fork the repository.
   2. Create a new branch:
      git checkout -b feature-name
   3. Commit your changes:
      git commit -m "Add some feature"
   4. Push to the branch:
      git push origin feature-name
   5. Open a pull request.
      
# License
  This project is licensed under the MIT License. See the LICENSE file for details.

# GitHub Repository
  The source code for this project is available on GitHub: Checklist System.

# Author
  Satyaswarup Das
  GitHub Profile
  
### Instructions to Use
- Save the above content in a file named `README.md` in the root of your project directory.
- Commit and push the file to your repository:
  ```bash
  git add README.md
  git commit -m "Add README file"
  git push origin master

