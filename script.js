document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById("playButton");
    var myAudio = document.getElementById("myAudio");

    playButton.addEventListener("click", function() {
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    });
});