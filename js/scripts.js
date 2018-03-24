// Drawer menu trigger
const menuTriggers = document.querySelectorAll('.menu-trigger');
[...menuTriggers].map((trigger) => {
  trigger.addEventListener('click', ({ target }) => {
    const menuWrapper = target.closest('.menu-wrapper');
    menuWrapper.classList.toggle('expanded');
  });
});

// Charts
window.onload = function() {
  const projectActivityCanvas = document.getElementById('project-activity-canvas').getContext('2d');
  const managersActivityCanvas = document.getElementById('managers-activity-canvas').getContext('2d');
  const visitsCanvas = document.getElementById('visits-canvas').getContext('2d');
  new Chart(projectActivityCanvas, PROJECT_ACTIVITY);
  new Chart(managersActivityCanvas, MANAGERS_ACTIVITY);
  new Chart(visitsCanvas, VISITS);
};
