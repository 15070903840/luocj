<?php
header("Content-type:text/html;charset=utf8");
$age = $_GET['user'];
// 连接数据库
$link = mysqli_connect('','root','','addlogin');

// 判断是否连接成功
// if(mysqli_connect_error($link)){
//     echo '数据库连接失败：'.mysqli_connect_error();
//     die();
// } else{
//     echo 'OK-数据库连接成功！';
// }

// 设置字符编码
mysqli_set_charset($link,'utf8');

$sql = "select * from user where password={$age}";

// 执行sql语句之后，返回结果集(资源类型resource)
$results = mysqli_query($link,$sql);

// var_dump($results);//object
// echo '<pre>';
$arr = mysqli_fetch_assoc($results);
// print_r($arr);

// $rows = [];
// while($arr = mysqli_fetch_assoc($results)){
//     $rows[] = $arr;
// }
// print_r($rows);//二维数组

echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成json字符串，返回






?>