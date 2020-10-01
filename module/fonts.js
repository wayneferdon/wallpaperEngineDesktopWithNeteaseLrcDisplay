function SetFontCustom(dir, name) {
	let newStyle = document.createElement('style');
	newStyle.append(document.createTextNode("\
	@font-face {\
	    font-family: " + name + ";\
	    src: url('" + "file:///" + dir + "') format('truetype');\
	}\
	"))
	document.head.append(newStyle)
}
function SetFont(name) {
	let font = document.createElement('link')
	font.rel = 'stylesheet'
	font.href = 'https://fonts.googleapis.com/css?family=' + name.replace(/ /g, '+')
	font.type = 'text/css'
	document.head.append(font)
}