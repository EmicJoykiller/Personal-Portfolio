document.addEventListener('DOMContentLoaded', function () {
    // Select the theme toggle button and the body element
    const themeToggleButton = document.querySelector('.theme-toggle');
    const body = document.body;
  
    // Check if there's a stored theme in localStorage
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
      themeToggleButton.textContent = '🌞';  // Change to sun icon for light mode
    } else {
      body.classList.remove('light-mode');
      themeToggleButton.textContent = '🌙';  // Change to moon icon for dark mode
    }
  
    // Add an event listener to the toggle button
    themeToggleButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌞';  // Sun icon for light mode
      } else {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌙';  // Moon icon for dark mode
      }
    });
  });
  