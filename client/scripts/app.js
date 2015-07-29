$(document).ready(function(){
    $("main").prepend("<button id='clickyButton'>Resume?</button>");

    $("#clickyButton").click(function(){
        $("#hidey").slideDown();
        $("#clickyButton").hide();
    });
    $("#hidey").click(function(){
        $("#hidey").slideUp();
        $("#clickyButton").show();
    });
});
