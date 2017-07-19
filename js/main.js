
/*这里要特别注意根据jquery选择器取出来的jquery对象是一个类数组对象，需要*/
var $nav3=$('#nav3');
function show(){
    $nav3.css("display","block")
}
function hidden(){
    $nav3.css("display","")
}
var $li3=$('#nav ul li:eq(2)');
$li3.on('mouseover',function(){
    show();
});
$li3.on('mouseout',function(){
    hidden();
});
$nav3.on('mouseover',function(){
    show();
});
$nav3.on('mouseout',function(){
    hidden();
})



/*banner效果的实现*/
var arr=["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg"];
var count=0;
//轮播函数的实现
function banner(){
    if(arr.length==count){
        count=0;
    }
    $("#banner1").attr("src",arr[count]);
    count++;
}
//注意不要寫banner()
var timer=setInterval(banner,1000);


//鼠标悬停时候指到相应的图片
function showbanner(num){
    clearInterval(timer);
    var index=parseInt(num)-1;
    $("#banner1").attr("src",arr[index]);
    count=index;
}

//鼠标离开时候恢复轮播
function showb(){
    var timer=setInterval(banner,1000);
}

$("#span1").on("mouseover",function(){showbanner(1)});
$("#span1").on("mouseout",function(){showb()});

$("#span2").on("mouseover",function(){showbanner(2)});
$("#span2").on("mouseout",function(){showb()});

$("#span3").on("mouseover",function(){showbanner(3)});
$("#span3").on("mouseout",function(){showb()});

$("#span4").on("mouseover",function(){showbanner(4)});
$("#span4").on("mouseout",function(){showb()});



/*实现在线咨询浮动*/
var zixun=document.getElementById("zixun");
console.log(zixun.scrollHeight);
function changeHeight(){
    var scroolh=document.body.scrollTop || document.documentElement.scrollTop;
    zixun.style.top=scroolh+zixun.scrollHeight+'px';
}
window.onscroll=changeHeight;
