const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggletext = document.getElementById('toggle-text');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src='assets/icons/sun.svg';
        toggletext.textContent= "Light Mode";
    }else {
        toggleIcon.src='assets/icons/moon.svg';
        toggletext.textContent='Dark Mode';

    }
});