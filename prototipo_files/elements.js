/**
* Testimonial Widget JS file
*
* This file contains functions relating to the Testimonial Widget
 *
 * @package Layers
 * @since Layers 1.0.0
 * Testimonials
 * 1 - Sortable items
 * 2 - Column Removal & Additions
 * 3 - Column Title Update
 *
 * Author: Obox Themes
 * Author URI: http://www.oboxthemes.com/
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

jQuery(document).ready(function($){
    "use strict";
        $(".xv-tab-pane:first-child").show();
        $('.xv-tab-control a').click(function(e){
            e.preventDefault();
            $('.xv-tab-pane').hide();
            $('.xv-tab-control li').removeClass('active');
            $(this).parent('li').addClass('active');
            $($(this).attr("href")+'.xv-tab-pane').fadeIn();
        });
        
        $(".xv-acc-block.active").find(".xv-acc-content").slideDown();
        
        $(".xv-acc-header").click(function(e){
            e.preventDefault();
            if(!$(this).parents('.xv-acc-block').hasClass("active")){
                var pp = $(this).parents(".xv-accordion-widget"),
                    p = $(this).parents('.xv-acc-block');
                $('.xv-acc-block').removeClass("active");
                pp.find(".xv-acc-content").slideUp();
                p.addClass("active");
                p.find(".xv-acc-content").slideDown();
            }
        });
        
    });