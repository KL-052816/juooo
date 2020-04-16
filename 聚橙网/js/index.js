// banner背景
function beijing(a){
    switch(a){
        case 0:$(".banner").css("background","#55b5db");
        break;
        case 1:$(".banner").css("background","#1D1507");
        break;
        case 2:$(".banner").css("background","#054199");
        break;
        case 3:$(".banner").css("background","#FADC62");
        break;
        case 4:$(".banner").css("background","#C0B1C8");
        break;
        case 5:$(".banner").css("background","#4487CD");
        break;
        case 6:$(".banner").css("background","#B4252B");
        break;
        case 7:$(".banner").css("background","#212020");
        break;
        default:$(".banner").css("background","#F2EAC3");
        break;
    }
}
// 页面加载时执行
window.onload=function(){
    //根据活动的圆点下标来改变颜色
    setInterval(function(){
    var bannerNum=$(".swiper-pagination-bullet-active").index()
      beijing(bannerNum);
    },500)
}
// 点击圆点背景改变
$(".swiper-pagination-bullet").click(function(){
    beijing($(this).index())
})
// 左右箭头
$(".next").click(function(){
    beijing($(".swiper-pagination-bullet-active").index())
})
$(".prev").click(function(){
    beijing($(".swiper-pagination-bullet-active").index())
})


// 创建左侧导航栏的效果
function left(){
    // 获取scrollY的值
    numY=window.scrollY
    // 判断显示与隐藏
    if(numY>=1500){
        $(".left-list").show()
        // 随着位置改变其颜色
        if(numY>1500 &&numY<2100){
            $(".left-one").css("background-color","#ff9244")
        }else{
            $(".left-one").css("background-color","#fff")
        }
        if(numY>2100 &&numY<2850){
            $(".left-two").css("background-color","#ff6060")
        }else{
            $(".left-two").css("background-color","#fff")
        }
        if(numY>2850 &&numY<3500){
            $(".left-three").css("background-color","#ff9244")
        }else{
            $(".left-three").css("background-color","#fff")
        }
        if(numY>3500 &&numY<4200){
            $(".left-four").css("background-color","#90cb55")
        }else{
            $(".left-four").css("background-color","#fff")
        }
        if(numY>4200 &&numY<4900){
            $(".left-five").css("background-color","#5a87eb")
        }else{
            $(".left-five").css("background-color","#fff")
        }
        if(numY>4900){
            $(".left-six").css("background-color","#ff9244")
        }else{
            $(".left-six").css("background-color","#fff")
        }
    }else{
        $(".left-list").hide()
    }
}
// 左侧边栏滚动调用方法
window.onscroll=function (){
    left()
}
// 鼠标进入改变其颜色
$(".left-one").on({
    mouseenter:function(){
        $(this).css("background","#ff9244")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        // 离开时调用函数，防止其背景改变状态
        left()
    }
})
$(".left-two").on({
    mouseenter:function(){
        $(this).css("background","#ff6060")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        left()
    }
})
$(".left-three").on({
    mouseenter:function(){
        $(this).css("background","#ff9244")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        left()
    }
})
$(".left-four").on({
    mouseenter:function(){
        $(this).css("background","#90cb55")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        left()
    }
})
$(".left-five").on({
    mouseenter:function(){
        $(this).css("background","#5ab7e8")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        left()
    }
})
$(".left-six").on({
    mouseenter:function(){
        $(this).css("background","#ff9244")
    },
    mouseleave:function(){
        $(this).css("background","#fff")
        left()
    }
})

