function hatdog() {
    var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
    
        var changeBg = document.body.style.backgroundColor = "rgb(" + red + "," + green + "," 
        + blue + ")";

        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);

        var changeBtn = document.getElementById("hatdogbtn").style.backgroundColor = "rgb(" +
        red + "," + green + "," + blue + ")";
}

function hatdogWithTimer() {
    alert("Epilepsy Warning!!!!!!!!!!!");
    
    const doggie = `
    <input type="button" value="GO BACK" style="font-size: 40px;" class="btn btn-danger new-btn" 
    onclick="window.location.reload(true)">
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    <img src=dancing-dance.gif> </img>
    `;
    document.body.innerHTML = doggie;
    var epilepsy = setInterval(hatdog, 100);
}

