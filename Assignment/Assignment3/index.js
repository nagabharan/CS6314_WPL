$(document).ready(function() {

    $("#submitButton").click(function(e) {
        e.preventDefault();
        var inputYear = $("#chooseYear").val();

        $(".displayYear,.maleDiv,.femaleDiv").show();


        $.ajax({
            url: "http://localhost/wplhw3/babynames.php",
            type: 'post',
            dataType: 'json',
            data: {
                'inputYear': inputYear
            },
            success: function(data) {

                $(".year").text(inputYear);

                $(".femaleDiv").text(" " + "Top 5 Girl Names ");
                $(".femaleDiv").append("<br><br>");

                $(".maleDiv").text(" " + "Top 5 Boy Names ");
                $(".maleDiv").append("<br><br>");

                for (var r = 1; r <= 5; r++) {
                    $(".femaleDiv").append(r + ". " + data[r] + "<br>");
                }
                for (var r = 6; r < data.length; r++) {
                    $(".maleDiv").append(r - 5 + ". " + data[r] + "<br>");
                }
            },
            error: function(err) {
                alert("Error loading JS File" + err);
            }
        });
    });

});