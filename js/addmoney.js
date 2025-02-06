document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

const addMoney = getInputFieldById('add-money-input');
const pinNumber = getInputFieldById('pin-input');
console.log(addMoney,pinNumber);

if(pinNumber === 1234){
    const mainBalance = getTextFieldById('main-balance');
console.log(mainBalance);

const newBalance = addMoney + mainBalance;

document.getElementById('main-balance').innerText = newBalance;
}
else{
    alert('Wrong! please try again')
}

});