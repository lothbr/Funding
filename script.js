
const publicKey = 'pk_live_ebffb8ad10364b409da3a9bdb07a1c1c437e6abd';

document.getElementById('donateButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;

    const handler = PaystackPop.setup({
        key: publicKey,
        email: 'aremudaramola5@gmail.com', 
        amount: amount * 100, 
        ref: 'AFD_' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: function() {
            alert('Donation window closed.');
        
        },
        callback: function(response) {
            if (response.status === 'success') {
                window.location.href = 'thanks.html';
            } else {
                alert('Donation was not successful.');
            }
            
        }
    });
    handler.openIframe();

   
});

