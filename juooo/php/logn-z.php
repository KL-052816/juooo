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
$admin= $_POST["admin"];
  $pwd= $_POST["pwd"];
//根据用户名查密码password
$select = "select password from user where id='{$admin}'";
// if($connect->query($select)) {
//   echo "输出数据成功";
// }else {
//   echo "输出数据失败";
// };
//3.执行
$reslut = $connect->query($select);
 //4.取数据
  $attr = $reslut->fetch_row();
if($attr[0]===$pwd&&!empty($pwd))//处理验证两个密码是不是相等以外并且还不能为空
 {
    echo '<script language="JavaScript">;alert("登录成功");location.href="http://localhost/juooo/index1-z.html";</script>;'; 
 }
 else
 {
    echo '<script language="JavaScript">;alert("用户名或者秘密错误,请重新输入");location.href="http://localhost/juooo/logn-z.html";</script>;';
 };
?>