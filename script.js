// Mock users data (hardcoded for testing)
const usersData = [
  {
    id: 1,
    username: "johndoe",
    password: "password123",
    balance: 5000,
    transactions: [
      { id: 1, type: "deposit", amount: 5000, date: "2024-12-01" }
    ]
  },
  {
    id: 2,
    username: "janesmith",
    password: "password123",
    balance: 3000,
    transactions: [
      { id: 1, type: "deposit", amount: 3000, date: "2024-12-02" }
    ]
  }
];

let currentUser = null;

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if user exists
  currentUser = usersData.find(
    user => user.username === username && user.password === password
  );

  if (currentUser) {
    // Successful login
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userDashboard").style.display = "block";
    document.getElementById("userName").innerText = currentUser.username;
    document.getElementById("balance").innerText = currentUser.balance;
    displayTransactions();
  } else {
    // Failed login
    alert("Invalid credentials! Please try again.");
  }
}

// Display user transactions
function displayTransactions() {
  const transactionHistory = document.getElementById("transactionHistory");
  transactionHistory.innerHTML = ""; // Clear previous transactions

  currentUser.transactions.forEach(tx => {
    const listItem = document.createElement("li");
    listItem.textContent = `${tx.type} of $${tx.amount} on ${tx.date}`;
    transactionHistory.appendChild(listItem);
  });
}

// Logout function
function logout() {
  currentUser = null;
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("userDashboard").style.display = "none";
}
