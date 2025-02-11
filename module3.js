function showModulePage() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("modulePage1").style.display = "block";
}


//Next Buttons
function next1() {
    document.getElementById("modulePage1").style.display = "none";
    document.getElementById("modulePage2").style.display = "block";
}

function next2() {
    document.getElementById("modulePage2").style.display = "none";
    document.getElementById("modulePage3").style.display = "block";
}

function next3() {
    document.getElementById("modulePage3").style.display = "none";
    document.getElementById("modulePage4").style.display = "block";
}

function next4() {
    document.getElementById("modulePage4").style.display = "none";
    document.getElementById("modulePage5").style.display = "block";
}

function next5() {
    document.getElementById("modulePage5").style.display = "none";
    document.getElementById("modulePage6").style.display = "block";
}

function next6() {
    document.getElementById("modulePage6").style.display = "none";
    document.getElementById("modulePage7").style.display = "block";
}

function next7() {
    document.getElementById("modulePage7").style.display = "none";
    document.getElementById("modulePage8").style.display = "block";
}

function next8() {
    document.getElementById("modulePage8").style.display = "none";
    document.getElementById("modulePage9").style.display = "block";
}

function next9() {
    document.getElementById("modulePage9").style.display = "none";
    document.getElementById("modulePage10").style.display = "block";
}

function quiz1() {
    document.getElementById("modulePage6").style.display = "none";
    document.getElementById("quizpage1").style.display = "block";
}

function next11() {
    document.getElementById("quizpage1").style.display = "none";
    document.getElementById("quizpage2").style.display = "block";
}

function next12() {
    document.getElementById("quizpage2").style.display = "none";
    document.getElementById("quizpage3").style.display = "block";
}

function next13() {
    document.getElementById("quizpage3").style.display = "none";
    document.getElementById("quizpage4").style.display = "block";
}

function next14() {
    document.getElementById("quizpage4").style.display = "none";
    document.getElementById("quizpage5").style.display = "block";
}

function next15() {
    document.getElementById("quizpage5").style.display = "none";
    document.getElementById("quizpage6").style.display = "block";
}


//Back Buttons
function back1() {
    document.getElementById("modulePage1").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
}

function back2() {
    document.getElementById("modulePage2").style.display = "none";
    document.getElementById("modulePage1").style.display = "block";
}

function back3() {
    document.getElementById("modulePage3").style.display = "none";
    document.getElementById("modulePage2").style.display = "block";
}

function back4() {
    document.getElementById("modulePage4").style.display = "none";
    document.getElementById("modulePage3").style.display = "block";
}

function back5() {
    document.getElementById("modulePage5").style.display = "none";
    document.getElementById("modulePage4").style.display = "block";
}

function back6() {
    document.getElementById("modulePage6").style.display = "none";
    document.getElementById("modulePage5").style.display = "block";
}

function back7() {
    document.getElementById("quizpage1").style.display = "none";
    document.getElementById("modulePage6").style.display = "block";
}

function back8() {
    document.getElementById("modulePage8").style.display = "none";
    document.getElementById("modulePage7").style.display = "block";
}

function back9() {
    document.getElementById("modulePage9").style.display = "none";
    document.getElementById("modulePage8").style.display = "block";
}

function back10() {
    document.getElementById("modulePage10").style.display = "none";
    document.getElementById("modulePage9").style.display = "block";
}

function back11() {
    document.getElementById("quizpage1").style.display = "none";
    document.getElementById("modulePage10").style.display = "block";
}

function back12() {
    document.getElementById("quizpage2").style.display = "none";
    document.getElementById("quizpage1").style.display = "block";
}

function back13() {
    document.getElementById("quizpage3").style.display = "none";
    document.getElementById("quizpage2").style.display = "block";
}

function back14() {
    document.getElementById("quizpage4").style.display = "none";
    document.getElementById("quizpage3").style.display = "block";
}

function back15() {
    document.getElementById("quizpage5").style.display = "none";
    document.getElementById("quizpage4").style.display = "block";
}

function back16() {
    document.getElementById("quizpage6").style.display = "none";
    document.getElementById("quizpage5").style.display = "block";
}

let previousButton = null;

function highlightButton(buttonId, color) {
    // Reset previous button's style if any
    if (previousButton) {
        previousButton.style.backgroundColor = ""; // Reset previous button background color
        previousButton.style.color = ""; // Reset previous button text color
    }

    // Get the button element and change its style
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = color; // Set the background color (green or red)
    button.style.color = "white"; // Change text color to white for better contrast

    // Update previousButton
    previousButton = button;
}

// Function for correct answers
function correct(buttonId) {
    highlightButton(buttonId, "green"); // Highlight the button with green for correct answer
}

// Function for wrong answers
function wrong(buttonId) {
    highlightButton(buttonId, "red"); // Highlight the button with red for wrong answer
}

// Correct answers
function correct() { highlightButton("button3", "green"); }
function correct1() { highlightButton("button6", "green"); }
function correct2() { highlightButton("button12", "green"); }
function correct3() { highlightButton("button13", "green"); }
function correct4() { highlightButton("button19", "green"); }
function correct5() { highlightButton("button24", "green"); }

// Wrong answers
function wrong1() { highlightButton("button1", "red"); }
function wrong2() { highlightButton("button2", "red"); }
function wrong3() { highlightButton("button4", "red"); }
function wrong4() { highlightButton("button5", "red"); }
function wrong5() { highlightButton("button7", "red"); }
function wrong6() { highlightButton("button8", "red"); }
function wrong7() { highlightButton("button9", "red"); }
function wrong8() { highlightButton("button10", "red"); }
function wrong9() { highlightButton("button11", "red"); }
function wrong10() { highlightButton("button14", "red"); }
function wrong11() { highlightButton("button15", "red"); }
function wrong12() { highlightButton("button16", "red"); }
function wrong13() { highlightButton("button17", "red"); }
function wrong14() { highlightButton("button18", "red"); }
function wrong15() { highlightButton("button20", "red"); }
function wrong16() { highlightButton("button21", "red"); }
function wrong17() { highlightButton("button22", "red"); }
function wrong18() { highlightButton("button23", "red"); }