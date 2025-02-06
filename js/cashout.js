document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoney = getInputFieldById('cashout-money-input');
    const cashOutPin = getInputFieldById('pin-cashout-input');
    console.log(cashOutMoney, cashOutPin);

    if(cashOutPin === 1234){
        const balance = getTextFieldById('main-balance');

        console.log(balance)

        const total = balance - cashOutMoney;
        document.getElementById('main-balance').innerText = total;
        console.log(total)
    }
    else{
        alert('Wrong! Please try agian');
    }
});