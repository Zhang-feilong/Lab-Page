//注册表单

$(document).ready(function() {

    $('.all form').submit(function(){
        var realname = $(this).find('.realname').val();
        var loginname = $(this).find('.loginname').val();
        var password2 = $(this).find('.password2').val();
        var password = $(this).find('.password').val();
        var email = $(this).find('.email').val();
        var department = $(this).find('select  option:selected').val();
        if(realname == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.realname').focus();
            });
            return false;
        }
        // if(loginname == '') {
        //     $(this).find('.error').fadeOut('fast', function(){
        //         $(this).css('top', '96px');
        //     });
        //     $(this).find('.error').fadeIn('fast', function(){
        //         $(this).parent().find('.password').focus();
        //     });
        //     return false;
        // }
        if(email == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
            return false;
        }
        if(password == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
        if(password2 == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
            return false;
        }
        if(department == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '372px');
                alert("请选择平台！");
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('#department').focus();
            });
            return false;
        }
        if(password2 != password){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
                alert("两次输入得密码不相同！");
            });

            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
            return false;
        }
        // $(".login").css("display","block");
        else
         window.location.href ="../htmls/page.html";
    });

    $('.all form .realname, .all form .loginname').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
