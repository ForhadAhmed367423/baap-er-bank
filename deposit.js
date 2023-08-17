document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const depositTotalString = depositAmount.value;
    const newDepositTotal = parseFloat(depositTotalString);

    const depositAmountCount = document.getElementById('deposit-count');
    const depositCount = depositAmountCount.innerText;
    const totalDeposit = parseFloat(newDepositTotal)+ parseFloat(depositCount);
    depositAmountCount.innerText = totalDeposit;
    // console.log(sum);

    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotal = balanceTotalAmount.innerText;
    const previousBal = parseFloat(balanceTotal);
    // console.log(previousBal)
    const newDepositSum = newDepositTotal;
    const newBalanceTotal =newDepositSum+ previousBal;
    balanceTotalAmount.innerText=newBalanceTotal;

    depositAmount.value='';
} )