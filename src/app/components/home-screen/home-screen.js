document.getElementById("btnSuperAdmin").addEventListener("click", function() {
	document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector("close").addEventListener("click", function() {
	document.querySelector(".bg-modal").style.display = "none";
});

var x= document.getElementsByClassName("bg-modal");

  function showDialog(){
    x.show();
  }
  function closeDialog(){
    x.close();
  }