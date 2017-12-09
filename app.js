
(function() {
  'use strict';

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('sw.js')
              
             .then(function() { console.log('Service Worker Registered'); });

    
    
  }
})();

 function Editor(input, preview) {
        this.update = function () {
          preview.innerHTML = markdown.toHTML(input.value);
        };
        input.editor = this;
        this.update();
      }
      var $ = function (id) { return document.getElementById(id); };
      new Editor($("text-input"), $("preview"));
      

function show() {
  var md = $('#mdBox').val();
  var html = mdToHtml(md);
  $('#htmlBox').html(html);
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  switchPanel('showPanel');
  MathJax.Hub.Queue(["Typeset",MathJax.Hub, "htmlBox"]);
}
