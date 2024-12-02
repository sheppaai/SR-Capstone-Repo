document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');

    function allowDrop(event) {
        event.preventDefault();
    }

    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    function drop(event) {
        event.preventDefault();
        const emailId = event.dataTransfer.getData("text");
        const email = document.getElementById(emailId);
        const dropZoneId = event.target.id;

        // Logic to check if the email is correctly categorized
        const isCorrect = validateEmailPlacement(emailId, dropZoneId);

        // Add email to the drop zone
        if (event.target.classList.contains('dropzone')) {
            event.target.appendChild(email);
        }

        // Show popup
        showPopup(isCorrect ? "Correct!" : "Wrong!", isCorrect);
    }

    function validateEmailPlacement(emailId, dropZoneId) {
        const legitEmails = ["email1", "email3"];
        const phishingEmails = ["email2", "email4", "email5", "email6"];

        if (dropZoneId === "legit-zone" && legitEmails.includes(emailId)) {
            return true;
        } else if (dropZoneId === "phishing-zone" && phishingEmails.includes(emailId)) {
            return true;
        }
        return false;
    }

    function showPopup(message, isCorrect) {
        popup.textContent = message;

        // Update popup colors based on correctness
        popup.style.backgroundColor = isCorrect ? "#d4edda" : "#f8d7da"; // Green for correct, red for wrong
        popup.style.borderColor = isCorrect ? "#c3e6cb" : "#f5c6cb";

        // Show the popup
        popup.style.display = "block";

        // Hide the popup after 2 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);
    }

    // Attach global functions for drag-and-drop
    window.allowDrop = allowDrop;
    window.drag = drag;
    window.drop = drop;
});
  
  function resetGame() {
    // Select the original container for email cards
    const emailCardsContainer = document.querySelector(".email-cards");

    // Select all email cards from both drop zones
    const allCards = document.querySelectorAll(".email-card");

    // Reset the content of the drop zones but keep the headers
    const legitZone = document.getElementById("legit-zone");
    const phishingZone = document.getElementById("phishing-zone");

    legitZone.innerHTML = "<h3>Legitimate Emails</h3>";
    phishingZone.innerHTML = "<h3>Phishing Emails</h3>";

    // Move all cards back to the original container
    allCards.forEach(card => {
        emailCardsContainer.appendChild(card);
    });

    // Ensure cards are draggable again if needed
    allCards.forEach(card => {
        card.classList.remove("dragging"); // Remove any additional classes
    });
}