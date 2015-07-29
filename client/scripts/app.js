$(document).ready(function(){
    $('body').append("<button id='clickyButton'>Click ME!</button>");

    $("body").on('click', '#clickyButton', function(){
        console.log("clickyButton clicked!");
        $.ajax({
            url: "/data-request",
            success: function(data){
                console.log(data.message);
            }
        });
    });
});