/**
 * Created by lefeilberg on 29/11/2016.
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
                "<td>" + review.userId + "</td>" +
                "<td>" + review.rating + "</td>" +
                "<td>" + review.comment + "</td>" +
                "<tr>");
        });
    });



});




