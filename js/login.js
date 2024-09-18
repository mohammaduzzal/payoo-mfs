
// step1= set event handlers
document.getElementById('login-btn').addEventListener('click', function(event){
    // step 2 = prevent default behavior
  event.preventDefault() //prevent behavior
  console.log('toka laglo bichite');

//   get the phn number
  const phoneNumber = document.getElementById('phn-number').value
  console.log(phoneNumber);

})