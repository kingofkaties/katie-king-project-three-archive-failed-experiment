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
];

// array to hold themes
const themes = [
    {
        name: "simplicity"
    },
    {
        name: "leaves",
        image: "../images/forestPhoto.jpg",
    },
    {
        name: "seashells",
        image: "../images/beachPhoto.jpg",
    },
    {
        name: "rain",
        image: "../images/rainPhoto.jpg",
    },
];

let inhaleLength = 0;
let colorSelect = 0;
let themeSelect = 0;

$('.inhale').text(toggleBreaths[0]);
$('.toggle').css('color', toggleColors[0].colorHex);

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
        $(this).text(toggleColors[colorSelect].colorText);
        $('.toggle').css('color', toggleColors[colorSelect].colorHex)
    })

    // cycle through themes on click
    $('.theme').on('click', function(e){
        e.preventDefault();
        // cycle through themes, resetting to zero once end of array is reached
        themeSelect += 1;
        if (themeSelect === themes.length) { themeSelect = 0 };
        $(this).text(themes[themeSelect].name);
        console.log(themes[themeSelect].name);
        $('body')
            .css('background-image', `url('images/${themes[themeSelect].image}')`);
    })
    
});


// const cycleThrough = function(indexVariable, array) {
//     indexVariable += 1;
//     if (indexVariable === array.length) { indexVariable = 0 };
//     return indexVariable;
// }