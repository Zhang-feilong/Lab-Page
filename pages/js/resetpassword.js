
$(document).ready(function() {

    $('.all form').submit(function(){
        var newpassword = $(this).find('.newpassword').val();
        var newpassword2 = $(this).find('.newpassword2').val();
        if(newpassword == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.newpassword').focus();
            });
            return false;
        }
        if(newpassword2 == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        if(newpassword2 != newpassword){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
                alert("两次输入得密码不相同！");
            });

            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
            return false;
        }
    });
    
    $('.all form .newpassword2, .all form .newpassword').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

    $("#forfet").click(function(){
        if(realname != ''){
            $(this).load("../register.html");
        }
    });
   
});
