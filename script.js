document.addEventListener('DOMContentLoaded', function() {
  const videoPlayer = document.querySelector('.video-player');
  const buttons = document.querySelectorAll('.button-card button');
  const downloadButtons = document.querySelectorAll('.download-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const videoUrl = button.getAttribute('data-url');
      videoPlayer.src = videoUrl;
      videoPlayer.play();
      
      // Update the corresponding download button with the video URL
      if (downloadButtons[index]) {
        downloadButtons[index].href = videoUrl;
      }
    });
  });
});
