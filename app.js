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

// create HTML for each setting
beStill.themeText = '<h2 class="showHide active">among the <a href="" class="toggle theme">simplicity</a></h2>';
beStill.colorText = '<p>click the <a class="toggle color" href="">red</a> text to see your options</p>';
beStill.breathText = '<p>inhale for <a class="toggle breath" href="">3</a> seconds</p>';
beStill.soundText = '<p>sound is <a class="toggle" href="">on</a></p>'

beStill.submit = $('<div>').html('<h3><a class= "activate" href="">next</a></h3 >');
beStill.settings = $('<div>').html(beStill.themeText, beStill.colorText, beStill.breathText, beStill.soundText,
    beStill.beginText);
beStill.meditate = $('<div>').html('<div class="animation showHide meditate dormant"></div>')

$('.instructions').text('');
$('.breath').text(beStill.toggleBreath[0]);
$('.toggle').css('color', beStill.toggleColor[0].colorHex);

// create a function to append and remove settings one at a time
beStill.next = function(setting) {
    $('.instructions').html(setting);
}

// init function
beStill.init = function() {
    // display next setting on "next" click
    $('.submit').html(beStill.submit)
        .on('click', function(e) {
            e.preventDefault();
            if ($('.instructions').html() === '') {
                $('.instructions').html(beStill.colorText);
            } else if ($('.instructions').html() === beStill.colorText ) {
                console.log("else if working");
                $('.instructions').html(beStill.themeText);
            } else if ($('.instructions').html() === beStill.themeText ) {
                $('.instructions').html(beStill.breathText);
            } else if ($('.instructions').html() === beStill.breathText) {
                $('.instructions').html(beStill.soundText);
            } else { $('.instructions').html(''); }
        });    
    
    // cycle through button colours on click
    $(document).on('click', '.color', function(e) {
        e.preventDefault();
        // cycle up through available colors, resetting to zero once end of array is reached
        beStill.colorSelect += 1;
        if (beStill.colorSelect === beStill.toggleColor.length) { beStill.colorSelect = 0 };
        $(this).text(beStill.toggleColor[beStill.colorSelect].colorText);
        $('.toggle').css('color', beStill.toggleColor[beStill.colorSelect].colorHex)
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
        .css('background-image', `url('images/${beStill.toggleTheme[beStill.themeSelect].image}')`)
    });
    
    // cycle through breath lengths on click
    $(document).on('click', '.breath', function(e) {
        e.preventDefault();
        // cycle up through available breath lengths and reset to zero once end of array is reached
        beStill.breathLength += 1;
        if (beStill.breathLength === beStill.toggleBreath.length) { beStill.breathLength = 0 };
        // change text to reflect current breath length
        $(this).text(beStill.toggleBreath[beStill.breathLength])
        // change value of CSS animation property to reflect current breath length
        $('.animation')
            .css('animation-duration', `${beStill.toggleBreath[beStill.breathLength]}s`)
        
    });
}

$(document).ready(function() {
    beStill.init();
});