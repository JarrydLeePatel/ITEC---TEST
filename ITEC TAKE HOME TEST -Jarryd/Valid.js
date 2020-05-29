

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var regEmail =/^\S+@\S+\.\S+$/;

    if (name.length < 1) {
      alert("Please Enter valid Name");
       return false;
      }
    if (regEmail.test(email) == false) {
        alert("Enter a valid EMAIL");
        return false;
      }
    if (country == "select") {
   alert("Please enter a valid country")
      return false;
      }
    if (message.length <1) {
        alert("Message Field cannot be empty!");
     return false;
      }

//Alert
alert("Thank you -Contact Details Submitted Successfully!" 
+ "\n"
+ "\n"
+ "Please review your details :)"
+ "\n"
+ "------------- "
+ "\n" 
+ "Name:  " + name 
+ "\n"
+ "Email Address:  " + email
+ "\n" 
+ "Country:  " + country
+ "\n"
+ "Message:  " + message
);

return true;
}




