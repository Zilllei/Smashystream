//	Playerjs.com 19.10.21
//	27.08.2024 11:44:30
//	API - https://playerjs.com/docs/q=api

if (!window.pljssglobal) {
  window.pljssglobal = [];
  window.pljssglobalid
}
if (window['PlayerjsAsync']) {
  setTimeout(PlayerjsAsync, 1)
};

function PlayerjsPoster(x,y){!window.playerjs?window.playerjs=[]:'';if(x){if(x.poster&&x.id){var d=document.getElementById(x.id);if(d){d.style.overflow='hidden';var video=!1;if(d){if(x.poster.indexOf('.mp4')>0){video=!0}else{var img=new Image();img.onload=function(){if(d.offsetWidth>0&&d.offsetHeight==0){var ar=this.height/this.width;d.style.height=d.offsetWidth*ar+'px'}};img.src=x.poster}
var t='<div id="pjs-plug-'+x.id+'" style="'+(!video?'background:url(\''+x.poster+'\') no-repeat 0 0;':'')+'background-size:cover;cursor:pointer;display:flex;align-items:center;justify-content:center;width:100%;height:100%; transition: all 2s;">';if(video){t+='<video id="pjs-plug-'+x.id+'-vid" src="'+x.poster+'" '+(x.posterplay==1?'autoplay=1':'')+' loop=1 playsinline=1 muted=1 style="width:100%"></video>'}
if(x.postericon==1){!x.postericonscale?x.postericonscale=1:'';t+='<svg id="pjs-plug-'+x.id+'-icon" width="40px" height="50px" viewBox="-20 -25 40 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;transform:scale('+x.postericonscale+')"><polygon stroke="none" fill="#fff" fill-rule="evenodd" points="-20 -25 20 0 -20 25"></polygon></svg>'}
t+='</div>';d.innerHTML=t;var d2=document.getElementById('pjs-plug-'+x.id);if(video){var vid=document.getElementById('pjs-plug-'+x.id+'-vid')}
d2.addEventListener("click",Click);d2.addEventListener("mouseover",Over);d2.addEventListener("mouseout",Out)}}}}
function Click(){if(x.postericon==1){document.getElementById('pjs-plug-'+x.id+'-icon').style.display='none'}
d2.removeEventListener("click",Click);d2.removeEventListener("mouseover",Over);d2.removeEventListener("mouseout",Out);x.posterplay==0?'':x.autoplay=1;window.playerjs[x.id]=new Playerjs(x.play?x.play:x)}
function Over(){if(video){x.posterplay!=1?vid.play():''}else{x.posterscale===0?'':d2.style.transform='scale(1.2)'}}