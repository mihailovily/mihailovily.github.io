/*$(document).ready(function () {
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $("#burger").addClass("cross");
            $("#burger").removeClass("hamburger");
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $("#burger").addClass("hamburger");
            $("#burger").removeClass("cross");
        });
    });

});
*/
$(document).ready(function () {
    $("#burger").click(function () {
        $(".menu").toggle(1000);
    });
});
