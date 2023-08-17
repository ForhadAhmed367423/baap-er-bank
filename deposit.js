document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const depositTotal = depositAmount.value;

    const depositAmountCount = document.getElementById('deposit-count');
    const depositCount = depositAmountCount.innerText;
    depositAmountCount.innerText = depositTotal;

} )

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('Withdraw-amount');
    const withdrawTotal = withdrawAmount.value;

    const withdrawAmountCount = document.getElementById('withdraw-count');
    withdrawCount= withdrawAmountCount.innerText;
    withdrawAmountCount.innerText = withdrawTotal;

})