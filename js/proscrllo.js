
<!--实现产品滚动效果-->
var speed=10;
var demo=document.getElementById("demo");
var demo1=document.getElementById("demo1");
var demo2=document.getElementById("demo2");
demo2.innerHTML=demo1.innerHTML;
function marqueen(){
    if(demo2.scrollWidth-demo.scrollLeft<=0){
        demo.scrollLeft-=demo2.scrollWidth;
    }else
        demo.scrollLeft++;
}
var timer =setInterval(marqueen,speed);
demo.onmouseover=function(){
    clearInterval(timer);
}

demo.onmouseout=function(){
    timer=setInterval(marqueen,speed);
}

