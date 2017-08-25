$(document).ready(function() {
	$(".nav ul li a").hover(add,remove);
});

function add(){
	$(".nav ul li a").addClass("next");
}
function remove(){
	$(".nav ul li a").removeClass("next");
}

function c () {
    var r= new FileReader();
    f=document.getElementById('file').files[0];
    r.readAsDataURL(f);
    r.onload=function  (e) {
        document.getElementById('img').src=this.result;
    };
}

