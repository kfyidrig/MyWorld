//导航栏动画
window.addEventListener("scroll",function(){
		var header =document.querySelector(".nav");
		header.classList.toggle("sticky",window.scrollY > 0);
})

function CloseAndOpen(){
	if( document.getElementById("bt").style.display == "none" )
	document.getElementById("bt").style.display = "block";
	else document.getElementById("bt").style.display = "none";
}