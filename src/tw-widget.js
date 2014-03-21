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
        $title, $viewers, $status, $info, $img;

    // channel image
    $img = $(document.createElement('img'))
      .attr("width", "40px")
      .attr("height", "40px");

    // channel title
    $title = $(document.createElement('a'))
      .addClass('tw-title');

    $info = $(document.createElement('div'))
    // status
    $status = $(document.createElement('span'))
      .addClass('tw-status');
    $viewers = $(document.createElement('span'))
      .addClass('tw-viewers')
      .text(50);

    $info
      .append($status);

    $w
      .append($img)
      .append($title)
      .append($info)
      .append($viewers);

    /*
     * Getting common information about channel
     * - title
     * - logo
     * - subscribers ?
     */
    $.getJSON(channelUrl, function (data){
      $title
        .text(data.display_name)
        .attr('href', link);
      $img.attr('src', data.logo)
    });

    /*
     * Getting info about stream
     * - game
     * - viewers
     */
    $.getJSON(streamUrl, function (data) {
      if (data.stream) {
        var stream = data.stream;
        $status
          .text('LIVE')
          .addClass('tw-online')
        $viewers
          .text(stream.viewers)
      } else {
        $status
          .text('Offline');
        $viewers.hide();
      }
    });
  })
})(jQuery);


});
