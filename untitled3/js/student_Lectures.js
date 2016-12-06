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
                "<td><button id='seReview'>" + "Se evalueringer" + "</button></td>" +
                "<td><button id='createReview' + lecture.id><a href = student_CreateReview.html>" + "Opret evaluering" + "</button></td>" +
                "<tr>");

            $('button[id^="seReview"]').on("click", function () {
                SDK.Storage.persist("lectureId", lecture.id);
                window.location.href='student_Reviews.html';
                seReview.close();
            })

        });
    });



});




