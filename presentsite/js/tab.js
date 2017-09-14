/*Tab 选项卡 标签*/
$(function(){
	    var $div_li =$("div.tab_menu ul li");
	    $div_li.click(function(){					//为li元素绑定单击事件
			$(this).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div")   	//选取子节点。不选取子节点的话，如果里面还有div    $("div.tab_box div")会引起错误。
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其他几个同辈的<div>元素
		}).hover(function(){				//添加鼠标划过效果
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
})