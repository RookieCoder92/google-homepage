document.querySelector('.square-logo-container').addEventListener('mouseover', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        square.classList.toggle("square-hover");
    });
});

document.querySelector('.square-logo-container').addEventListener('mouseout', function () {
    let squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        square.classList.toggle("square-hover");
    });
});
