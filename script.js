
function myfunction(value){
    var side=value;
    var area = parseInt(side) * parseInt(side);
	alert = ("area  is =" + area);
	document.getElementById("result").innerHTML = area;
	console.log(area);
	return area;
}
