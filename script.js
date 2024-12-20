// For index.html
const navigateButton = document.getElementById('navigate-button');
const backgroundMusic = document.getElementById('background-music');

if (navigateButton) {
    navigateButton.addEventListener('click', () => {
        // Save the current song time
        const currentTime = backgroundMusic.currentTime;
        localStorage.setItem('songTime', currentTime);

        // Navigate to the second page
        window.location.href = 'page2.html';
    });
}

// For page2.html
const songTime = localStorage.getItem('songTime');
if (songTime && backgroundMusic) {
    backgroundMusic.currentTime = parseFloat(songTime);
}
