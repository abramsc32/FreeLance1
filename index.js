
document.addEventListener('click', function (e) {
    if (e.target.tagName !== 'A') return;
  
    if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || 
    ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
  
  
      scrollAnchors(e, e.target);
  
    }
  });

  
  $("#send").on("click", function(event) {
    event.preventDefault();
    $("#iframes").empty();
    $("#links a").each(function() {
      setTimeout($.proxy(function() {
        var popup = window.open($(this).attr("href"))
        setTimeout($.proxy(function() {
          this.close();
        }, popup), 100);
      }, this), 100)
    })
  })
  
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
        targetAnchor.tabIndex = '-1', '-2';


        targetAnchor.focus();
  
        if ('history' in window) {
  
          window.history.pushState('', '', targetID);
  
        } else {
          window.location = targetID;
  
        }
  
        // clearInterval(checkIfDone);
      }
    }, 7000);
  }
  
  $(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});