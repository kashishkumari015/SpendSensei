document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalAmount = document.getElementById("total-amount");
    
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    function renderExpenses() {
        expenseList.innerHTML = "";
        let total = 0;
        
        expenses.forEach((expense, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${expense.name}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
                </td>
            `;
            expenseList.appendChild(row);
            total += parseFloat(expense.amount);
        });

        totalAmount.textContent = total.toFixed(2);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    expenseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("expense-name").value.trim();
        const amount = document.getElementById("expense-amount").value.trim();
        const category = document.getElementById("expense-category").value;
        const date = document.getElementById("expense-date").value;

        if (!name || !amount || !category || !date) {
            alert("Please fill out all fields.");
            return;
        }

        const expense = { name, amount: parseFloat(amount), category, date };
        expenses.push(expense);
        renderExpenses();

        expenseForm.reset();
    });

    window.deleteExpense = function (index) {
        expenses.splice(index, 1);
        renderExpenses();
    };

    renderExpenses();
});
