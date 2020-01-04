/*
  This function is called when the submit button for the form is pressed.
  For text inputs like name, phone, email, and textarea it checks if there
  is something written.  It does not check if inputs are in the correct
  format such as Ex: ****@gmail.com or (555)555-5555 for domestic
  phone numbers.  For form controls like checkboxes and radio buttons
  it checks to see if an option is select, and if so it's considered
  valid.  If any one form control does not have a valid input or
  is lacking an input an alert is sent to the screen as soon
  as one such form control is found. If all inputs are valid according
  to the criteria a message is shown on the screen telling the
  user that all inputs are valid and true is returned to onsubmit so
  form inputs are sent to location specified by action attribute.
  Action attribute is not specified as per project requirement to
  submit input anywhere.   
*/


function validateForm() {

   var name = document.forms["contactUs"]["name"].value;
    if (name == "") {
        alert("Please fill in your name.");
        return false;
    }

    var email = document.forms["contactUs"]["email"].value;
    if (email == "") {
        alert("Please fill in your email.");
        return false;
    }

   var phone = document.forms["contactUs"]["phone"].value;
   if (phone == "") {
       alert("Please fill in your phone number.");
       return false;
   }


   var info = document.forms["contactUs"]["info"].value;
   if (info == "") {
       alert("Please provide any additional information.");
       return false;
   }

   var attend = document.getElementsByName('attendance');

   if (!(attend[0].checked || attend[1].checked)) {
     alert("Please select an option.");
     return false;
   }

   var contact = document.getElementsByName("contactDay");

   if (!(contact[0].checked || contact[1].checked ||
     contact[2].checked || contact[3].checked || contact[4].checked)) {
       alert("Please select a day(s) of the week");
       return false;
     }
     alert("All of the information provided is valid.");
     return true;
}
