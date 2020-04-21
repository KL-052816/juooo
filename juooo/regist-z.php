<?php
  header("Access-Control-Allow-Origin: *");
  // 设置Access-Control-Allow-Origin响应头 使任何一个地址发起的请求都能调用该接口
  header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
  // 设置需要支持的请求方式
  header("Access-Control-Allow-Headers: x-requested-with, content-type");
 $servername="localhost";
 $name="text";
 $password="123456";
 $mysql="user-value";
 $connect=new mysqli($servername,$name,$password,$mysql);
 if($connect->connect_error) { 
   die("数据库连接失败:".$connect->connect_error);
}
echo "数据库连接成功";
if(preg_match("/^[_a-zA-Z0-9]{1,}$/",$_POST["admin"])&&preg_match("/^[a-zA-Z0-9]{6,}$/",$_POST["pwd"])) {
  echo '<script language="JavaScript">;alert("注册成功");location.href="logn-z.html";</script>;';

  }
  else{
    echo '<script language="JavaScript">;alert("注册失败");location.href="regist-z.html";</script>;';   
  };

  $admin=$_POST["admin"];
  $pwd=$_POST["pwd"];
  $insert="insert into user (id,password) values ('$admin','$pwd');";
  if($connect->query($insert)) {
    echo "数据插入成功";
}else {
    echo "数据插入失败";
};




?>