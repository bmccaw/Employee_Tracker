$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyBZensYVrmTrAvG9uQoon0lfLXKVAI7zeY",
        authDomain: "random-87f45.firebaseapp.com",
        databaseURL: "https://random-87f45.firebaseio.com",
        projectId: "random-87f45",
        storageBucket: "random-87f45.appspot.com",
        messagingSenderId: "956308386893"
      };

      firebase.initializeApp(config);

      var database = firebase.database();

      var newName;
      var newRole;
      var newDate;
      var salary;

      database.ref().on("child_added", function(childSnapshot) {
  newName = childSnapshot.val().employeeName;        
  newRole = childSnapshot.val().employeeRole;        
  newDate = childSnapshot.val().employeeDate;       
  newSalary = childSnapshot.val().employeeSalary;   
  var rows = $("<tr>")   
  var colName = $("<td>")  
  var colRole = $("<td>")  
  var colDate = $("<td>") 
  var colMonths =$("<td>") 
  var colSalary = $("<td>")
  var colTotalBilled = $("<td>")  
  rows.append(colName);
  rows.append(colRole);
  rows.append(colDate);
  rows.append(colMonths);
  rows.append(colSalary);
  rows.append(colTotalBilled);
  $("#table-body").append(rows);
  colName.text(newName)
  colRole.text(newRole)
  colDate.text(newDate)
  colSalary.text(salary)



    
     
      
       
  
      });
      $("#submit").on("click", function(event){
event.preventDefault();

      newName = $("#name").val().trim();
      newRole = $("#role").val().trim();
      newDate = $("#start-date").val().trim();
      salary = $("#salary").val().trim();

      database.ref().push({
          employeeName: newName,
          employeeRole: newRole,
          employeeDate: newDate,
          employeeSalary: salary

      });

})

})