//  はてなリンクカードを表示するためのタグを追加
hexo.extend.tag.register("linkcard", function(args) {
  var url = args[0];
  return '<iframe class="linkcard" style="width: 100%; height: 140px; max-width: 680px;" src="https://hatenablog-parts.com/embed?url=' +
    url + '" width="300" height="135" frameborder="0" scrolling="no"></iframe>';
}, { ends: false });