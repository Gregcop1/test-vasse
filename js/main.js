(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Website wide scripts
// @Author Dummy Team

Array.prototype.contains = function (needle) {
    var found = false;
    this.forEach(function (key, value, array) {
        if (key === needle) {
            found = true;
        }
    });

    return found;
};

$(function () {

    var completedVideos = [];

    function initSlides() {
        var length = $('.slide').length;
        $('.slide').width($(window).width()).height($(window).height());
        $('.slides').width(length * $(window).width() + 100);
    }

    function previous() {
        var $this = $('.slide.active');
        if ($this.index() > 0) {
            $this.removeClass('active').addClass('future');

            var $prev = $this.prev();
            $prev.removeClass('past').addClass('active');
        }
    }

    function next() {
        var $this = $('.slide.active');
        var index = $this.index();

        if (index < $('.slide').length) {
            if (completedVideos.contains(index) === true) {
                if (index < $('.slide').length - 1) {
                    $this.removeClass('active').addClass('past');

                    var $next = $this.next();
                    $next.removeClass('future').addClass('active');
                }
            } else {
                playVideoAndGoNext($this, index);
            }
        }
    }

    function playVideoAndGoNext($slide, index) {
        var video = $slide.children('video').get(0);
        video.addEventListener('ended', function () {
            if (completedVideos.contains(index) === false) {
                completedVideos.push(index);
            }
            next();
        }, false);
        video.play();
    }

    $(window).ready(function () {
        initSlides();

        $('#next').on('click', next);
        $('#previous').on('click', previous);
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9qcy9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQUtBLE1BQU0sU0FBTixDQUFnQixRQUFoQixHQUEyQixVQUFTLE1BQVQsRUFBaUI7QUFDeEMsUUFBSSxRQUFRLEtBQVo7QUFDQSxTQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCLEtBQXJCLEVBQTRCO0FBQ3JDLFlBQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2hCLG9CQUFRLElBQVI7QUFDSDtBQUNKLEtBSkQ7O0FBTUEsV0FBTyxLQUFQO0FBQ0gsQ0FURDs7QUFXQSxFQUFFLFlBQVc7O0FBRVQsUUFBSSxrQkFBa0IsRUFBdEI7O0FBRUEsYUFBUyxVQUFULEdBQXNCO0FBQ2xCLFlBQUksU0FBUyxFQUFFLFFBQUYsRUFBWSxNQUF6QjtBQUNBLFVBQUUsUUFBRixFQUNLLEtBREwsQ0FDVyxFQUFFLE1BQUYsRUFBVSxLQUFWLEVBRFgsRUFFSyxNQUZMLENBRVksRUFBRSxNQUFGLEVBQVUsTUFBVixFQUZaO0FBR0EsVUFBRSxTQUFGLEVBQWEsS0FBYixDQUFtQixTQUFTLEVBQUUsTUFBRixFQUFVLEtBQVYsRUFBVCxHQUE2QixHQUFoRDtBQUNIOztBQUVELGFBQVMsUUFBVCxHQUFvQjtBQUNoQixZQUFJLFFBQVEsRUFBRSxlQUFGLENBQVo7QUFDQSxZQUFJLE1BQU0sS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNuQixrQkFBTSxXQUFOLENBQWtCLFFBQWxCLEVBQ0ssUUFETCxDQUNjLFFBRGQ7O0FBR0EsZ0JBQUksUUFBUSxNQUFNLElBQU4sRUFBWjtBQUNBLGtCQUFNLFdBQU4sQ0FBa0IsTUFBbEIsRUFDSyxRQURMLENBQ2MsUUFEZDtBQUVIO0FBQ0o7O0FBRUQsYUFBUyxJQUFULEdBQWdCO0FBQ1osWUFBSSxRQUFRLEVBQUUsZUFBRixDQUFaO0FBQ0EsWUFBSSxRQUFRLE1BQU0sS0FBTixFQUFaOztBQUVBLFlBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxNQUF4QixFQUFnQztBQUM1QixnQkFBSSxnQkFBZ0IsUUFBaEIsQ0FBeUIsS0FBekIsTUFBb0MsSUFBeEMsRUFBOEM7QUFDMUMsb0JBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxNQUFaLEdBQXFCLENBQWpDLEVBQW9DO0FBQ2hDLDBCQUFNLFdBQU4sQ0FBa0IsUUFBbEIsRUFDSyxRQURMLENBQ2MsTUFEZDs7QUFHQSx3QkFBSSxRQUFRLE1BQU0sSUFBTixFQUFaO0FBQ0EsMEJBQU0sV0FBTixDQUFrQixRQUFsQixFQUNLLFFBREwsQ0FDYyxRQURkO0FBRUg7QUFDSixhQVRELE1BU087QUFDSCxtQ0FBbUIsS0FBbkIsRUFBMEIsS0FBMUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsYUFBUyxrQkFBVCxDQUE0QixNQUE1QixFQUFvQyxLQUFwQyxFQUEyQztBQUN2QyxZQUFJLFFBQVEsT0FBTyxRQUFQLENBQWdCLE9BQWhCLEVBQXlCLEdBQXpCLENBQTZCLENBQTdCLENBQVo7QUFDQSxjQUFNLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQVc7QUFDdkMsZ0JBQUksZ0JBQWdCLFFBQWhCLENBQXlCLEtBQXpCLE1BQW9DLEtBQXhDLEVBQStDO0FBQzNDLGdDQUFnQixJQUFoQixDQUFxQixLQUFyQjtBQUNIO0FBQ0Q7QUFDSCxTQUxELEVBS0csS0FMSDtBQU1BLGNBQU0sSUFBTjtBQUNIOztBQUVELE1BQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsWUFBVztBQUN2Qjs7QUFFQSxVQUFFLE9BQUYsRUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixJQUF2QjtBQUNBLFVBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsUUFBM0I7QUFDSCxLQUxEO0FBTUgsQ0E3REQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXZWJzaXRlIHdpZGUgc2NyaXB0c1xuLy8gQEF1dGhvciBEdW1teSBUZWFtXG5cbkFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5lZWRsZSkge1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihrZXksIHZhbHVlLCBhcnJheSkge1xuICAgICAgICBpZiAoa2V5ID09PSBuZWVkbGUpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvdW5kO1xufTtcblxuJChmdW5jdGlvbigpIHtcblxuICAgIHZhciBjb21wbGV0ZWRWaWRlb3MgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGluaXRTbGlkZXMoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSAkKCcuc2xpZGUnKS5sZW5ndGg7XG4gICAgICAgICQoJy5zbGlkZScpXG4gICAgICAgICAgICAud2lkdGgoJCh3aW5kb3cpLndpZHRoKCkpXG4gICAgICAgICAgICAuaGVpZ2h0KCQod2luZG93KS5oZWlnaHQoKSk7XG4gICAgICAgICQoJy5zbGlkZXMnKS53aWR0aChsZW5ndGggKiAkKHdpbmRvdykud2lkdGgoKSArIDEwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoJy5zbGlkZS5hY3RpdmUnKTtcbiAgICAgICAgaWYgKCR0aGlzLmluZGV4KCkgPiAwKSB7XG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Z1dHVyZScpO1xuXG4gICAgICAgICAgICB2YXIgJHByZXYgPSAkdGhpcy5wcmV2KCk7XG4gICAgICAgICAgICAkcHJldi5yZW1vdmVDbGFzcygncGFzdCcpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQoJy5zbGlkZS5hY3RpdmUnKTtcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoKTtcblxuICAgICAgICBpZiAoaW5kZXggPCAkKCcuc2xpZGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWRWaWRlb3MuY29udGFpbnMoaW5kZXgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgJCgnLnNsaWRlJykubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncGFzdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICR0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgJG5leHQucmVtb3ZlQ2xhc3MoJ2Z1dHVyZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheVZpZGVvQW5kR29OZXh0KCR0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5VmlkZW9BbmRHb05leHQoJHNsaWRlLCBpbmRleCkge1xuICAgICAgICB2YXIgdmlkZW8gPSAkc2xpZGUuY2hpbGRyZW4oJ3ZpZGVvJykuZ2V0KDApO1xuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFZpZGVvcy5jb250YWlucyhpbmRleCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVkVmlkZW9zLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGluaXRTbGlkZXMoKTtcblxuICAgICAgICAkKCcjbmV4dCcpLm9uKCdjbGljaycsIG5leHQpO1xuICAgICAgICAkKCcjcHJldmlvdXMnKS5vbignY2xpY2snLCBwcmV2aW91cyk7XG4gICAgfSlcbn0pO1xuIl19
