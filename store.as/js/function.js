function myFunction() {
	var order1=0;
	var x=0;
     x = parseInt(document.getElementById("btn1").value);
    order1=x;
    var i=document.getElementById("number").value;
    order1*=i;
    var i=document.getElementById("number").value;
    
    //document.getElementById("order").innerHTML = order1;
    return order1;
}

function myFunction2() {
	var order1=0;
	var x=0;
     x = parseInt(document.getElementById("btn2").value);
    order1=x;
    var i=document.getElementById("number2").value;
    order1*=i;
    var i=document.getElementById("number2").value;
    
    //document.getElementById("order").innerHTML = order1;
    return order1;
}

function myFunction3() {
	var order1=0;
	var x=0;
     x = parseInt(document.getElementById("btn3").value);
    order1=x;
    var i=document.getElementById("number3").value;
    order1*=i;
    var i=document.getElementById("number3").value;
    
    //document.getElementById("order").innerHTML = order1;
    return order1;
}

function myFunction4() {
	var order1=0;
	var x=0;
     x = parseInt(document.getElementById("btn4").value);
    order1=x;
    var i=document.getElementById("number4").value;
    order1*=i;
    var i=document.getElementById("number4").value;
    
    //document.getElementById("order").innerHTML = order1;
    return order1;
}


function myFunction5() {
	var order1=0;
	var x=0;
     x = parseInt(document.getElementById("btn5").value);
    order1=x;
    var i=document.getElementById("number5").value;
    order1*=i;
    var i=document.getElementById("number5").value;
    
    //document.getElementById("order").innerHTML = order1;
    return order1;
}

	var d, x;
function countOrder(){
	 x = myFunction()+myFunction2()+myFunction3()+myFunction4()+myFunction5();
	var del;
	document.getElementById("order").innerHTML = x;
	if(x>200) d=0;
	else d=10;

	document.getElementById("delivery").innerHTML = d;
	del=x+d;
	return del;
}

 	var check=false;
 	var count=3;
function myDiscount(){
	
	count = isNaN(count) ? 0 : count;
    count < 1 ? count = 1 : '';
   	count--;
	var password = prompt('Input password:','');
	var total=0;
	if(count==0){
		alert("You don't have any attemp!");
	}
	else{
		if(password=="ABD124") 
		{
				alert("Password correct!"); check=true; 

				if(check==true){
					total=countOrder()-(countOrder()/5);
				}
				else {
					total=countOrder();
				}

				if(d==10 && x==0) total=0;
				document.getElementById("total").innerHTML = total;
		}
		else{
		 alert("Password incorrect! You have "+count+" attemp"); 
		 check=false; 
		 if(d==10 && x==0) total=0;
		 document.getElementById("total").innerHTML = total;
		}
	}
}

function countTotal(){
	
	var total=0;
	if(check==true){
		total=countOrder()-(countOrder()/5);
	}
	else total=countOrder();

	if(d==10 && x==0) total=0;

	document.getElementById("total").innerHTML = total;
}