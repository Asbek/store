function increaseValue() {
  var value=[];
   value[0] = parseInt(document.getElementById('number').value, 10);
   //value[1] = parseInt(document.getElementById('number2').value, 10);
 //  value[2] = parseInt(document.getElementById('number3').value, 10);
 //  value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
  for(var i=0; i<1; i++){
  	value[i] = isNaN(value[i]) ? 0 : value[i];
  	value[i]++;
  }
  document.getElementById('number').value = value[0];
  //document.getElementById('number2').value = value[1];
 //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function decreaseValue() {
	var value=[];
   value[0] = parseInt(document.getElementById('number').value, 10);
  // value[1] = parseInt(document.getElementById('number2').value, 10);
  // value[2] = parseInt(document.getElementById('number3').value, 10);
  // value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
    for(var i=0; i<1; i++){
  value[i] = isNaN(value[i]) ? 0 : value[i];
  value[i] < 1 ? value[i] = 1 : '';
  value[i]--;
}
  document.getElementById('number').value = value[0];
 // document.getElementById('number2').value = value[1];
  //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function increaseValue2() {
  var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
   value[1] = parseInt(document.getElementById('number2').value, 10);
 //  value[2] = parseInt(document.getElementById('number3').value, 10);
 //  value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
  //for(var i=0; i<1; i++){
  	value[1] = isNaN(value[1]) ? 0 : value[1];
  	value[1]++;
 // }
  //document.getElementById('number').value = value[0];
  document.getElementById('number2').value = value[1];
 //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function decreaseValue2() {
	var value=[];
  // value[0] = parseInt(document.getElementById('number').value, 10);
   value[1] = parseInt(document.getElementById('number2').value, 10);
  // value[2] = parseInt(document.getElementById('number3').value, 10);
  // value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
    //for(var i=0; i<1; i++){
  value[1] = isNaN(value[1]) ? 0 : value[1];
  value[1] < 1 ? value[i] = 1 : '';
  value[1]--;
//}
  //document.getElementById('number').value = value[0];
  document.getElementById('number2').value = value[1];
  //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function increaseValue3() {
  var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
   //value[1] = parseInt(document.getElementById('number2').value, 10);
  value[2] = parseInt(document.getElementById('number3').value, 10);
 //  value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
  //for(var i=0; i<1; i++){
  	value[2] = isNaN(value[2]) ? 0 : value[2];
  	value[2]++;
 // }
  //document.getElementById('number').value = value[0];
  //document.getElementById('number2').value = value[1];
 document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function decreaseValue3() {
	var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
   //value[1] = parseInt(document.getElementById('number2').value, 10);
   value[2] = parseInt(document.getElementById('number3').value, 10);
  // value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
    //for(var i=0; i<1; i++){
  value[2] = isNaN(value[2]) ? 0 : value[2];
  value[2] < 1 ? value[2] = 1 : '';
  value[2]--;
//}
  //document.getElementById('number').value = value[0];
 // document.getElementById('number2').value = value[1];
  document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function increaseValue4() {
  var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
   //value[1] = parseInt(document.getElementById('number2').value, 10);
   //value[2] = parseInt(document.getElementById('number3').value, 10);
  value[3] = parseInt(document.getElementById('number4').value, 10);
  // value[4] = parseInt(document.getElementById('number5').value, 10);
  //for(var i=0; i<1; i++){
  	value[3] = isNaN(value[3]) ? 0 : value[3];
  	value[3]++;
  //}
  //document.getElementById('number').value = value[0];
  //document.getElementById('number2').value = value[1];
// document.getElementById('number3').value = value[2];
  document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function decreaseValue4() {
	var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
  // value[1] = parseInt(document.getElementById('number2').value, 10);
  // value[2] = parseInt(document.getElementById('number3').value, 10);
   value[3] = parseInt(document.getElementById('number4').value, 10);
   //value[4] = parseInt(document.getElementById('number5').value, 10);
    //for(var i=0; i<1; i++){
  value[3] = isNaN(value[3]) ? 0 : value[3];
  value[3] < 1 ? value[3] = 1 : '';
  value[3]--;
//}
  //document.getElementById('number').value = value[0];
 // document.getElementById('number2').value = value[1];
  //document.getElementById('number3').value = value[2];
  document.getElementById('number4').value = value[3];
  //document.getElementById('number5').value = value[4];
}

function increaseValue5() {
  var value=[];
  // value[0] = parseInt(document.getElementById('number').value, 10);
   //value[1] = parseInt(document.getElementById('number2').value, 10);
 //  value[2] = parseInt(document.getElementById('number3').value, 10);
 //  value[3] = parseInt(document.getElementById('number4').value, 10);
   value[4] = parseInt(document.getElementById('number5').value, 10);
  //for(var i=0; i<1; i++){
  	value[4] = isNaN(value[4]) ? 0 : value[4];
  	value[4]++;
  //}
  //document.getElementById('number').value = value[0];
  //document.getElementById('number2').value = value[1];
 //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  document.getElementById('number5').value = value[4];
}

function decreaseValue5() {
	var value=[];
   //value[0] = parseInt(document.getElementById('number').value, 10);
  // value[1] = parseInt(document.getElementById('number2').value, 10);
  // value[2] = parseInt(document.getElementById('number3').value, 10);
  // value[3] = parseInt(document.getElementById('number4').value, 10);
   value[4] = parseInt(document.getElementById('number5').value, 10);
   // for(var i=0; i<1; i++){
  value[4] = isNaN(value[4]) ? 0 : value[4];
  value[4] < 1 ? value[4] = 1 : '';
  value[4]--;
//}
  //document.getElementById('number').value = value[0];
 // document.getElementById('number2').value = value[1];
  //document.getElementById('number3').value = value[2];
  //document.getElementById('number4').value = value[3];
  document.getElementById('number5').value = value[4];
}

