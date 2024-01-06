const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);



/* 音樂 */ /*
const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");

let isPlaying = sessionStorage.getItem("isPlaying") === "true" || false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    } else {
        audio.play();
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
    sessionStorage.setItem("isPlaying", isPlaying.toString());
}

audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.play();
});

playPauseButton.addEventListener("click", togglePlayPause);

if (isPlaying) {
    audio.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
}
*/