function getUniqueElements() {
	var arr = [];

	[].slice.call(document.getElementsByTagName('*')).forEach(function(el) {
  	if (arr.indexOf(el.tagName) === -1 ) arr.push(el.tagName); 
  });
  
  return arr;
}

console.log( getUniqueElements() );