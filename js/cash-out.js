// console.log('dola de re pagla');
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amountCashInput = document.getElementById('amount-cash-input').value;
    const pinCashInput = document.getElementById('pin-cash-input').value;
    // console.log(amountCashInput, pinCashInput);

    // fokira way to check
    if(pinCashInput === '1234'){
        const presentBalance = document.getElementById('present-balance').innerText;
        const newBalance1 = Number(presentBalance) - Number(amountCashInput);
        document.getElementById('present-balance').innerText = newBalance1;
    }
    else{
        alert('please provide correct pin number')
    }
})