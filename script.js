javascript
let expenses = [];

function addExpense() {
    const desc = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (!desc || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const expense = { description: desc, amount: amount, category: category };
    expenses.push(expense);
    displayExpenses();
    updateSummary();
}

function displayExpenses() {
    const list = document.getElementById('expensesList');
    list.innerHTML = '<h2>Expenses</h2>';
    expenses.forEach(exp => {
        const item = document.createElement('div');
        item.textContent = `${exp.description}: $${exp.amount} - ${exp.category}`;
        list.appendChild(item);
    });
}

function updateSummary() {
    const summary = expenses.reduce((acc, exp) => {
        if (!acc[exp.category]) {
            acc[exp.category] = 0;
        }
        acc[exp.category] += exp.amount;
        return acc;
    }, {});

    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = '<h2>Summary</h2>';
    for (const [key, value] of Object.entries(summary)) {
        const item = document.createElement('div');
        item.textContent = `${key}: $${value}`;
        summaryDiv.appendChild(item);
    }
}
