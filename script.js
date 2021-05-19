// hide other pages on webpage load
window.onload = function() {
    document.getElementById("aboutpage").style.display = 'none';
    document.getElementById("contactpage").style.display = 'none';
  };

// onclick open pages
const displayAbout = () => {
    document.getElementById("aboutpage").style.display = 'block';
    document.getElementById("contactpage").style.display = 'none';
    document.getElementById("grid").style.display = 'none';
}
const displayContact = () => {
    document.getElementById("aboutpage").style.display = 'none';
    document.getElementById("contactpage").style.display = 'block';
    document.getElementById("grid").style.display = 'none';
}
const displayWorks = () => {
    document.getElementById("aboutpage").style.display = 'none';
    document.getElementById("contactpage").style.display = 'none';
    document.getElementById("grid").style.display = 'block';
}

// hover video
