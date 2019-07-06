<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/reset.css"/>
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/bootstrap.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.css"/>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.js" type="text/javascript" charset="utf-8"></script>
<style>
html,body{background:#F5F5DC !important;}
.page{width:100%;}
.container{width:95%; text-align:center;border:0px solid #ccc;}
#willesPlay{margin:0px auto;}
@media screen and (max-width:768px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
@media screen and (max-width:480px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
</style>
<script>
$(document).ready(function(){
  var vid = document.getElementById("playVideo"); 
  $('#progress').hide();
  $('#forwardbutton').hide();
  vid.onended = function() 
  {
    $('#progress').show();
    $('#forwardbutton').show();
  };

})
</script>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-md-12">
<div id="willesPlay">
<!--<div class="playHeader">
<div class="videoName">我们的视频</div>
</div>-->
<div class="playContent">
<div class="turnoff">
<ul>
<!--<li><a href="javascript:;" title="喜欢" class="glyphicon glyphicon-heart-empty"></a></li>-->
<li><a href="javascript:;" title="关灯" class="btnLight on glyphicon glyphicon-sunglasses"></a></li>
<!--<li><a href="javascript:;" title="分享" class="glyphicon glyphicon-share"></a></li>-->
</ul>
</div>
<video width="100%" height="100%" id="playVideo">
<source src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2018/ORD-319183-G6Y3/XM.mp4" type="video/mp4">

</source>
当前浏览器不支持 video直接播放，点击这里下载视频： <a href="/">下载视频</a>
</video>
<div class="playTip glyphicon glyphicon-play"></div>
</div>
<div class="playControll">
<div class="playPause playIcon"></div>
<div class="timebar">
<span class="currentTime">0:00:00</span>
<div class="progress" id="progress">
<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
</div>
<span class="duration">0:00:00</span>
</div>
<div class="otherControl">
<span class="volume glyphicon glyphicon-volume-down"></span>
<span class="fullScreen glyphicon glyphicon-fullscreen"></span>
<div class="volumeBar">
<div class="volumewrap">
<div class="progress">
<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<br>


请问视频中的动物是什么

老虎  1
大象  2
大熊猫 3
海豚  4
