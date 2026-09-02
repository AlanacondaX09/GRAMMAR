document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const main = document.getElementById("main");

    if (!splash || !main) return;

    if (sessionStorage.getItem("splashShown")) {
        splash.style.display = "none";
        main.style.display = "block";
        return;
    }

    sessionStorage.setItem("splashShown", "true");

    setTimeout(() => {
        splash.classList.add("hide");

        setTimeout(() => {
            splash.style.display = "none";
            main.style.display = "block";
        }, 500);
    }, 2000);
});;
