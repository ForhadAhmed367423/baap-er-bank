document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('Withdraw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const newWithdrawTotal =  parseFloat(withdrawAmountString);

    const withdrawAmountCount = document.getElementById('withdraw-count');
    const withdrawCount = withdrawAmountCount.innerText;
    const totalWithdraw = parseFloat(newWithdrawTotal)+ parseFloat(withdrawCount);
    withdrawAmountCount.innerText=totalWithdraw;

    const myBalanceTotal = document.getElementById('balance-total');
    const balanceTotal = myBalanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotal);
    const newWithdraw = previousBalance - newWithdrawTotal ;
    myBalanceTotal.innerText=newWithdraw;
    withdrawAmount.value='';
})