function myfunction() {

document.getElementById("btnSuperAdmin").addEventListener("click", function() {
	document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector("close").addEventListener("click", function() {
	document.querySelector(".bg-modal").style.display = "none";
});
}

let changetext = document.querySelector('btn');

changetext.addEventListener('click', () =>{
  changetext.innerHTML = 'aa';
})
