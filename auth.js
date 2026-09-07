```javascript
import { firebaseConfig } from "./icon/firebase-config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// ================= FIREBASE =================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// ================= LOGIN BUTTON =================

const loginButton = document.getElementById("googleLogin");
const loginStatus = document.getElementById("loginStatus");
const logoutButton = document.getElementById("logoutButton");


// ================= GOOGLE LOGIN =================

if (loginButton) {

    loginButton.addEventListener("click", async () => {

        try {

            loginButton.disabled = true;

            if (loginStatus) {
                loginStatus.textContent = "Signing in...";
            }

            await signInWithPopup(auth, provider);

            // Login successful
            window.location.href = "./index.html";

        } catch (error) {

            console.error("Google Login Error:", error);

            if (loginStatus) {
                loginStatus.textContent =
                    "Login failed. Please try again.";
            }

            loginButton.disabled = false;
        }

    });

}


// ================= CHECK LOGIN =================

onAuthStateChanged(auth, (user) => {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    // ================= USER LOGGED IN =================

    if (user) {

        console.log("User logged in:", user.displayName);
        console.log("Email:", user.email);


        // لو فتح Login وهو مسجل بالفعل
        if (currentPage === "login.html") {

            window.location.href = "./index.html";

            return;
        }

    }


    // ================= USER NOT LOGGED IN =================

    else {

        console.log("No user logged in");


        // لو فتح Home بدون Login
        if (
            currentPage === "" ||
            currentPage === "index.html"
        ) {

            window.location.href = "./Login.html";

            return;
        }

    }

});


// ================= LOGOUT FUNCTION =================

window.logoutUser = async function () {

    try {

        await signOut(auth);

        window.location.href = "./Login.html";

    } catch (error) {

        console.error("Logout Error:", error);

    }

};

if (logoutButton) {
    logoutButton.addEventListener("click", window.logoutUser);
}
```
