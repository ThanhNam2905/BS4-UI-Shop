
function setActiveStyle(colorName) {
    $(".alternate-style").attr("disabled", "true");
    $(".alternate-style[title="+colorName+"]").removeAttr("disabled");
}

$("#btn--toggle-switcher").click(function() {
    $(".style-switcher-color").toggleClass("open");
})