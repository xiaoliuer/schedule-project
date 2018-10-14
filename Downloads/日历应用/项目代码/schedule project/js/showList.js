
	function delete_label(i){
				$.ajax({
			 		type:"POST",
			 		url:"http://172.29.108.130:8080/schedule/deleteControl.php",
			 		data:{
			 			post_id:i
			 		},
			 		dataType:"json",
			 		success:function(data){
			 			alert("数据删除成功");
			 			location.reload(); 
			 		},
			 		error:function(){
			 			alert("服务器连接失败");
			 		}
			 	});
				}

			//显示所有记录
			 	$.ajax({
			 		type:"POST",
			 		url:"http://172.29.108.130:8080/schedule/showListControl.php",
			 		dataType:"json",
			 		success:function(data){
			 			for(var i=0;i<data.length;i++)
			 			{
			 				var id=data[i].id;
			 				var start=data[i].start;
			 				var end=data[i].final;
			 				var title=data[i].title;
			 				var week=data[i].week;
			 				var html='<tr><td>'+id+'</td><td>'+start+'</td><td>'+end+'</td><td>'+week+'</td><td>'+title+'</td><td><div><button type="button" class="btn btn-danger" onclick="delete_label('+id+')">删除</button></div></td></tr> ';

			 				$('#List').append(html);
			 			}
			 		},
			 		error:function(){
			 			alert("服务器连接失败");
			 		}
			 	});
			 //记录页面的显示消失模块
			 $('#record').click(function(){
			 	$('#recording_part').fadeIn();
			 });
			 $('.glyphicon-remove').click(function(){
			 	$('#recording_part').fadeOut();
			 });
	

