
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB9kF-RbSToJOSPhZb6_vkpv31wHqP7VmU",
  authDomain: "chat-app-b162a.firebaseapp.com",
  databaseURL: "https://chat-app-b162a-default-rtdb.firebaseio.com",
  projectId: "chat-app-b162a",
  storageBucket: "chat-app-b162a.appspot.com",
  messagingSenderId: "386443726445",
  appId: "1:386443726445:web:9a017c6f81c8e8a52db964",
  measurementId: "G-7BHBET7E0R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}