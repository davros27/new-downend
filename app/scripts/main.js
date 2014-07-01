/*Menu Toggle*/
$(document).ready(function(){
    $('.toggleMenu, .menuButton').click(function() {
        $('body').toggleClass('shownav');
    });
});

/*Menu - Hide Button*/
var timer;
$(document).click(function() {
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }

    $('.toggleMenu:visible').fadeTo('slow', '1');
    
    timer = setTimeout(function() {
        $('.toggleMenu').fadeTo('slow','0.5')
    }, 2000);

});


/*Scroll*/
(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);
       
        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('#scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 1000);
                }

            }, false);

        });

    }

 })();

/*Toggle About*/

$(document).ready(function() {
    $('#toggle').click(function() {
        $(".toggle").slideToggle("slow");

        $(this).toggleClass("active");

        if ($(this).text() == "See Less")
        $(this).text("See More")
        else
        $(this).text("See Less");
    });
});

/*Lit Fader*/
jQuery('#fader img:gt(0)').hide();

setInterval(function(){
    jQuery('#fader :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#fader');
}, 4000); 

jQuery('#eventsImage img:gt(0)').hide();

setInterval(function(){
    jQuery('#eventsImage :first-child')
    .fadeTo(500, 0)
    .next('img')
    .fadeTo(500, 1)
    .end()
    .appendTo('#eventsImage');
}, 4000); 

/*About Meetings*/

/*var transition = {
   -webkit-transition: height 2s 
    transition: height 2s
};*/

    function hideDiv() {
        document.getElementById('clickMeeting').style.display = "none";
        document.getElementById('memorialMeeting').style.display = "none";
        document.getElementById('sundaySchool').style.display = "none";
        document.getElementById('bibleHour').style.display = "none";
        document.getElementById('bibleClass').style.display = "none";
        document.getElementById('youthGroup').style.display = "none";
    };

    function showMem() {
        /*document.getElementById('memorialMeeting').style.display = "block";*/
        $("#memorialMeeting").fadeIn(750);
    };

    function showSS() {
        /*document.getElementById('sundaySchool').style.display = "block";*/
        $("#sundaySchool").fadeIn(750);
    };

    function showBH() {
        /*document.getElementById('bibleHour').style.display = "block";*/
        $("#bibleHour").fadeIn(750);
    };
    
    function showBC() {
        /*document.getElementById('bibleClass').style.display = "block";*/
        $("#bibleClass").fadeIn(750);
    };

    function showYG() {
        /*document.getElementById('youthGroup').style.display = "block";*/
        $("#youthGroup").fadeIn(750);
    };
