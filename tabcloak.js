document.addEventListener("DOMContentLoaded", function() {
    // Check if the 'access' cookie exists
    const accessCookie = getCookie("access");
  
    if (!accessCookie) {
      removeAllElements();
      createPasswordInput();
    } else {
      // 'access' cookie exists
      if (accessCookie === '1') {
        // Access granted, display saved preferences
        displayTitlePreference();
      } else {
        removeAllElements();
        createPasswordInput();
      }
    }
  
    function removeAllElements() {
      const bodyContent = document.body;
      if (bodyContent) {
        bodyContent.innerHTML = ''; // Clears all content inside the body element
      }
    }
  
    function createPasswordInput() {
      const passwordInput = document.createElement('input');
      passwordInput.type = 'password';
      passwordInput.placeholder = 'Enter Password';
      passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
          const password = event.target.value;
          if (password === 'memesmp123') {
            document.cookie = "access=1; path=/; max-age=31536000"; // Expires in a year
            location.reload(); // Reload the page to display content
          } else {
            document.cookie = "access=0; path=/; max-age=31536000"; // Expires in a year
            removeAllElements();
            createPasswordInput();
          }
        }
      });
  
      // Append the password input to the body
      document.body.appendChild(passwordInput); // Appends the input to the body element
    }
  
    // Rest of your functions (saveTitlePreference, saveIconPreference, displayTitlePreference, getCookie)...
  });



function saveTitlePreference() {
    const pageTitle = getCookie("pageTitle");
    document.title = `${pageTitle}`;
    document.cookie = `pageTitle=${pageTitle}; path=/; max-age=31536000`; // Set a cookie that lasts for a year
}

function saveIconPreference() {
    const iconLink = getCookie("iconLink");
    document.cookie = `iconLink=${iconLink}; path=/; max-age=31536000`; // Set a cookie that lasts for a year
}

// Function to retrieve and display the saved title preference
function displayTitlePreference() {
    const pageTitle = getCookie("pageTitle");
    if (pageTitle) {
        document.title = `${pageTitle}`;
    }
    const iconLink = getCookie("iconLink");
    if (iconLink) {
      updateFavicon(iconLink);
    }

    function updateFavicon(link) {
      const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = link;
      document.getElementsByTagName('head')[0].appendChild(favicon);
    }
}

// Function to retrieve a specific cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return '';
}