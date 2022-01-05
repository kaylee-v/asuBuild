//balloon bash video player
$(document).ready(function() {
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
});