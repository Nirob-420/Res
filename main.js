// Function to toggle between light and dark themes
    function toggleTheme() {
      const body = document.body;
      const button = document.querySelector('.theme-toggle');
    
      // Toggle the theme class
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme'); // Add light theme
        button.textContent = 'Dark Mode'; // Change text to 'Dark Mode'
        localStorage.setItem('theme', 'light'); // Store the theme in local storage
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme'); // Add dark theme
        button.textContent = 'Light Mode'; // Change text to 'Light Mode'
        localStorage.setItem('theme', 'dark'); // Store the theme in local storage
      }
    }
    
    // Function to toggle the dropdown menu
    function toggleMenu() {
      const menu = document.getElementById('dropdownMenu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
    
    // Close dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('dropdownMenu');
      const menuIcon = document.querySelector('.menu-icon');
    
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
      }
    });
    
    // Restore the theme from local storage on page load
    window.onload = function() {
      const theme = localStorage.getItem('theme') || 'light'; // Default to light theme
      document.body.classList.add(theme + '-theme'); // Add the corresponding theme
      document.querySelector('.theme-toggle').textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode'; // Update button text
    }
