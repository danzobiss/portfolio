/*========================== DYNAMIC INFO =========================*/
function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const h3Years = document.getElementById('years-of-work');
h3Years.textContent = calculateAge(new Date('2021-08-02'))

/*========================== FILTERS TABS =========================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(content => {
            content.classList.remove('active');
        })
        target.classList.add('active');

        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
        })
        tab.classList.add('tab-active');
    })
});


/*========================== DARK LIGHT THEME =========================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*========================== SCROLL REVEAL ANIMATION =========================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.profile .border')
sr.reveal('.profile .name', {delay: 500})
sr.reveal('.profile .profession', {delay: 600})
sr.reveal('.profile .social', {delay: 700})
sr.reveal('.profile .info-group', {interval: 100, delay: 700})
sr.reveal('.profile .buttons', {delay: 800})
sr.reveal('.filters .content', {delay: 900})
sr.reveal('.filters', {delay: 1000})