// create object for namespacing
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

// set initial values
$('.breath').text(beStill.toggleBreath[0]);
$('.toggle').css('color', beStill.toggleColor[0].colorHex);
// NOT WORKING ANYMORE ^^^^^^^^^^^^^^^^^^^^^^^

// create HTML for each setting
beStill.colorText = '<p class="colorSetting">click the <a class="toggle color" href="">red</a> text to see your options</p>';
beStill.themeText = '<p class="themeSetting">among the <a href="" class="toggle theme">simplicity</a></p>';
beStill.breathText = '<p class="breathSetting">inhale for <a class="toggle breath" href="">3</a> seconds</p>';
beStill.soundText = '<p class="soundSetting">sound is <a class="toggle" href="">on</a></p>'

// create elements to be added to the DOM
beStill.welcome = $('<p>welcome</p>');
beStill.submit = $('<div>').html('<h3><a class= "activate toggle" href="">next</a></h3 >').hide();
beStill.settings = $('<div>').html(beStill.themeText, beStill.colorText, beStill.breathText, beStill.soundText,
    beStill.beginText);
// beStill.meditate = $('<div>').html('<div class="animation meditate"></div>')
beStill.meditate = $('<div>').addClass('animation')

// init function
beStill.init = function() {

    // fade in "welcome" and then color instructions
    $(beStill.welcome).hide().prependTo('.instructions').delay(250).fadeIn(2500).delay(250).fadeOut(2500);
    $(beStill.colorText).hide().prependTo('.instructions').delay(7000).fadeIn(2500);
    $(beStill.submit).hide().appendTo(beStill.colorText).delay(10000).fadeIn(2500);

    // display next setting on "next" click, and meditation animation at the end
    $('.submit').html(beStill.submit)
        .on('click', function(e) {
            e.preventDefault();
            if ($('.submit a').text('next')) {
                if ($('p').hasClass('colorSetting')) {
                    $('p').replaceWith(beStill.themeText);
                } else if ($('p').hasClass('themeSetting')) {
                    $('p').replaceWith(beStill.breathText);
                } else if ($('p').hasClass('breathSetting')) {
                    $('p').replaceWith(beStill.soundText);
                    $('.submit a').text('begin')
                } else if ($('p').hasClass('soundSetting')) {
                    $('.instructions').replaceWith(beStill.meditate);
                    $('.submit a').text('adjust')
                }
            }            
        });
    
    // cycle through button colours on click
    $(document).on('click', '.color', '.toggle', function(e) {
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        beStill.colorSelect += 1;
        if (beStill.colorSelect === beStill.toggleColor.length) { beStill.colorSelect = 0 };
        $(this).text(beStill.toggleColor[beStill.colorSelect].colorText);
        // change CSS on all a tags to match current color
        $('.toggle').css('color', beStill.toggleColor[beStill.colorSelect].colorHex);
    })
    
    // cycle through themes on click
    $(document).on('click', '.theme', function(e) {
        e.preventDefault();
        // cycle through themes, resetting to zero once end of array is reached
        beStill.themeSelect += 1;
        if (beStill.themeSelect === beStill.toggleTheme.length) { beStill.themeSelect = 0 };
        $(this).text(beStill.toggleTheme[beStill.themeSelect].name);
        console.log(beStill.toggleTheme[beStill.themeSelect].name);
        $('body')
        .css('background-image', `url('images/${beStill.toggleTheme[beStill.themeSelect].image}')`);
    });
    
    // cycle through breath lengths on click
    $(document).on('click', '.breath', '.animation', function(e) {
        e.preventDefault();
        // cycle up through available breath lengths and reset to zero once end of array is reached
        beStill.breathLength += 1;
        if (beStill.breathLength === beStill.toggleBreath.length) { beStill.breathLength = 0 };
        // change text to reflect current breath length
        $(this).text(beStill.toggleBreath[beStill.breathLength]);
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${beStill.toggleBreath[beStill.breathLength]}s`);
    });

}

$(document).ready(function() {
    beStill.init();
});