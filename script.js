// Function 1: toggleTheme — adds/removes .dark on the <body> to invert styles.
function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  // Function 2: toggleListExtra — shows/hides the last two list items in the ordered list
  function toggleListExtra() {
    const list = document.getElementById('movieList');
    if (!list) return;
    // toggle a 'hidden' class on items 4 & 5 (0-based index)
    const items = list.querySelectorAll('li');
    [3,4].forEach(i => {
      if (items[i]) items[i].classList.toggle('hidden');
    });
  }
  
  // Attach event listeners once DOM is ready.
  document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  
    const toggleListBtn = document.getElementById('toggleListBtn');
    if (toggleListBtn) toggleListBtn.addEventListener('click', toggleListExtra);
  
    // Contact form demo: clicking Send shows a message using DOM manipulation.
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
      sendBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        const status = document.getElementById('formStatus');
        if (status) {
          status.classList.remove('hidden');
          status.textContent = 'Message sent!';
        }
      });
    }
  });
  