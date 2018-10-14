<?php 
	header("Access-Control-Allow-Origin: *");
	header('Content-type: text/html; charset=utf-8');

	$db=mysqli_connect('localhost','root','','schedule project');
	mysqli_set_charset($db,'utf8');    

	if(mysqli_connect_errno()){
		echo "Error:Could not connect to database";
		exit;
	}
	

	$p="SELECT * FROM labeldetail";
	$result=mysqli_query($db,$p);   //result为资源类型，保存查询结果集

  	//新建数组
  	$data=array();
  	//转化为对象，处理数据
  	class Label{  
	    public $start;  
	    public $final; 
	    public $title; 
	    public $content; 
	    public $week; 
	    public $labelColor;  
	}  
  	//逐行获取结果集中的记录
	while($row = mysqli_fetch_object($result)){
		$l=new Label();
		$l->start=$row->start;
		$l->final=$row->final;
		$l->title=$row->title;
		$l->content=$row->content;
		$l->week=$row->week;
		$l->labelColor=$row->labelColor;
		//填充数组
		$data[]=$l;
	}         
	//对变量进行json编码  
	echo json_encode($data); 

	//释放结果         
		
	mysqli_close($db);
?>