var quoteAPI = "http://api.icndb.com/jokes/random?escape=javascript";
var currentQuote = "";

$(document).ready(function () {
    getRandomQuote();
});

function getRandomQuote() {
    $.getJSON(quoteAPI, function (json) {
        currentQuote = json.value.joke;
        $("#quote-joke").text(currentQuote);
        $("#quote-id").text("Joke ID: " + json.value.id);
        $("#quote-category").text("Category: " + json.value.categories[0]);
    });
    var colors = hslaRandomColor();
    $("body").css("background-color", colors);
    $(".btn").css("background-color", colors);
}

function hslaRandomColor() {
    var hue = Math.floor(Math.random() * 360) + 1;
    return "hsla(" + hue + ", 80%, 65%, 1";
}

// Currently only logging the resulting URL to avoid spamming twitter
function tweetThis() {
    var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
        encodeURIComponent('"' + currentQuote + '" Chuck Norris');
    console.log(tweetUrl);
}