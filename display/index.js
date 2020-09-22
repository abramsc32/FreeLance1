
document.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') return;
  
    if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || 
    ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
  
  
      scrollAnchors(e, e.target);
  
    }
  });
  function scrollAnchors(e, respond = null) {
  
    function distanceToTop(el) {
      return Math.floor(el.getBoundingClientRect().top);
    }
  
    e.preventDefault();
    let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    let targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) 
      return;
    let originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    let checkIfDone = setInterval(function () {
      let atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        targetAnchor.focus();
  
        if ('history' in window) {
  
          window.history.pushState('', '', targetID);
  
        } else {
          window.location = targetID;
  
        }
  
        clearInterval(checkIfDone);
      }
    }, 7000);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let slideIndex = 1;
  // showSlides(slideIndex);
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("demo");
  //   let captionText = document.getElementById("caption");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  //   captionText.innerHTML = dots[slideIndex-1].alt;
  // }