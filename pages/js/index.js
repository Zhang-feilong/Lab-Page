$(document).ready(function() {
	$(".nav ul li a").hover(add,remove);
});

function add(){
	$(".nav ul li a").addClass("next");
}
function remove(){
	$(".nav ul li a").removeClass("next");
}