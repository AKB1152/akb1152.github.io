update_text_area = () => {
	let area = document.getElementById('text'); 
	var text = area.value; 

	var escs = text.match(/U\+[0-9a-f]{2,8} /mgi); 
	if (escs !=null)
	for (var i = 0, esc = escs[i]; i < escs.length; esc = escs[++i])
		text = text.replace(esc, String.fromCodePoint(Number.parseInt(esc.replace(/U+/i, ''),16)));


	area.value = text;
	area.style.resize = 'vertical';
	area.style.height += area.scrollHeight;
	area.style.resize = 'none';
};