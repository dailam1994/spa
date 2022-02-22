console.log('MHA - SPA');

// Declaring a function to handle the loop through website pages
displayPage = (pageId) => {
    // Contents
    let homeContent = document.getElementById('home-content');
    let aboutContent = document.getElementById('about-content');
    let commentContent = document.getElementById('comment-content');
    let listContent = document.getElementById('list-content');

    // Menus
    let homeMenu = document.getElementById('home-menu');
    let aboutMenu = document.getElementById('about-menu');
    let commentMenu = document.getElementById('comment-menu');
    let listMenu = document.getElementById('list-menu');

    // Hide all pages
    let pages = document.getElementsByClassName("pages");
    for (let page of pages) {
        page.style.display = "none";
    }

    // Show only pages with pageId
    let pageToDisplay = document.getElementById(pageId);
    pageToDisplay.style.display = 'block';

    // High-light Menu based on Content
    if (homeContent.style.display == 'block') {
        homeMenu.style.backgroundColor = 'goldenrod';
        homeMenu.style.borderRadius = '5px';
        aboutMenu.style.backgroundColor = 'rgb(184,15,10)';
        aboutMenu.style.border = 'none';
        commentMenu.style.backgroundColor = 'rgb(184,15,10)';
        commentMenu.style.border = 'none';
        listMenu.style.backgroundColor = 'rgb(184,15,10)';
        listMenu.style.border = 'none';
    } else if (aboutContent.style.display == 'block') {
        homeMenu.style.backgroundColor = 'rgb(184,15,10)';
        homeMenu.style.border = 'none';
        aboutMenu.style.backgroundColor = 'goldenrod';
        aboutMenu.style.borderRadius = '5px';
        commentMenu.style.backgroundColor = 'rgb(184,15,10)';
        commentMenu.style.border = 'none';
        listMenu.style.backgroundColor = 'rgb(184,15,10)';
        listMenu.style.border = 'none';
    } else if (commentContent.style.display == 'block') {
        homeMenu.style.backgroundColor = 'rgb(184,15,10)';
        homeMenu.style.border = 'none';
        aboutMenu.style.backgroundColor = 'rgb(184,15,10)';
        aboutMenu.style.border = 'none';
        commentMenu.style.backgroundColor = 'goldenrod';
        commentMenu.style.borderRadius = '5px';
        listMenu.style.backgroundColor = 'rgb(184,15,10)';
        listMenu.style.border = 'none';
    } else if (listContent.style.display == 'block') {
        homeMenu.style.backgroundColor = 'rgb(184,15,10)';
        homeMenu.style.border = 'none';
        aboutMenu.style.backgroundColor = 'rgb(184,15,10)';
        aboutMenu.style.border = 'none';
        commentMenu.style.backgroundColor = 'rgb(184,15,10)';
        commentMenu.style.border = 'none';
        listMenu.style.backgroundColor = 'goldenrod';
        listMenu.style.borderRadius = '5px';
    }
}

displayPage('home-content');
