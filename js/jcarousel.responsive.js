(function($) {
    $(function() {

		
		var jcarousel2 = $('.t_banner');

        jcarousel2
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 840) {
                    width = (width / 3)-20;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 10px'});
                } else if(width < 700) {
                    width = (width / 1)-20;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 10px'});
                } else {
                    width = (width / 1)-40;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 20px'});
                }

               
            })
				 .jcarousel({
                wrap: 'circular'
            });


	var jcarousel3 = $('.f_banner');

        jcarousel3
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 840) {
                    width = (width / 5)-10;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 5px'});
                } else if(width < 400) {
                    width = (width / 2)-10;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 5px'});
                } else {
                    width = (width / 3)-10;
					carousel.jcarousel('items').css({'width': Math.ceil(width) + 'px','margin':'0 5px'});
                }

               
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
