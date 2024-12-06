// Quiz Functionality
function checkAnswer(isCorrect, nextPage) {
    if (isCorrect) {
        window.location.href = nextPage; // Navigate to the next page if the answer is correct
    } else {
        showPopup(); // Show the popup and redirect to the invitation page if the answer is incorrect
    }
}

function showPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup show';
    popup.textContent = "It doesn't matter, you are invited anyway!";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
        window.location.href = 'invitation.html'; // Redirect to the invitation page
    }, 2000);
}

// Countdown Timer
document.addEventListener("DOMContentLoaded", () => {
    // Set the wedding date
    const weddingDate = new Date("December 15, 2024 00:00:00").getTime();

    // Function to update the countdown timer
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown-container").innerHTML = `<h1>The Wedding Day is Here!</h1>`;
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update HTML content
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    // Call the function immediately and then every second
    updateCountdown(); // First call
    const countdownInterval = setInterval(updateCountdown, 1000);
});
