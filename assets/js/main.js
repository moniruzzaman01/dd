document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value
    const food = document.getElementById('food').value
    const rent = document.getElementById('rent').value
    const clothes = document.getElementById('clothes').value

    const expense = parseInt(food) + parseInt(rent) + parseInt(clothes)

    const totalExpensesField = document.getElementById('total-expenses')
    totalExpensesField.innerText = expense

    const balance = document.getElementById('balance')

    balance.innerText = parseInt(income) - expense

})

document.getElementById('savings-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value
    const savingAmount = document.getElementById('saving-amount')
    const remainingBalance = document.getElementById('remaining-balance')
    const savingsRate = document.getElementById('savings').value
    const balance = document.getElementById('balance').innerText

    const savings = parseInt(income) * (parseInt(savingsRate) / 100)
    console.log(savings)

    savingAmount.innerText = savings
    remainingBalance.innerText = parseInt(balance) - savings
})