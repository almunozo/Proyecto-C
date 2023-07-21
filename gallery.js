/*Name this external file gallery.js*/

function upDate(element) {
    document.getElementById('image').innerHTML = element.alt;
    var x = document.getElementById('image');
    x.style.backgroundImage = "url('" + element.src + "')";
}

function unDo() {
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    var x = document.getElementById('image');
    x.style.backgroundColor = "#8e68ff";
    x.style.backgroundImage = "none"
}