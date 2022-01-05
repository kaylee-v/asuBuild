$(document).ready(function() {
//Flicker call
    $.getJSON({
        url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
        dataType: 'jsonp',
        data: {
            "id": "66747472@N07",
            "tags": "lab",
            "size": "b",
            "tagmode": "any",
            "format": "json"
        }
    },
        function(data) {
            var items = [];
            $.each(data.items, function(i, item) {
                var largeImg = item.media.m;
                var cut = largeImg.substring(0, largeImg.length - 5);
                largeImg = cut + 'b.jpg';
                console.log(largeImg);
                items.push('<div class="galWrap"><li><a href="' + largeImg + '" class="galImg"><img src="' + item.media.m + '"></a></li></div>');
            });
            $("<ul/>", { html: items.join("")}).appendTo("#gallery");
            $('#gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                },
            });
        });
});