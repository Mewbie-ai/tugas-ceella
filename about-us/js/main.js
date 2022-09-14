// Easy selector helper function
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

// Easy event listener function
const on = (type, el, listener, all = false) => {
  if (all) {
    select(el, all).forEach((e) => e.addEventListener(type, listener));
  } else {
    select(el, all).addEventListener(type, listener);
  }
};

// Easy on scroll event listener
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

// Navbar links active state on scroll
let navbarlinks = select("#navbarNav .scrollto", true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

// Scrollbar Navbar
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// Navbar hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Back to top button
let backtotop = select(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

// Animation on scroll
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  aos_init();
});

// Form liputan
function changeLiputan() {
  document.getElementById("liputan").style.display = "block";
  document.getElementById("publikasi").style.display = "none";
}
function changePublikasi() {
  document.getElementById("liputan").style.display = "none";
  document.getElementById("publikasi").style.display = "block";
}
function changeFormOnline() {
  document.getElementById("link-acara").style.display = "block";
  document.getElementById("link").style.display = "block";
}
function changeFormOffline() {
  document.getElementById("link-acara").style.display = "none";
  document.getElementById("link").style.display = "none";
}
// Atribut data-max-words untuk caption
document.querySelectorAll('input[data-max-words]').forEach(input => {
  let maxWords = parseInt(input.getAttribute('data-max-words') || 0)
  input.addEventListener('keydown', e => {
    let target = e.currentTarget
    // Split the text in the input and get the current number of words
    let words = target.value.split(/\s+/).length
    // If the word count is > than the max amount and a space is pressed
    // Don't allow for the space to be inserted
    if (!target.getAttribute('data-announce'))
      // Note: this is a shorthand if statement
      // If the first two tests fail allow the key to be inserted
      // Otherwise we prevent the default from happening
      words >= maxWords && e.keyCode == 32 && e.preventDefault()
    else
      words >= maxWords && e.keyCode == 32 && (e.preventDefault() || alert('Word Limit Reached'))
  })
})