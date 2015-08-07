function toggleMenu() {
    var menuSelector = $("nav");
    var columnsSelector = $("nav .columns");

    var buttonSelector = $("header .menu-button button");

    var openButtonClass = "button-open";
    var closeButtonClass = "button-close";

    if (menuSelector.css("display") === "none" || columnsSelector.css("display") === "none") {
        /* Abrindo*/
        menuSelector.css("display", "block");
        columnsSelector.css("display", "block");

        buttonSelector.removeClass(openButtonClass);
        buttonSelector.addClass(closeButtonClass);

    } else {
        /* Fechando*/
        menuSelector.css("display", "");
        columnsSelector.css("display", "");

        buttonSelector.removeClass(closeButtonClass);
        buttonSelector.addClass(openButtonClass);
    }
}