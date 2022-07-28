const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

const toggleMenu = () => {
    navigation.classList.toggle('active');
}

toggle.addEventListener('click', toggleMenu);