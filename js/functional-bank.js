function getInputValue(inputId){
 
    const inputAmount = document.getElementById(inputId);
    const currentInputValue = inputAmount.value;
   
    inputAmount.value = "";
    return currentInputValue;
}

function getTotalValue(id,amount){

    const depositTotal = document.getElementById(id);
    const depositPreviousAmount = depositTotal.innerText;
    const depositCurrentAmount = parseFloat(amount) +  parseFloat(depositPreviousAmount);
    
    depositTotal.innerText = depositCurrentAmount;
}

function getTotalBalance(value,check){
    console.log(value);
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;

    if(check == true){
        balanceTotal.innerText = parseFloat(value) +  parseFloat(previousBalanceAmount);
    }
    else{
        balanceTotal.innerText = parseFloat(previousBalanceAmount) -  parseFloat(value);
    }
}

document.getElementById('deposit').addEventListener('click',function(){

    const depositValue = getInputValue('deposit-amount');
    if(depositValue > 0){
    const depositTotal = getTotalValue('deposit-total',depositValue);
    const balanceTotal = getTotalBalance(depositValue,true);
    }
})

document.getElementById('withdraw').addEventListener('click',function(){

    const withdrawValue = getInputValue('withdraw-amount');
    const withdrawTotal = getTotalValue('withdraw-total',withdrawValue);
    const balanceTotal = getTotalBalance(withdrawValue,false);
    // const balanceTotal = getTotalBalance(withdrawValue*(-1));
})