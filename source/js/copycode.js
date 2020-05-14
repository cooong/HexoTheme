window.onload = function () {
    $(document).bind("click",function(e){
        var target = $(e.target);
        if(target.closest("pre").length == 0){
          $("#copybottom").remove();
        }
      });
      let preItems = document.getElementsByTagName('pre');
      for (let index in preItems) {
        let preItem = preItems[index];
        preItem.setAttribute("id", index);
        preItem.setAttribute("onclick", 'cp(' + index + ')');
      }
    }
    function cp(i){
        $("#copybottom").remove();
        if($("#copybottom").length == 0){
          var prei=document.getElementsByTagName('pre')[i];
          $(prei).prepend("<div id=copybottom>复制</div>");
          $("#copybottom").click(
          function (){
              $("#copybottom").remove();
              const range = document.createRange();
              range.selectNode(prei);
              const selection = window.getSelection();
              if (selection.rangeCount > 0) selection.removeAllRanges();
              selection.addRange(range);
              document.execCommand('copy');
              copy_botton("复制成功",500)
            });
          }
        }
        function copy_botton(msg, duration) {
            duration = isNaN(duration) ? 3000 : duration;
            var m = document.createElement('div');
            m.innerHTML = msg;
            m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
            document.body.appendChild(m);
            setTimeout(function () {
                var d = 0.5;
                m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                m.style.opacity = '0';
                setTimeout(function () {
                    document.body.removeChild(m)
                  }, d * 1000);
                }, duration);
              }