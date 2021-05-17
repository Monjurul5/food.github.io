window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset;

    document.querySelector('.heading').classList.toggle('sticky', scrollTop > 0)
})

function toggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const ul = document.querySelector('ul');

    toggleMenu.classList.toggle('active');
    ul.classList.toggle('active');
}