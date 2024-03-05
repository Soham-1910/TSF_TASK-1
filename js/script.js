 document.getElementById('transferForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var senderEmail = document.getElementById('senderEmail').value;
        var receiverEmail = document.getElementById('receiverEmail').value;
        var amount = parseFloat(document.getElementById('amount').value);
        var transactionTime = new Date(); // Get current time

        // Here you would perform your transaction logic,
        // such as checking balances, updating them, etc.

        // For the sake of demonstration, let's just simulate a successful transaction.
        var success = true;

        if (isNaN(amount) || amount <= 0) {
            alert('Invalid amount');
            return;
        }

        if (success) {
            // Store transaction details in local storage
            var transactionDetails = {
                senderEmail: senderEmail,
                receiverEmail: receiverEmail,
                amount: amount,
                transactionTime: transactionTime.toLocaleString() // Convert to readable format
            };
            localStorage.setItem('transactionDetails', JSON.stringify(transactionDetails));

            // Redirect to transaction details page
            window.location.href = 'transaction_details.html';
        } else {
            // Display error message
            alert('Transaction failed');
        }
    });