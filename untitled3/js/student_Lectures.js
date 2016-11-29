/**
 * Created by lefeilberg on 28/11/2016.
 */
$(document).ready(function () {

    $("#studentLogoutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "default_Index.html";
    });

    SDK.Lecture.getLecture(function (err, data) {
        if (err) throw err;
        var $lectureTableBody = $("#lectureTableBody");

        data.forEach(function (lecture) {
            $lectureTableBody.append(
                "<tr>" +
                "<td>" + lecture.description + "</td>" +
                "<td>" + lecture.startDate + "</td>" +
                "<td>" + lecture.endDate + "</td>" +
                "<td><div><button><a href = student_Reviews.html>" + "Se evalueringer" + "</button></div></td>" +
                "<td><div><button><a href = student_Reviews.html>" + "Opret evaluering" + "</button></div></td>" +
                "<tr>");
        });
    });



});




