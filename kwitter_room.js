// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCP3kvusy_qWOSfKt0mOFiVa4A6FoOox74",
    authDomain: "kwitter-project-51d21.firebaseapp.com",
    projectId: "kwitter-project-51d21",
    storageBucket: "kwitter-project-51d21.appspot.com",
    messagingSenderId: "867034067704",
    appId: "1:867034067704:web:59580608588a99ab37c10d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
    room_name = document.getElementById("room_name").value;

   localStorage.setItem("Roomname",room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
