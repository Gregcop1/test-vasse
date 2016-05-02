'use strict';

// Website wide scripts
// @Author Dummy Team

Array.prototype.contains = function(needle) {
    var found = false;
    this.forEach(function(key, value, array) {
        if (key === needle) {
            found = true;
        }
    });

    return found;
};

$(function() {

    var completedVideos = [];

    function initSlides() {
        var length = $('.slide').length;
        $('.slide')
            .width($(window).width())
            .height($(window).height());
        $('.slides').width(length * $(window).width() + 100);
    }

    function previous() {
        var $this = $('.slide.active');
        if ($this.index() > 0) {
            $this.removeClass('active')
                .addClass('future');

            var $prev = $this.prev();
            $prev.removeClass('past')
                .addClass('active');
        }
    }

    function next() {
        var $this = $('.slide.active');
        var index = $this.index();

        if (index < $('.slide').length) {
            if (completedVideos.contains(index) === true) {
                if (index < $('.slide').length - 1) {
                    $this.removeClass('active')
                        .addClass('past');

                    var $next = $this.next();
                    $next.removeClass('future')
                        .addClass('active');
                }
            } else {
                playVideoAndGoNext($this, index);
            }
        }
    }

    function playVideoAndGoNext($slide, index) {
        var video = $slide.children('video').get(0);
        video.addEventListener('ended', function() {
            if (completedVideos.contains(index) === false) {
                completedVideos.push(index);
            }
            next();
        }, false);
        video.play();
    }

    $(window).ready(function() {
        initSlides();

        $('#next').on('click', next);
        $('#previous').on('click', previous);
    })
});
