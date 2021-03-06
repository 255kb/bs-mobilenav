#Mobile navigation menu for Bootstrap

BS-Mobilenav is a package allowing you to create a mobile friendly and swipeable menu from any regular Bootstrap grid element. [View a demo](http://255kb.github.io/bs-mobilenav/)

##Dependencies
- jQuery
- jQuery touchSwipe

##Installation

You can install BS-Mobilenav with Bower:

    bower install bs-mobilenav

##How to use

###1. Init BS-Mobilenav with options

You need to initialize the menu before using it. Use the `init()` function with the following options:

    var options = {
        swipe: true                        // switch the swipe gestures (left/right) on or off
    };
    BSMobilenav.init(options);

###2. Needed DOM elements

Please take a look at the [demo](http://255kb.github.io/bs-mobilenav/) in order to view the typical example.
All you need to add besides the plugin initialization is a grid element with the `.bs-mobilenav` class, for example:

    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 bs-mobilenav">    // .bs-mobilenav class
                <!-- NAV MENU OR ANY OTHER HTML ELEMENTS YOU WANT-->
                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#">Menu item</a></li>
                    <li><a href="#">Menu item</a></li>
                    ...
                </ul>
            </div>
            <div class="col-lg-9 col-md-8">     // content need to be properly sized in xs and sm as the menu will disappear in mobile/tablet mode
                <!-- ANY CONTENT-->
            </div>
        </div>
    </div>

Be careful to properly size your main content in mobile/tablet mode (here with `class="col-lg-9 col-md-8"`) as the menu will be removed from the flow for XS and SM screen sizes as defined by Bootstrap.

###3. CSS customization

You can customize the CSS in order to change the menu background color, width and the backdrop color:

    .bs-mobilenav{
        ...
        @media (max-width: 991px) {
                ...
                width: 240px; // menu width in mobile mode (default to 240px)
                left: -243px; // change according to the menu width (includes the shadow width)
                background-color: #fff; // menu background color in mobile mode (default to white)
                ...
            }
        }

    .bs-mobilenav-backdrop{
        background-color: rgba(0, 0, 0, 0.2); // menu backdrop background color
        ...
    }

###4. Show/hide the menu programmatically

    BSMobilenav.show();
    BSMobilenav.hide();

###5 Toggle the menu using data-toggle attribute

In order to toggle the menu you can use `data-toggle="bs-mobilenav"` on any element, like this:

    <button data-toggle="bs-mobilenav">Toggle</button>