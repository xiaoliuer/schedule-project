<?php 

	header("Access-Control-Allow-Origin: *");
	header("Content-type:text/html;charset=utf-8");

	$start=$_POST['start'];
	$end=$_POST['end'];
	$title=$_POST['title'];
	$content=$_POST['content'];
	$week=$_POST['week'];
	$labelColor=$_POST['labelColor'];

	if(!$start || !$end || !$title || !$content || !$week || !$labelColor)
	{
		echo "Error:There are some date don't be passed";
	}

	if(!$start && !$end && !$title && !$content && !$week && !$labelColor)
	{
		echo "Error:No date be passed";
	}

	$db=mysqli_connect('localhost','root','','schedule project');    //与数据库进行连接
	mysqli_set_charset($db,'utf8');   

	$t="SELECT * from labelDetail where start='$start' and final='$end' and week='$week'";     //查找数据库，判断时间点是否已存在

	$result=mysqli_query($db,$t);
	
	$row=mysqli_num_rows($result);

	if($row!=0){
		echo json_encode(-1);
	}
	else{
			$q="INSERT INTO labelDetail(start,final,title,content,week,labelColor) 
		VALUES ('$start','$end','$title','$content','$week','$labelColor')";

		$arr= array("$start","$end","$title","$content","$week","$labelColor");

		if(!mysqli_query($db,$q)){
			echo json_encode(-1);
		}
		else
		{
			echo json_encode($arr);
		}
	}

	mysqli_close($db);
 ?>