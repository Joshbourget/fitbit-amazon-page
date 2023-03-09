var watch = document.getElementById("smartwatch");
var blackButton = document.getElementById("black-button")
var redButton = document.getElementById("red-button")
var blueButton = document.getElementById("blue-button")
var pinkButton = document.getElementById("pink-button")

blackButton.addEventListener("click", function() {
    var blackWatch = "/smart-watch/Assets/black-smartwatch.png"
    watch.src = blackWatch
});

redButton.addEventListener("click", function() {
    var redWatch = "/smart-watch/Assets/red-smartwatch.png"
    watch.src = redWatch
});

blueButton.addEventListener("click", function() {
    var blueWatch = "/smart-watch/Assets/blue-smartwatch.png"
    watch.src = blueWatch
})

pinkButton.addEventListener("click", function() {
    var pinkWatch = "/smart-watch/Assets/pink-smartwatch.png"
    watch.src = pinkWatch
})
