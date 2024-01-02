document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var transitionPoint = 550; // Set the scroll position (in pixels) where the color transition should start

    if (scrollPosition > transitionPoint) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
document.addEventListener('scroll', function() {
    var contentElement = document.getElementById('content');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var contentPosition = 500; // Change this value to the point you want

    if (scrollPosition > contentPosition) {
        contentElement.classList.remove('hidden');
    } else {
        contentElement.classList.add('hidden');
    }
});