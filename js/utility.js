function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};

function getTextFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
};

// add features toggle butoon function
function showSectionShowById(id){
    document.getElementById('addmoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transection-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}