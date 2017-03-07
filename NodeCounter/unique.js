var tags = document.getElementsByTagName('*');
var tagsArr = [...tags];

function getUniqueTags(coll) {
    var uniqueTags = [];
    coll.forEach(function(el) {
        if (uniqueTags.indexOf(el) === -1) uniqueTags.push(el);
    });
    return uniqueTags;
}