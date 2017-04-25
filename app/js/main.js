window.sr = ScrollReveal();
sr.reveal('#nav', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('#name', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.mission-statement', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('#title', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.profile-picture', {
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('#contact', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.skills', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.projects', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
// Allow the page to scroll smoothly to an anchor on the same page.
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
