const firebaseConfig = {
    apiKey: "AIzaSyDV8jnVQ_UgLEB_QjQfGIy3YnNkNWd6-XY",
    authDomain: "daily2k.firebaseapp.com",
    databaseURL: "https://daily2k-default-rtdb.firebaseio.com",
    projectId: "daily2k",
    storageBucket: "daily2k.appspot.com",
    messagingSenderId: "648009412669",
    appId: "1:648009412669:web:0a52d4
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            alert('Logged in successfully');
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch((error) => {
            // Handle login errors
            console.error("Login Error:", error);
            alert(error.message);
        });
});
