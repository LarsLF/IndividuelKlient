/**
 * Created by lefeilberg on 29/11/2016.
 */

$(document).ready(function () {

    $("#studentLogoutButton").on("click", function () {
        SDK.logOut();
        window.location.href = "default_Index.html";
    });

    $("#tilføjEvaluering").on("click", function(){

        var review = {
            rating: $("#inputRating").val(),
            comment: $("#inputComment").val(),
            lectureId: SDK.Storage.load("lectureId"),
            userId: SDK.Storage.load("tokenId")
        };

        SDK.Reviews.createReview(review, function(err){
            if (err) throw err
        });

    })

});


