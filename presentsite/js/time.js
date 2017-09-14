function display() {//显示时间
		var now=new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds=now.getSeconds();
		var mark = "AM";
		if(hours>12){ mark = "PM"; hours -= 12;}
		if(hours==0) hours=12;
		if(hours<10) hours="0"+hours;	//保持2个字符位置
		if(minutes<10) minutes="0"+minutes;//保持2个字符位置
		if(seconds<10)seconds="0"+seconds;//保持2个字符位置
		digit_clock.innerText = hours+":"+minutes+":"+seconds+" "+mark;
		setTimeout("display()",100) ;//设置定时器
	}
	window.onload=function(){ display(); }