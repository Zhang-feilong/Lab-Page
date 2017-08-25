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
        }
        if(email == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '165px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
        }
        if(password == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
        }
        if(password2 == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '303px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
        }
        if(department == ''){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '372px');
                alert("请选择平台！");
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('#department').focus();
            });
        }
        if(password2 != password){
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '234px');
                alert("两次输入得密码不相同！");
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password2').focus();
            });
        }
        $.ajax({
            type:"POST",
            url:"api/member/register",
            data:$("#my_register").serialize(),
            success:function(data) {
                if(data.code == 200){
                    alert("注册成功，请登录！")
                }
               window.location.href = "login.html";
            }
        });
        return false;
    });
});
