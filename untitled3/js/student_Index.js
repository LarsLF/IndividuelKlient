/**
 * Created by lefeilberg on 21/11/2016.
 */
$(document).ready(function () {

    $("#studentLogoutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "default_Index.html";
    });

    SDK.Course.getCourse(function (err, data) {
        if (err) throw err;
        var $coursesTableBody = $("#coursesTableBody");

        data.forEach(function (course) {
            $coursesTableBody.append(
                "<tr>" +
                "<td>" + course.displaytext + "</td>" +
                "<td>" + course.code + "</td>" +
                "<td><div><button><a href = login.html>" + "Se forelæsninger" + "</button></div></td>" +
                "<tr>");
        });
    });




});




