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
    document.getElementById("modulePage10").style.display = "none";
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
    document.getElementById("modulePage7").style.display = "none";
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

// Quiz Buttons
    let previousButton = null;

    function correct() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button1 = document.getElementById("button1");
        button1.style.backgroundColor = "green"; // Light up the button with green background
        button1.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button1; // Update the previous button
    }

    function correct1() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button7 = document.getElementById("button7");
        button7.style.backgroundColor = "green"; // Light up the button with green background
        button7.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button7; // Update the previous button
    }

    function correct2() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button10 = document.getElementById("button10");
        button10.style.backgroundColor = "green"; // Light up the button with green background
        button10.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button10; // Update the previous button
    }

    function correct3() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button16 = document.getElementById("button16");
        button16.style.backgroundColor = "green"; // Light up the button with green background
        button16.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button16; // Update the previous button
    }

    function correct4() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button20 = document.getElementById("button20");
        button20.style.backgroundColor = "green"; // Light up the button with green background
        button20.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button20; // Update the previous button
    }

    function correct5() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button23 = document.getElementById("button23");
        button23.style.backgroundColor = "green"; // Light up the button with green background
        button23.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button23; // Update the previous button
    }

    // Function to handle wrong answer for button 2
    function wrong1() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button2 = document.getElementById("button2");
        button2.style.backgroundColor = "red"; // Light up the button with red background
        button2.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button2; // Update the previous button
    }

    // Function to handle wrong answer for button 3
    function wrong2() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button3 = document.getElementById("button3");
        button3.style.backgroundColor = "red"; // Light up the button with red background
        button3.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button3; // Update the previous button
    }

    // Function to handle wrong answer for button 4
    function wrong3() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button4 = document.getElementById("button4");
        button4.style.backgroundColor = "red"; // Light up the button with red background
        button4.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button4; // Update the previous button
    }

    function wrong4() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button5 = document.getElementById("button5");
        button5.style.backgroundColor = "red"; // Light up the button with red background
        button5.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button5; // Update the previous button
    }

    function wrong5() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button6 = document.getElementById("button6");
        button6.style.backgroundColor = "red"; // Light up the button with red background
        button6.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button6; // Update the previous button
    }

    function wrong6() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button8 = document.getElementById("button8");
        button8.style.backgroundColor = "red"; // Light up the button with red background
        button8.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button8; // Update the previous button
    }

    function wrong7() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button9 = document.getElementById("button9");
        button9.style.backgroundColor = "red"; // Light up the button with red background
        button9.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button9; // Update the previous button
    }

    function wrong8() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button11 = document.getElementById("button11");
        button11.style.backgroundColor = "red"; // Light up the button with red background
        button11.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button11; // Update the previous button
    }

    function wrong9() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button12 = document.getElementById("button12");
        button12.style.backgroundColor = "red"; // Light up the button with red background
        button12.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button12; // Update the previous button
    }

    function wrong10() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button13 = document.getElementById("button13");
        button13.style.backgroundColor = "red"; // Light up the button with red background
        button13.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button13; // Update the previous button
    }

    function wrong11() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button14 = document.getElementById("button14");
        button14.style.backgroundColor = "red"; // Light up the button with red background
        button14.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button14; // Update the previous button
    }

    function wrong12() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button15 = document.getElementById("button15");
        button15.style.backgroundColor = "red"; // Light up the button with red background
        button15.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button15; // Update the previous button
    }

    function wrong13() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button17 = document.getElementById("button17");
        button17.style.backgroundColor = "red"; // Light up the button with red background
        button17.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button17; // Update the previous button
    }

    function wrong14() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button18 = document.getElementById("button18");
        button18.style.backgroundColor = "red"; // Light up the button with red background
        button18.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button18; // Update the previous button
    }

    function wrong15() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button19 = document.getElementById("button19");
        button19.style.backgroundColor = "red"; // Light up the button with red background
        button19.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button19; // Update the previous button
    }

    function wrong16() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button21 = document.getElementById("button21");
        button21.style.backgroundColor = "red"; // Light up the button with red background
        button21.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button21; // Update the previous button
    }

    function wrong17() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button22 = document.getElementById("button22");
        button22.style.backgroundColor = "red"; // Light up the button with red background
        button22.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button22; // Update the previous button
    }

    function wrong18() {
        if (previousButton) {
            previousButton.style.backgroundColor = ""; // Reset previous button background color
            previousButton.style.color = ""; // Reset previous button text color
        }
        const button24 = document.getElementById("button24");
        button24.style.backgroundColor = "red"; // Light up the button with red background
        button24.style.color = "white"; // Optional: Change text color for better contrast
        previousButton = button24; // Update the previous button
    }