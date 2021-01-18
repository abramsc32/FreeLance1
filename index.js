
// document.addEventListener('click', function (e) {
//     if (e.target.tagName !== 'A') return;
  
//     if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || 
//     ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
  
  
//       scrollAnchors(e, e.target);
  
//     }
//   });

  
//   // $("#send").on("click", function(event) {
//   //   event.preventDefault();
//   //   $("#iframes").empty();
//   //   $("#links a").each(function() {
//   //     setTimeout($.proxy(function() {
//   //       var popup = window.open($(this).attr("href"))
//   //       setTimeout($.proxy(function() {
//   //         this.close();
//   //       }, popup), 100);
//   //     }, this), 100)
//   //   })
//   // })
  
//   function scrollAnchors(e, respond = null) {
  
//     function distanceToTop(el) {
//       return Math.floor(el.getBoundingClientRect().top);
//     }
  
//     e.preventDefault();
//     let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//     let targetAnchor = document.querySelector(targetID);
//     if (!targetAnchor) 
//       return;
//     let originalTop = distanceToTop(targetAnchor);
//     window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//     let checkIfDone = setInterval(function () {
//       let atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//       if (distanceToTop(targetAnchor) === 0 || atBottom) {
//         targetAnchor.tabIndex = '-1';


//         targetAnchor.focus();
  
//         if ('history' in window) {
  
//           window.history.pushState('', '', targetID);
  
//         } else {
//           window.location = targetID;
  
//         }
  
//         // clearInterval(checkIfDone);
//       }
//     }, 7000);
//   };



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });