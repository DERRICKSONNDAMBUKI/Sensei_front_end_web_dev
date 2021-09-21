function changeImgFunc() {
    var image = document.getElementById("senseiPhoto");
    image.src = "assets/images/r_sensei.png";
}function hideFunc() {
    var h = document.getElementsByClassName("hide");
    for (var i = 0; i < h.length; i++) {
        h[i].style.display = "none";
    }
}