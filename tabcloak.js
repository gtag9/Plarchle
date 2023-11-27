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
