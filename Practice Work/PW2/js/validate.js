$(document).ready(function() {

    $("#username").after("<span id='username_span'></span>");
    $("#password").after("<span id='password_span'></span>");
    $("#email").after("<span id='email_span'></span>");

    $("#username_span").hide();
    $("#password_span").hide();
    $("#email_span").hide();

    $("#username").focus(function() {
        $("#username_span").text(" Enter username - only alphabetical or numeric characters");
        $("#username_span").show();
        $("#username_span").removeClass();
        $("#username_span").addClass("info");
    });

    $("#password").focus(function() {
        $("#password_span").text(" Enter password - atleast 8 characters");
        $("#password_span").show();
        $("#password_span").removeClass();
        $("#password_span").addClass("info");
    });

    $("#email").focus(function() {
        $("#email_span").text(" Enter email ID");
        $("#email_span").show();
        $("#email_span").removeClass();
        $("#email_span").addClass("info");
    });

    $("#username").blur(function() {
        uname = $("#username").val();
        $("#username_span").removeClass();
        if(uname.length > 0){
            $("#username_span").show();
            if(uname.match(/^[0-9a-zA-Z]+$/)){
                $("#username_span").text(" OK");
                $("#username_span").addClass("ok");
            }else{
                $("#username_span").text(" ERROR");
                $("#username_span").addClass("error");
            }
        }else{
            $("#username_span").hide();
        }
    });

    $("#password").blur(function() {
        pwd = $("#password").val();
        $("#password_span").removeClass();
        if(pwd.length > 0){
            $("#password_span").show();
            if(pwd.length > 7){
                $("#password_span").text(" OK");
                $("#password_span").addClass("ok");
            }else{
                $("#password_span").text(" ERROR");
                $("#password_span").addClass("error");
            }
        }else{
            $("#password_span").hide();
        }
    });

    $("#email").blur(function() {
        email = $("#email").val();
        $("#email_span").removeClass();
        if(email.length > 0){
            $("#email_span").show();
            if(email.indexOf("@") > 0){
                $("#email_span").text(" OK");
                $("#email_span").addClass("ok");
            }else{
                $("#email_span").text(" ERROR");
                $("#email_span").addClass("error");
            }
        }else{
            $("#email_span").hide();
        }
    });
});