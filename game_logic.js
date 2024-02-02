// Add this line at the beginning of your script
document.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen();

    // Rest of your existing code

    // Call this function when you're ready to hide the loading screen and show the game container
    hideLoadingScreen();
});

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const gameContainer = document.querySelector('.container');

    loadingScreen.style.display = 'none';
    gameContainer.style.display = 'flex';
}
