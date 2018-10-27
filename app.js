$(document).ready(){
$("#submit").on("click", function(){
    var database =  {
        apiKey: "AIzaSyDTx6Xv8XcTcTL3dCNAU2iaw4qS5mNcVOI",
        authDomain: "class20-b8985.firebaseapp.com",
        databaseURL: "https://class20-b8985.firebaseio.com",
        projectId: "class20-b8985",
        storageBucket: "class20-b8985.appspot.com",
        messagingSenderId: "923323850097"
      };
      firebase.initializeApp(database);
      var database = firebase.database();
      database.ref().push("value", function(snapshot) {
   var newName = $("#name").val().trim()
var newRole = $("#role").val().trim()
var newDate = $("#start-date").val().trim()
var salary = $("#salary").val().trim()
      }

})

})