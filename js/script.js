$(document).ready(function () {
    // Modal 1
    const modal1 = $("#modal1");
    const parts1 = $(".nav-link1");
    const close1 = $(".close1");
    
    parts1.on("click", function () {
        modal1.css("display", "block");
    });

    close1.on("click", function () {
        modal1.css("display", "none");
    });

    $(window).on("click", function (event) {
        if (event.target === modal1[0]) {
            modal1.css("display", "none");
        }
    });

    // Modal 2
    const modal2 = $("#modal2");
    const parts2 = $(".nav-link2");
    const close2 = $(".close2");

    parts2.on("click", function () {
        modal2.css("display", "block");
    });

    close2.on("click", function () {
        modal2.css("display", "none");
    });

    $(window).on("click", function (event) {
        if (event.target === modal2[0]) {
            modal2.css("display", "none");
        }
    });

    // Repeat similar code for other modals (modal3, modal4, etc.)
});
$(document).ready(function () {
    // Modal 3
    const modal3 = $("#modal3");
    const parts3 = $(".nav-link3");
    const close3 = $(".close3");

    parts3.on("click", function () {
        modal3.css("display", "block");
    });

    close3.on("click", function () {
        modal3.css("display", "none");
    });

    $(window).on("click", function (event) {
        if (event.target === modal3[0]) {
            modal3.css("display", "none");
        }
    });

    // Modal 4
    const modal4 = $("#modal4");
    const parts4 = $(".nav-link4");
    const close4 = $(".close4");

    parts4.on("click", function () {
        modal4.css("display", "block");
    });

    close4.on("click", function () {
        modal4.css("display", "none");
    });

    $(window).on("click", function (event) {
        if (event.target === modal4[0]) {
            modal4.css("display", "none");
        }
    });

    // Modal 5 (Similar Code)
    const modal5 = $("#modal5");
    const parts5 = $(".nav-link5");
    const close5 = $(".close5");

    parts5.on("

