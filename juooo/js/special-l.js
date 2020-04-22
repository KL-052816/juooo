$("li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".hide").eq($(this).index()).addClass("show").siblings().removeClass("show");
    
})