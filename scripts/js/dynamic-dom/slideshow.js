"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;
//# sourceMappingURL=slideshow.js.map