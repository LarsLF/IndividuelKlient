/**
 * Created by lefeilberg on 17/11/2016.
 */

$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var pw = $("#inputPassword").val();

        SDK.login(email, pw, function(err, data){

            //On wrong credentials
            if(err) {
                //console.log("error");
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //Login OK!
            //console.log("Succes");
            $("#loginForm").find(".form-group").addClass("has-success");

         if(data.type === "admin")
             window.location.href = "admin_Index.html";

            else if (data.type === "student") {
             window.location.href = "student_Index.html";
            }

                else{
             window.location.href = "teacher_Index.html";
         }

        });

    });

});
