const $ = x => document.querySelector(x);
let state = 0;

function handleNav() {
    $('.nav-mobile').classList.toggle("change");
    $('nav').classList.toggle("show-mobile");
    state = !state;
    if (state) {
        $('ul').style.height = '100%';
        $('header').style.height = '100%';
    } else {
        $('ul').style.height = '0';
        $('header').style.height = '0';
    }
}

$('.nav-mobile').onclick = x => {
    handleNav();
}

document.querySelectorAll('.nav-btn').forEach(e => {
    e.onclick = x => {
        if (window.innerWidth <= 800) handleNav();
    }
});


// Collapse Directors Section

var coll = document.getElementsByClassName("dir-banner");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {

        this.classList.toggle("active");
        
        var imgContent = this.children[0];
        var textContent = this.children[1];
        
        // image interaction and Text interaction
        if (!this.classList.contains("active")) {
            imgContent.style.maxHeight = "150px";
            textContent.style.maxHeight = "70px";
        } else {
            this.scrollIntoView();
            imgContent.style.maxHeight = 420 + "px";
            textContent.style.maxHeight = textContent.scrollHeight + 100 + "px";
        }
        
    });
}

// Scroll animations

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.scroll-reveal span');

textElements.forEach(text => {
  gsap.to(text, {
    opacity: 1,
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'top 90%',
      end: 'bottom 90%',
      scrub: true,
    },
  });
});