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
        link = "https://twitch.tv/" + name,
        channelUrl = "https://api.twitch.tv/kraken/channels/" + name + "?callback=?",
        streamUrl = "https://api.twitch.tv/kraken/streams/" + name + "?callback=?",
        $title, $count, $header, $img;

    // channel image
    $img = $(document.createElement('img'))
      .attr("width", "40px")
      .attr("height", "40px");

    // channel title
    $title = $(document.createElement('a'))
      .addClass('tw-title');

    // game name
    $w
      .append($img)
      .append($title);

    $.getJSON(channelUrl, function (data){
      $title
        .text(data.display_name)
        .attr('href', link);
      $img.attr('src', data.logo)
    })
  })
})(jQuery);


});
