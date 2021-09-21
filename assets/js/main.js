function hideFunc() {
    var h = document.getElementsByClassName("hide");
    for (var i = 0; i < h.length; i++) {
        h[i].style.display = "none";
    }
}

function homeFunc() {
    var home = document.getElementById("home")
    home.innerHTML = "Home Sweet Home!";
}

function changeImgFunc() {
    var image = document.getElementById("senseiPhoto");
    image.src = "assets/images/r_sensei.png";
}