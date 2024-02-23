// croll button for apartmani
document.getElementById('apartmani').addEventListener('click', function() {
    // Scroll to the target div
    document.getElementById('apartmani-title').scrollIntoView({ behavior: 'smooth' });
});

//scroll button for blog
document.getElementById('blog').addEventListener('click', function() {
    // Scroll to the target div
    document.getElementById('blog-title').scrollIntoView({ behavior: 'smooth' });
});

//scroll button for contact us form
document.getElementById('button-kontakt').addEventListener('click', function() {
    // Scroll to the target div
    document.getElementById('kontaktiraj-nas').scrollIntoView({ behavior: 'smooth' });
});

// apartment TONKA button click to open new page

document.getElementById('container-tonka').addEventListener('click', function() {
    window.open('./apartmanTonka.html');
})

// apartment SLIVNO button click to open new page
document.getElementById('container-slivno').addEventListener('click', function() {
    window.open('./apartmanTonka.html');
})

// apartment SLIVNO1 button click to open new page
document.getElementById('container-slivno1').addEventListener('click', function() {
    window.open('./apartmanTonka.html');
})

// apartment STUDIO button click to open new page
document.getElementById('container-studio').addEventListener('click', function() {
    window.open('./apartmanTonka.html');
})


// STA OBICI NA OTOKU

// RESTORANI
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    var img = document.getElementById('restorani-img');
    var button = document.getElementById('restorani-btn');
    var h3 = document.getElementById('restorani-h3');
    var p = document.getElementById('kratki-opis-restorani');

    // Add click event listeners
    img.addEventListener('click', handleClick);
    button.addEventListener('click', handleClick);
    h3.addEventListener('click', handleClick);
    p.addEventListener('click', handleClick);

    // Define the click event handler function
    function handleClick() {
        // Add your logic here, such as navigating to another page
        window.location.href = './apartmanTonka.html';
    }
});


// STA OBICI
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    var img = document.getElementById('sta-obici-img');
    var button = document.getElementById('sta-obici-btn');
    var h3 = document.getElementById('sta-obici-h3');
    var p = document.getElementById('kratki-opis-sta-obici');

    // Add click event listeners
    img.addEventListener('click', handleClick);
    button.addEventListener('click', handleClick);
    h3.addEventListener('click', handleClick);
    p.addEventListener('click', handleClick);

    // Define the click event handler function
    function handleClick() {
        // Add your logic here, such as navigating to another page
        window.location.href = './apartmanTonka.html';
    }
});

// VAZNE INFORMACIJE
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    var img = document.getElementById('info-img');
    var button = document.getElementById('info-btn');
    var h3 = document.getElementById('info-h3');
    var p = document.getElementById('kratki-opis-info');

    // Add click event listeners
    img.addEventListener('click', handleClick);
    button.addEventListener('click', handleClick);
    h3.addEventListener('click', handleClick);
    p.addEventListener('click', handleClick);

    // Define the click event handler function
    function handleClick() {
        // Add your logic here, such as navigating to another page
        window.location.href = './apartmanTonka.html';
    }
});