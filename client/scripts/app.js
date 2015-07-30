$(document).ready(function(){

    $(".clickHeading").click(function(){
        $(".showHeading").slideDown(2000);
        $(".clickHeading").hide();
    });
    $(".showHeading").click(function(){
        $(".showHeading").slideUp(2000);
        $(".clickHeading").show();
    });
    $(".clickEducation").click(function(){
        $(".showEducation").slideToggle(2000);
    });
    $(".clickExperience").click(function(){
        $(".showExperience").slideToggle(2000);
    });
});
