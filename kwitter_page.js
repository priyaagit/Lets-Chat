

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

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
