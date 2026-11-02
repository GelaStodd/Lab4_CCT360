window.addEventListener("scroll", function (e) {
    let scroll_x_value = window.scrollX;
    let scroll_y_value = window.scrollY;
    // sets colors //
    let Green = parseInt(scroll_x_value * 0.1);   
    let Blue = parseInt(scroll_y_value * 0.1);
    let Red = 0
    
    document.getElementById("scrollBox").style.backgroundColor = "rgb(" + Red + "," + Green + "," + Blue + ")"

});

document.getElementById("div1").addEventListener("mouseover", HoverOverBoxFunction);
let hoverOverCounter = 0

    function HoverOverBoxFunction(event) {
         hoverOverCounter++;
         if (hoverOverCounter == 1) {
            document.getElementById("div1").style.backgroundColor = "rgb(69, 146, 255)";
            document.getElementById("div1Text").innerHTML = "You hovered over the box 1 time. Did you know the color blue can be associated with calmness and intelligence?";
        } 
        else if (hoverOverCounter == 2) {
            document.getElementById("div1").style.backgroundColor = "rgb(255, 83, 246)";
            document.getElementById("div1Text").innerHTML = "You hovered over the box 2 times. Did you know the color pink can mean love, or compassion?";   
         }   
        else if (hoverOverCounter == 3) {
            document.getElementById("div1").style.backgroundColor = "rgb(252, 255, 69)";
            document.getElementById("div1Text").innerHTML = "You hovered over the box 3 times. Did you know the color yellow represents joy, sunlight, and spirituality?";
        }
            
        else {
            document.getElementById("div1").style.backgroundColor = "rgb(133, 133, 133)";
            document.getElementById("div1Text").innerHTML = "You've reached the end of my colors. We will now start over.";
            hoverOverCounter = 0;
        }
    }
    