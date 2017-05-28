function rec (){
	var mychar ="提交成功";
	alert(mychar);
}
function rec2 (){
	var mychar ="发送成功";
	alert(mychar);
}
function rec3 (){
	var mymessage=confirm("确认重置？");
	if(mymessage==true)
	{
		alert("已重置");
	}
	else{
		formReset();
	}
}
function formReset(){
	document.getElementById("form1").reset();
}