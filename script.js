document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main");
    const clickSound = document.getElementById("clickSound");
    const soundToggle = document.getElementById("soundToggle");

    if (splash && main) {
        if (sessionStorage.getItem("splashShown")) {
            splash.style.display = "none";
            main.style.display = "block";
        } else {
            sessionStorage.setItem("splashShown", "true");

            setTimeout(() => {
                splash.classList.add("hide");

                setTimeout(() => {
                    splash.style.display = "none";
                    main.style.display = "block";
                }, 500);
            }, 2000);
        }
    }

    let isMuted = localStorage.getItem("soundMuted") === "true";

    function updateSoundIcon() {
        if (soundToggle) {
            soundToggle.textContent = isMuted ? "🔇" : "🔊";
        }
    }

    updateSoundIcon();

    soundToggle?.addEventListener("click", () => {
        isMuted = !isMuted;
        localStorage.setItem("soundMuted", isMuted);
        updateSoundIcon();
    });

    document.querySelectorAll("button, a").forEach((element) => {
        element.addEventListener("click", (event) => {
            if (element.id === "soundToggle" || isMuted || !clickSound) return;

            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});

            if (element.tagName === "A" && element.href) {
                event.preventDefault();

                setTimeout(() => {
                    window.location.href = element.href;
                }, 120);
            }
        });
    });
});
