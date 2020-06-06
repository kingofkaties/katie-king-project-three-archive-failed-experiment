// Be Still landing page with settings for customizing your meditation session

// User clicks on indicated keywords/buttons to loop through preset transition options held inside an object, changing the contents of "length" variable as user cycles through

// "begin" button applies class of "hidden" to settings and "active" to animation div, changing what information is displayed on the page and accessing preset properties within "active" class

// Use JS to insert "length" variable as transition-duration CSS property on the animation div

// "adjust" button brings settings back into focus so user can adjust settings, changing the "length" variable

const beStill = {};

// array to hold length of breaths
beStill.toggleBreath = [
    8,
    10,
    12
];

// array to hold toggle colours
beStill.toggleColor = [
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
beStill.toggleTheme = [
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

// set index variables
beStill.breathLength = 0;
beStill.colorSelect = 0;
beStill.themeSelect = 0;

// set text variables
beStill.themeText = $('<div>').html('<h2 class="showHide active">among the <a href="" class="toggle theme">simplicity</a></h2>');
beStill.colorText = $('div').html('<p>click the <a class="toggle color" href="">red</a> text to see your options</p>');
beStill.breathText = $('<div>').html('<p>inhale for <a class="toggle inhale" href="">3</a> seconds</p>');
beStill.soundText = $('<div>').html('<p>sound is <a class="toggle" href="">on</a></p>')
beStill.begin = $('<div>').html('<h3><a class= "activate toggle" href=""> begin</a></h3 >');
beStill.settings = $('<div>').html(beStill.themeText, bsStill.colorText, beStill.breathText, beStill.soundText,
    beStill.beginText);
beStill.meditate = $('<div>').html('<div class="animation showHide meditate dormant"></div>
')

$('.inhale').text(beStill.toggleBreath[0]);
$('.toggle').css('color', beStill.toggleColor[0].colorHex);

// TK create a function to automate checking the index and resetting to zero if needed, not working yet
// beStill.resetArrayIndex = function(index, array) {
//     if (index === array.length) {
//         index = 0;
//     } else {
//         index++;
//     };
//     console.log(index);
//     return index;
// }

beStill.init = function() {
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
        // TK calling function to check index number, but function not working yet
        // beStill.resetArrayIndex(beStill.breathLength, beStill.toggleBreath);
        // console.log(beStill.breathLength);
        beStill.breathLength += 1;
        if (beStill.breathLength === beStill.toggleBreath.length) { beStill.breathLength = 0 };
        // change text to reflect current breath length
        $(this).text(beStill.toggleBreath[beStill.breathLength])
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${beStill.toggleBreath[beStill.breathLength]}s`)
    });
    
    // cycle through button colours on click
    $('.color').on('click', function(e){
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        beStill.colorSelect += 1;
        if (beStill.colorSelect === beStill.toggleColor.length) { beStill.colorSelect = 0 };
        $(this).text(beStill.toggleColor[beStill.colorSelect].colorText);
        $('.toggle').css('color', beStill.toggleColor[beStill.colorSelect].colorHex)
    })
    
    // cycle through themes on click
    $('.theme').on('click', function(e){
        e.preventDefault();
        // cycle through themes, resetting to zero once end of array is reached
        beStill.themeSelect += 1;
        if (beStill.themeSelect === beStill.toggleTheme.length) { beStill.themeSelect = 0 };
        $(this).text(beStill.toggleTheme[beStill.themeSelect].name);
        console.log(beStill.toggleTheme[beStill.themeSelect].name);
        $('body')
            .css('background-image', `url('images/${beStill.toggleTheme[beStill.themeSelect].image}')`)
            // .css('background-size', '100%')
            // .css('background-position', 'center');
    })
}

$(document).ready(function() {
    beStill.init();
});


// const cycleThrough = function(indexVariable, array) {
//     indexVariable += 1;
//     if (indexVariable === array.length) { indexVariable = 0 };
//     return indexVariable;
// }