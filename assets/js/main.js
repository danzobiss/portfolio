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
})