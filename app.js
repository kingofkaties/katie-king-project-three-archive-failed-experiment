// Be Still landing page with settings for customizing your meditation session

// User clicks on indicated keywords/buttons to loop through preset transition options held inside an object, changing the contents of "length" variable as user cycles through

// "begin" button applies class of "hidden" to settings and "active" to animation div, changing what information is displayed on the page and accessing preset properties within "active" class

// Use JS to insert "length" variable as transition-duration CSS property on the animation div

// "adjust" button brings settings back into focus so user can adjust settings, changing the "length" variable

const beStill = {};


// array to hold length of breaths
const toggleBreaths = [
    3,
    5,
    8,
    10,
    12,
    15
];

// array to hold toggle colours
const toggleColors = [
    "#DB5461",
    "#59CD90",
    "#F0C808"
];

let inhaleLength = 0;

// prevent default on a tag

// beStill.init = () => {
//     let toggleColor = toggleColors.toggleOne;
// }

$(document).ready(function() {
    // beStill.init();
    
    // hide and show settings/animation
    $('.activate').on('click', function(e) {
        e.preventDefault();
        // toggle class on settings & animation
        $('.showHide').toggleClass('active').toggleClass('dormant');       
        // change text inside activate button
        if ($(this).text() === 'begin') {
            $(this).text('adjust');
        } else {
            $(this).text('begin');
        }
    });

    // cycle through breath lengths on click
    $('.inhale').on('click', function(e) {
        e.preventDefault();
        // cycle up through available breath lengths and reset to zero once end of array is reached
        inhaleLength += 1;
        if (inhaleLength === toggleBreaths.length) { inhaleLength = 0 };
        // change text to reflect current breath length
        $(this).text(toggleBreaths[inhaleLength])
        console.log(toggleBreaths[inhaleLength]);
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${toggleBreaths[inhaleLength]}s`)
    });
    
});

