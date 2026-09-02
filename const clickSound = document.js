const clickSound = document.getElementById("clickSound");

if (!isMuted && clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
}