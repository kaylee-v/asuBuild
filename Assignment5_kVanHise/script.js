    /**
     * @author Kaylee
     */
    "use strict";
    
    $(document).ready(function() {
        //hide content of table cell if length over 50
        $('td').each(function() {
            if ($(this).text().length > 50) {
                $(this).addClass('overflow');
                }
        });
        //reveal table cell content on click
        $('td').click(function() { 
            $(this).toggleClass('reveal');
        });
        
        //ran into problems when selecting one focus after another with course 334
        //which is included in 3 diffferent focus areas
        //so instead of toggleClass, I used an if else statement to check
        //if the class exists and toggle manually
        $('#print_button').click(function() {
            $('.web, .photo, .animation').removeClass('highlight');
            if ($('.print').hasClass('highlight')) {
                $('.print').removeClass('highlight');
            } else {
                $('.print').addClass('highlight');
            }
        });
        
        $('#web_button').click(function() {
            $('.print, .photo, .animation').removeClass('highlight');
            if ($('.web').hasClass('highlight')) {
                $('.web').removeClass('highlight');
            } else {
                $('.web').addClass('highlight');
            }
        });
        $('#photo_button').click(function() {
            $('.print, .web, .animation').removeClass('highlight');
            if ($('.photo').hasClass('highlight')) {
                $('.photo').removeClass('highlight');
            } else {
                $('.photo').addClass('highlight');
            }
        });
        $('#animation_button').click(function() {
            $('.print, .web, .photo').removeClass('highlight');
            if ($('.animation').hasClass('highlight')) {
                $('.animation').removeClass('highlight');
            } else {
                $('.animation').addClass('highlight');
            }
        });
        
        //toggle upper and lower division highlight
        $('#lower_button').click(function() {
            $('.upper').removeClass('class_highlight');
            $('.lower').toggleClass('class_highlight');
        });
        $('#upper_button').click(function() {
            $('.lower').removeClass('class_highlight');
            $('.upper').toggleClass('class_highlight');
        });
        
        //clear search
        $('#clear_button').click(function() {
           $('.print, .web, .photo, .animation').removeClass('highlight');
           $('.lower, .upper').removeClass('class_highlight'); 
        });
        
        $('tr:odd').addClass('alt');
        
        //Jquery UI
        $('#tabs').tabs({
            collapsible: false,
            active: 0
        });
        
        //balloon bash video player
        var bbVideo = $('video').get(0);
        
        var bbControls = $('#bbControls');
        if (bbVideo.readyState == 4) {
            bbVideo.removeAttribute('controls');
        }
       bbVideo.addEventListener('canplaythrough', function() {
            bbVideo.removeAttribute('controls');
        }, true);
        
        var bbProgress = $('#bbProgress');
        var bbvalue = 0;
        bbVideo.addEventListener('timeupdate', function() {
            if (bbVideo.currentTime > 0) {
            bbvalue = Math.floor((100 / bbVideo.duration) * bbVideo.currentTime);
        }
        $('#bbProgress').width(bbvalue + "%");
        });
        
        $('#bbPlayPause').click( function() {
            if (bbVideo.paused) {
                bbPlayPause.title = 'pause';
                $('#bbPlayPause i').attr('class', 'fa fa-pause-circle fa-2x');
                bbVideo.play();
            } else {
                bbPlayPause.title = 'play';
                $('#bbPlayPause i').attr('class', 'fa fa-play-circle fa-2x');
                bbVideo.pause();
            }
        });
        bbVideo.addEventListener('ended', function() {
            $('#bbPlayPause i').attr('class', 'fa fa-play-circle fa-2x');
        });
        
        $('#bbVolume').slider({
            value: 1,
            step: 0.1,
            range: 'min',
            min: 0,
            max: 1,
            slide: function() {
                var bbVolume = $('#bbVolume').slider('value');
                bbVideo.volume = bbVolume;
            }
        });
        
        
        //lathe video player
        
        var lVideo = $('video').get(1);
        
        var lControls = $('#lControls');
        if (lVideo.readyState == 4) {
            lVideo.removeAttribute('controls');
        }
       lVideo.addEventListener('canplaythrough', function() {
            lVideo.removeAttribute('controls');
        }, true);
        
        var lProgress = $('#lProgress');
        var lvalue = 0;
        lVideo.addEventListener('timeupdate', function() {
            if (lVideo.currentTime > 0) {
            lvalue = Math.floor((100 / lVideo.duration) * lVideo.currentTime);
        }
        $('#lProgress').width(lvalue + "%");
        });
        
        $('#lPlayPause').click( function() {
            if (lVideo.paused) {
                lPlayPause.title = 'pause';
                $('#lPlayPause i').attr('class', 'fa fa-pause-circle fa-2x');
                lVideo.play();
            } else {
                lPlayPause.title = 'play';
                $('#lPlayPause i').attr('class', 'fa fa-play-circle fa-2x');
                lVideo.pause();
            }
        });
        lVideo.addEventListener('ended', function() {
            $('#lPlayPause i').attr('class', 'fa fa-play-circle fa-2x');
        });
        
        $('#lVolume').slider({
            value: 1,
            step: 0.1,
            range: 'min',
            min: 0,
            max: 1,
            slide: function() {
                var lVolume = $('#lVolume').slider('value');
                lVideo.volume = lVolume;
            }
        });
        
        //resources form
        $('#resourceSubmit').click( function() {
            var resourceList = [];
            
            if ($(':checked').length == 0) {
                $('#resourceReturn p').empty();
                $('#resourceError').removeClass('hidden');
            } else {
                $('#resourceReturn p').empty();
                $('#resourceError').addClass('hidden');
                $('#resources input:checked').each(function() {
                    resourceList.push(' <a href="' + $(this).attr('value') + '" title="' + $(this).attr('id') + '">' + $(this).attr('id') + '</a>');
                })
                if ($(':checked').length > 1) {
                    resourceList.push(' and ' + resourceList.pop());
                }
                var resourceString = "You have indicated an interest in " + resourceList + ". Please select a link to learn more about these resources.";
                $('#resourceReturn p').append(resourceString);
            }
        });
        
    });
