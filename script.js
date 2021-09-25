function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
inp.remove();
var element = document.getElementById("id01");
element.innerHTML = "IP Copied!";
setTimeout(function(){ var element = document.getElementById("id01");
element.innerHTML = "mc.zap862.xyz"; }, 1000);
}
//COPYRIGHT ZACK WILK 2020