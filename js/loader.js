// LOADER FUNCTIONS START
window.onload = () => {
  var myVar;

  function myFunction() {
    //milliseconds for display all page
    myVar = setTimeout(showPage, 400);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("containerView1").style.display = "block";
  }
  myFunction();
};
