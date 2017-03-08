function getUniqueTags() {
	var uniqueTags = [];
	for(var i = 0; i < document.all.length; i++) {
		if (uniqueTags.indexOf((document.all[i].tagName).toLowerCase()) === -1) {
			uniqueTags.push((document.all[i].tagName).toLowerCase());
		}
	}
	return uniqueTags;
}