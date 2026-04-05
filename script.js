// JavaScript code for the website

function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    const formattedDateTime = utcDateTime.replace(/ GMT.*/, ''); // Removing the GMT part
    document.getElementById('dateTimeDisplay').innerText = formattedDateTime;
}

displayCurrentDateTime();