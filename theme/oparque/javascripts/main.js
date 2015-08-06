function toggleMenu() {
    var menuSelector = $("nav");
    var buttonSelector = $("header .menu-button");

    if (menuSelector.css("display") === "none") {
        menuSelector.css("display", "inline-block");
        buttonSelector.removeClass("button-clos");
        buttonSelector.addClass("button-open");
    } else {
        menuSelector.css("display", "");
        buttonSelector.removeClass("button-open");
        buttonSelector.addClass("button-close");
    }
}