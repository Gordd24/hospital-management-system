$(document).ready(function () {
    $("input").dblclick(function () {
        $('input').prop('readonly', false);
        $(':submit').css("background-color", "rgb(91, 220, 125)");
        $(":submit").prop('disabled', false);
        $("#edit_stat").text("You are Editing!");
        $("#edit_stat").css('color', "rgb(91, 220, 125)");
    });
});

