/*
  Firebase connection settings for the Computer Vision session site.
  1. Firebase console > Project settings > Your apps > Web app > SDK setup and configuration > Config.
  2. Paste the values below (these are public identifiers, not secrets; security comes from firestore.rules).
  Leave apiKey as "PASTE..." to run the site without sign-in (learning mode only).
*/
window.FIREBASE_CONFIG = {
apiKey: "AIzaSyDa1p-qHcHGNRt-I_gefILsduHY7i-2e3A",
  authDomain: "cv-session.firebaseapp.com",
  projectId: "cv-session",
  storageBucket: "cv-session.firebasestorage.app",
  messagingSenderId: "830630037570",
  appId: "1:830630037570:web:90d32ae58d00125244c5db"  
};
/* Grading policy. Keep maxAttempts equal to MAX_ATTEMPTS in firestore.rules. */
window.GRADING = { maxAttempts: 4, penalty: 0.25 };

/* Only these Google accounts may register (RRU staff and students, incl. @student.rru.ac.in). Keep in step with rruAccount() in firestore.rules. Set to null to allow any Google account. */
window.ALLOWED_EMAIL = /^[^@]+@([a-z0-9-]+\.)*rru\.ac\.in$/;
window.ALLOWED_EMAIL_LABEL = "@rru.ac.in / @student.rru.ac.in";
