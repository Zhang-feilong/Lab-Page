$(document).ready(function() {

    $('.all form').submit(function(){
        var realname = $(this).find('.realname').val();
        var email = $(this).find('.email').val();
        if(realname == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.realname').focus();
            });
            return false;
        }
        if(email == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
            return false;
        }
    });

    $('.all form .realname, .all form .email').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });
});