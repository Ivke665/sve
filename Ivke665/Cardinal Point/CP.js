var img = $('img');
var holder = $('#holder');
var info = $('#info');
var img1Info;
var img2Info;


img.on('click',function () {
  info.html('')
  holder.html('');
  var self = $(this);

  var copy = self.clone();

  var img1Info=self.attr('value');
  var img2Info=self.attr('alt');


    copy.css({
      position : 'fixed',
      width : self.width(),
      height : self.height(),
      top : self.offset().top,
      left : self.offset().left
    })
    copy.animate({
      top : holder.offset().top,
      left : holder.offset().left,
      width : holder.width(),
      height : holder.height()
    }, 1000,function(){
      info.append(img1Info);

      info.append(img2Info);

    })
  $('#holder').append(copy);
});
