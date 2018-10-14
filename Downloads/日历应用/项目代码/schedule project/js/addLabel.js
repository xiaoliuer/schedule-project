//生成标签模块
	$('#postData').click(function(){

		var start=$('#startTime').val();
		var end=$('#endTime').val();

		var title=$('#eventTitle').val();                        //标签标题
		var content=$('#content').val();                         //标签内容
		var week=$('#week').val();                                //周几
		var labelColor=$("input[name='inlineRadioOptions']:checked").val();                //标签背景色
		var l,h;

		//进行ajax请求，将数据存入数据库
		$.ajax({
			type:"POST",
			url:"http://172.29.108.130:8080/schedule/insertControl.php",
			dataType:"json",
			header:{
				'charset':'utf8'
			},
			data:{
				start:start,
				end:end,
				title:title,
				content:content,
				week:week,
				labelColor:labelColor
			},
			success:function(data){  
		   		if(data=="-1")
		   		{
		   				alert("数据已存在!");
		   				return ;
		   		}
		   		else
		   		{
		   			 insertLabel(data[0],data[1],data[2],data[3],data[4],data[5]);  //调用标签绘制函数
		   			 $('#addEvent_part').fadeOut();
		   			 $('#eventTitle').val("");
		   			 $('#content').val(""); 
		   			 location.reload();
		   		}
			 } ,
			error:function(){
				alert("服务器连接失败");
			}
		});	 		
	});

	//计算时间差
	function getHour(t1,t2){
			var reDate = /\d{4}-\d{1,2}-\d{1,2} /;
			t1 = new Date((reDate.test(t1) ? t1 : '2017-1-1 ' + t1).replace(/-/g, '/'));
			t2 = new Date((reDate.test(t2) ? t2 : '2017-1-1 ' + t2).replace(/-/g, '/'));
			 var ms = t2.getTime() - t1.getTime();
			if (ms < 0) return 0;
			  return (ms/1000/60/60);
	}
	var t=1; //生成标签的id

		//绘制标签函数
		function insertLabel(d1,d2,d3,d4,d5,d6){
			var topTime=getHour('9:00',d1);
			var resultTime=getHour(d1,d2); 
			var rowWidth=parseInt($('td').width());

			if(d5=="Monday"){
	 		l=0;
	 	}
	 	else if(d5=="Tuesday"){
	 		l=1;
	 	}
	 	else if(d5=="Wednesday"){
	 		l=2;
	 	}
	 	else if(d5=="Thursday"){
	 		l=3;
	 	}
	 	else if(d5=="Friday"){
	 		l=4;
	 	}

	 	//将时间差进行整型转化一边计算标签生成位置
	 	resultTime=parseFloat(resultTime);
	 	topTime=parseFloat(topTime);
	 	l=parseInt(l);

	 	if(d6=="1")
	 	{
	 		t++;
	 	//动态添加标签代码块
	 	var boarddiv = "<style type='text/css'>#sub"+t+"{ background:#FFCC33;margin-left:"+(l*rowWidth)+"px; margin-top:"+(60+topTime*120)+"px; width:285px; height:"+(resultTime*120)+"px; z-index:999; position:absolute;top:0;} #sub"+t+":hover{height:30%;weight:30%; }</style> <div id='sub"+t+"' class='subDiv' ><p style='color:#FFFFFF; margin-top:10px;'>"+d1+"-"+d2+"</p><p style='margin-top:5px;font-size:20px; color:#FFFFFF; text-align:center;'>"+d3+"</p></div>";
	 				 //动态控制标签的大小			
			$("#cover_part").append(boarddiv);


		}
		else if(d6=="2") 
		{
			t++;
	 	//动态添加标签代码块
	 	var boarddiv = "<style type='text/css'>#sub"+t+"{ background:#CC0066;margin-left:"+(l*rowWidth)+"px; margin-top:"+(60+topTime*120)+"px; width:285px; height:"+(resultTime*120)+"px; z-index:999; position:absolute;top:0;} #sub"+t+":hover{height:30%;weight:30%; }</style> <div id='sub"+t+"' class='subDiv'><p style='color:#FFFFFF; margin-top:10px;'>"+d1+"-"+d2+"</p><p style='margin-top:5px;font-size:20px; color:#FFFFFF; text-align:center;'>"+d3+"</p></div>";
			
			$("#wrap").append(boarddiv);
		}
		else
		{
			t++;
	 	//动态添加标签代码块
	 	var boarddiv = "<style type='text/css'>#sub"+t+"{ background:#0099FF;margin-left:"+(l*rowWidth)+"px; margin-top:"+(60+topTime*120)+"px; width:285px; height:"+(resultTime*120)+"px; z-index:999; position:absolute;top:0;} #sub"+t+":hover{height:30%;weight:30%; }</style> <div id='sub"+t+"' class='subDiv'><p style='color:#FFFFFF; margin-top:10px;'>"+d1+"-"+d2+"</p><p style='margin-top:5px;font-size:20px; color:#FFFFFF; text-align:center;'>"+d3+"</p></div>";
			
			$("#wrap").append(boarddiv);
		}
		}

	 //用户菜单下拉模块
	 $('#dropdown li').hover(function() {
	  $('ul', this).slideDown(200);
	  $(this).children('a:first').addClass("hov");
	 }, function() {
	  $('ul', this).slideUp(100);
	  $(this).children('a:first').removeClass("hov");  
	 });

	 //标签页面显示模块
	 $('#addEvent').click(function(){
	 	$('#addEvent_part').fadeIn();
	 });
	 $('.glyphicon-remove').click(function(){
	 	$('#addEvent_part').fadeOut();
	 });
