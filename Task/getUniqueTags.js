var store = {}; 
var allEl = document.getElementsByTagName('*');
function getUniqueTags(arr) {
	for (var i = 0; i < arr.length; i++) {
	  var key = arr[i].nodeName.toLowerCase();
	  store[key] = true;
	}
	var keys = Object.keys(store);
	return keys;
}
getUniqueTags(allEl)