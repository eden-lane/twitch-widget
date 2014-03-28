/*
 * @name twitch-widget
 * @author eden lane
 * @require jQuery
 */
$(document).ready(function(){
(function ($) {
  var $all = $(".tw-widget");

  $all.each(function () {
    var $w = $(this),
        name = $w.attr("data-channel-name"),
        link = "https://twitch.tv/" + name,
        LOGO = "http://s.jtvnw.net/jtv_user_pictures/hosted_images/GlitchIcon_white.png",
        channelUrl = "https://api.twitch.tv/kraken/channels/" + name + "?callback=?",
        streamUrl = "https://api.twitch.tv/kraken/streams/" + name + "?callback=?",
        $title, $viewers, $status, $info, $img, $game;

    // channel image
    $img = $(document.createElement('img'))
      .attr("width", "40px")
      .attr("height", "40px");

    // channel title
    $title = $(document.createElement('a'))
      .addClass('tw-title');

    $info = $(document.createElement('div'));
    // status
    $status = $(document.createElement('span'))
      .addClass('tw-status');
    // viewers
    $viewers = $(document.createElement('span'))
      .addClass('tw-viewers');
    $game = $(document.createElement('span'))
      .addClass('tw-game');



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
      $img.attr('src', data.logo || LOGO)
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
          .addClass('tw-online');
        $viewers
          .text(stream.viewers);
        $game
          .text(data.stream.game)
        $info
          .append($game);
      } else {
        $status;
        $viewers.hide();
      }
    }).done(function () {
      $w
      .append($img)
      .append($status)
      .append($title)
      .append($info)
      .append($viewers);
    });
  })
})(jQuery);


});
