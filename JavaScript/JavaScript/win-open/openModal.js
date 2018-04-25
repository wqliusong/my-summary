(function(window) {
	var _gw_showModalDialog = {
		gw_coverOpen: gw_coverOpen,
		gw_coverClose:gw_coverClose,
		gw_openWin:gw_openWin
	};


var gw_cover_id = "gw_bgModeHideDiv";
//重要    
//弹出对话窗口(msgID-要显示的div的id) 
function gw_coverOpen() {
    //创建大大的背景框   
    var hideDiv = document.createElement("div");
    hideDiv.id = gw_cover_id;
    hideDiv.style.display = "none";
    var bgObj = document.createElement("div");
    bgObj.setAttribute('id', 'gw_bgModeAlertDiv');
    document.body.appendChild(hideDiv);
    document.body.appendChild(bgObj);
    //背景框满窗口显示   
    gw_Show_bgDiv();
    //把要显示的div居中显示
    gw_Show_msgDiv();
}
//关闭对话窗口   
function gw_coverClose() {
    var msgObj = window.document.getElementById(gw_cover_id);
    var bgObj = window.document.getElementById("gw_bgModeAlertDiv");
    // msgObj.style.display = "none";
	window.document.body.removeChild(bgObj);
	window.document.body.removeChild(msgObj);
    //gw_cover_id = "";
}

function gw_openWin(url, iWidth, iHeight) {
    gw_coverOpen();
 	var openUrl = url;
	var iTop = (window.screen.availHeight-30-iHeight)/2;
	var iLeft = (window.screen.availWidth-10-iWidth)/2;
	var result=window.open(openUrl,'_blank','width='+ iWidth +',height='+ iHeight +', top='+iTop+', left='+iLeft+',menubar=no,scrollbars=no, resizable=no,location=no, status=no');
	window.onfocus=function (){result.focus();};
	window.onclick=function (){result.focus();};
	
	var close_time = window.setInterval(function(){
		 if(result.closed==true){
		 	 gw_coverClose();
		 	 clearInterval(close_time);
         }
         console.log(1)
	},200);
}

//把要显示的div居中显示   
function gw_Show_msgDiv() {
    var msgObj = document.getElementById(gw_cover_id);
    msgObj.style.display = "block";
    var msgWidth = msgObj.scrollWidth;
    var msgHeight = msgObj.scrollHeight;
    var bgTop = gw_myScrollTop();
    var bgLeft = gw_myScrollLeft();
    var bgWidth = gw_myClientWidth();
    var bgHeight = gw_myClientHeight();
    var msgTop = bgTop + Math.round((bgHeight - msgHeight) / 2);
    var msgLeft = bgLeft + Math.round((bgWidth - msgWidth) / 2);
    msgObj.style.position = "absolute";
    msgObj.style.top = msgTop + "px";
    msgObj.style.left = msgLeft + "px";
    msgObj.style.zIndex = "10001";

}
//背景框满窗口显示   
function gw_Show_bgDiv() {
    var bgObj = document.getElementById("gw_bgModeAlertDiv");
    var bgWidth = gw_myClientWidth();
    var bgHeight = gw_myClientHeight();
    var bgTop = gw_myScrollTop();
    var bgLeft = gw_myScrollLeft();
    bgObj.style.position = "absolute";
    bgObj.style.top = bgTop + "px";
    bgObj.style.left = bgLeft + "px";
    bgObj.style.width = bgWidth + "px";
    bgObj.style.height = bgHeight + "px";
    bgObj.style.zIndex = "10000";
    bgObj.style.background = "blue";
    bgObj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60,finishOpacity=60);";
    bgObj.style.opacity = "0.6";
}
//网页被卷去的上高度   
function gw_myScrollTop() {
    var n = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;
    return n;
}
//网页被卷去的左宽度   
function gw_myScrollLeft() {
    var n = window.pageXOffset
        || document.documentElement.scrollLeft
        || document.body.scrollLeft || 0;
    return n;
}
//网页可见区域宽   
function gw_myClientWidth() {
    var n = document.documentElement.clientWidth
        || document.body.clientWidth || 0;
    return n;
}
//网页可见区域高   
function gw_myClientHeight() {
    var n = document.documentElement.clientHeight
        || document.body.clientHeight || 0;
    return n;
}
$(window).resize(function () {          //当浏览器大小变化时
    var bgObj = document.getElementById("gw_bgModeAlertDiv");
	if(bgObj){
		var bgWidth = gw_myClientWidth();
		var bgHeight = gw_myClientHeight();
		var bgTop = gw_myScrollTop();
		var bgLeft = gw_myScrollLeft();
		bgObj.style.top = bgTop + "px";
		bgObj.style.left = bgLeft + "px";
		bgObj.style.width = bgWidth + "px";
		bgObj.style.height = bgHeight + "px";
	}
});
	window.gw_showModalDialog = _gw_showModalDialog;
})(window);