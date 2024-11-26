// Get all the draggable elements
const websites = document.querySelectorAll('.website');
const safeZone = document.getElementById('safe-dropzone');
const unsafeZone = document.getElementById('unsafe-dropzone');

// Add event listeners for drag and drop
websites.forEach(website => {
  website.addEventListener('dragstart', dragStart);
});

safeZone.addEventListener('dragover', allowDrop);
unsafeZone.addEventListener('dragover', allowDrop);

safeZone.addEventListener('drop', dropWebsite);
unsafeZone.addEventListener('drop', dropWebsite);

// Allow drop
function allowDrop(e) {
  e.preventDefault();
}

// Handle drag start
function dragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
}

// Handle drop
function dropWebsite(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const draggedElement = document.getElementById(data);
  const targetZone = e.target.closest('.drop-zone'); // Ensure you append to the correct drop zone

  if (targetZone) {
    targetZone.appendChild(draggedElement);
    draggedElement.style.margin = "10px";
  }
}

// Check answers
function checkResult() {
    const safeZoneItems = safeZone.querySelectorAll('.website').length;
    const unsafeZoneItems = unsafeZone.querySelectorAll('.website').length;
    const totalWebsites = document.querySelectorAll('.website').length;
  
    // Check if all websites are placed
    if (safeZoneItems + unsafeZoneItems < totalWebsites) {
      document.getElementById('result-message').textContent = 'There are still more sites to place!';
      document.getElementById('result-message').style.color = 'orange';
      return; // Exit the function early if not all websites are placed
    }
  
    let allCorrect = true;
  
    // Check all websites in the "Safe Websites" drop zone
    safeZone.querySelectorAll('.website').forEach(item => {
      if (item.getAttribute('data-category') !== 'safe') {
        allCorrect = false; // If any unsafe website is in the safe zone
      }
    });
  
    // Check all websites in the "Unsafe Websites" drop zone
    unsafeZone.querySelectorAll('.website').forEach(item => {
      if (item.getAttribute('data-category') !== 'unsafe') {
        allCorrect = false; // If any safe website is in the unsafe zone
      }
    });
  
    // Display result
    if (allCorrect) {
      document.getElementById('result-message').textContent = 'Your answers are correct!';
      document.getElementById('result-message').style.color = 'green';
    } else {
      document.getElementById('result-message').textContent = 'Sorry, try again!';
      document.getElementById('result-message').style.color = 'red';
    }
  }

// Reset game
function resetGame() {
  // Clear drop zones
  safeZone.innerHTML = '<p>Drag Safe Websites Here</p>';
  unsafeZone.innerHTML = '<p>Drag Unsafe Websites Here</p>';

  // Clear the result message
  document.getElementById('result-message').textContent = '';

  // Reset website list
  const websiteList = document.querySelector('.website-list');
  websiteList.innerHTML = `
    <h3>Drag these websites:</h3>
    <div class="website" id="website1" draggable="true" data-category="safe">
      <p>https://urlgoeshere</p>
    </div>
    <div class="website" id="website2" draggable="true" data-category="unsafe">
      <p>http://urlgoeshere</p>
    </div>
    <div class="website" id="website3" draggable="true" data-category="safe">
      <p>https://urlgoeshere</p>
    </div>
    <div class="website" id="website4" draggable="true" data-category="unsafe">
      <p>http://urlgoeshere</p>
    </div>
    <div class="website" id="website5" draggable="true" data-category="safe">
      <p>https://urlgoeshere</p>
    </div>
    <div class="website" id="website6" draggable="true" data-category="unsafe">
      <p>http://urlgoeshere</p>
    </div>
  `;

  // Re-add event listeners to reset the drag-and-drop behavior
  const newWebsites = document.querySelectorAll('.website');
  newWebsites.forEach(website => {
    website.addEventListener('dragstart', dragStart);
  });
}