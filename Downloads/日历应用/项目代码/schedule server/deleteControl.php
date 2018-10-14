<?php 
	header("Access-Control-Allow-Origin: *");

	$id=$_POST["post_id"];

	if(!$id)
	{
		echo "some data don't be passed";
	}

	$db=mysqli_connect('localhost','root','','schedule project');

	$p="DELETE FROM labeldetail where label_id='$id'";

	if(!mysqli_query($db,$p))
	{
		echo json_encode($id);
	}
	else
	{
		echo json_encode(1);
	}

	mysqli_close($db);

 ?>