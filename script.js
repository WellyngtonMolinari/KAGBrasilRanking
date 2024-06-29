// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmwFGPUbQvpI7pdnk_CL91G3FTMiHF-BE",
  authDomain: "kdatracker-d3c35.firebaseapp.com",
  databaseURL: "https://kdatracker-d3c35-default-rtdb.firebaseio.com",
  projectId: "kdatracker-d3c35",
  storageBucket: "kdatracker-d3c35.appspot.com",
  messagingSenderId: "136263581659",
  appId: "1:136263581659:web:c78b7d31dd313af8f0f1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

function fetchLeaderboardData() {
    // Reference to the Firestore collection
    const leaderboardRef = db.collection('leaderboard');

    // Fetch the top 10 players, ordered by score descending
    leaderboardRef.orderBy('score', 'desc').limit(10).get()
    .then(querySnapshot => {
        const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
        leaderboardTable.innerHTML = ''; // Clear previous data

        let rank = 1;
        querySnapshot.forEach(doc => {
            const playerData = doc.data();
            const row = leaderboardTable.insertRow();
            row.innerHTML = `
                <td>${rank}</td>
                <td>${playerData.name}</td>
                <td>${playerData.score}</td>
            `;
            rank++;
        });
    })
    .catch(error => {
        console.error("Error fetching leaderboard data: ", error);
    });
}

// Fetch leaderboard data on page load
document.addEventListener('DOMContentLoaded', fetchLeaderboardData);
