// Firebase Configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuL4tpaSsw1ylXf2VZrQ1b_2t_Kxd97cI",
    authDomain: "post-ad037.firebaseapp.com",
    projectId: "post-ad037",
    storageBucket: "post-ad037.firebasestorage.app",
    messagingSenderId: "377312187432",
    appId: "1:377312187432:web:565f47c145e0e73ac0911d",
    measurementId: "G-T48NR3B9VW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export for use in other files
window.firebaseConfig = firebaseConfig; 