viewlogin = $("#login-view");
viewlogin.hide();
btnlogin = $("#btn-login");
btnregis = $("#btn-regis");
formlogin = $("#form-login");
formlogin.hide();
btnpembeli = $("#btn-l-pembeli");
btnlogin.click(function(){
    $(this).hide();
    btnregis.hide();
   viewlogin.show();
})
btnpembeli.click(function(){
   viewlogin.hide();
    formlogin.show();
})