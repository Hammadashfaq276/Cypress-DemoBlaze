This project is an end-to-end automation testing framework developed for the DemoBlaze e-commerce web application, covering both UI Automation and API Automation using Cypress.

The framework follows Page Object Model (POM) design and validates both frontend behavior and backend API responses, following real-world automation practices.
This project is created for learning, practice, and SDET portfolio purposes.

🛠️ Tech Stack & Tools

Automation Tool: Cypress

Programming Language: JavaScript

Test Types: UI Automation & API Automation

Framework Design: Page Object Model (POM)

Reporting: Cypress HTML Reports

Version Control: Git & GitHub

IDE: VS Code

📂 Project Structure
DemoBlaze-Cypress-Automation
│
├── cypress
│   ├── e2e
│   │   ├── ui-tests
│   │   │   ├── Login.spec.js
│   │   │   ├── Signup.spec.js
│   │   │   ├── Cart.spec.js
│   │   │   ├── Checkout.spec.js
│   │   │   ├── Contact.spec.js
│   │
│   ├── POM
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── ContactPage.js
│   │
│   ├── api-tests
│   │   ├── demoblazeApi.spec.js
│
├── cypress.config.js
└── README.md

🧩 Features Automated
🔹 UI Automation

User Signup

User Login

Add to Cart

Checkout process

Contact form validation

🔹 API Automation

User authentication APIs

Cart-related APIs

Order / checkout APIs

Response validation (status codes & data)

✅ Key Features

✔ UI automation using Cypress
✔ API automation using Cypress requests
✔ Page Object Model (POM) implementation
✔ Reusable and maintainable test code
✔ HTML execution reports
✔ Frontend + backend validation
✔ GitHub version control

🧪 UI & API Testing Strategy

UI tests validate user flows and UI behavior

API tests validate backend responses and data

Ensures end-to-end application quality

▶️ How to Run the Project

Clone the repository:

git clone https://github.com/<your-username>/<repository-name>.git


Open the project in VS Code

Install dependencies:

npm install


Run Cypress:

npx cypress open


or

npx cypress run

📊 Reporting

HTML reports are generated after test execution

Reports include:

Pass / Fail status

Execution details

👨‍💻 Author

Hammad Ashfaq
Role: SDET | Automation Test Engineer
Skills: Cypress | JavaScript | UI & API Automation | POM | Git
<img width="1899" height="918" alt="image" src="https://github.com/user-attachments/assets/a679f9e5-c9b5-48ee-9080-0ee7cf6d8bfd" />

