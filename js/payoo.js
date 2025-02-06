document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddMoney = document.getElementById('add-money-input').value;
    const pinInput = document.getElementById('pin-input').value;
    console.log(inputAddMoney,pinInput);

    if(pinInput === '1234'){
        const mainBalance = document.getElementById('main-balance').innerText;
        
        const mainBalanceNumber = parseFloat(mainBalance);
        const inputAddMoneyNumber = parseFloat(inputAddMoney);

        const newBalance = mainBalanceNumber + inputAddMoneyNumber;

        document.getElementById('main-balance').innerText = newBalance;
    }
    else{
        alert('Wrong! Please try again');
    }
})