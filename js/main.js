
/*����Ҫ�ر�ע�����jqueryѡ����ȡ������jquery������һ�������������Ҫ*/
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



/*bannerЧ����ʵ��*/
var arr=["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg"];
var count=0;
//�ֲ�������ʵ��
function banner(){
    if(arr.length==count){
        count=0;
    }
    $("#banner1").attr("src",arr[count]);
    count++;
}
//ע�ⲻҪ��banner()
var timer=setInterval(banner,1000);


//�����ͣʱ��ָ����Ӧ��ͼƬ
function showbanner(num){
    clearInterval(timer);
    var index=parseInt(num)-1;
    $("#banner1").attr("src",arr[index]);
    count=index;
}

//����뿪ʱ��ָ��ֲ�
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



/*ʵ��������ѯ����*/
var zixun=document.getElementById("zixun");
console.log(zixun.scrollHeight);
function changeHeight(){
    var scroolh=document.body.scrollTop || document.documentElement.scrollTop;
    zixun.style.top=scroolh+zixun.scrollHeight+'px';
}
window.onscroll=changeHeight;
