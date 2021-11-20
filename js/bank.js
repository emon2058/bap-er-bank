document.getElementById('deposit').addEventListener('click',function(){

    // update deposit total
    const depositAmount = document.getElementById('deposit-amount');

    // get deposit current value
    const depositCurrentValue = depositAmount.value;

    const depositTotal = document.getElementById('deposit-total');
    
    // get deposit previous amount from deposit output
    const depositPreviousAmount = depositTotal.innerText;

    const depositCurrentAmount = parseFloat(depositCurrentValue) +  parseFloat(depositPreviousAmount);
    
    // set the value in deposit
    depositTotal.innerText = depositCurrentAmount;
  
    // update balance total

    const balanceTotal = document.getElementById('balance-total');
    
    // get deposit previous amount from deposit output
    const previousBalanceAmount = balanceTotal.innerText;

    const currentBalanceAmount = parseFloat(depositCurrentValue) +  parseFloat(previousBalanceAmount);
    
    // set the value in balance
    balanceTotal.innerText = currentBalanceAmount;
    
    // clear deposit input field
    depositAmount.value = "";
})

document.getElementById('withdraw').addEventListener('click',function(){
    // update withdraw amount

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.value;
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;

    const totalWithdrawAmount = parseFloat(withdrawAmountValue) + parseFloat(previousWithdrawAmount);

    withdrawTotal.innerText = totalWithdrawAmount;

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    
    // get deposit previous amount from deposit output
    const previousBalanceAmount = balanceTotal.innerText;

    const currentBalanceAmount = parseFloat(previousBalanceAmount) - parseFloat(withdrawAmountValue);
    
    // set the value in balance
    balanceTotal.innerText = currentBalanceAmount;
    
    // clear withdraw input field
    withdrawAmount.value = "";

})