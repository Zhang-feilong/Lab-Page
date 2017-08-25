$(document).ready(function() {
    $('#findpassword').submit(function(){
        var realname = $(this).find('.realname').val();
        var email = $(this).find('.email').val();
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
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.email').focus();
            });
        }
     $.ajax({
            type:"POST",
            url:"api/member/findPassword",
            data:$("#findpassword").serialize(),
            success:function(data) {
                if(typeof data == 'string'){
                    data = JSON.parse(data);
                }
               if(data.code == 200){
                    alert(data.obj);
               }
            }
        });
    return false;
    });  
});