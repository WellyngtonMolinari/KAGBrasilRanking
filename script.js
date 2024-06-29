// This function initializes Firebase and fetches leaderboard data
function initFirebaseAndFetchData() {
    // Check if Firebase is loaded
    if (typeof firebase !== 'undefined') {
        // Firebase configuration
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
         firebase.initializeApp(firebaseConfig);
         const db = firebase.database();
 
         function fetchLeaderboardData() {
            // Reference to the Realtime Database node 'leaderboard'
            const leaderboardRef = db.ref('leaderboard');
        
            // Fetch the leaderboard data ordered by score (descending)
            leaderboardRef.orderByChild('score').limitToLast(10).once('value')
            .then(snapshot => {
                const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
                leaderboardTable.innerHTML = ''; // Clear previous data
        
                // Firebase returns the data in descending order (highest score first)
                let rank = 1;
                snapshot.forEach(childSnapshot => {
                    const playerData = childSnapshot.val();
                    if (playerData && playerData.player !== undefined && playerData.kills !== undefined && playerData.deaths !== undefined) {
                        const row = leaderboardTable.insertRow();
                        row.innerHTML = `
                            <td>${rank}</td>
                            <td>${playerData.player}</td>
                            <td>${playerData.kills}</td>
                            <td>${playerData.deaths}</td>
                        `;
                        rank++;
                    } else {
                        console.warn('Missing fields in playerData:', playerData);
                    }
                });
            })
            .catch(error => {
                console.error("Error fetching leaderboard data: ", error);
            });
        }
        
 
         // Fetch leaderboard data
         fetchLeaderboardData();
     } else {
         console.error('Firebase SDK not loaded.');
     }
 }
 
 // Wait for DOM content to be fully loaded before initializing Firebase
 document.addEventListener('DOMContentLoaded', initFirebaseAndFetchData);
