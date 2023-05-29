// ===================== SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ===================== REMOVE MENU ON CLICK  OF NAV-LINK
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ===================== CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 100) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ===================== OPENS & CLOSES QUESTIONS 
const accordItems = document.querySelectorAll('.questions-item')

accordItems.forEach((item) => {
    const accordHeader = item.querySelector('.questions-header')

    accordHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accord-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordContent = item.querySelector('.questions-content')

    if (item.classList.contains('accord-open')) {
        accordContent.removeAttribute('style')
        item.classList.remove('accord-open')
    } else {
        accordContent.style.height = accordContent.scrollHeight + 'px'
        item.classList.add('accord-open')
    }

}


// ===================== SHOW MENU



// ===================== SHOW MENU



// ===================== SHOW MENU



// ===================== SHOW MENU