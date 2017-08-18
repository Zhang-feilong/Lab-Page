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

});
