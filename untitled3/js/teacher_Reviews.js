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
                "<td><button id='sletReview'>" + "Slet Review" + "</button></td>" +
                "<tr>");

            $('button[id^="sletReview"]').on("click", function () {
                SDK.Storage.persist("reviewId", review.id);
                sletReview.close();
            });

        });

    });

   $("#sletReview").on("click", function () {
        var review = {
            lectureId: SDK.Storage.load("reviewId")
        };

        SDK.Reviews.deleteReview(review, function (err) {
            if (err) throw err;

        })

    })

});