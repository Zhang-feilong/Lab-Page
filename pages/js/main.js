//登录表单

$(document).ready(function() {

    $('.all form').submit(function(){
        var realname = $(this).find('.realname').val();
        var password = $(this).find('.password').val();
        if(realname == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.realname').focus();
            });
            return false;
        }
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.all form .realname, .all form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

    $("#forfet").click(function(){
        if(realname != ''){
            $(this).load("../register.html");
        }
    });
   

    function createXHR(){
        //检测原生XHR对象是否存在
        if(typeof XMLHttpRequest != "undefined"){
            return new XMLHttpRequest();
        }
        //检测ActiveX对象是否存在
        else if(typeof ActiveXObject != "undefined"){
            if(typeof argumemts.callee.activeXString !="string"){
                var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
                var i,len;
                for(i=0,len = versions.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        argumemts.callee.activeXString = versions[i];
                        break;
                    }catch(ex){
                        //跳过
                    }
                }
            }
            return new ActiveXObject(argumemts.callee.activeXString);
        }else {
            throw new Error("no XHR object aviailable");
        }
    }
    var xhr = createXHR();
    xhr.open("get","1.txt",true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if((xhr.status >=200 && xhr.status < 300|| xhr.status == 304)){
                console.log("响应得http状态代码："+ xhr.status);    
                console.log(xhr.responseText);
                console.log(xhr.getAllResponseHeaders());
                // document.getElementById("mydiv").innerHTML = xhr.responseText;
                console(xhr.responseText);
            }else{
                console.log("Request was unsuccessful: " + xhr.status);
            }
        }
    };
});
