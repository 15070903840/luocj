<?php 
header("Content-type:text/html;charset=utf8");

$user = $_GET['user'];
$pass = $_GET['phone'];
$add = $_GET['act'];
$link = mysqli_connect('','root','','w1914');
if(mysqli_connect_error($link)){
    echo '数据库连接失败：'.mysqli_connect_error();
    die();
} 
mysqli_set_charset($link,'utf8');
if($add == 'add'){
    $sql = "select * from coder where name='{$user}' and phone='{$pass}'";
    $results = mysqli_query($link,$sql);
    $row = mysqli_affected_rows($link);
    if($row[0] > 0){
        exit();
    } 
    $sql = "insert into coder set name='{$user}' and phone='{$pass}'";
    mysql_query($sql);
}
if($add == 'aglion'){
    $sql = "select * from coder where name='{$user}' and pass='{$pass}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_array($res);
		if($row[0]>0){
			echo '登陆成功';
			exit();
		}else{
			echo '用户名或密码有误';
			exit();
		}
}

?>