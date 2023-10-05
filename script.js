document.addEventListener('DOMContentLoaded', function() {
  
  
    var lastScrollTop = 0;
    var delta = 5;

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

        if (scrollTop > lastScrollTop) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }

        lastScrollTop = scrollTop;
    });
  
  

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Smooth scrolling animation
                });
            }
        });
    });


 });



 // Handling popups
const popupTriggers = document.querySelectorAll('.popup-trigger');
const popups = document.querySelectorAll('.popup');

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'block';
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none';
}

  
popupTriggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    const popupId = this.getAttribute('data-popup');
    openPopup(popupId);
  });
});

function changeText(element, newText) {
    element.innerText = newText;
}

function resetText(element, originalText) {
    element.innerText = originalText;
}

