document.addEventListener("DOMContentLoaded", () => {
    const soundToggle = document.getElementById("soundToggle");
    const volumeControl = document.getElementById("volumeControl");
    const themeButtons = document.querySelectorAll(".theme-option");
    const languageInputs = document.querySelectorAll('input[name="language"]');

    let audioContext;

    function playSound(frequency = 600) {
        if (localStorage.getItem("sound") !== "on") return;

        audioContext ??= new (window.AudioContext || window.webkitAudioContext)();

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.frequency.value = frequency;
        oscillator.type = "sine";
        gain.gain.value = Number(localStorage.getItem("volume") || 0.5);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.12
        );
        oscillator.stop(audioContext.currentTime + 0.12);
    }

    function applyTheme(theme) {
        const selectedTheme =
            theme === "system"
                ? (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light")
                : theme;

        document.documentElement.dataset.theme = selectedTheme;
        localStorage.setItem("theme", theme);

        themeButtons.forEach(button => {
            button.classList.toggle("selected", button.dataset.theme === theme);
        });
    }

    function applyLanguage(language) {
        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;

            const translations = {
                en: {
                    settings: "Settings",
                    settingsDesc: "Customize your GRAMMAR experience",
                    sound: "Sound",
                    soundDesc: "Control sounds and volume",
                    soundEffects: "Sound Effects",
                    soundEffectsDesc: "Play sounds when you interact with the app",
                    volume: "Volume",
                    volumeDesc: "Adjust sound effects volume",
                    language: "Language",
                    languageDesc: "Choose your preferred language",
                    systemDefault: "System Default",
                    systemDesc: "Use your device language",
                    appearance: "Appearance",
                    appearanceDesc: "Choose how GRAMMAR looks",
                    light: "Light",
                    dark: "Dark",
                    about: "About GRAMMAR",
                    version: "Version",
                    madeWith: "Made with ❤️"
                },
                ar: {
                    settings: "الإعدادات",
                    settingsDesc: "خصص تجربة استخدام GRAMMAR",
                    sound: "الصوت",
                    soundDesc: "تحكم في الأصوات ومستوى الصوت",
                    soundEffects: "المؤثرات الصوتية",
                    soundEffectsDesc: "تشغيل الأصوات عند استخدام التطبيق",
                    volume: "مستوى الصوت",
                    volumeDesc: "اضبط مستوى المؤثرات الصوتية",
                    language: "اللغة",
                    languageDesc: "اختر اللغة المفضلة لديك",
                    systemDefault: "لغة النظام",
                    systemDesc: "استخدم لغة جهازك",
                    appearance: "المظهر",
                    appearanceDesc: "اختر شكل GRAMMAR",
                    light: "فاتح",
                    dark: "داكن",
                    about: "عن GRAMMAR",
                    version: "الإصدار",
                    madeWith: "صُنع بـ ❤️"
                }
            };

            if (translations[language]?.[key]) {
                element.textContent = translations[language][key];
            }
        });

        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        localStorage.setItem("language", language);
    }

    const savedSound = localStorage.getItem("sound") || "off";
    const savedVolume = localStorage.getItem("volume") || "0.5";
    const savedTheme = localStorage.getItem("theme") || "system";
    const savedLanguage = localStorage.getItem("language") || "en";

    if (soundToggle) {
        soundToggle.checked = savedSound === "on";
        soundToggle.addEventListener("change", () => {
            localStorage.setItem("sound", soundToggle.checked ? "on" : "off");
            playSound(700);
        });
    }

    if (volumeControl) {
        volumeControl.value = savedVolume;
        volumeControl.addEventListener("input", () => {
            localStorage.setItem("volume", volumeControl.value);
        });
    }

    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            applyTheme(button.dataset.theme);
            playSound(500);
        });
    });

    languageInputs.forEach(input => {
        input.checked = input.value === savedLanguage;

        input.addEventListener("change", () => {
            applyLanguage(input.value);
            playSound(650);
        });
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (!href || href.startsWith("#") || href.startsWith("http")) return;

            event.preventDefault();
            playSound(550);

            setTimeout(() => {
                window.location.href = href;
            }, 120);
        });
    });

    applyTheme(savedTheme);
    applyLanguage(savedLanguage);

    // إخفاء شاشة البداية إن كانت موجودة
    const splash = document.getElementById("splash");
    const main = document.getElementById("main");

    if (splash && main) {
        const splashShown = sessionStorage.getItem("splashShown");

        if (splashShown) {
            splash.style.display = "none";
            main.style.display = "block";
        } else {
            sessionStorage.setItem("splashShown", "true");

            setTimeout(() => {
                splash.classList.add("hide");
                main.style.display = "block";

                setTimeout(() => {
                    splash.style.display = "none";
                }, 500);
            }, 1200);
        }
    }
});
