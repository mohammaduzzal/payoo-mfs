
// step1= set event handlers
document.getElementById('login-btn').addEventListener('click', function(event){
    // step 2 = prevent default behavior
  event.preventDefault() //prevent behavior
//   console.log('toka laglo bichite');

//   get the phn number
  const phoneNumber = document.getElementById('phn-number').value
 
const pinNumber = document.getElementById('pin-number').value
// console.log(phoneNumber, pinNumber);

if(phoneNumber === '01791098041' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
}
else{
alert('wrong phone number or password')
}

})