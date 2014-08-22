(function ($) {
  /**
   * Behavior for Make a responsive menu 
   */
  Drupal.behaviors.persianas_menu = {
    attach: function (context, settings) {
    	  $('.page-node', context).once('processed', function () {
    		  if (parseInt($(window).width()) < 990) {
            $('#block-system-main-menu').addClass("jala");
          } ;
		    }); 
    }
  };
})(jQuery);