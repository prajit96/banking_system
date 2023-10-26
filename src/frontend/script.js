// Retrieve data from localStorage or use a default empty array if no data exists
const usersDB = JSON.parse(localStorage.getItem("usersDB")) || [];

let currentUser = null;

function saveDataToLocalStorage() {
    // Save data to localStorage whenever there is a change
    localStorage.setItem("usersDB", JSON.stringify(usersDB));
}

function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Check if the username is already taken
    if (usersDB.some(user => user.username === username)) {
        alert("Username already exists. Please login or choose a different username.");
        showLoginForm();
        return;
    }

    // Create a new user
    const newUser = { username, password, balance: 500, transactions: [] };
    usersDB.push(newUser);
    saveDataToLocalStorage();

    alert("Signup successful! You can now log in.");
    showLoginForm();
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Check if the provided credentials match any user in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("usersDB")) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        displayUserDetails();
        showAccountPage();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

function displayUserDetails() {
    document.getElementById("loggedInUsername").textContent = currentUser.username;
    document.getElementById("balanceAmount").textContent = `$${currentUser.balance.toFixed(2)}`;
    displayTransactions();
}

function showAccountPage() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
}


function deposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid deposit amount.");
        return;
    }

    currentUser.balance += depositAmount;
    currentUser.transactions.push({ type: "deposit", amount: depositAmount, timestamp: new Date() });
    document.getElementById("balanceAmount").textContent = `$${currentUser.balance.toFixed(2)}`;
    displayTransactions();
    document.getElementById("depositAmount").value = "";
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid withdrawal amount.");
        return;
    }

    if (currentUser.balance < withdrawAmount) {
        alert("Insufficient balance.");
    } else {
        currentUser.balance -= withdrawAmount;
        currentUser.transactions.push({ type: "withdrawal", amount: withdrawAmount, timestamp: new Date() });
        document.getElementById("balanceAmount").textContent = `$${currentUser.balance.toFixed(2)}`;
        displayTransactions();
    }

    document.getElementById("withdrawAmount").value = "";
}

function logout() {
    currentUser = null;
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("accountPage").style.display = "none";
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

function displayTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";
    currentUser.transactions.forEach(transaction => {
        const listItem = document.createElement("li");
        const transactionType = transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1);
        listItem.textContent = `${transactionType}: $${transaction.amount.toFixed(2)} (${transaction.timestamp.toLocaleString()})`;
        transactionList.appendChild(listItem);
    });
}
function updateUserData() {
    saveDataToLocalStorage();
    displayUserDetails();
    displayTransactions();
}