document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
   const amountInput = document.getElementById('amount-input').value;
   const pinInput = document.getElementById('pin-input').value;
//    console.log(amountInput, pinInput);

  
   

   if(pinInput === '1234'){
    // console.log('adding money to your account');
    const balance = document.getElementById('present-balance').innerText;
    const newBalance =Number(balance)  + Number(amountInput);
    // console.log(newBalance);
    document.getElementById('present-balance').innerText = newBalance;


   }
   else{
    alert('please correct your pin number')
   }
  

})