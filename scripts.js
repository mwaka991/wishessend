// filepath: kave-wishes/kave-wishes/public/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const wishForm = document.getElementById('wishForm');
    const wishTypeSelect = document.getElementById('wishType');
    const messageInput = document.getElementById('message');
    const imageInput = document.getElementById('image');
    const musicInput = document.getElementById('music');
    const publishOptions = document.getElementById('publishOptions');

    wishForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const wishData = {
            type: wishTypeSelect.value,
            message: messageInput.value,
            image: imageInput.files[0],
            music: musicInput.files[0],
            publish: publishOptions.value
        };
        submitWish(wishData);
    });

    function submitWish(data) {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        fetch('/api/wishes', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Wish submitted successfully!');
                wishForm.reset();
            } else {
                alert('Error submitting wish: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting your wish.');
        });
    }
});