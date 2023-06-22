$(window).load(function () {
    
    /* ================ GALLERY ISOTOPE FILTER ================ */

    (function () {
        //ISOTOPE
        // cache container
        var $galleryitems = $('#galleryitems');
        // initialize isotope
        $galleryitems.isotope({
            filter: '*',
            masonry: {
                columnWidth: 1,
                isResizable: true
            }
        });

        // filter items when filter link is clicked
        $('.filters a').click(function () {
            $('.filters li').removeClass('active');
            var selector = $(this).closest('li').addClass('active').end().attr('data-filter');
            $galleryitems.isotope({
                filter: selector
            });
            return false;
        });
    })();

});
