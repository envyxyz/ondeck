// Using jQuery to make smooth scroll
// src 'https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll'

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    750,
                    function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tab index for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });

window.addEventListener("scroll", function() {
    var element = document.querySelector("#trust-pilot");
    var element2 = document.querySelector("#nav-bar");
    var arrow = document.querySelector("#down-arrow");
    var position = element.getBoundingClientRect();
    var position2 = element2.getBoundingClientRect();
    if (position2.top >= 0 && position2.top <= window.innerHeight) {
        arrow.classList.remove("null");
        arrow.setAttribute("href", "#" + element.id);
    }
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        arrow.setAttribute("href", "#" + element2.id);
        arrow.classList.add("null");
    }
});