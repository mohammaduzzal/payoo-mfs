document.getElementById('cash-out-first').addEventListener('click', function(){
    document.getElementById('cash-out-div').classList.remove('hidden');
    document.getElementById('add-money-div').classList.add('hidden')
})


document.getElementById('add-money-first').addEventListener('click', function(){
    document.getElementById('cash-out-div').classList.add('hidden')
    document.getElementById('add-money-div').classList.remove('hidden')
})