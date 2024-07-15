document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');

    // Show the popup for 5 seconds
    setTimeout(() => {
        popup.style.display = 'flex';

        setTimeout(() => {
            popup.style.display = 'none';
        },700); // Hide the popup after 5 seconds
    }, 1000); // Show the popup after 1 second
});
