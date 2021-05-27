function gallery(idlist, sizeh, lazyload){
  if (lazyload == true) {
    var lazyclass = 'class="lazy" data-';
  } else {
    var lazyclass = '';
  }
  return idlist.map(function(item){
    if (item.substring(0,4) == 'vid-') {
      item = item.slice(4);
      return '<div class="lightbox"><iframe frameborder="0" height="'+sizeh+'" '+lazyclass+'src="https://drive.google.com/file/d/'+item+'/preview"></iframe></div>';
    } else {
      return '<div class="lightbox"><a target="_blank" href="https://drive.google.com/uc?export=view&id='+item+'"><img '+lazyclass+'src="https://drive.google.com/thumbnail?authuser=0&sz=h'+sizeh+'&id='+item+'" /></a></div>';
    }
  });
}