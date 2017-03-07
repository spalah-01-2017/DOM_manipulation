var li = document.querySelector('li');
console.log('li', li);
try {
	console.log('jQuery', $ === jQuery)
} catch(e) {
	console.error('no jQuery')
}