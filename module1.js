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