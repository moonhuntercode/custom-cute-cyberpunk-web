// LOADER FUNCTIONS START
window.onload=()=>{
  var myVar;
      
  

  
  function myFunction() {
    myVar = setTimeout(showPage, 6000);//n  seconds
  }
  








  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("containerView1").style.display = "block";
  }
  myFunction();
}