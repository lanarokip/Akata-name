var gender = prompt("input gender")
if (gender == 'male' ){
        var A = prompt("enter date");
        switch (A)
        {
           case 'sunday' : document.write("your AKAN name is KWASI<br/>");
           break;
           
           case 'monday': document.write("your AKAN name is KWADWO<br />");
           break;
        
           case 'tuesday': document.write("your AKAN name is KWABENA<br />");
           break;
        
           case 'wednesday': document.write("your AKAN name is KWAKU<br />");
           break;
        
           case 'thursday': document.write("your AKAN name is Yaw<br />");
           break;
        
           case 'friday': document.write("your AKAN name is KOFI<br />");
           break;
           
           case 'saturday': document.write("your Akan name is {Kwame}");
           break;
        
           default:  document.write("Unknown grade<br />")
        }
        document.write("Exiting switch block");
        }
      