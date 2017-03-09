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


//---Second way---
function getUniqueTags() {
	var allEl = document.getElementsByTagName('*');
	allEl = Array.prototype.slice.call(allEl);
	var elem = [];
	allEl.forEach(function(el){
		if(elem.indexOf(el.nodeName.toLowerCase()) === -1){
			elem.push(el.nodeName.toLowerCase());
		}
	});
	return elem;
}
getUniqueTags()