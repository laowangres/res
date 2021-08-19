var gzwx = '';
gzwx +='<style>.profile_opr{margin:10px;padding:4px 0;height:30px;clear:both;border-radius:5px;overflow:hidden;background-color:#cf0617;font-size:16px;text-align:center;color:#fff}#weui_btn{border:1px solid #cf0617;line-height:30px;height:30px;color:#fff;font-weight:700;width:100%;display:block}.weixin{position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;width:70%;height:260px;background-color:#fff;text-align:center;z-index:999999;padding: 50px 35px 35px 35px;border: 1px solid #d9dadc;}.weixin .erweima{width:200px;height:200px;}.weixin p{line-height: 50px;font-size:28px;color:#000;font-weight: bold;}.weixin .btn{background: url("/template/wxhei/images/xx.png") no-repeat;width: 32px;height: 32px;display: block;position: absolute;right: 10px;top: 10px;outline: none;}</style>';
gzwx += '<div class="profile_opr"><a id="weui_btn" href="javascript:;">老司机不迷路！点击进入公众号！</a></div>';
gzwx += '<div class="weixin" id="weixin" style="display: none;">';
gzwx += '<img src="/template/wxhei/images/erweima.png" class="erweima">';
gzwx += '<p>长按识别二维码</p>';
gzwx += '<div class="btn" id="guanbi"></div>';
gzwx += '</div>';
document.writeln(gzwx);
//点击进入公众号
$("#weui_btn").click(function(){
    $("#weixin").show();
});
//点击关闭
$("#guanbi").click(function(){
    $("#weixin").hide();
});

