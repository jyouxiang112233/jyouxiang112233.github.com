// JavaScript Document
window.onload=function(){
	(function(){
		var oTop=document.getElementById('top1');
		var count =-200;
		oTop.timer=setInterval(function(){
			count+=3;
			oTop.style.top=count+'px';	
			if(count>=0){
				oTop.style.top='0px';	
				clearInterval(oTop.timer);
			}
		},16);
	})();
};

