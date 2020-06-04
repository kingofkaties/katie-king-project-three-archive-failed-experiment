// Be Still landing page with settings for customizing your meditation session

// User clicks on indicated keywords/buttons to loop through preset transition options held inside an object, changing the contents of "length" variable as user cycles through

// "begin" button applies class of "hidden" to settings and "active" to animation div, changing what information is displayed on the page and accessing preset properties within "active" class

// Use JS to insert "length" variable as transition-duration CSS property on the animation div

// "adjust" button brings settings back into focus so user can adjust settings, changing the "length" variable

const beStill = {};


// array to hold length of breaths
const animationLength = [
    "3s",
    "5s",
    "8s",
    "10s",
    "12s",
    "15s"
]

// array to hold toggle colours
const toggleColors = {
    toggleOne: "#DB5461",
    toggleTwo:  "#59CD90",
    toggleThree: "#F0C808"
}

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
        if ($(this).val('begin')) {
            $(this).text('adjust');
        }
    });
    

    // change color of a tags on click
    // $('.toggle').on('click', function() {
    //     $(this).css('color: #000');
    // })
});



// if (i === 4) {
//     i = 0;
// }

// const toggle = () => {
//     $('.toggle').on('click', () => {

//     })
