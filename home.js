// Sample transaction history data (replace this with your actual transaction history)
const transactionHistory = [];

// Function to display transaction history
function displayTransactionHistory() {
    const transactionList = document.getElementById('transaction-history');
    transactionList.innerHTML = ''; // Clear existing content

    transactionHistory.forEach(transaction => {
        const listItem = document.createElement('li');
        if (transaction.type === 'Withdrawn') {
            listItem.textContent = `${transaction.type}: ${transaction.amount} Naira (Bank Name: ${transaction.bankName}, Account Number: ${transaction.accountNumber}, Account Name: ${transaction.accountName})`;
        } else {
            listItem.textContent = `${transaction.type}: ${transaction.amount} Naira`;
        }
        transactionList.appendChild(listItem);
    });
}

// Function to update balance
function updateBalance(amount) {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = amount;
}

// Function to simulate watching ads and earning money
function watchAds() {
    const earning = 50; // Set earning amount to 50 Naira
    updateBalance(parseInt(document.getElementById('balance').textContent) + earning);
    transactionHistory.push({ type: 'Earned', amount: earning });
    displayTransactionHistory();
}

// Function to handle withdrawal
function withdraw() {
    const withdrawalAmount = parseInt(prompt("Enter the amount you want to withdraw (minimum 1000 Naira):"));
    
    if (withdrawalAmount >= 1000 && withdrawalAmount <= parseInt(document.getElementById('balance').textContent)) {
        const bankName = prompt("Enter your Bank Name:");
        const accountNumber = prompt("Enter your Account Number:");
        const accountName = prompt("Enter your Account Name:");
        // Implement withdrawal logic here, for simplicity, just updating the balance
        const newBalance = parseInt(document.getElementById('balance').textContent) - withdrawalAmount;
        updateBalance(newBalance);
        transactionHistory.push({ type: 'Withdrawn', amount: withdrawalAmount, bankName: bankName, accountNumber: accountNumber, accountName: accountName });
        displayTransactionHistory();
    } else {
        alert("Withdrawal amount should be at least 1000 Naira and should not exceed your balance.");
    }
}

// Event listeners
document.getElementById('watchAdsButton').addEventListener('click', watchAds);
document.getElementById('withdrawButton').addEventListener('click', withdraw);

// Initializations
displayTransactionHistory();
