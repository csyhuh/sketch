var gridSize = 16;
var squareSize = 45;

function createGrid() {
    for (var x = 0; x < gridSize; x++) {
        for (var y = 0; y < gridSize; y++) {
            $(".container").append("<div class='square'></div>");
        }
    }
    $('.square').css({ 'width': squareSize, 'height': squareSize });
}

function rainbow() {
    return "rgb(" + randNum(255) + "," + randNum(255) + "," + randNum(255) + ")";
}

function randNum(n) {
    return Math.floor(Math.random() * n);
}

$(document).ready(function() {
    createGrid();

    $(".container").on('mouseenter', function() {
        $(".square").hover(function() {
            if ($('#pen').is(':checked')) {
                $(this).css({ 'background-color': 'black', 'opacity': '1' });
            } else if ($('#random').is(':checked')) {
                $(this).css({ 'background-color': rainbow(), 'opacity': '1' });
            } else if ($('#gradient').is(':checked')) {
                $(this).css({ 'background-color': 'red', 'opacity': '+=0.1' });
            }
        });
    })

    $(".clearButton").click(function() {
        gridSize = prompt("How many squares per side?");
        if (gridSize === null) {
            return;
        } else {
            $('.container').empty();
            squareSize = 720 / gridSize;
            createGrid();
        }
    });

});