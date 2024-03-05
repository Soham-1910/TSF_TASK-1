document.getElementById('moneyTransferForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var senderEmail = document.getElementById('senderEmail').value;
    var receiverEmail = document.getElementById('receiverEmail').value;
    var amount = parseFloat(document.getElementById('amount').value);

    // Fetch sender's current balance from the server (mocked here)
    var currentBalance = 1000;

    if (currentBalance < amount) {
        document.getElementById('transactionMessage').textContent = "Failed: Insufficient balance.";
    } else {
        // Simulate the transaction process (update balance)
        var newBalance = currentBalance - amount;

        // Display transaction status
        document.getElementById('transactionMessage').textContent = "Success: $" + amount + " transferred from " + senderEmail + " to " + receiverEmail;

        // Update displayed balance
        document.getElementById('currentBalance').textContent = "$" + newBalance;
    }
});

// let availablekeywords = [
//     'soham@gmail.com',
//     'saloni@gmail.com',
//     'aditya@gmail.com',
//     'hrishikesgmail.com',
//     'niraj@gmail.com',
//     'ashok@gmail.com',
//     'hari@gmail.com',
//     'kalpesh@gmail.com',
//     'lal@gmail.com',
//     'hritik@gmail.com',
// ];

// const resultBox = document.querySelector(".result-box");
// const inputBox = document.getElementById(".senderEmail",".receiverEmail");

// inputBox.onkeyup = function(){
//     let result = [];
//     let input = inputBox.value;
//     if(input.length){
//         result = availablekeywords.filter((keyword)=>{
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
//     display(result);

//     if(!result.length){
//         resultBox.innerHTML = '';
//     }
// }

// function display(result){
//     const content = result.map((list)=>{
//         return "<li onclick=selectInput(this)>" + list + "<li>";
//     });
//     resultBox.innerHTML = "<ul>" + content.join('') + "<ul>";
// }

// function selectInput(list){
//     inputBox.value = list.innerHTML;
//     resultBox.innerHTML = '';
// }