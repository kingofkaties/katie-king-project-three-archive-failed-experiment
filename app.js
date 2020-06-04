// Be Still landing page with settings for customizing your meditation session

// User clicks on indicated keywords/buttons to loop through preset transition options held inside an object, changing the contents of "length" variable as user cycles through

// "begin" button applies class of "hidden" to settings and "active" to animation div, changing what information is displayed on the page and accessing preset properties within "active" class

// Use JS to insert "length" variable as transition-duration CSS property on the animation div

// "adjust" button brings settings back into focus so user can adjust settings, changing the "length" variable

const beStill = {};


// array to hold length of breaths
const toggleBreaths = [
    8,
    10,
    12
];

// array to hold toggle colours
const toggleColors = [
    {
        colorText: 'red',
        colorHex: '#DB5461'
    },
    {
        colorText: 'green',
        colorHex: '#59CD90'
    },
    {
        colorText: 'yellow',
        colorHex: '#F0C808'
    }
]

let inhaleLength = 0;
let colorSelect = 0;

$('.inhale').text(toggleBreaths[0]);
$('.toggle').css('color', toggleColors[0].colorHex)


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
        $('.showHide')
            .toggleClass('active')
            .toggleClass('dormant');       
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
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${toggleBreaths[inhaleLength]}s`)
    });

    // cycle through button colours on click
    $('.color').on('click', function(e){
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        colorSelect += 1;
        if (colorSelect === toggleColors.length) { colorSelect = 0 };
        console.log(colorSelect)
        $(this).text(toggleColors[colorSelect].colorText);
        $('.toggle').css('color', toggleColors[colorSelect].colorHex)

    })
    
});


// const cycleThrough = function(indexVariable, array) {
//     indexVariable += 1;
//     if (indexVariable === array.length) { indexVariable = 0 };
//     return indexVariable;
// }