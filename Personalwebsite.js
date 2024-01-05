// For changes in background
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var transitionPoint_page1 = 550; // Set the scroll position (in pixels) where the color transition should start
    var transitionPoint_page2 = 1800;

    if (scrollPosition > transitionPoint_page1) {
        document.body.style.backgroundColor = "black";
    } if (scrollPosition < transitionPoint_page1) {
        document.body.style.backgroundColor = "white";
    } if (scrollPosition > transitionPoint_page2){
        document.body.style.backgroundColor = 'salmon';
    }
});

// For header
document.addEventListener('scroll', function() {
    var contentElement = document.getElementById('content');
    var page_3 = document.getElementById('page3');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var contentPosition = 500; // Change this value to the point you want

    if (scrollPosition > contentPosition) {
        contentElement.classList.remove('hidden');
    } else {
        contentElement.classList.add('hidden');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom >= 0
    );
}

const triggerPoint_1 = 900; // Adjust this value to your desired scroll point
const triggerPoint_2 = 1100;
const triggerPoint_3 = 1300;
const triggerPoint_4 = 1400;
const triggerPoint_5 = 1600;
const triggerPoint_6 = 1800;

// Function to add 'show' class to timeline containers based on scroll position
function showTimelineContainers() {
    if (window.scrollY >= triggerPoint_1) {
        document.querySelectorAll('.timeline-container').forEach(container => {
            container.classList.add('show');
        });
    } if (window.scrollY < triggerPoint_1) {
        document.querySelectorAll('.timeline-container').forEach(container => {
            container.classList.remove('show');
        });
    } if (window.scrollY >= triggerPoint_4) {
        document.querySelectorAll(".timeline-container").forEach(container => {
            container.classList.add('swipe');
        })
    } if (window.scrollY < triggerPoint_4) {
        document.querySelectorAll(".timeline-container").forEach(container => {
            container.classList.remove('swipe');
        })
    }
}

// Function to add 'show' class to timeline containers based on scroll position
function showTimelineContainers1() {
    if (window.scrollY >= triggerPoint_2) {
        document.querySelectorAll('.timeline-container1').forEach(container => {
            container.classList.add('show');
        });
    } if (window.scrollY < triggerPoint_2) {
        document.querySelectorAll('.timeline-container1').forEach(container => {
            container.classList.remove('show');
        });
    } if (window.scrollY >= triggerPoint_5) {
        document.querySelectorAll(".timeline-container1").forEach(container => {
            container.classList.add('swipe');
        })
    } if (window.scrollY < triggerPoint_5) {
        document.querySelectorAll(".timeline-container1").forEach(container => {
            container.classList.remove('swipe');
        })
    }
}

function showTimelineContainers2() {
    if (window.scrollY >= triggerPoint_3) {
        document.querySelectorAll('.timeline-container2').forEach(container => {
            container.classList.add('show');
        });
    } if (window.scrollY < triggerPoint_3) {
        document.querySelectorAll('.timeline-container2').forEach(container => {
            container.classList.remove('show');
        });
    } if (window.scrollY >= triggerPoint_6) {
        document.querySelectorAll(".timeline-container2").forEach(container => {
            container.classList.add('swipe');
        })
    } if (window.scrollY < triggerPoint_6) {
        document.querySelectorAll(".timeline-container2").forEach(container => {
            container.classList.remove('swipe');
        })
    }
}


// Event listener for scrolling
window.addEventListener('scroll', showTimelineContainers);
window.addEventListener('scroll', showTimelineContainers1);
window.addEventListener('scroll', showTimelineContainers2)
// Check on initial load
showTimelineContainers();

