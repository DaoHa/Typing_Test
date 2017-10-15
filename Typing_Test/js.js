function check(){
	var string1="anh yeu em lắm hà à";
	var arr=string1.split(" ");
	var arr_size=0;
	var inputtext="";
	for (var i in arr) {
		arr_size++;
	};

	var span1=document.getElementById('0');
	var span2=document.getElementById('1');

	var span;
	for (var i = 0; i < arr_size; i++) {
		inputtext=document.getElementById('word').value+=arr[i]+" ";
		span= document.createElement("span");
		span.innerHTML=arr[i];
		span.setAttribute("id", arr[i]);
		document.getElementById('word').appendChild(span);
	};
	
	

	inputtext=document.getElementById('word').value=span1.innerHTML+" "+span2.innerHTML;
	var inputcheck=document.getElementById('check_result');
	var inputcheck_value=document.getElementById('check_result').value;
	var countdem=0;

	var i=0;
	
	inputcheck.onkeyup=function(e){
		inputcheck.value="";
		var countcheck=0;
		if(e.keyCode==32){
			inputcheck.value+=document.getElementById(i).innerHTML+" ";
			i++;
		}			
	            };
}