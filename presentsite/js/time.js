function display() {//��ʾʱ��
		var now=new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds=now.getSeconds();
		var mark = "AM";
		if(hours>12){ mark = "PM"; hours -= 12;}
		if(hours==0) hours=12;
		if(hours<10) hours="0"+hours;	//����2���ַ�λ��
		if(minutes<10) minutes="0"+minutes;//����2���ַ�λ��
		if(seconds<10)seconds="0"+seconds;//����2���ַ�λ��
		digit_clock.innerText = hours+":"+minutes+":"+seconds+" "+mark;
		setTimeout("display()",100) ;//���ö�ʱ��
	}
	window.onload=function(){ display(); }