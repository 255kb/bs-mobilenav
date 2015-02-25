/* Mobile navigation for Bootstrap (https://github.com/255kb/bs-mobilenav | MIT license) */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery'], function($) {
            return factory($);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        //Node.js or CommonJS
        module.exports = factory(require('jquery'));
    } else {
        //Global
        root.BSMobilenav = factory(root.jQuery ||root.$);
    }
}(this, function ($) {
    'use strict';
    var defaultOptions = {
            swipe: true,
            menuColor: '#fff',
            menuWidth: 240,
            backdropColor: 'rgba(0, 0, 0, 0.2)'
        },
        currentOptions,
        isOpen = false;

    var screenSize = function(size) {
        return $('.bs-mobilenav-tools .device-' + size).is(':visible');
    };
    var screenAuthorized = function() {
        if(!screenSize('lg') && !screenSize('md')){
            return true;
        } else {
            return false;
        }
    };
    var reinitDesktop = function() {
        $('.bs-mobilenav').removeAttr('style');
        $('.bs-mobilenav-backdrop').fadeOut(300);
        isOpen = false;
    };
    var reinitMobile = function() {
        $('.bs-mobilenav').css({left: -currentOptions.menuWidth-3});
        $('.bs-mobilenav-backdrop').fadeOut(300);
        isOpen = false;
    };

    var BSMobilenav = {
        init: function(options) {
            currentOptions = $.extend({}, defaultOptions, options);

            //append html elements to check screen size + backdrop
            $('body').append('<div class="bs-mobilenav-tools"><div class="device-xs visible-xs"></div><div class="device-sm visible-sm"></div><div class="device-md visible-md"></div><div class="device-lg visible-lg"></div></div><div class="bs-mobilenav-backdrop"></div>');

            //set backdrop color
            $('.bs-mobilenav-backdrop').css({'background-color': currentOptions.backdropColor});

            //initialize listener for data attribute
            $(document).on('click', '[data-toggle=bs-mobilenav]', function() {
                BSMobilenav.toggleMenu();
            });

            //initialize listener for mobile backdrop closing behavior
            $(document).on('click', '.bs-mobilenav-backdrop', function() {
                BSMobilenav.hideMenu();
            });

            //window resize listener for reinitialization
            $(window).resize(function() {
                if(screenSize('md') || screenSize('lg')){
                    reinitDesktop();
                } else {
                    reinitMobile();
                }
            });

            if(currentOptions.swipe) {
                //listener for touch swipe
                $(document).swipe({
                    swipeLeft: function () {
                        BSMobilenav.hideMenu();
                    },
                    swipeRight: function () {
                        BSMobilenav.showMenu();
                    }
                });
            }
        },
        toggleMenu: function() {
            if(screenAuthorized()){
                if(isOpen){
                    this.hideMenu();
                } else {
                    this.showMenu();
                }
            }
        },
        showMenu: function() {
            if(screenAuthorized()) {
                if(!isOpen) {
                    $('.bs-mobilenav').css({'background-color': currentOptions.menuColor, width: currentOptions.menuWidth}).animate({left: 0}, 300);
                    $('.bs-mobilenav-backdrop').fadeIn(300);
                    isOpen = true;
                }
            }
        },
        hideMenu: function() {
            if(screenAuthorized()) {
                if(isOpen) {
                    $('.bs-mobilenav').animate({left: -currentOptions.menuWidth-3}, 300);
                    $('.bs-mobilenav-backdrop').fadeOut(300);
                    isOpen = false;
                }
            }
        }
    };
    return BSMobilenav;
}));