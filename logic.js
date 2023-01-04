const expenseForm = document.querySelector('#expenseForm')
const message = document.querySelector('.message')
const amountInput = document.querySelector('#amount')
const descriptonInput = document.querySelector('#description')
const expenseList = document.querySelector('#expenses')
const total = document.querySelector('#total')

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

expenseForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    

    if(isNaN(amountInput.value) === true)
    {
        message.classList.add('error')
        message.innerHTML = 'Please enter a number in "Amount Spent"'
    }
    else if(amountInput.value === '' || descriptonInput.value === '')
    {
        message.classList.add('error')
        message.innerHTML = 'Please enter both fields'
    }
    else
    {
        //adding expense and description to a list
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`$${amountInput.value}, ${descriptonInput.value}`))
        expenseList.appendChild(li)

        totalTemp = Number(total.textContent.replace(/[^0-9.-]+/g,""))
        const temp = parseFloat(amountInput.value) + parseFloat(totalTemp)
        total.innerHTML = `${USDollar.format(temp)}`

        //clear fields
        amountInput.value = ''
        descriptonInput.value = ''
        message.innerHTML = ''
        
        message.classList.remove('error')
        console.log('success')
    }

}