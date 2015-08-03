function toggleMenu() {
    var menuSelector = $("nav .menu");
    var buttonSelector = $("nav .open-menu button");

    if (menuSelector.css("display") === "none") {
        menuSelector.css("display", "inline-block");
        buttonSelector.removeClass("button-closed");
        buttonSelector.addClass("button-open");
    } else {
        menuSelector.css("display", "");
        buttonSelector.removeClass("button-open");
        buttonSelector.addClass("button-closed");
    }
}