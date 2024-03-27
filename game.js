let buttonPaper = document.querySelector("#paper");
let buttonRock = document.querySelector("#rock");
let buttonScissors = document.querySelector("#scissors");

let firstPlayer = document.querySelector("#secondPlayer");
let computer = document.querySelector("#computer");

let rock = document.querySelector("#rockLogo");
let scissors = document.querySelector("#scissorsLogo");
let paper = document.querySelector("#paperLogo");

// Initially hide all elements
rock.style.display = 'none';
scissors.style.display = 'none';
paper.style.display = 'none';

buttonPaper.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(paper);
});

buttonRock.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(rock);
});

buttonScissors.addEventListener("click", function(e) {
    e.preventDefault();
    showItem(scissors);
});

function showItem(itemToShow) {
    // Hide all items
    rock.style.display = 'none';
    scissors.style.display = 'none';
    paper.style.display = 'none';
    
    // Show the selected item
    itemToShow.style.display = "block";

    // Hide the selected item after 3 seconds
    setTimeout(function() {
        itemToShow.style.display = "none";
    }, 3000);
}
