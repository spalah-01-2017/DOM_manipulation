function getUniqueTags () {
	let newArr = [];
	[].slice.call(document.all).forEach(function (el) {
		if (newArr.indexOf(el.tagName) === -1) newArr.push(el.tagName);
	});
	return newArr;
}
