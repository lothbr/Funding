
const publicKey = 'pk_test_5cec0b7059cc6cc2fadf921806f3c1dc38e6c8ea';

document.getElementById('donateButton').addEventListener('click', function() {
    

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

