/**
 * Created by lefeilberg on 07/12/2016.
 */
$(document).ready(function () {

    $("#studentLogoutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "default_Index.html";
    });

    SDK.Reviews.getReview(function (err, data) {
        if (err) throw err;
        var $reviewTableBody = $("#reviewTableBody");

        data.forEach(function (review) {
            $reviewTableBody.append(
                "<tr>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<td><button id='sletReviewEt'>" + "Slet Review" + "</button></td>" +
                "<td><button id='sletReviewTo'>" + "Sikker?" + "</button></td>" +
                "</tr>");

            $('button[id^="sletReviewEt"]').on("click", function () {
                SDK.Storage.persist("reviewId", review.id);
                window.location.href='teacher_Reviews.html';
                sletReviewEt.close();
            });
            $("#sletReviewTo").on("click", function () {

                SDK.Reviews.deleteReview(SDK.Storage.load("reviewId"), function (err) {
                    if (err) throw err;
                    else {
                        window.location.href='teacher_Reviews.html';
                    }
                })
            })
        });
    });
});