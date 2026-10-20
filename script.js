window.addEventListener("scroll", function (e) {
    let scroll_x_value = window.scrollX;
    let scroll_y_value = window.scrollY;
    // sets colors //
    let Green = parseInt(scroll_x_value * 0.1);   
    let Blue = parseInt(scroll_y_value * 0.1);
    let Red = 0
    
    document.getElementById("scrollBox").style.backgroundColor = "rgb(" + Red + "," + Green + "," + Blue + ")"

});