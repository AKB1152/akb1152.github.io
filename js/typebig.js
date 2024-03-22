update_text_area = () => {
	let area = document.getElementById('text'); 
	var text = area.value; 

	var escs = text.match(/U\+[0-9a-f]{2,8}\s/mgi); 
	if (escs !=null)
	for (var i = 0, esc = escs[i]; i < escs.length; esc = escs[++i])
		text = text.replace(esc, String.fromCodePoint(Number.parseInt(esc.replace(/U+/i, ''),16)));

	


	area.value = text;
};

toggle_zoom = () => {
	var zoom = document.getElementById("zoom"); 
	var toggle = document.getElementById("zoom-toggle")

	zoom.style.display = (zoom.style.display == 'none')? 'inline-block' : 'none'; 
	toggle.innerHTML = (zoom.style.display == 'none')? '\ue8ff' : '\ue900'; 
}

change_size = () => {
	var scale = document.getElementById("zoom").children[0].value; 
	document.getElementById('text').style.fontSize = `${scale}rem`;
}

u_plus_preview = () => {

} 