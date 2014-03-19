/*
 * @name twitch-widget
 * @author eden lane
 * @require jQuery
 */
$(document).ready(function(){
(function ($) {
  var $all = $(".tw-widget");
  //console.log($all);

  $all.each(function () {
    console.log("each all")
    var $w = $(this),
        name = $w.attr("data-channel-name"),
        $title, $count, $header, $img;

    console.log(channel);

    // channel image
    $img = $(document.createElement('img'))
      .attr("width", "40px")
      .attr("height", "40px")
      .attr("src","http://static-cdn.jtvnw.net/jtv_user_pictures/barreljumpers-profile_image-a9173587c121f8ed-300x300.png");

    // channel title
    $title = $(document.createElement('a'))
      .addClass('tw-title')
      .text("Barrel Jumpers");

    // game name
    $w.append($img).append($title);
  })
})(jQuery);


});
