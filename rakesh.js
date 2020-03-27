/* ========================WRITE YOUR JS FROM HERE======================== */


  
  
function myFunction() {
  
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var phone = document.getElementById("phonenumber");
  var password = document.getElementById("password");
  var cnfpassword = document.getElementById("cnfpassword");
  var message = document.getElementById("message");
  var above = document.getElementById("above");
  var below = document.getElementById("below");
  var age="";


  if(above.checked == true)
  {
    age=above.value;
  }
  else if(below.checked==true)
  {
    age=below.value;
  }
  


  var pwdlen=password.value.length;
  var namelen=username.value.length;
  var emaillen=email.value.length;
  var messagelen= message.value.length;
  var phonelen=phone.value.length;
  var agelen=age;

  /*var array[6]={0};

  array[0]=namelen;
  array[1]=emaillen;
  array[2]=phonelen;
  array[3]=pwdlen;
  array[4]=messagelen;
  array[5]=agelen;
*/

  var dhoni=true;
  var count=0;
  while(count<6)
  {
    if(namelen==0)
    {
      alert("Please enter username!");
      dhoni=false;
      break;
    }
    else if(emaillen==0)
    {
      alert("Please enter email!");
      dhoni=false;
      break;
    }
    else if(phonelen!=10)
    {
      alert("Please enter valid phone number!");
      dhoni=false;
      break;
    }
    else if(password.value != cnfpassword.value)
    {
      alert("Please enter password correctly!");
      dhoni=false;
      break;
    }
    else if(messagelen==0)
    {
      alert("Please enter something in meassage!");
      dhoni=false;
      break;
    }
    else if(agelen==0)
    {
      alert("Please select age!");
      dhoni=false;
      break;
    }

    count++;
  }



  if(dhoni==true)
  {
    alert(
    "Your details are submitted successfully!"+"\n"+"\n"+
    "Username     : " + username.value +"\n"+
    "Email        : " + email.value +"\n"+
    "Phone number : " + phone.value +"\n"+
    "Password     : " + password.value +"\n"+
    "Message      : " + message.value +"\n"+
    "Age          : " + age
     );
  }
  
  
  //alert( "we are sending you an email ?");
 
  
}
