var month = new Array("Janu","Feb","Marc","Apri","May","Jun","Jul","Augs","Sept","Octo","Nove","Decm");
var startyear = "1600"; 
var endyear = "2080";
        function dayzaliwad(){
        var month = document.birthday.birthmonth.options[document.birthday.birthmonth.selectedIndex].value;
        var day = document.birthday.bbirthday.options[document.birthday.bbirthday.selectedIndex].value;
        var year = document.birthday.birthyear.options[document.birthday.birthyear.selectedIndex].value;
        var bbirthday = new Date(year,month,day);
        var dayzaliwad = bbirthday.getDay();
        var daysofweek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        alert("You were born on a " + daysofweek[dayzaliwad]);
        }
        const query = document.querySelector('#query');
      // handle button click
      query.onclick = function () {
         const rbs = document.querySelectorAll('input[name="choice"]');
         let selectedValue;
         for (const rb of rbs) {
            if (rb.checked) {
                  selectedValue = rb.value;
                  break;
            }
         }
         
if (selectedValue == 'male' ){
       A = alert('input day born');
      switch (A)
      {
      case 'sunday' : alert("your AKAN name is KWASI");
      break;
      
      case 'monday': alert("your AKAN name is KWADWO");
      break;
      
      case 'tuesday': alert("your AKAN name is KWABENA");
      break;
      
      case 'wednesday': alert("your AKAN name is KWAKU");
      break;
      
      case '4' : alert("your AKAN name is Yaw");
      break;
      
      case 'friday': alert("your AKAN name is KOFI");
      break;
      
      case 'saturday': alert("your Akan name is {Kwame}");
      break;
      
      default:  alert("Unknown grade")
      }
      }
      else if(selectedValue == 'female'){
      var A = prompt("enter date");
      switch (A)
      {
      case 'sunday' :alert("your AKAN name is AKOSUA");
      break;
      
      case 'monday': alert("your AKAN name is ADWOA");
      break;
      
      case 'tuesday': alert("your AKAN name is ABENAA");
      break;
      
      case 'wednesday': alert("your AKAN name is AKUA");
      break;
      
      case 'Thursday': alert("your AKAN name is YAA");
      break;
      
      case 'friday': alert("your AKAN name is AFUA");
      break;
      
      case 'saturday': alert("your Akan name is Ama");
      break;
      
      default:  alert("Unknown grade")
      }
}
};