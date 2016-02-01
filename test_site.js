/*var me = document.querySelector('html')
me.onclick = function() {
    var myname= prompt('please enter you name');
    localStorage.setItem('name',myname);
    me.textContent= myname +' is cool';
};*/
var ds=["Arrays","Lists","Stack","Queues","Linked lists","Dictionaries","Hashing","sets","Binary Trees","Graphs","Algorithms","Dynamic programming"]
var arr=new Array();
function insert(val){
	arr[arr.length]=parseInt(val);
}
var ele="All elements in array are"
function show(arr){

	document.getElementById("resultz").innerHTML = arr;

	
}

var sortedArray=function bubble(arr){
	for(i=0; i<arr.length-1; i++){
	for(j=0; j<arr.length-1; j++){
		if(arr[j] > arr[j+1]){
			var temp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
		}
	}
	return arr;
}


function showsort(){

	document.getElementById("resultz1").innerHTML = sortedArray(arr);

	
}

