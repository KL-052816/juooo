;(function($){
    $(function(){
        $('.lie-ul').on('click','li',function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    console.log(year+' '+month+' '+day);
    function getDate(year,month){
        var str = '';
        var date1 = new Date(year,month,0);
        var date2 = new Date(year,month-1,0);
        var days1 = date1.getDate();
        var days2 = date2.getDate();
        var week1 = date1.getDay();
        date1.setFullYear(year,month-1,1);
        // console.log(date1)
        var week2 = date1.getDay();
        // console.log(days1);
        // console.log(days2);
        // console.log(week1);
        // console.log(week2)
        var count = days1 + week2 + 6 - week1;
        // console.log(count);
        for(var i=0;i<count;i++){
            if(i<week2){ 
                str +="<div class='bos'>"+(days2-week2+1+i)+"</div>"
            }
            else if(i>days1+week2-1){
                str += "<div class='bos'>"+(i - days1 -week2+1)+"</div>"
            }
            else{
                str += "<div class='box'><span class='date'>"+( i - week2 +1 )+"</span><span class='num'>"+10+"场</span></div>"
            }
        }
        $(".container").html(str);
    }
    getDate(2018,10);
    function changeDate(method){
        if(method == 'jian'){
            --month;
            if(month == 0){
                --year;
                month =12;
            }
        }
        if(method == 'add'){
            month++;
            if(month == 13){
                year++;
                month =1;
            }
        }
        $(".year").html(year);
        $(".month").html(month);
        getDate(year,month);
    }
    $(".prev").click(function(){
        changeDate('jian');
    });
    $(".next").click(function(){
        changeDate('add');
    })
    $('.hui').on('click',function(){
        year = date.getFullYear();
        month = date.getMonth() + 1;
        $(".year").html(year);
        $(".month").html(month);
        getDate(year,month)
    })
}(jQuery))