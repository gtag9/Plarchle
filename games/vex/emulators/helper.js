var gameBody;const hiddenMenu=document.getElementById('hiddenMenu');const hiddenMenuBody=document.getElementById('hiddenMenuBody');const button_load_game=document.getElementById('button_load_game');const game_background=document.getElementById('game_background');const button_refresh=document.getElementById('button_refresh');const button_fullscreen=document.getElementById('button_fullscreen');const button_close=document.getElementById('button_close');const loader=document.getElementById('loader');var hiddenMenuBoolean=false;var game=document.getElementById('waflashContainer');var canvas=document.getElementById('canvas');var ruffle=document.getElementById('game');var actiswf_0=document.getElementById('actiswf_0');var stage0=document.querySelector('canvas');var game_type;var is_mobile=false;var game_status=true;var game_fullscreen=false;var game_volume=true;if(canvas){gameBody=canvas;console.log("Type W");}else if(ruffle){gameBody=ruffle;console.log("Type R");}else if(actiswf_0){gameBody=actiswf_0;console.log("Type AV");}else{gameBody=stage0;console.log("Type AW");}
interact('.draggable').draggable({inertia:true,modifiers:[interact.modifiers.restrictRect({restriction:'parent',endOnly:true})],autoScroll:true,listeners:{move:dragMoveListener,end(event){var textEl=event.target.querySelector('p')
textEl&&(textEl.textContent='moved a distance of '+
(Math.sqrt(Math.pow(event.pageX-event.x0,2)+
Math.pow(event.pageY-event.y0,2)|0)).toFixed(2)+'px')}}})
function dragMoveListener(event){var target=event.target
var x=(parseFloat(target.getAttribute('data-x'))||0)+event.dx
var y=(parseFloat(target.getAttribute('data-y'))||0)+event.dy
target.style.transform='translate('+x+'px, '+y+'px)'
target.setAttribute('data-x',x)
target.setAttribute('data-y',y)}
window.dragMoveListener=dragMoveListener
function showHiddenMenu(){if(hiddenMenuBoolean){hiddenMenu.style="display:none";hiddenMenuBody.style="display:none";hiddenMenuBoolean=false;gameBody.style.webkitFilter="blur(0px)";}else{hiddenMenu.style="display:flex";hiddenMenuBody.style="display:flex";hiddenMenuBoolean=true;gameBody.style.webkitFilter="blur(15px)";}}
if(document.getElementById('canvas')&&!hiddenMenuBoolean){document.getElementById('canvas').addEventListener("click",function(){hiddenMenu.style="display:none";hiddenMenuBoolean=false;canvas.style.webkitFilter="blur(0px)";});}
document.getElementById('button_fullscreen').addEventListener("click",function(){if(document.fullscreenEnabled){if(game_fullscreen){document.exitFullscreen();game_fullscreen=false;}else{gameBody.requestFullscreen();game_fullscreen=true;showHiddenMenu();}}else{alert("Fullscreen denied. If you are the webmaster, please add 'allowfullscreen' in the iframe tag.");}});document.getElementById('button_refresh').addEventListener("click",function(){if(game_status===true)
location.reload();});document.getElementById('button_close').addEventListener("click",function(){if(game_status===true)
showHiddenMenu();});