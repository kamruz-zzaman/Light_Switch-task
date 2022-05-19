function handleLight() {
    var bulb = document.getElementById('bulb');

    if (bulb.src.match("ONbulb"))
        bulb.src = "/assets/OFFbulb.jpg";
    else
        bulb.src = "/assets/ONbulb.jpg";
}
