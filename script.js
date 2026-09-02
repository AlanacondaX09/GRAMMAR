window.addEventListener("load", function () {

    setTimeout(function () {

        const splash = document.getElementById("splash");
        const main = document.getElementById("main");

        splash.style.opacity = "0";

        setTimeout(function () {

            splash.style.display = "none";
            main.style.display = "block";

        }, 1000);

    }, 3000);

});