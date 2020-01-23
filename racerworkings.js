
    var winnerfound = false

    function moveleft(cr) {
    var thecar = document.getElementById(cr);
    var current = getCssProperty(cr,"left") ;
    var reg = new RegExp(/\d+/);
    var num = parseInt(current.match(reg));
    if (num <= 1700) thecar.style.left = (num+10+"px"); 
    else placewinner(cr);
    }

    function nitroleft(cr) {
        var thecar = document.getElementById(cr);
        var current = getCssProperty(cr,"left") ;
        var reg = new RegExp(/\d+/);
        var num = current.match(reg);
        if (num <= 1700) thecar.style.left = (parseInt(num)+50+"px");
        else placewinner(cr);
    }

    function placewinner(winningcar){
        winnerfound = true
        //document.getElementById("bd").innerHTML = "WINNER! <div id='rd' class='road'></div> <div id='car1' class='car'><img src='bluecar.png'></div> "
        if (winningcar === "car2"){
            document.getElementById("bd").innerHTML = "WINNER! <div id='rd' class='road'></div> <div id='car2' class='car'><img src='redcar.png'></div> "
        }
        else{
            document.getElementById("bd").innerHTML = "WINNER! <div id='rd' class='road'></div> <div id='car1' class='car'><img src='bluecar.png'></div> "
        }
        document.getElementById(winningcar).style.top = "50%"
        document.getElementById(winningcar).style.left = "50%"
        document.getElementById(winningcar).style.transform = "rotate(90deg)"
    
    }

    function getCssProperty(elmId, property){
        var elem = document.getElementById(elmId);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
    }


     window.onkeydown = function(e) {
         var code = e.keyCode
        if (winnerfound === false){
            if (code === 90) moveleft('car1')  //z
            if (code === 77) moveleft('car2')  //m
            if (code === 75) nitroleft('car2') //pans nitro
    }}
var pressedkeys = []
var qwertyLock = false

    window.onkeyup = function(e) {
        var pressed = e.keyCode;
        pressedkeys.unshift(pressed);
        pressedkeys = pressedkeys.slice(0,8)

        var konami = JSON.stringify([39, 37, 39, 37, 40, 40, 38, 38])
        var qwerty = JSON.stringify([89, 84, 82, 69, 87, 81])

        var pan = JSON.stringify(pressedkeys.slice(0,6))
        if (pan === qwerty){    
            if (qwertyLock == false) {
                qwertyLock = true
                console.log("Disarmed.")

            }
            else {
                qwertyLock = false 
            this.console.log("Armed.")}
        }

        if (qwertyLock === true){
        KonamiTry = JSON.stringify(pressedkeys)
        if (KonamiTry === konami) {
            console.log("KONAMI CODE ENTERED")
            document.getElementById("bd").innerHTML = "<img src='whiteOmega.png'>"
            
        }
    }
}