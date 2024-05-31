document.addEventListener('DOMContentLoaded', () => {
    const vidcards = document.querySelectorAll('.vidcard');

    vidcards.forEach(card => {
        const video = card.querySelector('.video');

        // Pause the video initially
        video.pause();

        // Play the video when hovered
        card.addEventListener('mouseenter', () => {
            if (!video.paused) return; // If video is already playing, do nothing
            video.play(); // Play the video
        });

        // Pause the video when leaving
        card.addEventListener('mouseleave', () => {
            video.pause(); // Pause the video
        });
    });
});
