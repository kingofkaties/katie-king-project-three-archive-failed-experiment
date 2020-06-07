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
beStill.colorText = '<p class="colorSetting">click the <a class="toggle color" href="">red</a> text to see your options</p>';
beStill.themeText = '<p class="themeSetting">among the <a href="" class="toggle theme">simplicity</a></p>';
beStill.breathText = '<p class="breathSetting">inhale for <a class="toggle breath" href="">3</a> seconds</p>';
beStill.soundText = '<p class="soundSetting">sound is <a class="toggle" href="">on</a></p>'

// beStill.textVariable = [
//     {text: '<p class="colorSetting">click the <a class="toggle color" href="">red</a> text to see your options</p>'},
//     {text: '<p class="themeSetting">among the <a href="" class="toggle theme">simplicity</a></p>'},
//     {text: '<p class="breathSetting">inhale for <a class="toggle breath" href="">3</a> seconds</p>'},
//     {text: '<p class="soundSetting">sound is <a class="toggle" href="">on</a></p>'}
// ];

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
            if ($('.instructions').hasClass('empty')) {
                $('.instructions').removeClass('empty').append(beStill.colorText);
            } else if ($('p').hasClass('colorSetting')) {
                $('p').replaceWith(beStill.themeText);
            } else if ($('p').hasClass('themeSetting')) {
                $('p').replaceWith(beStill.breathText);
            } else if ($('p').hasClass('breathSetting')) {
                $('p').replaceWith(beStill.soundText);
            } else if ($('p').hasClass('soundSetting')) {
                $('.instructions').empty();
            }});
            // $('.instructions').parent().find('.colorSetting').replaceWith(beStill.themeText);

        //     if ($('.instructions:empty')) {
        //         $('.instructions').append(beStill.colorText);
        //         console.log($('.instructions'));
        //     } else if ($('.instructions').find('.colorSetting')) {
        //         $('.instructions').html(beStill.themeText);
        //         console.log($('.instructions'));
        //     } else if ($('.instructions').hasClass('breathSetting')) {
        //         $('.instructions').html(beStill.breathText);
        //     } else if ($('.instructions').hasClass('soundSetting')) {
        //         console.log($('.instructions'));
        //         $('.instructions').html(beStill.soundText);
        //     } else { $('.instructions').html(''); }
           
    
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