// Replace with your actual Paystack public key
const publicKey = 'pk_live_af141b83a9c3e559e4b5cf22fd24baa58294a3f3';


// Handle donation button click
document.getElementById('donateButton').addEventListener('click', function() {
   // const amount = document.getElementById('amount').value;

    const handler = PaystackPop.setup({
    key: publicKey,
    email: 'aremudaramola5@gmail.com', 
    amount: document.getElementById('amount').value  * 100, 
    ref: 'donation_' + Math.floor((Math.random() * 1000000000) + 1),
    onClose: function() {
        alert('Donation window closed.');
        
    },
    callback: function(response) {
        if (response.status === 'success') {
            //alert('Donation successful! Transaction reference: ' + response.reference);
            window.location.href = 'thanks.html';
        } else {
            alert('Donation was not successful.');
        }
        
    }
});
    handler.openIframe();

   
});

