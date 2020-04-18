var table=document.getElementsByTagName("table")[0]
var xhr=new XMLHttpRequest()
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        var list=JSON.parse(xhr.responseText)
        // 获取最低价
        var arr=Array()
        for(var i=0;i<list.length;i++){
            arr[i]=((list[i].price).split("-")[0]).split("¥")[1]
        }
        // 全国请求
        $("#all-con").html("")
        $("#all-con").append(`
        <ul >
        <li>
            <div class="a-c-img">
                <a href="">
                    <i></i>
                    <img src="./img/all1.jpg" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">别克·陕西大剧院-歌剧厅</a></p>
                    <p><span class="acsp2"></span><a href="">2020.09.18 19:45</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">聚橙制作 | 法语音乐剧《摇滚红与黑》-西安站</a>
            </div>
            <div class="a-c-price">
                <div>音乐剧</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">199</span>
                    起
                </div>
            </div>
        </li>
        <li>
            <div class="a-c-img">
                <a href="" title="${list[2].name}">
                    <i></i>
                    <img src="${list[2].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[2].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[2].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[2].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[2].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[2]}</span>
                    起
                </div>
            </div>
        </li>
        <li>
            <div class="a-c-img">
                <a href="" title="${list[16].name}">
                    <i></i>
                    <img src="${list[16].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[16].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[16].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[16].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[16].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[16]}</span>
                    起
                </div>
            </div>
        </li>
        <li>
            <div class="a-c-img">
                <a href="" title="${list[4].name}">
                    <i></i>
                    <img src="${list[4].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[4].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[4].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[4].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[4].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[4]}</span>
                    起
                </div>
            </div>
        </li>
    </ul>
        `)
        // 演唱会
        $("#s-con").html("")
        $("#s-con").append(`
        <ul>
        <li>
            <div class="a-c-img">
                <a href="" title="${list[5].title}">
                    <i></i>
                    <img src="${list[5].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[5].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[5].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[5].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[5].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[5]}</span>
                    起
                </div>
            </div>
        </li>
        <li>
            <div class="a-c-img">
                <a href="" title="${list[0].title}">
                    <img src="${list[0].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[0].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[0].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[0].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[0].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[0]}</span>
                    起
                </div>
            </div>
        </li>
    </ul>
        `)
        // 音乐剧
        var yyj=Array()
        yyj[0]=list[1]
        yyj[1]=list[16]
        yyj[2]=list[6]
        yyj[3]=list[0]
        yyj[4]=list[8]
        $("#yyj-con").html("")
        for(var i=0;i<yyj.length;i++){
            $("#yyj-con").append(`
            <li>
            <div class="a-c-img">
                <a href="" title="${yyj[i].name}">
                    <i></i>
                    <img src="${yyj[i].photo}" alt="">
                </a>
                <div class="a-c-imgnone mousicbg">
                    <p><span class="acsp1"></span><a href="">${yyj[i].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${yyj[i].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${yyj[i].name}</a>
            </div>
            <div class="a-c-price">
                <div>${yyj[i].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[i]}</span>
                    起
                </div>
            </div>
        </li>
            `)
        }
        // 舞台剧
        $("#wtj-con").html("")
        for(var i=12;i<17;i++){
            $("#wtj-con").append(`
            <li>
            <div class="a-c-img">
                <a href="" title="${list[i].name}">
                    <i></i>
                    <img src="${list[i].photo}" alt="">
                </a>
                <div class="a-c-imgnone">
                    <p><span class="acsp1"></span><a href="">${list[i].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[i].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[i].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[i].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[i]}</span>
                    起
                </div>
            </div>
        </li>
            `)
        }
        // 儿童剧
        $("#etj-con").html("")
        for(var i=8;i<13;i++){
            $("#etj-con").append(`
            <li>
            <div class="a-c-img">
                <a href="" title="${list[i].name}">
                    <i></i>
                    <img src="${list[i].photo}" alt="">
                </a>
                <div class="a-c-imgnone childrenbg">
                    <p><span class="acsp1"></span><a href="">${list[i].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[i].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[i].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[i].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[i]}</span>
                    起
                </div>
            </div>
        </li>
            `)
        }
        //音乐会
        $("#yyh-con").html("")
        for(var i=15;i<=19;i++){
            $("#yyh-con").append(`
            <li>
            <div class="a-c-img">
                <a href="" title="${list[i].name}">
                    <i></i>
                    <img src="${list[i].photo}" alt="">
                </a>
                <div class="a-c-imgnone concertbg">
                    <p><span class="acsp1"></span><a href="">${list[i].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[i].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[i].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[i].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[i]}</span>
                    起
                </div>
            </div>
        </li>
            `)
        }
        // 展览休闲
        $("#zlxx-con").html("")
        for(var i=4;i<8;i++){
            $("#zlxx-con").append(`
            <li>
            <div class="a-c-img">
                <a href="" title="${list[i].name}">
                    <i></i>
                    <img src="${list[i].photo}" alt="">
                </a>
                <div class="a-c-imgnone concertbg">
                    <p><span class="acsp1"></span><a href="">${list[i].theatre}</a></p>
                    <p><span class="acsp2"></span><a href="">${list[i].time}</a></p>
                </div>
            </div>
            <div class="a-c-title">
                <a href="">${list[i].name}</a>
            </div>
            <div class="a-c-price">
                <div>${list[i].type}</div>
                <div class="a-c-pright">
                    <span>￥</span>
                    <span class="ac-price">${arr[i]}</span>
                    起
                </div>
            </div>
        </li>
            `)
        }
    }
}
xhr.open('get','http://localhost:80/juooo/php/index-d.php',true)
xhr.send();
