document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const angleDown = document.querySelector('.fa-angle-down')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
            angleDown.classList.remove('fa-angle-down')
        } else {
            nav.classList.remove('shadow-bg')
            angleDown.classList.add('fa-angle-down')
        }
    }

    window.addEventListener('scroll', addShadow)

    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });
})