/**
 * Layers Child JS file
 *
 * This file contains all theme JS functions
 *
 * @package Layers
 * @since Layers 1.0
 * Contents
 * 1 - One
 * 2 - Two
 * 3 - Three
 * 4 - Four
*/

jQuery(document).ready(function ($) {
    "use strict";

    /*============================
    6-Flicker
    ============================*/

    var $xv_flickr=$('#flicker-feed');
    if($xv_flickr.length){
        $xv_flickr.jflickrfeed({
            limit: $xv_flickr.attr('data-limit'),
            qstrings: {
                id: $xv_flickr.attr('data-flickerID'),
            },
            itemTemplate: '<li><a href="{{image_b}}" class="flickr_fancybox"  rel="flickr"><img alt="{{title}}" src="{{image_s}}" width="75" height="75" /></a></li>'
        }, function () {
        });
    }
    
    
    $(".xv-owl-carousel").each(function(num,ele){
         var $this = $(this), 
            centerEle = Math.ceil($this.find(".xv-owl-child").length/2)-1;
        if(!$this.data("center")){
            centerEle = 0;
        }
        $(this).owlCarousel({
            items:$this.data("col"),
            center: $this.data("center"),
            margin:$this.data("gutter"),
            loop:$this.data("loop"),
            startPosition:centerEle,
            dots:$this.data("dots"),
            nav:$this.data("nav"),
        });
    });

});
