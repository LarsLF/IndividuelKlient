/**
 * Created by lefeilberg on 21/11/2016.
 */
$(document).ready(function () {

    $("#teacherLogoutButton").on("click", function(){
        SDK.logOut();
        window.location.href = "default_Index.html";
    });

});