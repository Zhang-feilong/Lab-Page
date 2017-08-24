$(document).ready(function() {
	$(".nav ul li a").hover(add,remove);
});

function add(){
	$(".nav ul li a").addClass("next");
}
function remove(){
	$(".nav ul li a").removeClass("next");
}


$("#btn").click(function(){
	var xhr = createXHR();
	xhr.open("POST", "api/file/upload", true);
	xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
	// Handle response.
	alert(xhr.responseText); // handle response.
	}
	};
	fd.append('myFile', file);
	// Initiate a multipart/form-data upload
	xhr.send(fd)
});



function c () {
    var r= new FileReader();
    f=document.getElementById('file').files[0];
    r.readAsDataURL(f);
    r.onload=function  (e) {
        document.getElementById('img').src=this.result;
    };
}

function createXHR(){
	if(typeof XMLHttpRequest !="undefined"){
		return new XMLHttpRequest();
	}else if (typeof ActiveXObject !="undefined"){
		if(typeof arguments.callee.activeXString !="string"){
			var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
			i,len;
			for(i=0,len=versions.length;i<len;i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				}
				catch(ex){

				}
			}	
		}	
		return new ActiveXObject(arguments.callee.activeXString);
	}else{
		throw new Error("No XHR object availiable.");
	}
}