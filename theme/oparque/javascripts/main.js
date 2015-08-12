function toggleMenu() {
    var menuSelector = $("nav");
    var buttonSelector = $(".menu-button button");

    var openButtonClass = "button-open";
    var closeButtonClass = "button-close";

    if (menuSelector.css("display") === "none") {
        /* Abrindo*/
        menuSelector.css("display", "block");
        
        buttonSelector.removeClass(openButtonClass);
        buttonSelector.addClass(closeButtonClass);

    } else {
        /* Fechando*/
        menuSelector.css("display", "");

        buttonSelector.removeClass(closeButtonClass);
        buttonSelector.addClass(openButtonClass);
    }
}