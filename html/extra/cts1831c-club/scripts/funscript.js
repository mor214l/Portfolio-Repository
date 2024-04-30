function myFunction() {
   let text;
   let major = prompt("Hello visitor what's your major?");
   if (major == null || major == "") {
     document.write("Dont leave us hanging :( ");
   } else {
    text = "Welcome to the archery club website we are big fans of " + major + " majors in this club! ";
   }
   document.getElementById("demo").innerHTML = text;
 } 