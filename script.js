const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});



///////////////////////////

const circles = document.querySelectorAll('.circlez');
circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots")
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var rotate = 360/dots;
    var points = "";


    for (let i = 0; i < dots; i++) {
         points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})




let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu');

toggle.onclick = ()=>{
    menu.classList.toggle('active');
}