<?php
   header("Access-Control-Allow-Origin: *");
    // 设置Access-Control-Allow-Origin响应头 使任何一个地址发起的请求都能调用该接口
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
    // 设置需要支持的请求方式
    header("Access-Control-Allow-Headers: x-requested-with, content-type");
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="juooo";

    $connect=new mysqli($servername,$name,$password,$mysql);

    // if($connect->connect_error){
    //     die("链接失败".$connect->error);
    // };
    // echo "连接成功";
    //检索信息
    $con=$_GET['con'];
    

    $select="select * from orange where name like '%${con}%' limit 10";
    //  if($connect->query($content)){
    //      echo "成功";
    //  }else{
    //      echo "失败";
    //  };
    $txt=$connect->query($select);
    if ($txt->num_rows>0){
        while($arr=$txt->fetch_assoc()){ 
            $a[]=$arr;     
        };
    }else{
        $a=1;
    };
    echo json_encode($a);
    $connect->close();
?>