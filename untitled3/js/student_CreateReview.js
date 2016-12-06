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
        };


        SDK.Reviews.create(review, function(err, data){
            if(err) throw err;

        })

    })




});


